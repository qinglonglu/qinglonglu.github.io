// 所有文章数据
const articles = [
    {
        id: 1,
        title: "论尼康D3000",
        date: "2026-06-15",
        image: "images/article1.jpg",
        content: `
            <p>尼康D3000，作为尼康最后一台CCD单反，虽是入门级，却搭载了当时世界一流的对焦系统。如今，1020万单反像素依旧可以与部分手机品牌的4800万像素难分上下。虽然是半画幅入门机，但作为尼康迈向低端市场的重要一步，其军工品质仍不容小觑。</p>
            
            <img src="images/article1.jpg" alt="D3000" class="article-detail-img">
            
            <p>如果说你想入门相机的话，那么D3000绝对是可以选择的机型。轻量化设计加上还不错的性能，可以让你掌握单反的基本调参，并通过一次次毫无实时取景的拍摄增加你对M档参数的练习与记忆。如果想了解更多，请致信：luyian0818@126.com</p>
        `
    },
    {
        id: 2,
        title: "论松下ZS99",
        date: "2026-06-10",
        image: "images/article2.jpg",
        content: `
            <p>松下ZS99，作为2025年的新机，参数性能遥遥领先同价位的黑卡。30倍光学变焦，5轴防抖，300g机身，30fps连拍......众多参数叠在一个全新仅2998的机子上，让摄影发烧友们耳目一新。</p>
            
            <img src="images/article2.jpg" alt="ZS99" class="article-detail-img">
            
            <p>实现ZS99的伟大参数，却也牺牲了更多宝贵的东西。例如它超级慢的关机速度，1个月坏3次的高端品控，10分钟视频秒变暖宝宝.....这些bug也让部分专业摄影师寒心。如果想了解更多，请致信：luyian0818@126.com</p>
        `
    },
    {
        id: 3,
        title: "JavaScript异步编程",
        date: "2024-01-25",
        image: "images/article3.jpg",
        content: `
            <p>JavaScript作为一门单线程语言，异步编程是其处理I/O密集型操作的关键。从最初的回调函数，到Promise的出现，再到async/await语法糖，JavaScript的异步编程模型经历了显著的发展。</p>
            
            <img src="images/article3.jpg" alt="JavaScript异步编程" class="article-detail-img">
            
            <p>理解这些异步编程模式不仅有助于编写更高效的代码，还能避免常见的陷阱，如回调地狱。正确的错误处理和资源管理在异步编程中尤为重要，这需要开发者对JavaScript的事件循环机制有深入的理解。</p>
        `
    },
    {
        id: 4,
        title: "CSS布局的艺术",
        date: "2024-01-30",
        image: "images/article4.jpg",
        content: `
            <p>CSS布局是前端开发的基础，也是最具挑战性的部分之一。早期的网页布局主要依赖浮动和定位，这些方法虽然有效，但在复杂布局面前往往力不从心。Flexbox和Grid的出现彻底改变了这一局面。</p>
            
            <img src="images/article4.jpg" alt="CSS布局" class="article-detail-img">
            
            <p>Flexbox擅长一维布局，特别适合导航栏、卡片等组件。Grid则专为二维布局设计，能够轻松创建复杂的网格系统。掌握这两种现代布局技术，能够大大提高开发效率和布局的灵活性。</p>
        `
    }
];

// 文章管理类
class ArticleManager {
    constructor() {
        this.allArticles = articles;
        this.searchTerm = '';
    }

    // 渲染文章卡片
    renderArticleCard(article, isSearchResult = false) {
        let title = article.title;
        if (isSearchResult && this.searchTerm) {
            title = this.highlightSearchTerm(title, this.searchTerm);
        }
        
        return `
            <a href="article.html#article-${article.id}" class="article-card">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <h3>${title}</h3>
                    <div class="article-date">发布时间：${article.date}</div>
                </div>
            </a>
        `;
    }

    // 高亮搜索关键词
    highlightSearchTerm(text, term) {
        if (!term) return text;
        const regex = new RegExp(`(${term.split('').join('|')})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    // 搜索文章
    searchArticles(keyword) {
        this.searchTerm = keyword;
        if (!keyword.trim()) {
            return this.allArticles;
        }
        
        return this.allArticles.filter(article => {
            for (let char of keyword) {
                if (article.title.includes(char)) {
                    return true;
                }
            }
            return false;
        });
    }

    // 渲染最新文章（首页）
    renderLatestArticles() {
        const container = document.getElementById('latestArticles');
        if (!container) return;
        
        const latestArticles = this.allArticles.slice(0, 3);
        container.innerHTML = latestArticles.map(article => 
            this.renderArticleCard(article)
        ).join('');
    }

    // 渲染所有文章
    renderAllArticles() {
        const container = document.getElementById('allArticles');
        if (!container) return;
        
        container.innerHTML = this.allArticles.map(article => 
            this.renderArticleCard(article)
        ).join('');
    }

    // 渲染文章详情
    renderArticleDetail(articleId) {
        const container = document.getElementById('articleContainer');
        if (!container) return;
        
        const article = this.allArticles.find(a => a.id === articleId);
        if (!article) {
            container.innerHTML = '<div class="error">文章未找到</div>';
            return;
        }
        
        container.innerHTML = `
            <article class="article-detail">
                <header class="article-detail-header">
                    <h1 class="article-detail-title">${article.title}</h1>
                    <div class="article-detail-date">发布时间：${article.date}</div>
                </header>
                <div class="article-detail-content">${article.content}</div>
            </article>
        `;
        
        // 更新页面标题
        document.title = `${article.title} | qinglonglu|陆怡安的个人笔记`;
    }

    // 初始化搜索功能
    initSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        if (!searchInput || !searchBtn) return;
        
        const performSearch = () => {
            const keyword = searchInput.value.trim();
            const results = this.searchArticles(keyword);
            const container = document.getElementById('allArticles');
            
            container.innerHTML = results.map(article => 
                this.renderArticleCard(article, true)
            ).join('');
        };
        
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// 初始化悬停效果
function initHoverEffects() {
    const clickableElements = document.querySelectorAll('a, button, .article-card, .nav-link');
    clickableElements.forEach(element => {
        if (element.classList.contains('search-btn') || 
            element.classList.contains('nav-link') ||
            element.classList.contains('article-card')) {
            
            element.addEventListener('mouseenter', function() {
                this.style.animation = 'buttonHover 0.5s';
            });
            
            element.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        }
    });
}

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    const articleManager = new ArticleManager();
    const currentPage = window.location.pathname.split('/').pop();
    
    // 根据当前页面执行相应操作
    if (currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
        // 首页：显示最新3篇文章
        articleManager.renderLatestArticles();
    } else if (currentPage === 'articles.html') {
        // 文章列表页：显示所有文章并初始化搜索
        articleManager.renderAllArticles();
        articleManager.initSearch();
    } else if (currentPage === 'article.html') {
        // 文章详情页：根据URL hash显示对应文章
        const hash = window.location.hash.substring(1);
        if (hash.startsWith('article-')) {
            const articleId = parseInt(hash.split('-')[1]);
            articleManager.renderArticleDetail(articleId);
        } else {
            // 如果没有指定文章，跳转到文章列表页
            window.location.href = 'articles.html';
        }
    }
    
    // 初始化悬停效果
    initHoverEffects();
    
    // 导航栏激活状态
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (currentPath.includes('index.html') || currentPath === '/') {
            if (link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            }
        } else if (currentPath.includes('about.html') && link.getAttribute('href') === 'about.html') {
            link.classList.add('active');
        } else if (currentPath.includes('articles.html') && link.getAttribute('href') === 'articles.html') {
            link.classList.add('active');
        } else if (currentPath.includes('article.html') && link.getAttribute('href') === 'articles.html') {
            link.classList.add('active');
        }
    });
});
