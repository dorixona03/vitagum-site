/* ═══════════ VITAGUM · app ═══════════ */
'use strict';

/* ---------- i18n ---------- */
const I18N = {
  ru: {
    'nav.products':'Продукты','nav.why':'Почему мы','nav.quality':'Качество','nav.contacts':'Контакты','nav.buy':'Uzum Market',
    'hero.eyebrow':'Сделано в Узбекистане · Халяль · Без желатина',
    'hero.t1':'Витамины,','hero.t2':'которые ребёнок','hero.t3':'просит сам',
    'hero.sub':'Мармеладные мишки на цитрусовом пектине — вкус, за которым дети приходят сами, и польза, за которую их выбирают родители.',
    'hero.cta1':'Смотреть продукты','hero.cta2':'Купить на Uzum',
    'why.eyebrow':'Почему VITAGUM','why.title':'Польза, в которую влюбляются с первой мишки',
    'why.c1t':'желатина в составе','why.c1d':'Только цитрусовый пектин — растительная основа, подходящая веганам и разрешённая детям с 2 лет. Мягкая желейная текстура без животных ингредиентов.',
    'why.c2t':'продуктов в линейке','why.c2d':'От Omega-3 до коллагена — формула под каждую задачу.',
    'why.c3t':'стран экспорта','why.c3d':'Центральная Азия, Россия, Турция и Ближний Восток.',
    'why.c4t':'халяль-сертификация','why.c4d':'Международный сертификат IHC на всю продукцию.',
    'why.c5t':'9001 и 22000','why.c5d':'Собственное производство SOFT VITAMIN BUSINESS: две смены, более 100 сотрудников и международные стандарты качества и пищевой безопасности.',
    'prod.eyebrow':'Каталог','prod.title':'Выбери свою мишку','prod.sub':'Нажми на карточку — и она приведёт тебя на Uzum Market.',
    'prod.f_all':'Все','prod.f_vitamin':'Vitamin','prod.f_organic':'Organic','prod.f_kids':'Детям',
    'prod.buy':'Купить на Uzum','prod.buy2':'1,1 кг',
    'q.eyebrow':'Качество и доверие','q.title':'Сертифицировано. Проверено. Подтверждено.',
    'q.sub':'Каждая партия VITAGUM выпускается по международным стандартам — документы открыты для каждого партнёра.',
    'q.halal':'Международный сертификат IHC','q.iso22':'Безопасность пищевой продукции','q.iso9':'Система менеджмента качества',
    'band.title':'Попробуйте — и мишек в доме станет больше','band.cta':'Магазин VITAGUM на Uzum',
    'f.about':'Мармеладные витамины и БАДы на цитрусовом пектине. Производство SOFT VITAMIN BUSINESS LLC, Узбекистан.',
    'f.contacts':'Контакты','f.buy':'Где купить','f.catalog':'Каталог продукции','f.docs':'Стандарты',
    'f.made':'Сделано с любовью в Узбекистане 🇺🇿',
    'marquee':['БЕЗ ЖЕЛАТИНА','ЦИТРУСОВЫЙ ПЕКТИН','ХАЛЯЛЬ','VEGAN','ISO 22000','БЕЗ ГМО','ДЕТЯМ С 2 ЛЕТ','СДЕЛАНО В УЗБЕКИСТАНЕ'],
  },
  uz: {
    'nav.products':'Mahsulotlar','nav.why':'Nega biz','nav.quality':'Sifat','nav.contacts':'Aloqa','nav.buy':'Uzum Market',
    'hero.eyebrow':"O'zbekistonda ishlab chiqarilgan · Halol · Jelatinsiz",
    'hero.t1':'Bolangiz','hero.t2':"o'zi so'raydigan",'hero.t3':'vitaminlar',
    'hero.sub':"Sitrus pektini asosidagi marmelad ayiqchalar — bolalar ta'mi uchun o'zi keladi, ota-onalar foydasi uchun tanlaydi.",
    'hero.cta1':"Mahsulotlarni ko'rish",'hero.cta2':'Uzum’da xarid qilish',
    'why.eyebrow':'Nega VITAGUM','why.title':'Birinchi ayiqchadanoq sevib qolinadigan foyda',
    'why.c1t':'tarkibida jelatin','why.c1d':"Faqat sitrus pektini — o'simlik asosi, veganlar uchun mos va 2 yoshdan bolalarga ruxsat etilgan. Hayvon ingredientlarisiz yumshoq jele teksturasi.",
    'why.c2t':'turdagi mahsulot','why.c2d':'Omega-3 dan kollagengacha — har bir vazifa uchun formula.',
    'why.c3t':'eksport davlatlari','why.c3d':"Markaziy Osiyo, Rossiya, Turkiya va Yaqin Sharq.",
    'why.c4t':'halol sertifikati','why.c4d':'Barcha mahsulotlar uchun xalqaro IHC sertifikati.',
    'why.c5t':'9001 va 22000','why.c5d':"SOFT VITAMIN BUSINESS'ning o'z ishlab chiqarishi: ikki smena, 100 dan ortiq xodim hamda xalqaro sifat va oziq-ovqat xavfsizligi standartlari.",
    'prod.eyebrow':'Katalog','prod.title':"O'z ayiqchangizni tanlang",'prod.sub':'Kartochkani bosing — u sizni Uzum Marketga olib boradi.',
    'prod.f_all':'Barchasi','prod.f_vitamin':'Vitamin','prod.f_organic':'Organic','prod.f_kids':'Bolalarga',
    'prod.buy':'Uzum’da xarid','prod.buy2':'1,1 kg',
    'q.eyebrow':'Sifat va ishonch','q.title':'Sertifikatlangan. Tekshirilgan. Tasdiqlangan.',
    'q.sub':"Har bir VITAGUM partiyasi xalqaro standartlar bo'yicha ishlab chiqariladi — hujjatlar har bir hamkor uchun ochiq.",
    'q.halal':'Xalqaro IHC sertifikati','q.iso22':'Oziq-ovqat xavfsizligi','q.iso9':'Sifat menejmenti tizimi',
    'band.title':"Sinab ko'ring — uyingizda ayiqchalar ko'payadi",'band.cta':"Uzum'dagi VITAGUM do'koni",
    'f.about':"Sitrus pektini asosidagi marmelad vitaminlar va BFQ. SOFT VITAMIN BUSINESS LLC ishlab chiqarishi, O'zbekiston.",
    'f.contacts':'Aloqa','f.buy':'Qayerdan olish mumkin','f.catalog':'Mahsulotlar katalogi','f.docs':'Standartlar',
    'f.made':"O'zbekistonda mehr bilan tayyorlangan 🇺🇿",
    'marquee':['JELATINSIZ','SITRUS PEKTINI','HALOL','VEGAN','ISO 22000','GMOSIZ','2 YOSHDAN','O‘ZBEKISTONDA ISHLAB CHIQARILGAN'],
  },
  en: {
    'nav.products':'Products','nav.why':'Why us','nav.quality':'Quality','nav.contacts':'Contacts','nav.buy':'Uzum Market',
    'hero.eyebrow':'Made in Uzbekistan · Halal · Gelatin-free',
    'hero.t1':'Vitamins','hero.t2':'your kids','hero.t3':'ask for',
    'hero.sub':'Citrus-pectin gummy bears — a taste kids come back for, and benefits parents choose them for.',
    'hero.cta1':'Browse products','hero.cta2':'Buy on Uzum',
    'why.eyebrow':'Why VITAGUM','why.title':'Goodness you fall for from the very first bear',
    'why.c1t':'gelatin inside','why.c1d':'Only citrus pectin — a plant base suitable for vegans and safe for kids from age 2. A soft jelly texture with zero animal ingredients.',
    'why.c2t':'products in range','why.c2d':'From Omega-3 to collagen — a formula for every goal.',
    'why.c3t':'export countries','why.c3d':'Central Asia, Russia, Türkiye and the Middle East.',
    'why.c4t':'halal certified','why.c4d':'International IHC certificate for the entire range.',
    'why.c5t':'9001 & 22000','why.c5d':'Own SOFT VITAMIN BUSINESS facility: two shifts, 100+ employees and international quality & food-safety standards.',
    'prod.eyebrow':'Catalogue','prod.title':'Pick your bear','prod.sub':'Tap a card — it will take you to Uzum Market.',
    'prod.f_all':'All','prod.f_vitamin':'Vitamin','prod.f_organic':'Organic','prod.f_kids':'For kids',
    'prod.buy':'Buy on Uzum','prod.buy2':'1.1 kg',
    'q.eyebrow':'Quality & trust','q.title':'Certified. Audited. Proven.',
    'q.sub':'Every VITAGUM batch is produced to international standards — the documents are open to every partner.',
    'q.halal':'International IHC certificate','q.iso22':'Food safety management','q.iso9':'Quality management system',
    'band.title':'Try once — and the bears will multiply at home','band.cta':'VITAGUM store on Uzum',
    'f.about':'Pectin-based gummy vitamins & supplements. Manufactured by SOFT VITAMIN BUSINESS LLC, Uzbekistan.',
    'f.contacts':'Contacts','f.buy':'Where to buy','f.catalog':'Product catalogue','f.docs':'Standards',
    'f.made':'Made with love in Uzbekistan 🇺🇿',
    'marquee':['GELATIN-FREE','CITRUS PECTIN','HALAL','VEGAN','ISO 22000','NON-GMO','KIDS 2+','MADE IN UZBEKISTAN'],
  },
};

/* ---------- products ---------- */
const SHOP = 'https://uzum.uz/ru/shop/vitagum';
const PRODUCTS = [
  { id:'omega', line:'vitamin', cat:['vitamin','kids'], color:'#f5821f', img:'omega',
    name:{ru:'Omega-3 DHA',uz:'Omega-3 DHA',en:'Omega-3 DHA'},
    desc:{ru:'DHA-формула для мозга, зрения и сердца. Умные мишки для растущих умов.',
          uz:"Miya, ko'rish va yurak uchun DHA formulasi. O'sayotgan aqllar uchun aqlli ayiqchalar.",
          en:'A DHA formula for brain, vision and heart. Smart bears for growing minds.'},
    tags:{ru:['Мозг','Зрение','Иммунитет'],uz:['Miya',"Ko'rish",'Immunitet'],en:['Brain','Vision','Immunity']},
    url:'https://uzum.uz/ru/product/vitagum-omega-3-dha-marmelad-bad-2142953' },
  { id:'magnesium', line:'vitamin', cat:['vitamin'], color:'#5ab1e8', img:'magnesium',
    name:{ru:'Магний + B6',uz:'Magniy + B6',en:'Magnesium + B6'},
    desc:{ru:'Спокойные нервы, крепкий сон и ровное настроение — в одной мишке.',
          uz:"Tinch asablar, mustahkam uyqu va barqaror kayfiyat — bitta ayiqchada.",
          en:'Calm nerves, sound sleep and a steady mood — all in one bear.'},
    tags:{ru:['Нервы','Сон','Антистресс'],uz:['Asab','Uyqu','Antistress'],en:['Nerves','Sleep','Anti-stress']},
    url:'https://uzum.uz/ru/product/vitagum-vitaminizirovannyj-marmelad-1465791' },
  { id:'selenium', line:'vitamin', cat:['vitamin'], color:'#4a7fc1', img:'selenium',
    name:{ru:'Selenium + C',uz:'Selen + C',en:'Selenium + C'},
    desc:{ru:'Селен и витамин C — антиоксидантный щит и поддержка щитовидной железы.',
          uz:'Selen va C vitamini — antioksidant qalqon va qalqonsimon bez uchun madad.',
          en:'Selenium and vitamin C — an antioxidant shield plus thyroid support.'},
    tags:{ru:['Антиоксидант','Щитовидка','Иммунитет'],uz:['Antioksidant','Qalqonsimon bez','Immunitet'],en:['Antioxidant','Thyroid','Immunity']},
    url:'https://uzum.uz/ru/product/vitagum-marmelad-s-1743589' },
  { id:'vitamishki', line:'vitamin', cat:['vitamin','kids'], color:'#ffc61a', img:'vitamishki',
    name:{ru:'Полезные ВитаМишки',uz:'Foydali VitaAyiqchalar',en:'Vitamishki Multi'},
    desc:{ru:'C + кальций + цинк: крепкие кости, зубы и иммунитет каждый день.',
          uz:'C + kalsiy + sink: har kuni mustahkam suyaklar, tishlar va immunitet.',
          en:'C + calcium + zinc: strong bones, teeth and immunity every day.'},
    tags:{ru:['Кости','Иммунитет','Zn+Ca+C'],uz:['Suyaklar','Immunitet','Zn+Ca+C'],en:['Bones','Immunity','Zn+Ca+C']},
    url:'https://uzum.uz/ru/product/vitagum-poleznye-vitamishki-marmelad-khalyal-371492',
    url2:'https://uzum.uz/ru/product/vitagum-poleznye-vitamishki-945063' },
  { id:'collagen', line:'organic', cat:['organic'], color:'#f2568c', img:'collagen',
    name:{ru:'Organic Kollagen',uz:'Organic Kollagen',en:'Organic Collagen'},
    desc:{ru:'Немецкий халяльный коллаген для кожи, волос, ногтей и суставов.',
          uz:'Teri, soch, tirnoq va bo\'g\'imlar uchun nemis halol kollageni.',
          en:'German halal collagen for skin, hair, nails and joints.'},
    tags:{ru:['Кожа','Суставы','Красота'],uz:['Teri',"Bo'g'imlar",'Chiroy'],en:['Skin','Joints','Beauty']},
    url:'https://uzum.uz/ru/product/vitagum-organic-s-kollagenom-marmelad-khalyal-927324' },
  { id:'detox', line:'organic', cat:['organic'], color:'#8a3fbf', img:'detox',
    name:{ru:'Organic Detox',uz:'Organic Detox',en:'Organic Detox'},
    desc:{ru:'Мягкое очищение организма и лёгкость — вкусный детокс без компромиссов.',
          uz:"Organizmni yumshoq tozalash va yengillik — kompromissiz mazali detoks.",
          en:'Gentle cleansing and lightness — a tasty detox without compromise.'},
    tags:{ru:['Детокс','Лёгкость','Тонус'],uz:['Detoks','Yengillik','Tonus'],en:['Detox','Lightness','Tone']},
    url:'https://uzum.uz/ru/product/vitagam-organik-detoks-marmelad-khalyal-927348' },
  { id:'blueberry', line:'organic', cat:['organic','kids'], color:'#ffd23f', img:'blueberry',
    name:{ru:'Organic Черника',uz:'Organic Chernika',en:'Organic Blueberry'},
    desc:{ru:'Экстракт черники — забота о зрении в эпоху экранов.',
          uz:"Chernika ekstrakti — ekranlar davrida ko'rish haqida g'amxo'rlik.",
          en:'Blueberry extract — eye care for the screen age.'},
    tags:{ru:['Зрение','Антиоксидант','Аппетит'],uz:["Ko'rish",'Antioksidant','Ishtaha'],en:['Vision','Antioxidant','Appetite']},
    url:'https://uzum.uz/ru/product/vitagum-organik-s-371376' },
  { id:'echinacea', line:'organic', cat:['organic','kids'], color:'#f06fa8', img:'echinacea',
    name:{ru:'Organic Эхинацея',uz:'Organic Exinatseya',en:'Organic Echinacea'},
    desc:{ru:'Природный защитник в сезон простуд — иммунитет в желейной форме.',
          uz:"Shamollash mavsumida tabiiy himoyachi — jele shaklidagi immunitet.",
          en:'A natural guardian for cold season — immunity in jelly form.'},
    tags:{ru:['Иммунитет','Простуда','Защита'],uz:['Immunitet','Shamollash','Himoya'],en:['Immunity','Colds','Defense']},
    url:'https://uzum.uz/ru/product/vitagum-marmelad-s-1743632' },
  { id:'aloe', line:'organic', cat:['organic'], color:'#8cc63e', img:'aloe',
    name:{ru:'Organic Алоэ Вера',uz:'Organic Aloe Vera',en:'Organic Aloe Vera'},
    desc:{ru:'Алоэ вера для пищеварения, иммунитета и баланса сахара в крови.',
          uz:"Hazm qilish, immunitet va qon shakar balansi uchun aloe vera.",
          en:'Aloe vera for digestion, immunity and blood-sugar balance.'},
    tags:{ru:['ЖКТ','Иммунитет','Баланс'],uz:['Hazm','Immunitet','Balans'],en:['Digestion','Immunity','Balance']},
    url:'https://uzum.uz/ru/product/vitagum-organik-s-aloe-vera-marmelad-371415' },
  { id:'pomegranate', line:'organic', cat:['organic'], color:'#c48fd9', img:'pomegranate',
    name:{ru:'Organic Гранат',uz:'Organic Anor',en:'Organic Pomegranate'},
    desc:{ru:'Гранатовый сок и букет витаминов — энергия для сердца и сосудов.',
          uz:'Anor sharbati va vitaminlar guldastasi — yurak va tomirlar uchun energiya.',
          en:'Pomegranate juice and a bouquet of vitamins — energy for heart and vessels.'},
    tags:{ru:['Сердце','Витамины','Энергия'],uz:['Yurak','Vitaminlar','Energiya'],en:['Heart','Vitamins','Energy']},
    url:'https://uzum.uz/ru/product/vitagum-organik-s-371460' },
  { id:'blackseed', line:'organic', cat:['organic'], color:'#7ea8d8', img:'blackseed',
    name:{ru:'Organic Чёрный тмин',uz:'Organic Qora sedana',en:'Organic Black Seed'},
    desc:{ru:'Сила чёрного тмина: иммунитет, мягкость к аллергии и здоровое давление.',
          uz:'Qora sedana kuchi: immunitet, allergiyaga yumshoqlik va sog\'lom bosim.',
          en:'The power of black seed: immunity, allergy relief and healthy pressure.'},
    tags:{ru:['Иммунитет','Аллергия','Давление'],uz:['Immunitet','Allergiya','Bosim'],en:['Immunity','Allergy','Pressure']},
    url:SHOP },
  { id:'sweetballs', line:'vitamin', cat:['vitamin','kids'], color:'#ffdd2d', img:'sweetballs',
    name:{ru:'Sweet Balls + C',uz:'Sweet Balls + C',en:'Sweet Balls + C'},
    desc:{ru:'Хрустящие шоколадные шарики с витамином C — умное лакомство в кармане.',
          uz:'C vitaminli xrustlaydigan shokoladli sharchalar — cho\'ntakdagi aqlli shirinlik.',
          en:'Crunchy chocolate balls with vitamin C — a smart treat for your pocket.'},
    tags:{ru:['Витамин C','Драже','В дорогу'],uz:['C vitamini','Draje','Safarga'],en:['Vitamin C','Dragee','On the go']},
    url:SHOP },
];

let LANG = localStorage.getItem('vg-lang') ||
  ({uz:'uz',en:'en'}[ (navigator.language||'ru').slice(0,2) ] || 'ru');

/* ---------- render products ---------- */
const grid = document.getElementById('products-grid');
function renderProducts(){
  const t = I18N[LANG];
  grid.innerHTML = PRODUCTS.map(p=>`
    <article class="p-card" data-cat="${p.cat.join(' ')}" data-url="${p.url}" style="--pc:${p.color}">
      <div class="p-card__halo"></div>
      <p class="p-card__line">${p.line==='organic'?'Organic line':'Vitamin line'}</p>
      <div class="p-card__imgwrap">
        <img class="main" src="assets/products/${p.img}.webp" alt="VITAGUM ${p.name[LANG]}" loading="lazy">
        <img class="alt" src="assets/products/${p.img}-angle.webp" alt="" loading="lazy" aria-hidden="true">
      </div>
      <h3 class="p-card__name">${p.name[LANG]}</h3>
      <p class="p-card__desc">${p.desc[LANG]}</p>
      <div class="p-card__tags">${p.tags[LANG].map(x=>`<span>${x}</span>`).join('')}</div>
      <div class="p-card__buy">
        <a class="btn" href="${p.url}" target="_blank" rel="noopener" data-buy>
          <span class="uzum-dot"></span>${t['prod.buy']}
        </a>
        ${p.url2?`<a class="btn" style="flex:0 0 auto" href="${p.url2}" target="_blank" rel="noopener" data-buy>${t['prod.buy2']}</a>`:''}
      </div>
    </article>`).join('');
  bindCards();
  applyFilter(currentFilter);
}

/* jelly click + candy burst, then follow link */
function bindCards(){
  grid.querySelectorAll('.p-card').forEach(card=>{
    // tilt
    card.addEventListener('pointermove', e=>{
      if(matchMedia('(hover:none)').matches) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width - .5, y = (e.clientY-r.top)/r.height - .5;
      card.style.transform = `rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', ()=>{ card.style.transform=''; });

    const go = (url)=>{
      card.classList.remove('is-jelly'); void card.offsetWidth;
      card.classList.add('is-jelly');
      burst(card);
      setTimeout(()=>window.open(url,'_blank','noopener'), 520);
    };
    card.addEventListener('click', e=>{
      const a = e.target.closest('a[data-buy]');
      if(a){ e.preventDefault(); go(a.href); return; }
      go(card.dataset.url);
    });
  });
}
function burst(card){
  const colors = [card.style.getPropertyValue('--pc')||'#ffb42d','#ff4f7e','#9ee937','#4fc7ff','#ffd23f'];
  const wrap = card.querySelector('.p-card__imgwrap');
  for(let i=0;i<14;i++){
    const b = document.createElement('span');
    b.className='burst';
    const size = 6+Math.random()*10;
    b.style.cssText = `width:${size}px;height:${size}px;background:${colors[i%colors.length]}`;
    wrap.appendChild(b);
    const ang = Math.random()*Math.PI*2, dist = 60+Math.random()*90;
    b.animate([
      {transform:'translate(-50%,-50%) scale(1)',opacity:1},
      {transform:`translate(${Math.cos(ang)*dist-50}%, ${Math.sin(ang)*dist-50}%) translate(${Math.cos(ang)*dist}px, ${Math.sin(ang)*dist}px) scale(.2)`,opacity:0}
    ],{duration:600+Math.random()*300,easing:'cubic-bezier(.16,.84,.44,1)'}).onfinish=()=>b.remove();
  }
}

/* ---------- filters ---------- */
let currentFilter='all';
function applyFilter(f){
  currentFilter=f;
  grid.querySelectorAll('.p-card').forEach(c=>{
    const show = f==='all' || c.dataset.cat.split(' ').includes(f);
    c.classList.toggle('is-hidden', !show);
  });
  if(window.ScrollTrigger) ScrollTrigger.refresh();
}
document.getElementById('filters').addEventListener('click', e=>{
  const btn = e.target.closest('.chip'); if(!btn) return;
  document.querySelectorAll('#filters .chip').forEach(c=>c.classList.toggle('is-active', c===btn));
  applyFilter(btn.dataset.filter);
});

/* ---------- i18n apply ---------- */
function applyLang(){
  const t = I18N[LANG];
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('#lang button').forEach(b=>b.classList.toggle('is-active', b.dataset.lang===LANG));
  // marquee
  const track = document.getElementById('marquee-track');
  const items = t.marquee.map(x=>`<span>${x}<b>●</b></span>`).join('');
  track.innerHTML = items+items;
  renderProducts();
}
document.getElementById('lang').addEventListener('click', e=>{
  const b = e.target.closest('button'); if(!b) return;
  LANG = b.dataset.lang; localStorage.setItem('vg-lang', LANG);
  applyLang();
});

/* ---------- nav ---------- */
const nav = document.getElementById('nav');
addEventListener('scroll', ()=>nav.classList.toggle('is-scrolled', scrollY>40), {passive:true});
document.getElementById('burger').addEventListener('click', ()=>nav.classList.toggle('menu-open'));
nav.querySelectorAll('.nav__links a').forEach(a=>a.addEventListener('click', ()=>nav.classList.remove('menu-open')));
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- GSAP ---------- */
applyLang();
if(window.gsap){
  gsap.registerPlugin(ScrollTrigger);

  // hero intro
  gsap.to('.hero__line > span', {y:0, duration:1.1, ease:'power4.out', stagger:.12, delay:.15, startAt:{y:'110%'}});
  gsap.to('.hero .reveal', {opacity:1, y:0, duration:1, ease:'power3.out', stagger:.14, delay:.55});

  // sections reveal
  document.querySelectorAll('.section__head, .why-card, .cert, .band__inner, .footer__grid').forEach(el=>{
    gsap.from(el, {
      opacity:0, y:46, duration:.9, ease:'power3.out',
      scrollTrigger:{trigger:el, start:'top 88%'}
    });
  });
  gsap.utils.toArray('.p-card').forEach((el,i)=>{
    gsap.from(el, {opacity:0, y:50, duration:.7, ease:'power3.out', delay:(i%4)*.07,
      scrollTrigger:{trigger:el, start:'top 92%'}});
  });

  // counters
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target = +el.dataset.count;
    ScrollTrigger.create({
      trigger:el, start:'top 85%', once:true,
      onEnter:()=>gsap.to({v:0},{v:target, duration:1.4, ease:'power2.out',
        onUpdate:function(){ el.textContent = Math.round(this.targets()[0].v); }})
    });
  });

  // hero parallax out
  gsap.to('.hero__inner', {opacity:0, y:-80, ease:'none',
    scrollTrigger:{trigger:'.hero', start:'60% top', end:'bottom top', scrub:true}});
}else{
  document.querySelectorAll('.reveal').forEach(el=>{el.style.opacity=1;el.style.transform='none'});
  document.querySelectorAll('.hero__line > span').forEach(el=>el.style.transform='none');
}
