/**
 * نظام إدارة إعلانات صفحة النخبة
 * -------------------------------------------
 * إرشادات التعديل:
 * 1. [text]: اكتب نص الإعلان هنا بين علامتين " "
 * 2. [hours]: اكتب عدد الساعات هنا (رقم فقط)
 * 3. لو مش عاوز تستخدم إعلان، سيب الساعات (0) وهيتلغي لوحده.
 */

const adsConfig = [
    { text: "هنا يجتمع الكِبار.. كُن واحداً منهم وأعلن عن مشروعك في منصة النخبة.", hours: 100 }, // إعلان 1
    { text: "نص الإعلان الثاني يوضع هنا", hours: 0 }, // إعلان 2
    { text: "نص الإعلان الثالث يوضع هنا", hours: 0 }, // إعلان 3
    { text: "نص الإعلان الرابع يوضع هنا", hours: 0 }, // إعلان 4
    { text: "نص الإعلان الخامس يوضع هنا", hours: 0 }, // إعلان 5
    { text: "نص الإعلان السادس يوضع هنا", hours: 0 }, // إعلان 6
    { text: "نص الإعلان السابع يوضع هنا", hours: 0 }, // إعلان 7
    { text: "نص الإعلان الثامن يوضع هنا", hours: 0 }, // إعلان 8
    { text: "نص الإعلان التاسع يوضع هنا", hours: 0 }, // إعلان 9
    { text: "نص الإعلان العاشر يوضع هنا", hours: 0 }  // إعلان 10
];

// الجملة اللي بتظهر لو كل الإعلانات اللي فوق خلصت (ساعتها يظهر "احجز مكانك")
const backupMsg = "يمكنك التواصل معنا وحجز مكانك في الشريط الإخباري الخاص بصفحة النخبة";

function runEliteTicker() {
    const tickerContainer = document.getElementById('ticker-content');
    if (!tickerContainer) return;

    const now = new Date().getTime();
    let activeAds = [];

    adsConfig.forEach((ad, index) => {
        // لو الإعلان مكتوب له ساعات أكتر من 0 نبدأ نعالجه
        if (ad.hours > 0) {
            let storageKey = "ad_start_" + index + ad.text.substring(0, 5);
            let startTime = localStorage.getItem(storageKey);

            if (!startTime) {
                startTime = now;
                localStorage.setItem(storageKey, startTime);
            }

            const durationMs = ad.hours * 60 * 60 * 1000;
            const timeLeft = (parseInt(startTime) + durationMs) - now;

            if (timeLeft > 0) {
                activeAds.push(ad.text);
            }
        }
    });

    // لو مفيش إعلانات شغالة، اعرض رسالة الحجز كبديل
    if (activeAds.length === 0) {
        tickerContainer.innerHTML = backupMsg;
    } else {
        // بيعرض الإعلانات النشطة فقط وبينهم نجمة ذهبية
        tickerContainer.innerHTML = activeAds.join(" &nbsp;&nbsp;&nbsp;&nbsp; ★ &nbsp;&nbsp;&nbsp;&nbsp; ");
    }
}

// التشغيل الفوري
runEliteTicker();
// تحديث تلقائي كل دقيقة
setInterval(runEliteTicker, 60000);
