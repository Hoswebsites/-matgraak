/* =========================================================
   JS STORE — i18n.js (نظام الترجمة الدولي للغات)
   ========================================================= */

// 1. قاموس الترجمة (العربية والإنجليزية)
const translations = {
  en: {
    // Nav & General
    top_notice: "✨ Special Offer: Free shipping on orders over 1000 EGP!",
    nav_home: "Home",
    nav_shop: "Shop",
    nav_about: "About Us",
    nav_contact: "Contact Us",
    rights: "All rights reserved.",
    made_by: "Designed with ❤️ by JS Store",
    breadcrumb_home: "Home",
    
    // Shop Page
    shop_title: "Our Collection",
    shop_desc: "Luxury & Quality",
    filter_title: "Filters",
    filter_cat: "Category",
    filter_all: "All",
    cat_electronics: "Electronics",
    cat_fashion: "Fashion",
    cat_home: "Home & Living",
    cat_beauty: "Beauty",
    filter_price: "Max Price",
    filter_rating: "Min Rating",
    filter_clear: "Clear Filters",
    search_ph: "Search products...",
    sort_pop: "Popularity",
    sort_new: "Newest",
    sort_low: "Price: Low to High",
    sort_high: "Price: High to Low",
    empty_shop: "No products match your search.",
    results_count: "products found",
    badge_new: "NEW",
    badge_sale: "SALE",
    badge_hot: "HOT",

    // Product Detail Page
    pd_stock: "In Stock",
    pd_qty: "Quantity:",
    add_to_cart: "Add to Cart",
    pd_sku: "SKU: ",
    pd_category: "Category: ",
    pd_availability: "Availability: ",
    tab_desc: "Description",
    tab_specs: "Specifications",
    tab_reviews: "Reviews",
    related_title: "Related Products",

    // Cart Page
    cart_title: "Shopping Cart",
    cart_desc: "Your selected items",
    th_product: "Product",
    th_price: "Price",
    th_qty: "Quantity",
    th_total: "Total",
    th_action: "Remove",
    continue_shopping: "Continue Shopping",
    order_summary: "Order Summary",
    sub_total: "Subtotal",
    shipping: "Shipping",
    shipping_free: "Free",
    discount: "Discount",
    grand_total: "Grand Total",
    coupon_ph: "Coupon Code (e.g. JS10)",
    coupon_btn: "Apply",
    checkout_btn: "Proceed to Checkout",
    cart_empty_t: "Your Cart is Empty",
    cart_empty_d: "Looks like you haven't added anything to your cart yet.",
    cart_empty_btn: "Shop Our Products",

    // Contact Page
    contact_title: "Contact Us",
    contact_desc: "We'd love to hear from you",
    info_phone: "Phone Support",
    info_email: "Email Address",
    info_address: "Our Location",
    info_hours: "Working Hours",
    contact_address: "Cairo, Egypt",
    hours_val: "Daily: 9:00 AM - 10:00 PM",
    contact_form_title: "Send Us a Message",
    label_name: "Full Name",
    ph_name: "Enter your name",
    label_email: "Email Address",
    ph_email: "Enter your email",
    label_subject: "Subject",
    ph_subject: "What is this about?",
    label_message: "Message",
    ph_message: "Write your message here...",
    btn_send: "Send Message",

    // About Page
    about_title: "Our Story",
    about_eyebrow: "Who We Are",
    about_p1: "JS Store was founded with a passion for delivering premium, high-quality products to our clients. We curate the best selections in fashion, electronics, and lifestyle.",
    about_p2: "Our commitment is to offer a seamless shopping experience, exceptional customer service, and fast delivery to your doorstep.",
    stat1_num: "50k+",
    stat1_lbl: "Happy Customers",
    stat2_num: "120+",
    stat2_lbl: "Premium Brands",
    stat3_num: "24/7",
    stat3_lbl: "Dedicated Support",
    values_title: "Our Core Values",
    val1_t: "Quality First",
    val1_d: "We only source original, premium grade products.",
    val2_t: "Fast Delivery",
    val2_d: "Your orders are shipped and delivered within 24-48 hours.",
    val3_t: "Customer Satisfaction",
    val3_d: "Our support team is always ready to assist you anytime.",
    hero_title: "Ready to Experience Luxury?",
    hero_desc: "Explore our handpicked collections and enjoy special limited-time discounts.",
    hero_cta_shop: "Start Shopping Now",

    // Toasts
    toast_added: "Product added to cart!",
    toast_removed: "Product removed from cart!",
    toast_wish_add: "Added to Wishlist!",
    toast_wish_rm: "Removed from Wishlist!",
    toast_coupon_ok: "Coupon applied successfully (10% Off)!",
    toast_coupon_bad: "Invalid coupon code!",

    // Home — Hero
    hero_eyebrow: "Premium Selection",
    hero_cta_about: "About Us",
    badge_authentic: "100% Authentic",
    badge_return: "Easy Returns",

    // Home — Categories
    cats_sub: "Browse",
    cats_title: "Shop by Category",
    cat_electronics_c: "Latest Gadgets",
    cat_fashion_c: "Trending Styles",
    cat_home_c: "Cozy Essentials",
    cat_beauty_c: "Glow & Care",

    // Home — Featured
    featured_sub: "Handpicked",
    featured_title: "Featured Products",
    view_all: "View All",

    // Home — Why choose us
    why_title: "Why Choose Us",
    why1_t: "Guaranteed Quality",
    why1_d: "Every product is checked for authenticity and premium quality.",
    why2_t: "Fast Shipping",
    why2_d: "Orders are processed and delivered quickly across the country.",
    why3_t: "Secure Packaging",
    why3_d: "Your items arrive safely with careful, protective packaging.",
    why4_t: "Dedicated Support",
    why4_d: "Our team is here to help you before and after every purchase.",

    // Home — Testimonials
    testi_title: "What Our Customers Say",

    // Home — Newsletter
    newsletter_title: "Join Our Newsletter",
    newsletter_desc: "Subscribe to get the latest offers and new arrivals straight to your inbox.",
    newsletter_ph: "Enter your email",
    newsletter_btn: "Subscribe",

    // Footer
    footer_about: "JS Store offers premium, curated products with fast delivery and dedicated customer care.",
    footer_links: "Quick Links",
    footer_help: "Help",
    footer_contact: "Contact",
    help_shipping: "Shipping Info",
    help_returns: "Returns & Exchanges",
    help_faq: "FAQ",
    help_track: "Track Order"
  },
  ar: {
    // Nav & General
    top_notice: "✨ عرض خاص: شحن مجاني للطلبات أكثر من 1000 جنيه!",
    nav_home: "الرئيسية",
    nav_shop: "المتجر",
    nav_about: "من نحن",
    nav_contact: "تواصل معنا",
    rights: "جميع الحقوق محفوظة.",
    made_by: "صنع بكل ❤️ بواسطة JS Store",
    breadcrumb_home: "الرئيسية",

    // Shop Page
    shop_title: "مجموعتنا المميزة",
    shop_desc: "الفخامة والجودة",
    filter_title: "تصفية المنتجات",
    filter_cat: "الأقسام",
    filter_all: "الكل",
    cat_electronics: "الإلكترونيات",
    cat_fashion: "الأزياء",
    cat_home: "المنزل والمعيشة",
    cat_beauty: "العناية والجمال",
    filter_price: "الحد الأقصى للسعر",
    filter_rating: "أقل تقييم",
    filter_clear: "مسح التصفية",
    search_ph: "ابحث عن المنتجات...",
    sort_pop: "الأكثر شعبية",
    sort_new: "الأحدث",
    sort_low: "السعر: من الأقل للأعلى",
    sort_high: "السعر: من الأعلى للأقل",
    empty_shop: "لا توجد منتجات تطابق بحثك.",
    results_count: "منتج تم العثور عليه",
    badge_new: "جديد",
    badge_sale: "خصم",
    badge_hot: "حار",

    // Product Detail Page
    pd_stock: "متوفر في المخزن",
    pd_qty: "الكمية:",
    add_to_cart: "إضافة إلى السلة",
    pd_sku: "رمز المنتج: ",
    pd_category: "القسم: ",
    pd_availability: "الحالة: ",
    tab_desc: "الوصف",
    tab_specs: "المواصفات",
    tab_reviews: "التقييمات",
    related_title: "منتجات ذات صلة",

    // Cart Page
    cart_title: "سلة التسوق",
    cart_desc: "المنتجات التي اخترتها",
    th_product: "المنتج",
    th_price: "السعر",
    th_qty: "الكمية",
    th_total: "الإجمالي",
    th_action: "حذف",
    continue_shopping: "مواصلة التسوق",
    order_summary: "ملخص الطلب",
    sub_total: "المجموع الفرعي",
    shipping: "الشحن",
    shipping_free: "مجاني",
    discount: "الخصم",
    grand_total: "الإجمالي الكلي",
    coupon_ph: "كود الخصم (مثال: JS10)",
    coupon_btn: "تطبيق",
    checkout_btn: "إتمام عملية الشراء",
    cart_empty_t: "سلة التسوق فارغة",
    cart_empty_d: "يبدو أنك لم تضف أي منتج إلى سلتك بعد.",
    cart_empty_btn: "تسوق منتجاتنا الآن",

    // Contact Page
    contact_title: "تواصل معنا",
    contact_desc: "يسعدنا دائماً الاستماع إليك",
    info_phone: "الدعم الفني",
    info_email: "البريد الإلكتروني",
    info_address: "موقعنا",
    info_hours: "أوقات العمل",
    contact_address: "القاهرة، مصر",
    hours_val: "يومياً: 9:00 ص - 10:00 م",
    contact_form_title: "أرسل لنا رسالة",
    label_name: "الاسم الكامل",
    ph_name: "أدخل اسمك هنا",
    label_email: "البريد الإلكتروني",
    ph_email: "أدخل بريدك الإلكتروني",
    label_subject: "الموضوع",
    ph_subject: "ما هو موضوع رسالتك؟",
    label_message: "الرسالة",
    ph_message: "اكتب رسالتك هنا...",
    btn_send: "إرسال الرسالة",

    // About Page
    about_title: "قصتنا",
    about_eyebrow: "من نحن",
    about_p1: "تأسس متجر JS Store بشغف لتقديم منتجات فاخرة وعالية الجودة لعملائنا. نحن نختار بعناية أفضل المنتجات في مجالات الأزياء، الإلكترونيات، واللايف ستايل.",
    about_p2: "التزامنا الأساسي هو تقديم تجربة تسوق سلسة وممتعة، خدمة عملاء استثنائية، وتوصيل سريع وموثوق مباشرة إلى باب منزلك.",
    stat1_num: "+50 ألف",
    stat1_lbl: "عميل سعيد",
    stat2_num: "+120",
    stat2_lbl: "علامة تجارية فاخرة",
    stat3_num: "24/7",
    stat3_lbl: "دعم فني متواصل",
    values_title: "قيمنا الأساسية",
    val1_t: "الجودة أولاً",
    val1_d: "نحن نوفر فقط المنتجات الأصلية وذات الجودة العالية.",
    val2_t: "شحن سريع",
    val2_d: "يتم تجهيز وشحن طلباتكم لتصلكم خلال 24 إلى 48 ساعة فقط.",
    val3_t: "رضا العملاء",
    val3_d: "فريق الدعم الفني لدينا جاهز لمساعدتكم والإجابة على استفساراتكم دائماً.",
    hero_title: "جاهز لتجربة الفخامة؟",
    hero_desc: "اكتشف مجموعتنا المختارة بعناية واستمتع بخصومات حصرية لفترة محدودة.",
    hero_cta_shop: "ابدأ التسوق الآن",

    // Toasts
    toast_added: "تمت إضافة المنتج إلى السلة!",
    toast_removed: "تم حذف المنتج من السلة!",
    toast_wish_add: "تمت الإضافة للمفضلة!",
    toast_wish_rm: "تم الحذف من المفضلة!",
    toast_coupon_ok: "تم تطبيق الكود بنجاح (خصم 10%)!",
    toast_coupon_bad: "كود الخصم غير صحيح!",

    // Home — Hero
    hero_eyebrow: "تشكيلة فاخرة",
    hero_cta_about: "من نحن",
    badge_authentic: "منتجات أصلية 100%",
    badge_return: "إرجاع سهل",

    // Home — Categories
    cats_sub: "تصفح",
    cats_title: "تسوق حسب القسم",
    cat_electronics_c: "أحدث الأجهزة",
    cat_fashion_c: "أحدث صيحات الموضة",
    cat_home_c: "أساسيات منزلية مريحة",
    cat_beauty_c: "عناية وجمال",

    // Home — Featured
    featured_sub: "مختارة بعناية",
    featured_title: "منتجات مميزة",
    view_all: "عرض الكل",

    // Home — Why choose us
    why_title: "لماذا تختارنا",
    why1_t: "جودة مضمونة",
    why1_d: "كل منتج يتم فحصه للتأكد من أصالته وجودته الفاخرة.",
    why2_t: "شحن سريع",
    why2_d: "يتم تجهيز الطلبات وتوصيلها بسرعة إلى جميع المحافظات.",
    why3_t: "تغليف آمن",
    why3_d: "تصلك منتجاتك بأمان مع تغليف فاخر وحماية كاملة.",
    why4_t: "دعم متواصل",
    why4_d: "فريقنا جاهز لمساعدتك قبل الشراء وبعده في أي وقت.",

    // Home — Testimonials
    testi_title: "آراء عملائنا",

    // Home — Newsletter
    newsletter_title: "انضم إلى نشرتنا البريدية",
    newsletter_desc: "اشترك ليصلك أحدث العروض والمنتجات الجديدة أولاً بأول.",
    newsletter_ph: "أدخل بريدك الإلكتروني",
    newsletter_btn: "اشتراك",

    // Footer
    footer_about: "JS Store يقدم منتجات فاخرة ومختارة بعناية مع توصيل سريع وخدمة عملاء متميزة.",
    footer_links: "روابط سريعة",
    footer_help: "المساعدة",
    footer_contact: "تواصل",
    help_shipping: "معلومات الشحن",
    help_returns: "الإرجاع والاستبدال",
    help_faq: "الأسئلة الشائعة",
    help_track: "تتبع الطلب"
  }
};

// 2. دوال مساعدة للحصول على اللغة الحالية
function getLang() {
  return localStorage.getItem('js_store_lang') || 'ar';
}

function setLang(lang) {
  localStorage.setItem('js_store_lang', lang);
  updateDOM();
}

// دالة لجلب نص الترجمة بناءً على المفتاح (Key) واللغة الحالية
function t(key) {
  const currentLang = getLang();
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

// 3. تحديث واجهة المستخدم بالكامل بناءً على اللغة المحددة
function updateDOM() {
  const lang = getLang();
  
  // تحديث سمات ترويسة HTML
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // تحديث زر تبديل اللغة (ليعرض دائمًا اسم اللغة البديلة التي سينتقل إليها)
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.textContent = lang === 'ar' ? 'EN' : 'AR';
  });

  // ترجمة العناصر التي تحتوي على data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) el.innerHTML = t(key);
  });

  // ترجمة الـ Placeholders في حقول الإدخال التي تحتوي على data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (key) el.setAttribute('placeholder', t(key));
  });

  // إطلاق حدث مخصص لإعلام السكريبتات الأخرى (مثل تفاصيل المنتج والمتجر) بحدوث تغيير في اللغة لإعادة الرندر
  window.dispatchEvent(new Event('langchange'));
}

// 4. تهيئة الحدث عند تحميل الصفحة وضبط زر اللغة
document.addEventListener('DOMContentLoaded', () => {
  updateDOM();

  // تفعيل تبديل اللغة عند الضغط على زر .lang-btn في الـ Navbar
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextLang = getLang() === 'ar' ? 'en' : 'ar';
      setLang(nextLang);
    });
  });
});