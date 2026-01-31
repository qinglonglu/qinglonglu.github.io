// 所有文章数据
const articles = [
    {
        id: 1,
        title: "初探前端开发的世界",
        date: "2024-01-15",
        image: "images/article1.jpg",
        content: `
            <p>前端开发，这个曾经对我来说充满神秘感的领域，如今已成为我热爱的专业。记得第一次接触HTML时，那种从零开始构建网页的兴奋感至今难忘。简单的标签组合就能在浏览器中呈现出结构化的内容，这种即时的反馈给了我巨大的成就感。</p>
            
            <img src="images/article1.jpg" alt="前端开发" class="article-detail-img">
            
            <p>随着学习的深入，我逐渐接触到CSS和JavaScript。CSS让页面变得美观，JavaScript让页面变得生动。每一次解决布局问题，每一次实现交互效果，都让我对这个领域有了更深的理解和热爱。前端开发不仅仅是写代码，更是一种创造美的过程。</p>
        `
    },
    {
        id: 2,
        title: "响应式设计的艺术",
        date: "2024-01-20",
        image: "images/article2.jpg",
        content: `
            <p>响应式设计不仅仅是一种技术，更是一种设计哲学。它要求我们从多个维度思考用户体验：不同的屏幕尺寸、不同的设备能力、不同的使用场景。一个优秀的响应式设计应该能够优雅地适应所有这些变量。</p>
            
            <img src="images/article2.jpg" alt="响应式设计" class="article-detail-img">
            
            <p>实现响应式设计的关键在于灵活的网格系统、媒体查询的合理使用，以及移动优先的开发理念。通过逐步增强的策略，我们可以确保网站在所有设备上都能提供优秀的用户体验。这需要开发者具备全面的技术视野和细致的设计思维。</p>
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
    },
    {
        id: 5,
        title: "现代Web性能优化",
        date: "2024-02-05",
        image: "images/article5.jpg",
        content: `
            <p>Web性能直接影响用户体验和业务指标。一个加载缓慢的网站不仅会失去用户，还会影响搜索引擎排名。性能优化应该是开发过程中的持续关注点，而不是事后的补救措施。</p>
            
            <img src="images/article5.jpg" alt="Web性能优化" class="article-detail-img">
            
            <p>优化策略包括但不限于：代码分割、懒加载、缓存策略、图片优化、关键渲染路径优化等。每个项目都有其特定的优化需求，关键在于理解原理并根据实际情况制定合适的优化方案。</p>
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
