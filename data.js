/* =========================================================
   HOME AI — Product Catalog (Handmade Perfumes)
   ========================================================= */
const PRODUCTS = [
  { id:1, cat:"perfume", icon:"perfume", hue:280,
    name_ar:"نسمة اللافندر (Lavender Breeze)", name_en:"Lavender Breeze",
    desc_ar:"عطر منزلي مصنوع يدوياً من اللافندر الطبيعي المهدئ للأعصاب، مثالي لغرف النوم.",
    desc_en:"Handmade home perfume with natural soothing lavender, perfect for bedrooms.",
    price:350, old_price:450, rating:4.9, reviews:120, badge:"الأكثر مبيعاً", stock:15, img: "perfume_1.png" },
  { id:2, cat:"perfume", icon:"perfume", hue:45,
    name_ar:"ليالي الياسمين (Jasmine Nights)", name_en:"Jasmine Nights",
    desc_ar:"مزيج فاخر من الياسمين المصري والفانيليا لإضفاء لمسة من الرقي على منزلك.",
    desc_en:"A luxurious blend of Egyptian jasmine and vanilla to add sophistication to your home.",
    price:420, old_price:null, rating:4.8, reviews:85, badge:"جديد", stock:10, img: "perfume_2.png" },
  { id:3, cat:"perfume", icon:"perfume", hue:20,
    name_ar:"العود المتبل (Spiced Oud)", name_en:"Spiced Oud",
    desc_ar:"عطر دافئ يجمع بين العود الأصيل والتوابل الشرقية، يعطي شعوراً بالفخامة والدفء.",
    desc_en:"A warm fragrance combining authentic oud and oriental spices, providing luxury and warmth.",
    price:550, old_price:650, rating:5.0, reviews:45, badge:"مميز", stock:8, img: "perfume_3.png" },
  { id:4, cat:"perfume", icon:"perfume", hue:160,
    name_ar:"انتعاش الحمضيات (Citrus Fresh)", name_en:"Citrus Fresh",
    desc_ar:"رائحة منعشة من الليمون والنعناع، مثالية للمطابخ والمساحات المفتوحة.",
    desc_en:"A refreshing scent of lemon and mint, perfect for kitchens and open spaces.",
    price:280, old_price:320, rating:4.7, reviews:62, badge:"تخفيض", stock:20, img: "perfume_4.png" },
];

function getProductName(p){ return getLang()==='ar' ? p.name_ar : p.name_en; }
function getProductDesc(p){ return getLang()==='ar' ? p.desc_ar : p.desc_en; }
function getCatLabel(cat){
  const map = { perfume:'عطور منزلية' };
  return t(map[cat] || cat);
}

/* ---- category icon glyphs (inline SVG paths) ---- */
const ICONS = {
  perfume:'<path d="M10 3h4v3h-4z"/><path d="M9 6h6l1 4H8l1-4Z"/><path d="M7 10h10v11H7z"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
};

function iconSvg(key){
  return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[key]||ICONS.perfume}</svg>`;
}

function catIconSvg(cat){
  return iconSvg('perfume');
}

function thumbGradient(hue){
  return `linear-gradient(135deg, hsl(${hue} 55% 22%), hsl(${hue+18} 65% 38%))`;
}
