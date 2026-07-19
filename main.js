/* =========================================================
   JS STORE — main.js
   Theme toggle, cart/wishlist storage, shared render helpers
   ========================================================= */

/* ---------- theme ---------- */
function getTheme(){ return localStorage.getItem('js_store_theme') || 'dark'; }
function setTheme(theme){
  localStorage.setItem('js_store_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-icon').forEach(el=>{
    el.innerHTML = theme === 'dark'
      ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
      : '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>';
  });
}
function toggleTheme(){ setTheme(getTheme()==='dark' ? 'light' : 'dark'); }

/* ---------- cart storage ---------- */
function getCart(){
  try{ return JSON.parse(localStorage.getItem('js_store_cart')) || []; }catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem('js_store_cart', JSON.stringify(cart));
  updateCartCount();
}
function addToCart(productId, qty=1){
  const cart = getCart();
  const existing = cart.find(i=>i.id===productId);
  if(existing){ existing.qty += qty; } else { cart.push({ id:productId, qty }); }
  saveCart(cart);
  showToast(t('toast_added'));
}
function removeFromCart(productId){
  saveCart(getCart().filter(i=>i.id!==productId));
}
function updateCartQty(productId, qty){
  const cart = getCart();
  const item = cart.find(i=>i.id===productId);
  if(item){ item.qty = Math.max(1, qty); saveCart(cart); }
}
function cartTotalCount(){
  return getCart().reduce((sum,i)=>sum+i.qty,0);
}
function updateCartCount(){
  const n = cartTotalCount();
  document.querySelectorAll('.cart-count').forEach(el=>{
    el.textContent = n;
    el.style.display = n>0 ? 'flex' : 'none';
  });
}

/* ---------- wishlist storage ---------- */
function getWishlist(){
  try{ return JSON.parse(localStorage.getItem('js_store_wishlist')) || []; }catch(e){ return []; }
}
function toggleWishlist(productId){
  let list = getWishlist();
  let added;
  if(list.includes(productId)){ list = list.filter(id=>id!==productId); added=false; }
  else { list.push(productId); added=true; }
  localStorage.setItem('js_store_wishlist', JSON.stringify(list));
  showToast(added ? t('toast_wish_add') : t('toast_wish_rm'));
  document.querySelectorAll(`.wish-btn[data-id="${productId}"]`).forEach(btn=>{
    btn.classList.toggle('active', added);
  });
  return added;
}

/* ---------- toast ---------- */
let toastTimer;
function showToast(msg){
  let toast = document.querySelector('.toast');
  if(!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M20 6 9 17l-5-5"/></svg><span></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('span').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.classList.remove('show'), 2600);
}

/* ---------- product card renderer (shared by home/shop/related) ---------- */
function badgeLabel(badge){
  if(badge==='new') return t('badge_new');
  if(badge==='sale') return t('badge_sale');
  if(badge==='hot') return t('badge_hot');
  return '';
}
function renderProductCard(p){
  const wished = getWishlist().includes(p.id);
  const oldPriceHtml = p.old_price ? `<span class="price-old">${p.old_price} EGP</span>` : '';
  const badgeHtml = p.badge ? `<span class="product-badge">${badgeLabel(p.badge)}</span>` : '';
  return `
  <div class="product-card" data-id="${p.id}" data-cat="${p.cat}" data-price="${p.price}" data-rating="${p.rating}">
    <a href="product.html?id=${p.id}" class="product-thumb" style="background:${thumbGradient(p.hue)}">
      ${badgeHtml}
      <button class="wish-btn ${wished?'active':''}" data-id="${p.id}" aria-label="wishlist" onclick="event.preventDefault(); toggleWishlist(${p.id})">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="${wished?'currentColor':'none'}"><path d="M12 21s-7-4.6-9.5-9C.8 8.6 2 5 5.5 4.2 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4.2 22 5 23.2 8.6 21.5 12 19 16.4 12 21 12 21Z"/></svg>
      </button>
      ${iconSvg(p.icon)}
    </a>
    <div class="product-info">
      <span class="product-cat">${getCatLabel(p.cat)}</span>
      <a href="product.html?id=${p.id}"><h3 class="product-title">${getProductName(p)}</h3></a>
      <div class="product-rating">
        <svg viewBox="0 0 24 24"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/></svg>
        ${p.rating} <span>(${p.reviews})</span>
      </div>
      <div class="product-foot">
        <div><span class="price">${p.price} EGP</span>${oldPriceHtml}</div>
        <button class="add-btn" aria-label="add" onclick="addToCart(${p.id})">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9.5" cy="20" r="1.2"/><circle cx="17.5" cy="20" r="1.2"/></svg>
        </button>
      </div>
    </div>
  </div>`;
}

/* ---------- mobile nav ---------- */
function openMobileNav(){
  document.querySelector('.mobile-panel')?.classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeMobileNav(){
  document.querySelector('.mobile-panel')?.classList.remove('open');
  document.body.classList.remove('no-scroll');
}
function toggleMobileNav(){
  const panel = document.querySelector('.mobile-panel');
  if(!panel) return;
  panel.classList.contains('open') ? closeMobileNav() : openMobileNav();
  document.body.classList.toggle('no-scroll', panel.classList.contains('open'));
}

/* ---------- init: theme + cart badge (runs on every page) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // تطبيق الثيم المحفوظ وتحديث أيقونة القمر/الشمس
  setTheme(getTheme());

  // ربط زر تبديل الثيم بحدث الضغط
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // تحديث عداد السلة عند تحميل أي صفحة
  updateCartCount();
});

// تشغيل وإغلاق قائمة الموبايل الجانبية — يعمل على كل صفحات الموقع
document.addEventListener('DOMContentLoaded', () => {
  const mobilePanel = document.querySelector('.mobile-panel');
  if(!mobilePanel) return;

  // أي زر بكلاس burger (سواء زر الفتح في الناف بار أو زر الإغلاق X داخل القائمة)
  // أو بكلاس mobile-panel-close يفتح/يغلق القائمة
  document.querySelectorAll('.burger, .mobile-panel-close').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      toggleMobileNav();
    });
  });

  // إغلاق القائمة عند الضغط على أي رابط داخلها
  mobilePanel.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', closeMobileNav);
  });

  // إغلاق القائمة عند الضغط في أي مكان خارجها
  document.addEventListener('click', (e) => {
    if (mobilePanel.classList.contains('open') && !mobilePanel.contains(e.target)) {
      closeMobileNav();
    }
  });

  // إغلاق القائمة تلقائياً لو الشاشة اتكبرت (رجوع لوضع الديسكتوب)
  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 768) closeMobileNav();
  });
});