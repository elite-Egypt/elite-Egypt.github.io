// ==========================================
// 🛠️ لوحة تحكم النخبة (عدل هنا بس يا غالي)
// ==========================================

const الإعلان = "💎 انضم الآن إلى نخبة المجتمع المصري.. مساحات إعلانية مميزة تضع مشروعك في الصدارة 💎";

const يختفي_الساعة = 555; // خليه رقم كبير عشان يفضل ثابت

const رابط_فيسبوك = "https://www.facebook.com/profile.php?id=61587773337715";

// ==========================================
// ⚠️ المحرك الذكي - نسخة الظهور الإجباري
// ==========================================

(function() {
    // 1. تصميم الشريط الذهبي (بخاصية الـ Fixed عشان يظهر غصب عن أي حاجة)
    const style = document.createElement('style');
    style.innerHTML = `
        #elite-ticker-container {
            width: 100%;
            background: #000 !important; /* أسود صريح */
            border-bottom: 2px solid #b59410 !important; /* ذهبي النخبة */
            height: 45px;
            overflow: hidden;
            position: fixed; /* ثابت فوق كل شيء */
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            z-index: 1000000 !important; /* أعلى رقم ممكن عشان مفيش حاجة تغطيه */
            box-shadow: 0 4px 10px rgba(0,0,0,0.8);
        }
        .ticker-content {
            display: inline-block;
            white-space: nowrap;
            padding-left: 100%;
            animation: ticker-scroll 25s linear infinite;
            color: #b59410 !important;
            font-family: 'Cairo', sans-serif;
            font-size: 18px;
            font-weight: bold;
        }
        @keyframes ticker-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        /* زق محتوى الموقع لتحت عشان مفيش حاجة تداري ورا الشريط */
        body {
            margin-top: 45px !important;
        }
    `;
    document.head.appendChild(style);

    // 2. بناء وتشغيل الشريط
    function startTicker() {
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
                content.innerHTML = `📢 مساحة إعلانية شاغرة في شريط النخبة.. للحجز تواصل معنا <a href="${رابط_فيسبوك}" target="_blank" style="color:#fff; text-decoration:underline;">عبر فيسبوك</a>`;
            }
        }

        updateContent();
        setInterval(updateContent, 60000);
    }

    if (document.readyState === 'complete') {
        startTicker();
    } else {
        window.addEventListener('load', startTicker);
    }
})();
