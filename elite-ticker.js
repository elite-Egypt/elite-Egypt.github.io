// ==========================================
// 🛠️ لوحة تحكم النخبة (عدل هنا بس يا غالي)
// ==========================================

const الإعلان = "💎 انضم الآن إلى نخبة المجتمع المصري.. مساحات إعلانية مميزة تضع مشروعك في الصدارة 💎";

const يختفي_الساعة = 555; // اكتب الساعة اللي الإعلان يختفي فيها (مثلاً 5) أو سيبها 555 عشان يفضل ثابت

const رابط_فيسبوك = "https://www.facebook.com/profile.php?id=61587773337715";

// ==========================================
// ⚠️ المحرك الذكي (تصميم + تشغيل + توقيت)
// ==========================================

(function() {
    // 1. إضافة التصميم الذهبي والمسافة تحت اللوجو
    const style = document.createElement('style');
    style.innerHTML = `
        #elite-ticker-container {
            width: 100%;
            background: rgba(0, 0, 0, 0.95);
            border-bottom: 2px solid #b59410;
            height: 40px;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            z-index: 9999;
            margin-top: 65px; 
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .ticker-content {
            display: inline-block;
            white-space: nowrap;
            padding-left: 100%;
            animation: ticker-scroll 25s linear infinite;
            color: #b59410;
            font-family: 'Cairo', sans-serif;
            font-size: 17px;
            font-weight: bold;
        }
        @keyframes ticker-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        #elite-ticker-container:hover .ticker-content {
            animation-play-state: paused;
        }
        .fb-link {
            color: #fff !important;
            text-decoration: underline !important;
            margin-left: 10px;
        }
    `;
    document.head.appendChild(style);

    // 2. بناء وتشغيل الشريط وحساب الوقت
    function initTicker() {
        if (document.getElementById('elite-ticker-container')) return;
        
        const container = document.createElement('div');
        container.id = 'elite-ticker-container';
        document.body.prepend(container);

        const content = document.createElement('div');
        content.className = 'ticker-content';
        container.appendChild(content);

        function updateContent() {
            const now = new Date();
            let h = now.getHours();
            let h12 = h > 12 ? h - 12 : (h === 0 ? 12 : h);

            if (h12 < يختفي_الساعة) {
                content.innerHTML = الإعلان;
            } else {
                content.innerHTML = `📢 مساحة إعلانية شاغرة في شريط النخبة.. للحجز تواصل معنا <a href="${رابط_فيسبوك}" target="_blank" class="fb-link">عبر فيسبوك من هنا</a>`;
            }
        }

        updateContent();
        setInterval(updateContent, 60000); // يتأكد كل دقيقة من الوقت
    }

    if (document.readyState === 'complete') {
        initTicker();
    } else {
        window.addEventListener('load', initTicker);
    }
})();
