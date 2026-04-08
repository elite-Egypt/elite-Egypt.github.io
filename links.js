// قائمة زبائن صفحة النخبة
const clients = [
    { coords: "", url: "", title: "الزبون رقم 1" }
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
