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
            
            <p>实现ZS99的伟大参数，也牺牲了许多宝贵的东西。例如它超级慢的关机速度，1个月坏3次的高端品控，10分钟视频秒变暖宝宝.....这些bug也让部分专业摄影师寒心。如果想了解更多，请致信：luyian0818@126.com</p>
        `
    },
    {
        id: 3,
        title: "《红楼梦》丫鬟改名情节叙事功能分析",
        date: "2026-05-25",
        image: "images/article3.jpg",
        content: `
            <p>《红楼梦》里众多丫鬟的姓名时常发生变更，无论是宝玉为花珍珠更名袭人，红玉被改作小红，还是英莲先后唤作香菱、秋菱，芳官得到主子赐新名，这些更换称谓的情节绝非无关紧要的文字点缀。曹雪芹将姓名作为独特的叙事符号，借一次次改名映照人物内在心性与人生走向，名字字义藏着性格隐喻，更名节点更是命运转折的鲜明标记。同时，改名的主动权始终掌握在贾府主子手中，下人无权自主决定自身名号，这种不对等的权力关系，直观展现封建时代森严的尊卑等级与人身依附，底层女性如同器物般任由他人界定身份，处处显露被礼教束缚、无法掌控自我的生存处境。</p>
            
            <img src="images/article3.jpg" alt="红楼梦" class="article-detail-img">
            
            <p>各类丫鬟改名的细碎情节，还承担着串联全书脉络、深化悲剧内核的作用。名字的更迭串联起贾府错综复杂的主仆人际网络，成为推动故事发展的隐性线索，将小人物的沉浮与家族由盛转衰的轨迹紧密结合，形成完整的叙事呼应。频繁多变的名号也暗含世事虚妄的思想，纵使曾有雅致动听的名字，终究挡不住女性飘零落幕的结局，层层烘托出 “千红一窟，万艳同悲” 的核心主旨。透过袭人、红玉、香菱等人的改名经历，能够从小处窥见时代全貌，读懂作者藏在细节里对底层女性的悲悯，以及对封建制度压抑人性的深刻反思。</p>
        `
    },
    {
        id: 4,
        title: "文学篇：以毁灭抵达永恒——三岛由纪夫毁灭美学",
        date: "2026-06-28",
        image: "images/article4.jpg",
        content: `
            <p>三岛由纪夫是日本战后极具争议与影响力的文学大师，其创作贯穿统一核心美学命题：极致之美唯有借助毁灭，才能摆脱时间与世俗的损耗，抵达永恒。他的美学观是随创作不断演变而成的。1944 年《鲜花盛开的森林》尽显柔和物哀，接纳万物自然凋零；1949 年《假面的告白》袒露精神底色，对纯粹美的执念令他疏离庸常世俗，埋下毁灭美学的根源；1954 年《潮骚》借明朗青春与自然构筑理想生命之美，可这场对现世美好的描摹，反倒让他看清世俗幸福转瞬易碎，推动审美观念发生偏转。1956 年《金阁寺》将毁灭美学推向顶峰，金阁这一至美之物最终被焚毁，直观印证毁灭定格永恒的核心思想，其后《忧国》又借壮烈赴死的献祭叙事深化这一理念，主张美应当在巅峰时刻落幕，远胜于在消磨中平淡存续。</p>
            
            <img src="images/article4.jpg" alt="三岛由纪夫帅照" class="article-detail-img">
            
            <p>梳理三岛的创作脉络，能清晰看见他从接纳自然生命之美，转向信奉毁灭之美的完整蜕变。他认定世俗与时光会玷污一切纯粹，唯有主动摧毁，方能留存美的顶峰形态，1970 年他以切腹殉身的方式，完成自身美学信仰的终极践行。但需客观分辨，他的毁灭美学并非单纯对纯粹美的追寻，而是和复古武士道、极端右翼思想深度绑定。这套激进审美体系极具文学冲击力，在文学史留下震撼独特的印记，却因裹挟反动意识形态、思想偏执极端，自问世以来始终充满巨大争议。</p>
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
