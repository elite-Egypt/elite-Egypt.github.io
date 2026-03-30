// ==========================================
// 🛠️ لوحة تحكم النخبة (عدل هنا بس يا كينج)
// ==========================================

const الإعلان = "💎 انضم الآن إلى نخبة المجتمع المصري.. مساحات إعلانية مميزة تضع مشروعك في الصدارة 💎";

const يختفي_الساعة = 555; 

const رابط_فيسبوك = "https://www.facebook.com/profile.php?id=61587773337715"; 

// ==========================================
// ⚠️ كود التشغيل الذكي (معدل ليظهر أسفل الـ Header)
// ==========================================

(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        #elite-ticker-container {
            width: 100%;
            background: rgba(0, 0, 0, 0.95);
            border-bottom: 2px solid #b59410;
            height: 40px;
            overflow: hidden;
            position: relative; /* خليه يزق اللي تحته */
            display: flex;
            align-items: center;
            z-index: 9999;
            margin-top: 70px; /* 👈 دي أهم حتة: بتزق الشريط تحت اللوجو بتاعك */
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
    `;
    document.head.appendChild(style);

    function initTicker() {
        if (document.getElementById('elite-ticker-container')) return;
        const container = document.createElement('div');
        container.id = 'elite-ticker-container';
        
        // جربنا نحطه في الأول، دلوقت هنحطه بعد الـ Header لو موجود
        document.body.prepend(container);

        const content = document.createElement('div');
        content.className = 'ticker-content';
        container.appendChild(content);

        function checkTime() {
            content.innerHTML = الإعلان;
        }

        checkTime();
    }

    if (document.readyState === 'complete') {
        initTicker();
    } else {
        window.addEventListener('load', initTicker);
    }
})();

