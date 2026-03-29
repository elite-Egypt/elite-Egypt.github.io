// مصفوفة الزبائن - ضيف سطر جديد لكل زبون هنا
const clients = [
    // مثال لزبون VIP (واخد أول مربعين فوق يمين)
    { coords: "0,0,216,216", url: "https://facebook.com/VIP_LINK", title: "VIP Client" },
    
    // مثال لزبون عادي (المربع الثالث في الصف الأول)
    { coords: "216,0,324,108", url: "https://facebook.com/NORMAL_LINK", title: "Normal Client" }
];

// المحرك اللي بيشغل الروابط (سيبه زي ما هو)
const mapLinks = document.getElementById('map-links');
if (mapLinks) {
    clients.forEach(client => {
        const area = document.createElement('area');
        area.shape = "rect";
        area.coords = client.coords;
        area.href = client.url;
        area.target = "_blank";
        area.title = client.title;
        mapLinks.appendChild(area);
    });
}

