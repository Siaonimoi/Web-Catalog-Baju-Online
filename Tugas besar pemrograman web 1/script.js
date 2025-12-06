const heroImages = [
    "https://images.pexels.com/photos/6311601/pexels-photo-6311601.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/6311613/pexels-photo-6311613.jpeg?auto=compress&cs=tinysrgb&w=1600"
];

let heroIndex = 0;
const heroBanner = document.getElementById("heroBanner");

function changeHeroSlide() {
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroBanner.style.backgroundImage = `url(${heroImages[heroIndex]})`;
}

// mulai slide otomatis setiap 3 detik
setInterval(changeHeroSlide, 3000);


// 2) PRODUK
const products = [
    { name: "Men Oversized Black T-Shirt", price: "159.000", category: "Men", img: "images/men1.jpg" },
    { name: "Men Classic White Shirt", price: "249.000", category: "Men", img: "images/men2.jpg" },

    { name: "Women Elegant Beige Blouse", price: "199.000", category: "Women", img: "images/women1.jpg" },
    { name: "Women Soft Knit Sweater", price: "229.000", category: "Women", img: "images/women2.jpg" },

    { name: "Unisex Minimal Hoodie", price: "289.000", category: "Unisex", img: "images/unisex1.jpg" },
    { name: "Unisex Oversized Tee", price: "149.000", category: "Unisex", img: "images/unisex2.jpg" }
];

function loadProducts(filter = "all") {
    const container = document.getElementById("productGrid");
    container.innerHTML = "";

    products
        .filter(p => (filter === "all" ? true : p.category === filter))
        .forEach(p => {
            container.innerHTML += `
                <div class="card">
                    <img src="${p.img}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p class="price">Rp ${p.price}</p>
                </div>
            `;
        });
}

// FILTER BUTTON
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        loadProducts(btn.dataset.cat);
    });
});

// LOAD PRODUCTS AWAL
loadProducts();
