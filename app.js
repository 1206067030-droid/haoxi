/* goodhappy 瑜旅行行李箱 - Main JavaScript */

// Product Data
const products = [
    {
        id: 1,
        name: 'DTA寬拉桿行李箱',
        nameEn: 'DTA Wide Handle Luggage',
        desc: '時尚寬拉桿設計，20寸登机箱大小，適合短途旅行。配備密碼鎖和鏈條細節設計，既實用又美觀。',
        descEn: 'Stylish wide handle design, 20-inch carry-on size, perfect for short trips. Equipped with combination lock and chain details, both practical and fashionable.',
        image: 'images/DTA宽拉杆行李箱女20寸登机箱小型轻便旅行密码拉杆箱子男24链条.jpg',
        specs: { size: '20寸 / 24寸', weight: '3.2kg', material: 'ABS+PC', wheels: '360°萬向輪' },
        specsEn: { size: '20" / 24"', weight: '3.2kg', material: 'ABS+PC', wheels: '360° Swivel' },
        features: ['寬拉桿設計', '密碼鎖', '鏈條裝飾', '輕便耐用'],
        featuresEn: ['Wide handle design', 'Combination lock', 'Chain decoration', 'Lightweight & durable'],
        material: '採用優質ABS+PC複合材料，耐磨抗壓，輕盈堅固。',
        materialEn: 'Made of high-quality ABS+PC composite material, wear-resistant, pressure-resistant, lightweight and sturdy.'
    },
    {
        id: 2,
        name: '側開蓋行李箱',
        nameEn: 'Side-Open Luggage',
        desc: '大容量側開蓋設計，20寸登机箱，24分區收納空間，可擴展設計讓您輕鬆整理行李。',
        descEn: 'Large capacity side-open design, 20-inch carry-on, 24 compartments for storage, expandable design makes packing easy.',
        image: 'images/侧开盖行李箱大容量女20寸登机箱可扩展轻便旅行拉杆箱24分区.jpg',
        specs: { size: '20寸 / 24寸', weight: '3.8kg', material: 'PC+布料', wheels: '360°萬向輪' },
        specsEn: { size: '20" / 24"', weight: '3.8kg', material: 'PC+Fabric', wheels: '360° Swivel' },
        features: ['側開蓋設計', '24分區收納', '可擴展', '乾濕分離'],
        featuresEn: ['Side-open design', '24 compartments', 'Expandable', 'Wet/dry separation'],
        material: '採用PC外殼搭配優質內膽布料，堅固與柔軟兼備。',
        materialEn: 'PC shell with quality inner fabric, perfect combination of sturdiness and softness.'
    },
    {
        id: 3,
        name: '前開口行李箱',
        nameEn: 'Front-Open Luggage',
        desc: '前開口設計方便取物，20寸登机箱，配備TSA密碼鎖和鋁框結構，乾濕分離設計。',
        descEn: 'Front-open design for easy access, 20-inch carry-on with TSA lock and aluminum frame structure.',
        image: 'images/前开口行李箱女20寸登机箱宽拉杆24干湿分离TSA密码锁铝框.jpg',
        specs: { size: '20寸 / 24寸', weight: '4.2kg', material: '鋁框+PC', wheels: '360°萬向輪' },
        specsEn: { size: '20" / 24"', weight: '4.2kg', material: 'Aluminum+PC', wheels: '360° Swivel' },
        features: ['前開口袋', 'TSA密碼鎖', '鋁框結構', '乾濕分離'],
        featuresEn: ['Front pocket', 'TSA lock', 'Aluminum frame', 'Wet/dry separation'],
        material: '鋁合金框架搭配PC面板，堅固耐用，安全性高。',
        materialEn: 'Aluminum alloy frame with PC panels, sturdy, durable and highly secure.'
    },
    {
        id: 4,
        name: '大容量行李箱2026',
        nameEn: 'Large Capacity Luggage 2026',
        desc: '2026新款大容量行李箱，24/28寸可選，结实耐用，登机箱设计，配密码锁。',
        descEn: '2026 new large capacity luggage, available in 24/28 inches, sturdy and durable with combination lock.',
        image: 'images/大容量行李箱2026新款拉杆旅行箱24寸结实耐用登机密码箱女28.jpg',
        specs: { size: '24寸 / 28寸', weight: '4.5kg', material: 'PC', wheels: '360°萬向輪' },
        specsEn: { size: '24" / 28"', weight: '4.5kg', material: 'PC', wheels: '360° Swivel' },
        features: ['大容量', '2026新款', '結實耐用', '密碼鎖'],
        featuresEn: ['Large capacity', '2026 new model', 'Sturdy & durable', 'Combination lock'],
        material: '採用純PC材料，抗壓性強，輕盈堅固。',
        materialEn: 'Pure PC material, strong pressure resistance, lightweight and sturdy.'
    },
    {
        id: 5,
        name: '寬拉桿前開口的旅行箱',
        nameEn: 'Wide Handle Front-Open Luggage',
        desc: '多功能前開口的旅行箱，20寸登机箱尺寸，密碼鎖設計，時尚實用。',
        descEn: 'Multi-functional front-open luggage, 20-inch carry-on size with combination lock, fashionable and practical.',
        image: 'images/宽拉杆行李箱女多功能前开口2025新款20寸登机箱密码旅行箱子.jpg',
        specs: { size: '20寸 / 22寸', weight: '3.5kg', material: 'ABS+PC', wheels: '360°萬向輪' },
        specsEn: { size: '20" / 22"', weight: '3.5kg', material: 'ABS+PC', wheels: '360° Swivel' },
        features: ['寬拉桿', '前開口袋', '密碼鎖', '輕便設計'],
        featuresEn: ['Wide handle', 'Front pocket', 'Combination lock', 'Lightweight design'],
        material: 'ABS+PC複合材質，兼具輕盈與堅固特性。',
        materialEn: 'ABS+PC composite material, lightweight yet sturdy.'
    },
    {
        id: 6,
        name: '超大容量行李箱',
        nameEn: 'Extra Large Capacity Luggage',
        desc: '30寸超大容量設計，適合長途旅行和留學，行李再多也不怕。结实耐用品质保证。',
        descEn: '30-inch extra large capacity, perfect for long trips and study abroad, never worry about insufficient space.',
        image: 'images/行李箱女大容量2025新款超大30结实耐用旅行箱子28寸拉杆箱男.jpg',
        specs: { size: '28寸 / 30寸', weight: '5.2kg', material: 'PC', wheels: '360°萬向輪' },
        specsEn: { size: '28" / 30"', weight: '5.2kg', material: 'PC', wheels: '360° Swivel' },
        features: ['超大容量', '30寸設計', '結實耐用', '加固拉桿'],
        featuresEn: ['Extra large capacity', '30" design', 'Sturdy & durable', 'Reinforced handle'],
        material: '加厚PC材料，配合金屬軸承拉桿，超強承重能力。',
        materialEn: 'Thickened PC material with metal bearing handle, super load-bearing capacity.'
    },
    {
        id: 7,
        name: '小型登机箱',
        nameEn: 'Compact Carry-On',
        desc: '小巧便攜的18/16寸登机箱，飛機適用，密碼鎖保護，適合商務出行。',
        descEn: 'Compact 18/16-inch carry-on, aircraft suitable, combination lock protection, perfect for business travel.',
        image: 'images/行李箱女小型登机箱18寸飞机密码旅行箱男16寸拉杆箱密码锁.jpg',
        specs: { size: '16寸 / 18寸', weight: '2.5kg', material: 'ABS', wheels: '360°萬向輪' },
        specsEn: { size: '16" / 18"', weight: '2.5kg', material: 'ABS', wheels: '360° Swivel' },
        features: ['小巧便攜', '飛機適用', '密碼鎖', '商務風格'],
        featuresEn: ['Compact & portable', 'Aircraft suitable', 'Combination lock', 'Business style'],
        material: '優質ABS材料，輕巧堅固，耐衝擊。',
        materialEn: 'Quality ABS material, lightweight and sturdy, impact resistant.'
    },
    {
        id: 8,
        name: 'TSA密碼鎖行李箱',
        nameEn: 'TSA Lock Luggage',
        desc: '20/22寸標準登机箱，配備TSA密碼鎖，萬向輪設計，出行更安心。',
        descEn: '20/22-inch standard carry-on with TSA lock and swivel wheels for worry-free travel.',
        image: 'images/行李箱女拉杆箱20寸2025男可登机22旅行箱TSA密码锁万向轮.jpg',
        specs: { size: '20寸 / 22寸', weight: '3.3kg', material: 'ABS+PC', wheels: '360°萬向輪' },
        specsEn: { size: '20" / 22"', weight: '3.3kg', material: 'ABS+PC', wheels: '360° Swivel' },
        features: ['TSA密碼鎖', '萬向輪', '可登机', '標準尺寸'],
        featuresEn: ['TSA lock', 'Swivel wheels', 'Carry-on ready', 'Standard size'],
        material: 'ABS+PC複合材質，堅固耐用，性價比極高。',
        materialEn: 'ABS+PC composite, sturdy and durable, excellent value.'
    },
    {
        id: 9,
        name: '超輕行李箱',
        nameEn: 'Ultra Light Luggage',
        desc: '超輕量化設計，20/24寸可選，輕便小型旅行箱，新款拉桿箱密碼箱。',
        descEn: 'Ultra-lightweight design, available in 20/24 inches, new model with combination lock.',
        image: 'images/行李箱超轻20寸登机箱轻便小型旅行箱新款拉杆箱密码箱24寸皮箱.jpg',
        specs: { size: '20寸 / 24寸', weight: '2.8kg', material: 'PC', wheels: '360°萬向輪' },
        specsEn: { size: '20" / 24"', weight: '2.8kg', material: 'PC', wheels: '360° Swivel' },
        features: ['超輕設計', 'PC材質', '密碼鎖', '輕便旅行'],
        featuresEn: ['Ultra-light', 'PC material', 'Combination lock', 'Lightweight travel'],
        material: '純PC材料，極致輕盈，強度絲毫不減。',
        materialEn: 'Pure PC material, extremely lightweight without compromising strength.'
    }
];

// i18n Translations
const translations = {
    zh: {
        'nav.home': '首頁',
        'nav.products': '產品',
        'nav.about': '關於我們',
        'nav.contact': '聯繫我們',
        'hero.subtitle': '瑜旅行行李箱',
        'hero.tagline': '探索自然，隨心而行',
        'hero.cta': '查看產品',
        'about.label': '關於我們',
        'about.title': '專業旅行行李箱製造商',
        'about.desc1': 'HAOXII LIMITED 致力於為全球旅行者提供高品質、高性能的行李箱產品。我們的設計理念融合了實用性與美學，讓每一次旅行都成為愉悅的體驗。',
        'about.desc2': '作為專業的行李箱製造商，我們專注於每一個細節，從材料選擇到生產工藝，確保每一件產品都能承受旅途中的各種考驗，成為您可靠的旅行伴侶。',
        'about.stat1': '精選產品',
        'about.stat2': '品質保証',
        'about.stat3': '客戶服務',
        'products.label': '我們的產品',
        'products.title': '精選行李箱系列',
        'products.subtitle': '為不同旅行需求設計，結合創新科技與優質材料',
        'features.label': '為什麼選擇我們',
        'features.title': '品質與創新的結合',
        'features.f1.title': 'TSA密碼鎖',
        'features.f1.desc': '符合國際TSA標準，安全保障',
        'features.f2.title': '輕盈設計',
        'features.f2.desc': '採用輕量材料，方便攜帶',
        'features.f3.title': '耐磨耐用',
        'features.f3.desc': '高強度材質，經久耐用',
        'features.f4.title': '萬向輪',
        'features.f4.desc': '360度旋轉，靈活順滑',
        'contact.label': '聯繫我們',
        'contact.title': '開啟您的品質之旅',
        'contact.subtitle': '歡迎咨詢我們的產品，專業團隊將為您提供詳細解答',
        'contact.company': '公司名稱',
        'contact.contact': '聯絡人',
        'contact.phone': '電話',
        'contact.email': '郵箱',
        'contact.form.title': '發送訊息',
        'contact.form.name': '姓名',
        'contact.form.email': '郵箱',
        'contact.form.message': '訊息',
        'contact.form.submit': '發送訊息',
        'contact.form.success': '訊息發送成功！我們將儘快回覆您。',
        'footer.rights': '版權所有。',
        'product.badge': '旅行行李箱',
        'product.back': '返回首頁',
        'product.description': '產品描述',
        'product.specs': '產品規格',
        'product.features': '產品特點',
        'product.material': '材質說明',
        'product.inquiry': '產品咨詢',
        'product.emailUs': '郵件咨詢',
        'product.related': '相關產品',
        'product.size': '尺寸',
        'product.weight': '重量',
        'product.material': '材質',
        'product.wheels': '輪子'
    },
    en: {
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        'hero.subtitle': 'Travel Luggage',
        'hero.tagline': 'Explore Nature, Travel Freely',
        'hero.cta': 'View Products',
        'about.label': 'About Us',
        'about.title': 'Professional Travel Luggage Manufacturer',
        'about.desc1': 'HAOXII LIMITED is committed to providing global travelers with high-quality, high-performance luggage products. Our design philosophy combines practicality and aesthetics, making every journey a pleasant experience.',
        'about.desc2': 'As a professional luggage manufacturer, we focus on every detail, from material selection to production craftsmanship, ensuring every product can withstand the various challenges of travel and become your reliable travel companion.',
        'about.stat1': 'Products',
        'about.stat2': 'Quality Guaranteed',
        'about.stat3': 'Customer Service',
        'products.label': 'Our Products',
        'products.title': 'Premium Luggage Collection',
        'products.subtitle': 'Designed for different travel needs, combining innovative technology with quality materials',
        'features.label': 'Why Choose Us',
        'features.title': 'Quality Meets Innovation',
        'features.f1.title': 'TSA Lock',
        'features.f1.desc': 'Compliant with international TSA standards for security',
        'features.f2.title': 'Lightweight Design',
        'features.f2.desc': 'Using lightweight materials for easy carrying',
        'features.f3.title': 'Durable & Wear-resistant',
        'features.f3.desc': 'High-strength materials for long-lasting use',
        'features.f4.title': 'Swivel Wheels',
        'features.f4.desc': '360-degree rotation, smooth and flexible',
        'contact.label': 'Contact Us',
        'contact.title': 'Start Your Quality Journey',
        'contact.subtitle': 'Feel free to inquire about our products, our professional team will provide detailed answers',
        'contact.company': 'Company Name',
        'contact.contact': 'Contact Person',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.form.title': 'Send Message',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        'contact.form.success': 'Message sent successfully! We will reply you soon.',
        'footer.rights': 'All rights reserved.',
        'product.badge': 'Travel Luggage',
        'product.back': 'Back to Home',
        'product.description': 'Product Description',
        'product.specs': 'Product Specifications',
        'product.features': 'Product Features',
        'product.material': 'Material',
        'product.inquiry': 'Product Inquiry',
        'product.emailUs': 'Email Us',
        'product.related': 'Related Products',
        'product.size': 'Size',
        'product.weight': 'Weight',
        'product.material': 'Material',
        'product.wheels': 'Wheels'
    }
};

// State
let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'zh');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initLanguage();
    initNavigation();
    initMobileMenu();
    initContactForm();

    if (document.getElementById('productGrid')) {
        loadProducts();
    }
});

// Theme Functions
function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    }

    updateThemeIcons();
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
}

function updateThemeIcons() {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const isDark = document.documentElement.classList.contains('dark');

    if (sunIcon) sunIcon.classList.toggle('hidden', !isDark);
    if (moonIcon) moonIcon.classList.toggle('hidden', isDark);
}

// Language Functions
function initLanguage() {
    updateLanguageUI();
    applyTranslations();
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    updateLanguageUI();
    applyTranslations();
}

function updateLanguageUI() {
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl) {
        currentLangEl.textContent = currentLang === 'zh' ? '中文' : 'EN';
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });

    if (document.getElementById('productGrid')) {
        loadProducts();
    }

    if (document.getElementById('productDetail')) {
        loadProductDetail();
    }
}

// Navigation Functions
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const themeToggle = document.getElementById('themeToggle');
    const langSwitcher = document.getElementById('langSwitcher');
    const langDropdown = document.getElementById('langDropdown');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (langSwitcher && langDropdown) {
        langSwitcher.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', () => {
                currentLang = btn.dataset.lang;
                localStorage.setItem('lang', currentLang);
                updateLanguageUI();
                applyTranslations();
                langDropdown.classList.add('hidden');
            });
        });

        document.addEventListener('click', () => {
            langDropdown.classList.add('hidden');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('mobileMenu')?.classList.remove('open');
            }
        });
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('open');
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('open');
            });
        });
    }
}

// Product Functions
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;

    productGrid.innerHTML = products.map((product, index) => `
        <a href="product.html?id=${product.id}" class="product-card block bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up stagger-${(index % 6) + 1}">
            <div class="aspect-square overflow-hidden bg-dark-100 dark:bg-dark-700">
                <img src="${product.image}" alt="${currentLang === 'zh' ? product.name : product.nameEn}"
                     class="w-full h-full object-cover"
                     loading="lazy">
            </div>
            <div class="p-5">
                <h3 class="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                    ${currentLang === 'zh' ? product.name : product.nameEn}
                </h3>
                <p class="text-dark-500 dark:text-dark-400 text-sm line-clamp-2">
                    ${currentLang === 'zh' ? product.desc : product.descEn}
                </p>
            </div>
        </a>
    `).join('');
}

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;

    const product = products.find(p => p.id === productId) || products[0];

    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = currentLang === 'zh' ? product.name : product.nameEn;
    document.getElementById('productName').textContent = currentLang === 'zh' ? product.name : product.nameEn;
    document.getElementById('productNameEn').textContent = currentLang === 'zh' ? product.nameEn : product.name;
    document.getElementById('productDesc').textContent = currentLang === 'zh' ? product.desc : product.descEn;
    document.getElementById('pageTitle').textContent = `${currentLang === 'zh' ? product.name : product.nameEn} | goodhappy`;

    const specsContainer = document.getElementById('productSpecs');
    const specs = currentLang === 'zh' ? product.specs : product.specsEn;
    const specsLabels = currentLang === 'zh'
        ? { size: '尺寸', weight: '重量', material: '材質', wheels: '輪子' }
        : { size: 'Size', weight: 'Weight', material: 'Material', wheels: 'Wheels' };

    specsContainer.innerHTML = Object.entries(specs).map(([key, value]) => `
        <div class="flex items-center space-x-3">
            <span class="text-dark-500 dark:text-dark-400 w-20">${specsLabels[key]}</span>
            <span class="text-dark-900 dark:text-white font-medium">${value}</span>
        </div>
    `).join('');

    const features = currentLang === 'zh' ? product.features : product.featuresEn;
    const featuresContainer = document.getElementById('productFeatures');
    featuresContainer.innerHTML = features.map(feature => `
        <li class="flex items-center space-x-3">
            <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-dark-700 dark:text-dark-300">${feature}</span>
        </li>
    `).join('');

    document.getElementById('productMaterial').textContent = currentLang === 'zh' ? product.material : product.materialEn;

    loadRelatedProducts(productId);
}

function loadRelatedProducts(currentId) {
    const relatedContainer = document.getElementById('relatedProducts');
    if (!relatedContainer) return;

    const related = products.filter(p => p.id !== currentId).slice(0, 4);

    relatedContainer.innerHTML = related.map(product => `
        <a href="product.html?id=${product.id}" class="block bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <div class="aspect-square overflow-hidden bg-dark-100 dark:bg-dark-700">
                <img src="${product.image}" alt="${currentLang === 'zh' ? product.name : product.nameEn}"
                     class="w-full h-full object-cover"
                     loading="lazy">
            </div>
            <div class="p-3">
                <h4 class="text-sm font-medium text-dark-900 dark:text-white truncate">
                    ${currentLang === 'zh' ? product.name : product.nameEn}
                </h4>
            </div>
        </a>
    `).join('');
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            console.log('Form submitted:', data);

            form.reset();
            if (successMsg) {
                successMsg.classList.remove('hidden');
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }
        });
    }
}
