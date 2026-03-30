// ==========================================
// 🛠️ لوحة تحكم النخبة (عدل هنا بس)
// ==========================================

const الإعلان = "🔥 خصم خاص من شركة القمة لعملاء النخبة فقط! 🔥";

const يختفي_الساعة = 5; // اكتب الساعة اللي الإعلان يختفي فيها (مثلاً 5)

// ==========================================
// ⚠️ كود التشغيل (ممنوع اللمس)
// ==========================================

function startEliteTicker() {
    const tickerContainer = document.createElement('div');
    tickerContainer.id = 'elite-ticker-container';
    document.body.prepend(tickerContainer);

    const tickerContent = document.createElement('div');
    tickerContent.className = 'ticker-content';
    tickerContainer.appendChild(tickerContent);

    function updateTicker() {
        const now = new Date();
        const currentHour24 = now.getHours();
        
        // تحويل وقت الجهاز لنظام 12 ساعة عشان يطابق اللي أنت كاتبه
        let currentHour12 = currentHour24 > 12 ? currentHour24 - 12 : currentHour24;
        if (currentHour12 === 0) currentHour12 = 12;

        // لو الساعة الحالية لسه مجتش "ساعة الاختفاء" اظهر الإعلان
        if (currentHour12 < يختفي_الساعة) {
            tickerContent.innerHTML = الإعلان;
        } else {
            tickerContent.innerHTML = `📢 متوفر إعلان على الشريط الإخباري الخاص بصفحة النخبة.. للحجز تواصل معنا فيسبوك`;
        }
    }

    updateTicker();
    setInterval(updateTicker, 60000); // يتأكد كل دقيقة لو الوقت خلص
}

window.addEventListener('load', startEliteTicker);

