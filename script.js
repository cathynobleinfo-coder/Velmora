// Product Data mapped from local files
const products = [
    { name: "ANKH", price: 139, img: "ANKH 139.jpeg", category: "rings", isNew: true },
    { name: "APPOLO", price: 160, img: "APPOLO 160.jpeg", category: "necklace", isNew: false },
    { name: "AXEL", price: 160, img: "AXEL 160.jpeg", category: "necklace", isNew: false },
    { name: "AXEL 2.0", price: 130, img: "AXEL 2.0 130.jpeg", category: "necklace", isNew: true },
    { name: "BILLIE'S AURA", price: 150, img: "BILLIE'S AURA 150.jpeg", category: "earrings", isNew: true },
    { name: "BLOOD LINE CROSS", price: 169, img: "BLOOD LINE CROSS 169.jpeg", category: "necklace", isNew: false },
    { name: "BLUE STAR", price: 159, img: "BLUE STAR 159.jpeg", category: "rings", isNew: false },
    { name: "CELTIC", price: 190, img: "CELTIC 190.jpeg", category: "bracelets", isNew: false },
    { name: "CHROME RING", price: 90, img: "CHROME RING 90.jpeg", category: "rings", isNew: false },
    { name: "CLOVER HEART", price: 140, img: "CLOVER HEART 140.jpeg", category: "necklace", isNew: false },
    { name: "CROWN RING", price: 80, img: "CROWN RING 80.jpeg", category: "rings", isNew: false },
    { name: "DEVIL LOVE", price: 129, img: "DEVIL LOVE 129.jpeg", category: "necklace", isNew: false },
    { name: "ETERNAL", price: 60, img: "ETERNAL 60.jpeg", category: "rings", isNew: false },
    { name: "FLAME CROSS", price: 159, img: "FLAME CROSS 159.jpeg", category: "necklace", isNew: false },
    { name: "GOTHICS", price: 160, img: "GOTHICS  160.jpeg", category: "rings", isNew: false },
    { name: "GUTS", price: 140, img: "GUTS 140.jpeg", category: "necklace", isNew: false },
    { name: "HELIOS", price: 90, img: "HELIOS 90.jpeg", category: "rings", isNew: false },
    { name: "HOLE", price: 80, img: "HOLE 80.jpeg", category: "rings", isNew: false },
    { name: "HOLLOW CROSS", price: 130, img: "HOLLOW CROSS 130.jpeg", category: "necklace", isNew: false },
    { name: "HORUS", price: 80, img: "HORUS 80.jpeg", category: "necklace", isNew: false },
    { name: "LOVE DRIP CROSS", price: 140, img: "LOVE DRIP CROSS 140.jpeg", category: "necklace", isNew: false },
    { name: "LUNA", price: 129, img: "LUNA 129.jpeg", category: "necklace", isNew: true },
    { name: "OPAL STAR", price: 159, img: "OPAL STAR 159.jpeg", category: "earrings", isNew: false },
    { name: "OPAL HEART", price: 140, img: "OPAL HEART 140.jpeg", category: "necklace", isNew: false },
    { name: "OVAL", price: 100, img: "OVAL.jpeg", category: "bracelets", isNew: false },
    { name: "PINK STAR", price: 159, img: "PINK STAR 159.jpeg", category: "earrings", isNew: false },
    { name: "PIXEL HEART", price: 130, img: "PIXEL HEART 130.jpeg", category: "necklace", isNew: false },
    { name: "RECTANGLE", price: 129, img: "RECTANGLE 129.jpeg", category: "bracelets", isNew: false },
    { name: "RIBBON HEART", price: 149, img: "RIBBON HEART 149.jpeg", category: "necklace", isNew: false },
    { name: "SPIDEY", price: 139, img: "SPIDEY 139.jpeg", category: "rings", isNew: false },
    { name: "STAR CHARM", price: 79, img: "STAR CHARM 79.jpeg", category: "bracelets", isNew: false },
    { name: "THE SERPENT", price: 160, img: "THE SERPENT 160.jpeg", category: "rings", isNew: false },
    { name: "UPSIDE CROSS", price: 169, img: "UPSIDE CROSS 169.jpeg", category: "necklace", isNew: false },
    { name: "VELMORA BLOOD RELIC", price: 130, img: "VELMORA BLOOD RELIC (RED) 130.jpeg", category: "necklace", isNew: false },
    { name: "VELMORA PROMISE (1)", price: 150, img: "VELMORA PROMISE 150 (1).jpeg", category: "rings", isNew: false },
    { name: "VELMORA PROMISE (2)", price: 150, img: "VELMORA PROMISE 150 (2).jpeg", category: "rings", isNew: false },
    { name: "VELMORA RED HEART", price: 119, img: "VELMORA RED HEART 119.jpeg", category: "necklace", isNew: false },
    { name: "CHROME RING(1)", price: 90, img: "CHROME RING(1) 90.jpeg", category: "rings", isNew: true },
    { name: "DOLPHIN", price: 125, img: "DOLPHIN 125.jpeg", category: "necklace", isNew: true },
    { name: "DRAX", price: 90, img: "DRAX 90.jpeg", category: "rings", isNew: true },
    { name: "ECHO", price: 90, img: "ECHO 90.jpeg", category: "rings", isNew: true },
    { name: "FLEUR-DE-LIS", price: 100, img: "FLEUR-DE-LIS.jpeg", category: "necklace", isNew: true },
    { name: "MONARCH", price: 90, img: "MONARCH 90.jpeg", category: "rings", isNew: true },
    { name: "NEXA", price: 90, img: "NEXA 90.jpeg", category: "rings", isNew: true },
    { name: "PULSE", price: 90, img: "PULSE 90.jpeg", category: "rings", isNew: true },
    { name: "SWIRL", price: 90, img: "SWIRL 90.jpeg", category: "rings", isNew: true }
];

const phoneNumber = "7907445995"; // Owner's WhatsApp Number

// Render Products
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = ''; // clear existing

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const textToSend = `Hi I am interested in ${product.name}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`;

        const newTag = product.isNew ? `<span class="new-tag">New</span>` : '';

        const cardHTML = `
            <a href="${whatsappUrl}" target="_blank" class="product-card fade-in-up visible">
                ${newTag}
                <div class="product-image-wrap">
                    <img src="${product.img}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-info">
                    <div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-category">${product.category}</p>
                    </div>
                    <p class="product-price">₹${product.price}</p>
                </div>
            </a>
        `;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Render
    renderProducts();

    // 2. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 3. Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');

            // Re-render
            const filterValue = e.target.getAttribute('data-filter');
            renderProducts(filterValue);
        });
    });

    // 4. Scroll Animations Observer (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });

    // Navbar styling on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
        }
    });
});
