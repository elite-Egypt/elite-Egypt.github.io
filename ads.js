/**
 * نظام النخبة الذكي - العد التنازلي المباشر
 * حط نص الإعلان وعدد الساعات.. والسيستم هيتكفل بالباقي
 */

const adsConfig = [
    { text: "هنا يجتمع الكِبار.. كُن واحداً منهم وأعلن عن مشروعك في منصة النخبة", hours: 500 },
    { text: "إعلان النخبة الثاني: متاح حجز مساحات", hours: 2 },
    { text: "إعلان النخبة الثالث: خصم 50%", hours: 1 },
    // ضيف لحد 10 براحتك بنفس الشكل
];

const bookingMsg = "يمكنك التواصل معنا وحجز اعلانك في الشريط العلاني الخاص بصفحة النخبه";

function runEliteTicker() {
    const tickerContainer = document.getElementById('ticker-content');
    const now = new Date().getTime();
    let activeAds = [];

    adsConfig.forEach((ad, index) => {
        // مفتاح سحري لكل إعلان عشان المتصفح يفتكر بدأ إمتى
        let storageKey = "ad_start_" + index + ad.text.substring(0, 10);
        let startTime = localStorage.getItem(storageKey);

        if (!startTime) {
            // لو أول مرة الإعلان يتحط، سجل وقت البداية دلوقتي حالا
            startTime = now;
            localStorage.setItem(storageKey, startTime);
        }

        // الحسبة: (وقت البداية + عدد الساعات) - الوقت الحالي
        const durationMs = ad.hours * 60 * 60 * 1000;
        const timeLeft = (parseInt(startTime) + durationMs) - now;

        if (timeLeft > 0) {
            // الإعلان لسه وقته مخلصش.. ضيفه للشريط
            activeAds.push(ad.text);
        }
    });

    // منع تكرار الرسالة: بنحط رسالة الحجز مرة واحدة بس في الآخر
    activeAds.push(bookingMsg);

    // عرض الإعلانات
    tickerContainer.innerHTML = activeAds.join(" &nbsp;&nbsp;&nbsp;&nbsp; ★ &nbsp;&nbsp;&nbsp;&nbsp; ");
}

// تشغيل الشريط وتحديثه كل دقيقة عشان لو إعلان خلص يختفي فوراً
runEliteTicker();
setInterval(runEliteTicker, 60000); 
