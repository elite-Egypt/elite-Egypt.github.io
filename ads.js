/**
 * إدارة إعلانات النخبة - الـ 10 خانات
 */

const adsConfig = [
    { text: "هنا يجتمع الكِبار.. كُن واحداً منهم وأعلن عن مشروعك في منصة النخبة.", hours: 500 }, 
    { text: "نص الإعلان الثاني", hours: 0 },
    { text: "نص الإعلان الثالث", hours: 0 },
    { text: "نص الإعلان الرابع", hours: 0 },
    { text: "نص الإعلان الخامس", hours: 0 },
    { text: "نص الإعلان السادس", hours: 0 },
    { text: "نص الإعلان السابع", hours: 0 },
    { text: "نص الإعلان الثامن", hours: 0 },
    { text: "نص الإعلان التاسع", hours: 0 },
    { text: "نص الإعلان العاشر", hours: 0 }
];

const backupMsg = "يمكنك التواصل معنا وحجز مكانك في الشريط الإخباري الخاص بصفحة النخبة";

function runEliteTicker() {
    const tickerContainer = document.getElementById('ticker-content');
    if(!tickerContainer) return;
    const now = new Date().getTime();
    let activeAds = [];

    adsConfig.forEach((ad, index) => {
        if (ad.hours > 0) {
            let storageKey = "elite_v3_ad_" + index + ad.text.substring(0,5);
            let startTime = localStorage.getItem(storageKey);

            if (!startTime) {
                startTime = now;
                localStorage.setItem(storageKey, startTime);
            }

            const durationMs = ad.hours * 60 * 60 * 1000;
            if ((parseInt(startTime) + durationMs) > now) {
                activeAds.push(ad.text);
            }
        }
    });

    if (activeAds.length === 0) {
        tickerContainer.innerHTML = backupMsg;
    } else {
        tickerContainer.innerHTML = activeAds.join(" &nbsp;&nbsp;&nbsp;&nbsp; ★ &nbsp;&nbsp;&nbsp;&nbsp; ") + " &nbsp;&nbsp;&nbsp;&nbsp; ★ &nbsp;&nbsp;&nbsp;&nbsp; ";
    }
}

runEliteTicker();
setInterval(runEliteTicker, 60000);
