// ==========================================
// فرۆشگای ئێمە - Shop JavaScript
// ==========================================

// ==========================================
// 🛒 کاڵاکان لێرە زیاد بکە - ADD PRODUCTS HERE
// ==========================================
// فۆرمات:
// { id: 'unique-id', name: 'ناو', description: 'وەسف', price: 1000, image: 'لینکی وێنە', category: 'cake', badge: 'نوێ' }

const categories = {
    cake: { name: 'کێک', icon: 'fa-cake-candles', count: 7 },
    biscuit: { name: 'بیسکویت', icon: 'fa-cookie-bite', count: 7 },
    drink: { name: 'خواردنەوە', icon: 'fa-glass-water', count: 3 },
    chips: { name: 'چیپس', icon: 'fa-bowl-food', count: 3 },
    snuff: { name: 'نوقڵ', icon: 'fa-candy-cane', count: 7 }
};

// ⬇️⬇️⬇️ کاڵاکان لێرە زیاد بکە ⬇️⬇️⬇️
const products = [
    // ========== کێک ==========
    {
        id: 'cake-1',
        name: 'Top Cake',
        description: '24 عەدەد',
        price: 4750,
        image: 'images/IMG_9999.jpeg',
        category: 'cake',
        badge: 'پڕفرۆشترین'
    },
    {
        id: 'cake-2',
        name: 'Rozy Cake',
        description: '24 عەدەد',
        price: 4500,
        image: 'images/IMG_0003.jpeg',
        category: 'cake'
    },
    {
        id: 'cake-3',
        name: 'کێک تایگەر',
        description: '12 عەدەد',
        price: 2500,
        image: 'images/IMG_0002.jpeg',
        category: 'cake'
    },
    {
        id: 'cake-4',
        name: 'موفید پڵەس',
        description: '24 عەدەد',
        price: 4750,
        image: 'images/IMG_0009.jpeg',
        category: 'cake'
    },
    {
        id: 'cake-5',
        name: 'کێکی مهیار',
        description: '24 عەدەد',
        price: 5000,
        image: 'images/IMG_0017.jpeg',
        category: 'cake'
    },
    {
        id: 'cake-6',
        name: 'کێکی ڕوس',
        description: '24 عەدەد',
        price: 5000,
        image: 'images/IMG_0018.jpeg',
        category: 'cake'
    },
    {
        id: 'cake-7',
        name: 'کێکی موفید',
        description: '24 عەدەد',
        price: 4500,
        image: 'images/IMG_0023.jpeg',
        category: 'cake'
    },
    

    // ========== بیسکویت ==========
    {
        id: 'biscuit-1',
        name: 'Chilka Dwany',
        description: '60 عەدەد',
        price: 5000,
        image: 'images/IMG_0001.jpeg',
        category: 'biscuit',
        badge: 'پڕفرۆشترین'
    },
    {
        id: 'biscuit-2',
        name: 'چەمەکی عایلە',
        description: '12 عەدەد',
        price: 10000,
        image: 'images/IMG_0004.jpeg',
        category: 'biscuit'
    },
    {
        id: 'biscuit-3',
        name: 'چەمەکی عایلە',
        description: '12 عەدەد',
        price: 10000,
        image: 'images/IMG_0006.jpeg',
        category: 'biscuit'
    },
    {
        id: 'biscuit-4',
        name: 'PEITBISS عایلەی',
        description: '12 عەدەد',
        price: 8500,
        image: 'images/IMG_0008.jpeg',
        category: 'biscuit'
    },
    {
        id: 'biscuit-5',
        name: 'پیتیپور عایلە',
        description: '12 عەدەد',
        price: 10000,
        image: 'images/IMG_0013.jpeg',
        category: 'biscuit'
    },
    {
        id: 'biscuit-6',
        name: 'کەزی لامیان',
        description: '24 عەدەد',
        price: 5000,
        image: 'images/IMG_0020.jpeg',
        category: 'biscuit'
    },
    {
        id: 'biscuit-7',
        name: 'کەزی لامیان',
        description: '12 عەدەد',
        price: 9500,
        image: 'images/IMG_0024.jpeg',
        category: 'biscuit'
    },
    {
        id: 'biscuit-8',
        name: 'پیتیپولی عایلی',
        description: '12 عەدەد',
        price: 10000,
        image: 'images/IMG_0027.jpeg',
        category: 'biscuit'
    },
    {
        id: 'biscuit-9',
        name: 'وایفەر ئەزرا',
        description: '24 عەدەد',
        price: 5000,
        image: 'images/IMG_0029.jpeg',
        category: 'biscuit'
    },
    {
        id: 'biscuit-9',
        name: 'وایفەر ئەزرا',
        description: '24 عەدەد',
        price: 5000,
        image: 'images/IMG_0030.jpeg',
        category: 'biscuit'
    },

    // ========== خواردنەوە ==========
    {
        id: 'drink-1',
        name: 'Pepsi',
        description: 'خواردنەوەی سارد',
        price: 750,
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop',
        category: 'drink'
    },
    {
        id: 'drink-2',
        name: 'Coca Cola',
        description: 'کۆکای کلاسیک',
        price: 750,
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
        category: 'drink'
    },
    {
        id: 'drink-3',
        name: 'Fanta',
        description: 'پڕتەقاڵی',
        price: 750,
        image: 'https://images.unsplash.com/photo-1603569283084-4068e2f29c48?w=400&h=300&fit=crop',
        category: 'drink'
    },

    // ========== چیپس ==========
    {
        id: 'chips-1',
        name: 'تۆرتێلا شین',
        description: '60 عەدەد',
        price: 9500,
        image: 'images/IMG_0011.jpeg',
        category: 'chips'
    },
    {
        id: 'chips-2',
        name: 'بوشاری دوانی',
        description: '48 عەدەد',
        price: 4250,
        image: 'images/IMG_0022.jpeg',
        category: 'chips'
    },
    {
        id: 'chips-3',
        name: 'زەڕاتی پەرداخ',
        description: '40 عەدەد',
        price: 8000,
        image: 'images/IMG_0028.jpeg',
        category: 'chips'
    },

    // ========== نوقڵ ==========
    {
        id: 'snuff-1',
        name: 'نوقڵی ئاناتا',
        description: '24 عەدەد',
        price: 4750,
        image: 'images/IMG_0005.jpeg',
        category: 'snuff'
    },
    {
        id: 'snuff-2',
        name: 'نەستەلە',
        description: '24 عەدەد',
        price: 5250,
        image: 'images/IMG_0007.jpeg',
        category: 'snuff',
        badge: 'پڕفرۆشترین'
    },
    {
        id: 'snuff-3',
        name: 'سەمیری',
        description: '30 عەدەد',
        price: 3000,
        image: 'images/IMG_00010.jpeg',
        category: 'snuff'
    },
    {
        id: 'snuff-4',
        name: 'قاوەی زۆزۆ',
        description: '24 عەدەد',
        price: 3000,
        image: 'images/IMG_00014.jpeg',
        category: 'snuff'
    },
    {
        id: 'snuff-5',
        name: 'تەمەرندی',
        description: '12 عەدەد',
        price: 2500,
        image: 'images/IMG_00015.jpeg',
        category: 'snuff'
    },
    {
        id: 'snuff-6',
        name: 'تەمەرندی لول',
        description: '24 عەدەد',
        price: 5000,
        image: 'images/IMG_00016.jpeg',
        category: 'snuff'
    },
    {
        id: 'snuff-7',
        name: 'بنێشتی یوبی',
        description: '100 عەدەد',
        price: 2500,
        image: 'images/IMG_00019.jpeg',
        category: 'snuff'
    }
];
// ⬆️⬆️⬆️ کاڵاکان لێرە کۆتایی دێت ⬆️⬆️⬆️

// ==========================================
// Global Variables
// ==========================================
let cart = [];
let currentCategory = 'cake';

// ==========================================
// Initialize App
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initLoader();
    initParticles();
    initScrollEffects();
    loadCart();
    updateCategoryCounts();
    showCategory('cake', document.querySelector('.category-card'));
});

// ==========================================
// Update Category Counts
// ==========================================
function updateCategoryCounts() {
    Object.keys(categories).forEach(cat => {
        const count = products.filter(p => p.category === cat).length;
        categories[cat].count = count;
    });
    
    document.querySelectorAll('.category-card').forEach(card => {
        const catName = card.querySelector('.category-name').textContent;
        const cat = Object.values(categories).find(c => c.name === catName);
        if (cat) {
            card.querySelector('.category-count').textContent = cat.count + ' کاڵا';
        }
    });
}

// ==========================================
// Loading Screen
// ==========================================
function initLoader() {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
    }, 1500);
}

// ==========================================
// Particles Animation
// ==========================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        container.appendChild(particle);
    }
}

// ==========================================
// Scroll Effects
// ==========================================
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    const scrollTop = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        if (window.scrollY > 300) {
            scrollTop?.classList.add('visible');
        } else {
            scrollTop?.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// Category & Products
// ==========================================
function showCategory(category, element) {
    currentCategory = category;

    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    if (element) {
        element.classList.add('active');
    }

    const titleEl = document.getElementById('categoryTitle');
    if (titleEl && categories[category]) {
        titleEl.innerHTML = `<i class="fas ${categories[category].icon}"></i> ${categories[category].name}`;
    }

    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';

    let filteredProducts = products.filter(p => {
        const matchesCategory = p.category === currentCategory;
        const matchesSearch = !searchQuery || 
            p.name.toLowerCase().includes(searchQuery) || 
            p.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    const countEl = document.getElementById('productsCount');
    if (countEl) {
        countEl.textContent = filteredProducts.length + ' کاڵا';
    }

    if (filteredProducts.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = filteredProducts.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 0.05}s">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/f97316/fff?text=No+Image'">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-overlay">
                    <button class="add-btn-overlay" onclick="addToCart('${product.id}')">
                        <i class="fas fa-plus"></i>
                        زیادکردن
                    </button>
                </div>
            </div>
            <div class="product-content">
                <span class="product-category">
                    <i class="fas ${categories[product.category]?.icon || 'fa-box'}"></i>
                    ${categories[product.category]?.name || product.category}
                </span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-label">نرخ</span>
                        <span class="price-value">${product.price.toLocaleString()}</span>
                    </div>
                    <button class="add-btn" onclick="addToCart('${product.id}')">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts() {
    renderProducts();
}

// ==========================================
// Cart Functions
// ==========================================
function loadCart() {
    try {
        const savedCart = localStorage.getItem('myShopCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (e) {
        cart = [];
    }
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('myShopCart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(product.name + ' زیادکرا', 'success');
    animateCartButton();
}

function animateCartButton() {
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            cartBtn.style.transform = '';
        }, 200);
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const cartCount = document.getElementById('cartCount');
    const cartItemsCount = document.getElementById('cartItemsCount');
    const totalItemsEl = document.getElementById('totalItems');
    const totalPriceEl = document.getElementById('totalPrice');

    if (cartCount) cartCount.textContent = totalItems;
    if (cartItemsCount) cartItemsCount.textContent = totalItems + ' کاڵا';
    if (totalItemsEl) totalItemsEl.textContent = totalItems;
    if (totalPriceEl) totalPriceEl.textContent = totalPrice.toLocaleString() + ' IQD';

    const cartItemsEl = document.getElementById('cartItems');
    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="cart-empty">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h4>سەبەتە بەتاڵە</h4>
                <p>کاڵای دڵخوازت زیاد بکە</p>
            </div>
        `;
        return;
    }

    cartItemsEl.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-header">
                <span class="cart-item-name">${item.name}</span>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="cart-item-controls">
                <div class="qty-controls">
                    <button class="qty-btn" onclick="decreaseQty(${index})">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="increaseQty(${index})">+</button>
                </div>
                <span class="cart-item-price">${(item.price * item.quantity).toLocaleString()} IQD</span>
            </div>
        </div>
    `).join('');
}

function increaseQty(index) {
    cart[index].quantity++;
    saveCart();
    updateCartUI();
}

function decreaseQty(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast('کاڵا لابرا', 'info');
}

// ==========================================
// Cart Toggle
// ==========================================
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');

    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }
}

// ==========================================
// WhatsApp Order
// ==========================================
function sendWhatsApp() {
    if (cart.length === 0) {
        showToast('سەبەتە بەتاڵە!', 'error');
        return;
    }

    const nameInput = document.getElementById('customerName');
    const phoneInput = document.getElementById('customerPhone');
    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';

    if (!name || !phone) {
        showToast('ناو و ژمارە بنووسە', 'error');
        return;
    }

    let message = '🛒 *داواکاری*\n\n';
    message += `👤 ${name}\n`;
    message += `📱 ${phone}\n\n`;
    message += '📦 کاڵاکان:\n';

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} × ${item.quantity}\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n💰 کۆ: ${total.toLocaleString()} IQD`;

    const phoneNumber = '9647510485057';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');

    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
    showToast('نێردرا! ✓', 'success');
}

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = 'fa-check';
    if (type === 'error') icon = 'fa-times';
    if (type === 'info') icon = 'fa-info';
    
    toast.innerHTML = `
        <div class="toast-icon"><i class="fas ${icon}"></i></div>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ==========================================
// Keyboard Shortcuts
// ==========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('cartSidebar');
        if (sidebar && sidebar.classList.contains('active')) {
            toggleCart();
        }
    }
});
