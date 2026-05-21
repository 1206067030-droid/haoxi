/* goodhappy 智能电子产品 - Main JavaScript */

// Product Data
const products = [
    {
        id: 1,
        name: 'NFC墨水屏智能便签贴',
        nameEn: 'NFC E-Ink Smart Sticky Note',
        desc: '智能NFC墨水屏便签贴，支持电子记事和留言功能，可贴在冰箱或任何平面上，重复使用环保节能。',
        descEn: 'Smart NFC E-Ink sticky note, supports electronic notes and messages. Can be attached to fridge or any surface, reusable and eco-friendly.',
        image: 'images/0摘录NFC墨水屏智能磁性便签贴电子记事留言冰箱贴.jpg',
        specs: { size: '86mm x 54mm', weight: '35g', material: 'ABS+墨水屏', battery: 'CR2032纽扣电池' },
        specsEn: { size: '86mm x 54mm', weight: '35g', material: 'ABS+E-Ink', battery: 'CR2032 Battery' },
        features: ['NFC一碰传', '墨水屏显示', '磁吸设计', '重复擦写'],
        featuresEn: ['NFC Tap', 'E-Ink Display', 'Magnetic', 'Reusable'],
        material: '採用ABS外殼搭配高清墨水屏幕，磁吸背贴设计，方便粘贴使用。',
        materialEn: 'ABS shell with high-resolution E-Ink display, magnetic backing for easy attachment.'
    },
    {
        id: 2,
        name: 'AI迷你智能陪伴机器人',
        nameEn: 'AI Mini Companion Robot',
        desc: '专为儿童设计的智能陪伴机器人，支持中英双语对话、早教启蒙、语音互动，是孩子的最佳学习伙伴。',
        descEn: 'AI companion robot designed for children, supports Chinese-English bilingual dialogue, early education, voice interaction.',
        image: 'images/AI迷你智能陪伴机器人早教启蒙学习中英对话语音儿童礼物.jpg',
        specs: { size: '15cm x 12cm', weight: '450g', material: '环保ABS', battery: '2000mAh' },
        specsEn: { size: '15cm x 12cm', weight: '450g', material: 'Eco ABS', battery: '2000mAh' },
        features: ['AI对话', '早教启蒙', '中英双语', '语音互动'],
        featuresEn: ['AI Chat', 'Early Education', 'Bilingual', 'Voice Interaction'],
        material: '採用食品級环保ABS材料，安全无毒，圆角设计保护儿童安全。',
        materialEn: 'Food-grade eco-friendly ABS material, safe and non-toxic, rounded edges for child safety.'
    },
    {
        id: 3,
        name: 'LOOI智能桌面机器人',
        nameEn: 'LOOI Smart Desktop Robot',
        desc: '智能桌面机器人，支持AI人脸识别、手势控制、中英文语音对话，是您的智能生活助手。',
        descEn: 'Smart desktop robot with AI face recognition, gesture control, Chinese-English voice interaction.',
        image: 'images/LOOI robot智能桌面机器人AI人脸识别手势中英文互动语音对话助.jpg',
        specs: { size: '20cm x 18cm', weight: '600g', material: 'ABS+金属', battery: '3000mAh' },
        specsEn: { size: '20cm x 18cm', weight: '600g', material: 'ABS+Metal', battery: '3000mAh' },
        features: ['人脸识别', '手势控制', '语音助手', '智能家居'],
        featuresEn: ['Face Recognition', 'Gesture Control', 'Voice Assistant', 'Smart Home'],
        material: 'ABS外殼配合金属底座，稳固耐用，现代简约设计风格。',
        materialEn: 'ABS shell with metal base, stable and durable, modern minimalist design.'
    },
    {
        id: 4,
        name: 'Loona智能机器狗',
        nameEn: 'Loona Smart Robot Dog',
        desc: '可爱的电子宠物机器狗，支持远程监控、语音互动、儿童陪伴，是家庭的新成员。',
        descEn: 'Cute electronic pet robot dog with remote monitoring, voice interaction, perfect family companion.',
        image: 'images/Loona智能机器狗电子宠物远程监控儿童陪伴玩具.jpg',
        specs: { size: '25cm x 15cm', weight: '800g', material: 'ABS+PC', battery: '4000mAh' },
        specsEn: { size: '25cm x 15cm', weight: '800g', material: 'ABS+PC', battery: '4000mAh' },
        features: ['远程监控', '语音互动', '动作展示', 'App控制'],
        featuresEn: ['Remote Monitor', 'Voice Interaction', 'Motion Display', 'App Control'],
        material: 'PC+ABS複合材料，柔软触感，防摔设计，适合家庭使用。',
        materialEn: 'PC+ABS composite material, soft touch, anti-drop design, perfect for home use.'
    },
    {
        id: 5,
        name: 'MORRORART M2蓝牙音箱',
        nameEn: 'MORRORART M2 Speaker',
        desc: '悬浮歌词蓝牙音箱，黑胶唱片造型，支持Hi-Fi音质，让音乐可视化呈现。',
        descEn: 'Floating lyrics Bluetooth speaker with vinyl record design, Hi-Fi sound quality, visual music experience.',
        image: 'images/MORRORART M2蓝牙音箱唱片悬浮歌词桌面黑胶字幕hifi音响.jpg',
        specs: { size: '26cm x 26cm', weight: '2.5kg', material: 'ABS+玻璃', power: '40W' },
        specsEn: { size: '26cm x 26cm', weight: '2.5kg', material: 'ABS+Glass', power: '40W' },
        features: ['悬浮歌词', 'Hi-Fi音质', '蓝牙5.0', '黑胶造型'],
        featuresEn: ['Floating Lyrics', 'Hi-Fi Sound', 'Bluetooth 5.0', 'Vinyl Design'],
        material: 'ABS外壳配合高清玻璃面板，金属网罩设计，音质与颜值兼具。',
        materialEn: 'ABS shell with high-definition glass panel, metal mesh cover, perfect sound and appearance.'
    },
    {
        id: 6,
        name: 'MORRORART R2唱片音箱',
        nameEn: 'MORRORART R2 Speaker',
        desc: '经典唱片歌词音箱，支持多种连接方式，复古外观搭配现代科技。',
        descEn: 'Classic vinyl lyrics speaker with multiple connectivity options, retro design meets modern tech.',
        image: 'images/MORRORART 唱片歌词音箱 R2.jpg',
        specs: { size: '30cm x 30cm', weight: '3.2kg', material: 'ABS+金属', power: '50W' },
        specsEn: { size: '30cm x 30cm', weight: '3.2kg', material: 'ABS+Metal', power: '50W' },
        features: ['歌词显示', '多设备连接', '复古设计', '立体声音效'],
        featuresEn: ['Lyrics Display', 'Multi-device', 'Retro Design', 'Stereo Sound'],
        material: '金属边框搭配ABS机身，经典黑胶造型，居家装饰首选。',
        materialEn: 'Metal frame with ABS body, classic vinyl design, perfect home decoration.'
    },
    {
        id: 7,
        name: 'MORRORART R1唱片音箱',
        nameEn: 'MORRORART R1 Speaker',
        desc: '入门级唱片歌词音箱，小巧精致，音质出众，性价比之选。',
        descEn: 'Entry-level vinyl lyrics speaker, compact and elegant, excellent sound quality, great value.',
        image: 'images/MORRORART 唱片歌词音箱R1.jpg',
        specs: { size: '22cm x 22cm', weight: '1.8kg', material: 'ABS', power: '30W' },
        specsEn: { size: '22cm x 22cm', weight: '1.8kg', material: 'ABS', power: '30W' },
        features: ['歌词显示', '蓝牙连接', '便携设计', '清晰音质'],
        featuresEn: ['Lyrics Display', 'Bluetooth', 'Portable', 'Clear Sound'],
        material: '轻质ABS材料，磨砂质感，时尚简约设计风格。',
        materialEn: 'Lightweight ABS material, matte finish, modern minimalist design.'
    },
    {
        id: 8,
        name: 'MeetCard数字名片',
        nameEn: 'MeetCard Digital Business Card',
        desc: 'NFC碰碰卡数字名片，支持智能定位防丢，小巧便携，商务人士必备。',
        descEn: 'NFC digital business card with smart tracking, compact and portable, essential for professionals.',
        image: 'images/bitmolab MeetCard数字名片NFC碰碰卡防丢卡片智能定位小巧便携.jpg',
        specs: { size: '86mm x 54mm', weight: '15g', material: '铝合金', battery: '可充电' },
        specsEn: { size: '86mm x 54mm', weight: '15g', material: 'Aluminum', battery: 'Rechargeable' },
        features: ['NFC碰碰传', '智能定位', '防丢提醒', '超长续航'],
        featuresEn: ['NFC Tap', 'Smart Tracking', 'Anti-lost', 'Long Battery'],
        material: '航空级铝合金材质，超薄设计，手感舒适。',
        materialEn: 'Aerospace-grade aluminum alloy, ultra-thin design, comfortable touch.'
    },
    {
        id: 9,
        name: 'iPhone 16 Pro手机壳',
        nameEn: 'iPhone 16 Pro Case',
        desc: '专为iPhone 16 Pro/Pro Max设计的保护壳，防摔耐用，时尚设计。',
        descEn: 'Protective case designed for iPhone 16 Pro/Pro Max, shockproof and stylish.',
        image: 'images/手机壳适用苹果iphone16 pro:pro max.jpg',
        specs: { size: '适配iPhone 16 Pro', weight: '45g', material: 'TPU+PC', color: '多色可选' },
        specsEn: { size: 'Fit iPhone 16 Pro', weight: '45g', material: 'TPU+PC', color: 'Multi-color' },
        features: ['防摔保护', '精准开孔', '轻薄设计', '多色可选'],
        featuresEn: ['Shockproof', 'Precise Cutouts', 'Slim Design', 'Multi-color'],
        material: 'TPU软边配合PC背板，柔韧性与坚固性兼具。',
        materialEn: 'TPU frame with PC back, perfect balance of flexibility and durability.'
    },
    {
        id: 10,
        name: '猫王灵感蓝牙耳机',
        nameEn: 'Maowang Wireless Earbuds',
        desc: '耳夹式无线运动耳机，气传导挂耳设计，开放式听音，运动无忧。',
        descEn: 'Clip-on wireless sports earbuds with air conduction, open-ear design for sports.',
        image: 'images/猫王灵感水滴蓝牙耳机耳夹式无线运动气传导挂耳开放式.jpg',
        specs: { size: '单耳12g', weight: '24g', material: '硅胶+ABS', battery: '6小时续航' },
        specsEn: { size: '12g/ear', weight: '24g', material: 'Silicone+ABS', battery: '6h Playtime' },
        features: ['耳夹式设计', '气传导', '防水防汗', '蓝牙5.3'],
        featuresEn: ['Clip-on', 'Air Conduction', 'Waterproof', 'Bluetooth 5.3'],
        material: '医用级硅胶耳挂，亲肤舒适，长时间佩戴无压力。',
        materialEn: 'Medical-grade silicone ear hooks, skin-friendly, comfortable for long wear.'
    },
    {
        id: 11,
        name: '电动搓澡仪',
        nameEn: 'Electric Bath Brush',
        desc: '智能电动搓澡仪，多种模式可选，深层清洁肌肤，享受SPA级沐浴体验。',
        descEn: 'Smart electric bath brush with multiple modes, deep skin cleansing, SPA-level bathing experience.',
        image: 'images/电动搓澡仪.jpg',
        specs: { size: '25cm x 8cm', weight: '300g', material: 'ABS+硅胶', power: 'USB充电' },
        specsEn: { size: '25cm x 8cm', weight: '300g', material: 'ABS+Silicone', power: 'USB Charging' },
        features: ['多档模式', '深层清洁', '超长手柄', 'IPX7防水'],
        featuresEn: ['Multi-mode', 'Deep Clean', 'Long Handle', 'IPX7 Waterproof'],
        material: '食品级硅胶刷头，柔软亲肤，ABS机身防水耐用。',
        materialEn: 'Food-grade silicone brush head, skin-friendly, ABS body waterproof and durable.'
    },
    {
        id: 12,
        name: 'ACM信用卡钱包',
        nameEn: 'ACM Credit Card Wallet',
        desc: '超薄金属信用卡钱包，RFID防盗刷设计，简约便携，商务必备。',
        descEn: 'Ultra-thin metal credit card wallet with RFID blocking, minimalist and portable.',
        image: 'images/美国ACM信用卡钱包.jpg',
        specs: { size: '86mm x 54mm', weight: '50g', material: '航空铝合金', capacity: '6-8张卡' },
        specsEn: { size: '86mm x 54mm', weight: '50g', material: 'Aero Aluminum', capacity: '6-8 Cards' },
        features: ['RFID防盗刷', '超薄设计', '快速取卡', '耐用材质'],
        featuresEn: ['RFID Blocking', 'Ultra-thin', 'Quick Access', 'Durable'],
        material: '航空级铝合金一体成型，磨砂阳极氧化处理，质感出众。',
        materialEn: 'Aerospace-grade aluminum alloy, matte anodized finish, premium quality.'
    }
];

// i18n Translations
const translations = {
    zh: {
        'nav.home': '首頁',
        'nav.products': '產品',
        'nav.about': '關於我們',
        'nav.contact': '聯繫我們',
        'hero.subtitle': '智能電子產品',
        'hero.tagline': '探索科技，創新生活',
        'hero.cta': '查看產品',
        'about.label': '關於我們',
        'about.title': '專業智能電子產品供應商',
        'about.desc1': '拓維智聯有限公司致力於為全球客戶提供創新、高品質的智能電子產品。我們的產品線涵蓋智能家居、AI機器人、音響設備等多個領域。',
        'about.desc2': '作為專業的電子產品供應商，我們堅持品質至上，不斷創新，為客戶帶來更智能、更便捷的生活體驗。',
        'about.stat1': '精選產品',
        'about.stat2': '品質保証',
        'about.stat3': '客戶服務',
        'products.label': '我們的產品',
        'products.title': '智能電子產品系列',
        'products.subtitle': '融合創新科技與優質設計，為您的生活帶來智慧升級',
        'features.label': '為什麼選擇我們',
        'features.title': '品質與創新的結合',
        'features.f1.title': '智能科技',
        'features.f1.desc': '先進AI技術，智能化體驗',
        'features.f2.title': '優質設計',
        'features.f2.desc': '時尚外觀，人體工學設計',
        'features.f3.title': '品質保証',
        'features.f3.desc': '嚴格品控，長期售後保障',
        'features.f4.title': '創新體驗',
        'features.f4.desc': '不斷突破，帶來全新體驗',
        'contact.label': '聯繫我們',
        'contact.title': '開啟智能生活',
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
        'product.badge': '智能電子產品',
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
        'product.wheels': '輪子',
        'product.battery': '電池',
        'product.power': '功率',
        'product.color': '顏色',
        'product.capacity': '容量'
    },
    en: {
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        'hero.subtitle': 'Smart Electronics',
        'hero.tagline': 'Explore Tech, Innovate Life',
        'hero.cta': 'View Products',
        'about.label': 'About Us',
        'about.title': 'Professional Smart Electronics Supplier',
        'about.desc1': 'Topway Smart Connect Co., Ltd. is committed to providing innovative, high-quality smart electronic products to customers worldwide. Our product line covers smart home, AI robots, audio equipment and more.',
        'about.desc2': 'As a professional electronics supplier, we uphold quality first, continuously innovate, and bring customers smarter and more convenient life experiences.',
        'about.stat1': 'Products',
        'about.stat2': 'Quality Guaranteed',
        'about.stat3': 'Customer Service',
        'products.label': 'Our Products',
        'products.title': 'Smart Electronics Collection',
        'products.subtitle': 'Combining innovative technology with quality design for smarter living',
        'features.label': 'Why Choose Us',
        'features.title': 'Quality Meets Innovation',
        'features.f1.title': 'Smart Technology',
        'features.f1.desc': 'Advanced AI technology for smart experience',
        'features.f2.title': 'Quality Design',
        'features.f2.desc': 'Stylish appearance, ergonomic design',
        'features.f3.title': 'Quality Assurance',
        'features.f3.desc': 'Strict quality control, long-term after-sales',
        'features.f4.title': 'Innovative Experience',
        'features.f4.desc': 'Continuous breakthroughs for new experiences',
        'contact.label': 'Contact Us',
        'contact.title': 'Start Smart Living',
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
        'product.badge': 'Smart Electronics',
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
        'product.wheels': 'Wheels',
        'product.battery': 'Battery',
        'product.power': 'Power',
        'product.color': 'Color',
        'product.capacity': 'Capacity'
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
        ? { size: '尺寸', weight: '重量', material: '材質', wheels: '輪子', battery: '電池', power: '功率', color: '顏色', capacity: '容量' }
        : { size: 'Size', weight: 'Weight', material: 'Material', wheels: 'Wheels', battery: 'Battery', power: 'Power', color: 'Color', capacity: 'Capacity' };

    specsContainer.innerHTML = Object.entries(specs).map(([key, value]) => `
        <div class="flex items-center space-x-3">
            <span class="text-dark-500 dark:text-dark-400 w-20">${specsLabels[key] || key}</span>
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
