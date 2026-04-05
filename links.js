// قائمة زبائن صفحة النخبة
const clients = [
    { coords: "431,438,648,654", url: "https://www.facebook.com/profile.php?id=100042981272786", title: "الزبون رقم 1" }
];

// المحرك الذكي - ملمسوش نهائي
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
