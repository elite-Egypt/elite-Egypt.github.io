// ==========================================
// 🛠️ لوحة تحكم النخبة (الملف الشامل - نسخة 2026)
// ==========================================

const الإعلان = "💎 انضم الآن إلى نخبة المجتمع المصري.. مساحات إعلانية مميزة تضع مشروعك في الصدارة 💎";

const يختفي_الساعة = 555; // ثابت للأبد

const رابط_فيسبوك = "https://www.facebook.com/profile.php?id=61587773337715"; 

// ==========================================
// ⚠️ المحرك الذكي (تصميم + تشغيل + ربط تلقائي)
// ==========================================

(function() {
    // 1. صناعة التصميم الذهبي وزق الشريط تحت اللوجو أوتوماتيك
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
            margin-top: 65px; /* المسافة اللي بتخليه يظهر تحت اللوجو والقائمة */
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

    // 2. بناء وظيفة التشغيل
    function initTicker() {
        if (document.getElementById('elite-ticker-container')) return;
        
        const container = document.createElement('div');
        container.id = 'elite-ticker-container';
        
        // بيحط نفسه في أول الصفحة والـ CSS اللي فوق بيزقه تحت اللوجو
        document.body.prepend(container);

        const content = document.createElement('div');
        content.className = 'ticker-content';
        container.appendChild(content);

        function checkTime() {
            const now = new Date();
            let h = now.getHours();
            let h12 = h > 12 ? h - 12 : (h === 0 ? 12 : h);

            if (h12 < يختفي_الساعة) {
                content.innerHTML = الإعلان;
            } else {
                content.innerHTML = `📢 مساحة إعلانية شاغرة في شريط النخبة.. للحجز تواصل معنا <a href="${رابط_فيسبوك}" target="_blank" class="fb-link">عبر فيسبوك من هنا</a>`;
            }
        }

        checkTime();
        setInterval(checkTime, 60000);
    }

    // 3. الربط الذاتي: الكود ده بيخلي الملف يشغل نفسه أول ما الصفحة تفتح
    if (document.readyState === 'complete') {
        initTicker();
    } else {
        window.addEventListener('load', initTicker);
    }
})();

