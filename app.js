'use strict';

/* ---------- Данные: только факты из портфолио (PDF) ---------- */

const IMG = 'img/full/';
const THUMB = 'img/thumb/';

const img = (name, caption) => ({ src: name, caption: caption || '' });

/* Избранный проект: ЖК на Молодогвардейской */
const FEATURED = {
  title: 'ЖК на Молодогвардейской',
  subtitle: 'Многоквартирный жилой дом с подземной автостоянкой · Москва, ЗАО, район Кунцево',
  role: 'ГАП',
  stage: 'АГК-доработка, разработка стадии П',
  facts: [
    { value: '32', unit: 'этажа' },
    { value: '618', unit: 'квартир' },
    { value: '329', unit: 'машино-мест' },
    { value: '2,09', unit: 'га участка' },
  ],
  groups: [
    {
      title: 'Архитектурная визуализация',
      images: [
        img('mg-p16-1.jpg', 'Перспективное изображение № 1'),
        img('mg-p17-1.jpg', 'Перспективное изображение № 2'),
        img('mg-p17-2.jpg', 'Перспективное изображение № 3'),
        img('mg-p18-1.jpg', 'Перспективное изображение № 4'),
        img('mg-p18-2.jpg', 'Перспективное изображение № 5'),
        img('mg-p12-1.jpg', 'Перспективное изображение № 6'),
      ],
    },
    {
      title: 'Фасады и материалы',
      images: [
        img('mg-page28.webp', 'Схема фасада с указанием материалов'),
        img('mg-page29.webp', 'Схема фасада с указанием материалов'),
      ],
    },
    {
      title: 'Архитектурно-художественное освещение',
      images: [img('mg-p24-1.jpg', 'Освещение фасадов здания')],
    },
    {
      title: 'Генплан и транспортная организация',
      images: [
        img('mg-page31.webp', 'Схема планировочной организации участка (СПЗУ)'),
        img('mg-page32.webp', 'Схема транспортной организации, две очереди строительства'),
      ],
    },
    {
      title: 'Контекст',
      images: [
        img('mg-p04-1.jpg', 'Фотомонтаж в существующей застройке'),
      ],
    },
  ],
};

const CATS = [
  { id: 'all', label: 'Все' },
  { id: 'residential', label: 'Жилые' },
  { id: 'public', label: 'Общественные' },
  { id: 'interior', label: 'Интерьеры' },
  { id: 'landscape', label: 'Благоустройство' },
];

const PROJECTS = [
  {
    id: 'trinklera', cat: 'residential',
    title: 'Жилой дом с торговыми помещениями',
    place: 'ул. Тринклера, Харьков',
    desc: 'Многоэтажный жилой дом со встроено-пристроенными помещениями торговли и подземной стоянкой.',
    stage: '', images: [img('pf-p03-1.jpg'), img('pf-p03-2.jpg')],
  },
  {
    id: 'moscow-rd', cat: 'residential',
    title: 'Рабочая документация АР · жилые комплексы Москвы',
    place: 'ул. Иловайская, вл. 2Б и ул. Мосфильмовская, Москва',
    desc: 'Кладочный план 1 этажа, план подземного этажа на отм. −9,900 и разрез 2-2. Корпуса 13.1–13.4 с подземной автостоянкой на 188 машино-мест. ООО «Зак Девелопмент», 2022.',
    stage: 'Стадия Р', role: 'Разработка листов АР',
    images: [img('pf-page04.webp', 'Кладочный план 1 этажа на отм. +0,260'), img('pf-page05.webp', 'Кладочный план 1 этажа — фрагмент'), img('pf-page06.webp', 'Разрез 2-2')],
  },
  {
    id: 'ahsarovа', cat: 'public',
    title: 'Офисный центр',
    place: 'ул. Ахсарова, 4/6А, Харьков',
    desc: 'Реконструкция нежилых помещений с надстройкой и пристройкой.',
    stage: '', images: [img('pf-p07-1.jpg'), img('pf-p07-2.jpg'), img('pf-p07-3.jpg')],
  },
  {
    id: 'derevyanko', cat: 'residential',
    title: 'Жилой комплекс с объектами инфраструктуры',
    place: 'ул. Деревянко — ул. Сумгаитская, Харьков',
    desc: 'Концепция с анализом территории.',
    stage: 'Концепция', images: [img('pf-p08-1.jpg')],
  },
  {
    id: 'trc-kvitki', cat: 'public',
    title: 'Торгово-развлекательный центр',
    place: 'ул. Квитки Основьяненко, Харьков',
    desc: 'Эскизный проект.',
    stage: 'Эскизный проект', images: [img('pf-p09-1.jpg')],
  },
  {
    id: 'artema', cat: 'public',
    title: 'Торгово-офисный центр',
    place: 'ул. Артёма, Харьков',
    desc: 'Проект от стадии П до реализации; на слайдах — визуализация и реализация.',
    stage: 'Стадии П, Р · авторский надзор', images: [img('pf-p10-1.jpg'), img('pf-p10-2.jpg'), img('pf-p10-3.jpg'), img('pf-p10-4.jpg')],
  },
  {
    id: 'lermontova', cat: 'residential',
    title: 'Жилой дом · реконструкция',
    place: 'ул. Лермонтова, Ирпень',
    desc: 'Реконструкция жилого дома.',
    stage: 'Стадии ЭП, Р · авторский надзор', images: [img('pf-p11-1.jpg'), img('pf-p11-2.jpg')],
  },
  {
    id: 'lesnaya', cat: 'residential',
    title: 'Жилой дом, первая очередь',
    place: 'ул. Лесная, Ирпень',
    desc: 'Первая очередь жилого дома.',
    stage: 'Стадия ЭП', images: [img('pf-p12-1.jpg')],
  },
  {
    id: 'kompas', cat: 'public',
    title: 'Развлекательный комплекс «Компас»',
    place: 'ул. Академика Павлова, 150, Харьков',
    desc: 'Фасады развлекательного комплекса.',
    stage: 'ЭП, РП', images: [img('pf-p13-1.jpg'), img('pf-p13-2.jpg'), img('pf-p13-3.jpg'), img('pf-p13-4.jpg'), img('pf-p13-5.jpg')],
  },
  {
    id: 'kompas-int', cat: 'interior',
    title: 'Интерьер ресторана «Компас»',
    place: 'ул. Академика Павлова, 150, Харьков',
    desc: 'Дизайн-проект интерьера ресторана.',
    stage: 'Дизайн-проект · авторский надзор',
    images: [img('pf-p14-1.jpg'), img('pf-p14-2.jpg'), img('pf-p14-3.jpg'), img('pf-p14-4.jpg'), img('pf-p14-5.jpg'), img('pf-p14-6.jpg')],
  },
  {
    id: 'radyanska', cat: 'residential',
    title: 'Жилой дом',
    place: 'ул. Радянская, Ирпень',
    desc: 'Разработка всех стадий проекта, авторский надзор. На слайдах — визуализация и реализация.',
    stage: 'Все стадии · авторский надзор · реализация',
    images: [img('pf-p15-1.jpg'), img('pf-p15-2.jpg'), img('pf-p15-3.jpg'), img('pf-p15-4.jpg')],
  },
  {
    id: 'matrosova', cat: 'residential',
    title: 'Жилой дом',
    place: 'ул. Матросова, Ирпень',
    desc: 'Жилой дом в Киевской области.',
    stage: 'Стадии П, Р', images: [img('pf-p16-1.jpg'), img('pf-p16-2.jpg'), img('pf-p16-3.jpg')],
  },
  {
    id: 'shevchenka', cat: 'residential',
    title: 'Жилой дом',
    place: 'ул. Шевченка, Вышгород',
    desc: 'Жилой дом в Киевской области.',
    stage: 'Концепция', images: [img('pf-p17-1.jpg'), img('pf-p17-2.jpg'), img('pf-p17-3.jpg'), img('pf-p17-4.jpg')],
  },
  {
    id: 'bucha', cat: 'residential',
    title: 'Жилой дом',
    place: 'г. Буча, Киевская область',
    desc: 'Жилой дом, полный цикл проектирования.',
    stage: 'Стадии П, Р · авторский надзор',
    images: [img('pf-p18-1.jpg'), img('pf-p18-2.jpg'), img('pf-p18-3.jpg'), img('pf-p18-4.jpg'), img('pf-p18-5.jpg')],
  },
  {
    id: 'karlamarksa', cat: 'residential',
    title: 'Жилой дом',
    place: 'ул. Карла Маркса, Ирпень',
    desc: 'Жилой дом в Киевской области.',
    stage: 'Эскиз · стадии П, Р', images: [img('pf-p19-1.jpg')],
  },
  {
    id: 'kazarma', cat: 'residential',
    title: 'Казарма из ЛСТК',
    place: 'Россия',
    desc: 'Казарма из лёгких стальных тонкостенных конструкций — полный цикл документации.',
    stage: 'Стадии ЭП, П, Р', images: [img('pf-p20-1.jpg')],
  },
  {
    id: 'mfk', cat: 'public',
    title: 'Многофункциональный военный комплекс',
    place: 'Россия',
    desc: 'Многофункциональный военный комплекс — от концепта до рабочей документации. Экспертиза Мин. обороны РФ.',
    stage: 'Концепт · стадии П, Р · экспертиза Мин. обороны РФ', images: [img('pf-p21-1.jpg'), img('pf-p21-2.jpg')],
  },
  {
    id: 'tc-holodnaya', cat: 'public',
    title: 'Торговый центр',
    place: 'М. Холодная гора, Харьков',
    desc: 'Торговый центр.',
    stage: 'Концепция', images: [img('pf-p22-1.jpg'), img('pf-p22-2.jpg')],
  },
  {
    id: 'tc-kiev', cat: 'public',
    title: 'Торговый центр',
    place: 'Киев',
    desc: 'Торговый центр.',
    stage: 'Стадии П, Р', images: [img('pf-p23-1.jpg'), img('pf-p23-2.jpg')],
  },
  {
    id: 'kharkiv-zd', cat: 'residential',
    title: 'Жилой дом',
    place: 'Харьков',
    desc: 'Жилой дом.',
    stage: 'Стадии П, Р · авторский надзор', images: [img('pf-p24-1.jpg'), img('pf-p24-2.jpg')],
  },
  {
    id: 'lvovskaya', cat: 'residential',
    title: 'Жилой дом',
    place: 'ул. Львовская, Ирпень',
    desc: 'На слайдах — проект и реализация.',
    stage: 'Стадия Р · авторский надзор · реализация',
    images: [img('pf-p25-1.jpg'), img('pf-p25-2.jpg'), img('pf-p25-3.jpg'), img('pf-p25-4.jpg'), img('pf-p25-5.jpg')],
  },
  {
    id: 'kharkiv-rekon', cat: 'residential',
    title: 'Жилой дом · реконструкция',
    place: 'Харьков',
    desc: 'Реконструкция жилого дома.',
    stage: 'Стадия П', images: [img('pf-p26-1.jpg'), img('pf-p26-2.jpg'), img('pf-p26-3.jpg'), img('pf-p26-4.jpg')],
  },
  {
    id: 'int-kv-irpin', cat: 'interior',
    title: 'Интерьер квартиры',
    place: 'Ирпень, Киевская область',
    desc: 'Дизайн-проект квартиры.',
    stage: '', images: [img('pf-p27-1.jpg'), img('pf-p27-2.jpg'), img('pf-p27-3.jpg'), img('pf-p27-4.jpg')],
  },
  {
    id: 'int-kv-irpin2', cat: 'interior',
    title: 'Интерьер квартиры',
    place: 'Ирпень, Киевская область',
    desc: 'Дизайн-проект квартиры.',
    stage: '', images: [img('pf-p28-1.jpg'), img('pf-p28-2.jpg'), img('pf-p28-3.jpg'), img('pf-p28-4.jpg')],
  },
  {
    id: 'int-rooms', cat: 'interior',
    title: 'Интерьеры комнат',
    place: 'Харьков',
    desc: 'Дизайн интерьеров жилых комнат.',
    stage: '', images: [img('pf-p29-1.jpg'), img('pf-p29-2.jpg'), img('pf-p30-1.jpg'), img('pf-p31-1.jpg'), img('pf-p31-2.jpg')],
  },
  {
    id: 'int-holl', cat: 'interior',
    title: 'Интерьер холла и переговорной',
    place: '«Росатом» · АО «ФЦНИВТ «СНПО «Элерон», Москва',
    desc: 'Интерьер холла и переговорной — «Росатом», Элерон.',
    stage: '', images: [img('pf-p32-1.jpg'), img('pf-p32-2.jpg'), img('pf-p32-3.jpg'), img('pf-p32-4.jpg')],
  },
  {
    id: 'skver-mira', cat: 'landscape',
    title: 'Сквер «Мира»',
    place: 'Ирпень, Киевская область',
    desc: 'Благоустройство общественного сквера.',
    stage: '', images: [img('pf-p33-1.jpg')],
  },
  {
    id: 'dvorik-yalta', cat: 'landscape',
    title: 'Благоустройство частного дворика',
    place: 'Ялта',
    desc: 'Ландшафтное решение частного двора.',
    stage: '', images: [img('pf-p34-1.jpg')],
  },
];

/* ---------- Рендер ---------- */

const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

function renderFeatured() {
  const root = $('#featured-gallery');
  FEATURED.groups.forEach((g) => {
    const sec = document.createElement('section');
    sec.className = 'fg-group reveal';
    const h = document.createElement('h3');
    h.className = 'fg-title';
    h.textContent = g.title;
    sec.appendChild(h);
    const grid = document.createElement('div');
    grid.className = 'fg-grid';
    g.images.forEach((im) => {
      const fig = document.createElement('figure');
      fig.className = 'fg-item';
      fig.tabIndex = 0;
      const isWide = /page|p20|p21|p22/.test(im.src);
      if (isWide) fig.classList.add('wide');
      fig.innerHTML =
        '<img loading="lazy" alt="' + escapeHtml(im.caption || FEATURED.title) + '" ' +
        'src="' + THUMB + im.src.replace(/\.webp$/, '.jpg') + '" ' +
        'srcset="' + IMG + im.src + ' 1600w, ' + THUMB + im.src.replace(/\.(webp|jpg)$/, '.jpg') + ' 800w" sizes="(max-width: 900px) 92vw, 46vw">';
      if (im.caption) {
        const fc = document.createElement('figcaption');
        fc.textContent = im.caption;
        fig.appendChild(fc);
      }
      fig.addEventListener('click', () => openLightbox(FEATURED.groups.flatMap((x) => x.images), g.images.indexOf(im) + countBefore(FEATURED.groups, g), FEATURED.title));
      fig.addEventListener('keydown', (e) => { if (e.key === 'Enter') fig.click(); });
      grid.appendChild(fig);
    });
    sec.appendChild(grid);
    root.appendChild(sec);
  });
}

function countBefore(groups, g) {
  let n = 0;
  for (const x of groups) { if (x === g) break; n += x.images.length; }
  return n;
}

function renderFilters() {
  const bar = $('#filters');
  CATS.forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'chip' + (i === 0 ? ' active' : '');
    b.textContent = c.label;
    b.dataset.cat = c.id;
    b.addEventListener('click', () => {
      $$('.chip', bar).forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      renderGrid(c.id);
    });
    bar.appendChild(b);
  });
}

function renderGrid(cat) {
  const grid = $('#grid');
  grid.innerHTML = '';
  const list = PROJECTS.filter((p) => cat === 'all' || p.cat === cat);
  list.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'card reveal';
    const cover = p.images[0].src.replace(/\.webp$/, '.jpg');
    const coverFull = p.images[0].src;
    card.innerHTML =
      '<div class="card-img"><img loading="lazy" alt="' + escapeHtml(p.title) + '" src="' + THUMB + cover + '" srcset="' + IMG + coverFull + ' 1600w, ' + THUMB + cover + ' 800w" sizes="(max-width: 640px) 92vw, (max-width: 1100px) 44vw, 30vw"></div>' +
      '<div class="card-body"><h3>' + escapeHtml(p.title) + '</h3>' +
      '<p class="place">' + escapeHtml(p.place) + '</p>' +
      (p.stage ? '<p class="stage">' + escapeHtml(p.stage) + '</p>' : '') + '</div>';
    card.addEventListener('click', () => openProject(p));
    grid.appendChild(card);
  });
}

function openProject(p) {
  $('#lb-p-title').textContent = p.title;
  $('#lb-p-place').textContent = p.place;
  $('#lb-p-desc').textContent = p.desc || '';
  $('#lb-p-stage').textContent = (p.stage ? p.stage : '') + (p.role ? ' · ' + p.role : '');
  openLightbox(p.images, 0, p.title, true);
}

/* ---------- Лайтбокс ---------- */

let lbImages = [], lbIndex = 0, lbProjectMode = false;

function openLightbox(images, index, title, projectMode) {
  lbImages = images; lbIndex = index; lbProjectMode = !!projectMode;
  $('#lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
  $('#lb-title').textContent = title || '';
  renderLbInfo();
  showLbImage();
}

function renderLbInfo() {
  const info = $('#lb-caption');
  const proj = $('#lb-project');
  if (lbProjectMode) {
    info.style.display = 'none';
    proj.style.display = '';
  } else {
    info.style.display = '';
    proj.style.display = 'none';
    info.textContent = lbImages[lbIndex].caption || '';
  }
  $('#lb-count').textContent = (lbIndex + 1) + ' / ' + lbImages.length;
}

function showLbImage() {
  const im = lbImages[lbIndex];
  $('#lb-img').src = IMG + im.src;
  $('#lb-img').alt = im.caption || '';
  renderLbInfo();
  const strip = $('#lb-strip');
  strip.innerHTML = '';
  lbImages.forEach((x, i) => {
    const t = document.createElement('button');
    t.className = 'lb-thumb' + (i === lbIndex ? ' active' : '');
    const th = x.src.replace(/\.webp$/, '.jpg');
    t.innerHTML = '<img loading="lazy" src="' + THUMB + th + '" alt="">';
    t.addEventListener('click', () => { lbIndex = i; showLbImage(); });
    strip.appendChild(t);
  });
}

function closeLightbox() {
  $('#lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function stepLb(d) {
  lbIndex = (lbIndex + d + lbImages.length) % lbImages.length;
  showLbImage();
}

/* ---------- Утилиты ---------- */

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------- Сияющая пыль на фоне ---------- */

function startDust() {
  const canvas = document.createElement('canvas');
  canvas.className = 'dust';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  /* при системном reduced-motion пыль остаётся, но движется медленнее и тише */
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0.35 : 1;
  let W, H, parts = [], raf = null, last = performance.now();

  const spawn = (anywhere) => ({
    x: Math.random() * W,
    y: anywhere ? Math.random() * H : H + 12,
    r: 0.5 + Math.random() * 0.9,
    vy: (4 + Math.random() * 10) * calm,
    vx: (Math.random() - 0.5) * 5 * calm,
    hue: 38 + Math.random() * 16,
    sat: 25 + Math.random() * 45,
    tw: Math.random() * Math.PI * 2,
    tws: (0.7 + Math.random() * 1.8) * calm,
    a: 0.16 + Math.random() * 0.2,
  });

  const resize = () => {
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
    parts = Array.from({ length: Math.min(60, Math.round(W * H / 36000)) }, () => spawn(true));
  };

  const draw = (t) => {
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    for (const p of parts) {
      const tw = 0.5 + 0.5 * Math.sin(p.tw + t * p.tws);
      const alpha = p.a * (0.3 + 0.7 * tw);
      const hue = p.hue + Math.sin(t * 0.4 + p.tw) * 14; /* перелив */
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
      g.addColorStop(0, 'hsla(' + hue + ',' + p.sat + '%,82%,' + alpha.toFixed(3) + ')');
      g.addColorStop(1, 'hsla(45,60%,70%,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const frame = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const t = now / 1000;
    for (const p of parts) {
      p.x += p.vx * dt;
      p.y -= p.vy * dt;
      if (p.y < -14 || p.x < -14 || p.x > W + 14) Object.assign(p, spawn(false));
    }
    draw(t);
    raf = requestAnimationFrame(frame);
  };

  resize();
  addEventListener('resize', resize);
  raf = requestAnimationFrame(frame);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else { last = performance.now(); raf = requestAnimationFrame(frame); }
  });
}

/* ---------- Инициализация ---------- */

document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderFilters();
  renderGrid('all');

  $('#lb-close').addEventListener('click', closeLightbox);
  $('#lb-prev').addEventListener('click', () => stepLb(-1));
  $('#lb-next').addEventListener('click', () => stepLb(1));
  $('#lightbox').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!$('#lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLb(-1);
    if (e.key === 'ArrowRight') stepLb(1);
  });

  /* свайп в окне просмотра (телефоны) */
  let touchX = null;
  $('#lightbox').addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  $('#lightbox').addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) stepLb(dx < 0 ? 1 : -1);
    touchX = null;
  }, { passive: true });

  /* бургер-меню (телефоны) */
  const burger = $('#burger');
  const mnav = $('#mnav');
  const closeMenu = () => {
    burger.classList.remove('open');
    mnav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  };
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !mnav.classList.contains('open');
    burger.classList.toggle('open', open);
    mnav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('.mnav a').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('click', (e) => {
    if (!mnav.contains(e.target) && !burger.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  /* появление блоков при прокрутке */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
  }, { threshold: 0.08 });
  $$('.reveal').forEach((el) => io.observe(el));

  /* год в подвале */
  $('#year').textContent = new Date().getFullYear();

  /* едва заметные блёстки на фоне */
  startDust();
});
