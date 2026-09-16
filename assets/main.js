let currentLang = 'en';

function pick(field, lang) {
  lang = lang || currentLang;
  if (field == null) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.en || '';
}

/* ---------------- language toggle ---------------- */
function applyStaticLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = lang === 'es' ? el.dataset.es : el.dataset.en;
    if (val != null) el.textContent = val;
  });
  document.querySelectorAll('.langtoggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function setLang(lang) {
  currentLang = lang;
  applyStaticLang(lang);
  if (window.__rerender) window.__rerender();
}

function initLangToggle() {
  document.querySelectorAll('.langtoggle button').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  applyStaticLang(currentLang);
}

/* ---------------- custom cursor ---------------- */
function initCursor() {
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (isTouch) { document.body.classList.add('touch'); return; }

  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  cursor.innerHTML = `
    <div class="dot"></div>
    <div class="sparkle-wrap">
      <svg class="sparkle" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 0C17 0 18.2 12 21 15C23.8 17.8 36 19 36 19C36 19 23.8 20.2 21 23C18.2 25.8 17 38 17 38C17 38 15.8 25.8 13 23C10.2 20.2 -2 19 -2 19C-2 19 10.2 17.8 13 15C15.8 12.2 17 0 17 0Z" transform="translate(2,0)"></path>
        <path d="M32 22C32 22 32.6 27 34 28.4C35.4 29.8 40 30.4 40 30.4C40 30.4 35.4 31 34 32.4C32.6 33.8 32 38.8 32 38.8C32 38.8 31.4 33.8 30 32.4C28.6 31 24 30.4 24 30.4C24 30.4 28.6 29.8 30 28.4C31.4 27 32 22 32 22Z"></path>
      </svg>
    </div>`;
  document.body.appendChild(cursor);

  window.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mouseover', e => {
    if (e.target.closest('.pcard')) cursor.classList.add('big');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('.pcard')) cursor.classList.remove('big');
  });
}

/* ---------------- hero rotating word ---------------- */
const ROTATE_WORDS = {
  en: ['brand systems', 'products', 'content'],
  es: ['sistemas de marca', 'productos', 'contenido']
};
function initRotator() {
  const el = document.getElementById('rotateWord');
  if (!el) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % 3;
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    setTimeout(() => {
      el.textContent = ROTATE_WORDS[currentLang][i];
      el.style.transform = 'translateY(-10px)';
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }, 220);
  }, 2400);
  window.__rotateIndex = () => i;
}
function syncRotatorLang() {
  const el = document.getElementById('rotateWord');
  if (!el || !window.__rotateIndex) return;
  el.textContent = ROTATE_WORDS[currentLang][window.__rotateIndex()];
}

/* ---------------- project card markup ---------------- */
function fallbackStyle(accent) {
  return `background:linear-gradient(135deg, ${accent}, #0e0e0c);`;
}

function projectCardHTML(p, size) {
  const title = pick(p.title);
  const category = pick(p.category);
  const year = currentLang === 'es' ? (p.yearEs || p.year) : p.year;
  const sizeClass = size ? ` ${size}` : '';
  return `
    <a class="pcard${sizeClass}" href="project.html?slug=${p.slug}" data-filter="${p.filter}">
      <div class="imgwrap">
        <img src="${p.cover}" alt="${title}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="fallback" style="display:none;${fallbackStyle(p.accent)}">${title}</div>
      </div>
      <div class="info">
        <div>
          <div class="t">${title}</div>
          <div class="c">${category}</div>
        </div>
        <div class="y">${year}</div>
      </div>
    </a>`;
}

function renderCards(containerId, opts) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const layout = (opts && opts.layout) || 'default';
  const filter = (opts && opts.filter) || 'all';
  let list = PROJECTS;
  if (filter !== 'all') list = list.filter(p => p.filter === filter);

  el.innerHTML = list.map((p, idx) => {
    if (layout === 'home') {
      return projectCardHTML(p, idx === 0 ? 'large' : 'small');
    }
    return projectCardHTML(p, 'large');
  }).join('');
}

/* ---------------- filters (projects.html) ---------------- */
function initFilters() {
  const bar = document.querySelector('.filters');
  if (!bar) return;
  bar.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      bar.querySelectorAll('button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      renderCards('grid', { layout: 'grid', filter: b.dataset.filter });
    });
  });
}

/* ---------------- project detail page ---------------- */
function initProjectDetail() {
  const root = document.getElementById('pd-root');
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const idx = PROJECTS.findIndex(p => p.slug === slug);
  const p = idx >= 0 ? PROJECTS[idx] : PROJECTS[0];
  const nextP = PROJECTS[(idx + 1) % PROJECTS.length];

  function render() {
    const title = pick(p.title);
    const year = currentLang === 'es' ? (p.yearEs || p.year) : p.year;
    document.title = title + ' \u2014 Laureano Lojo';

    document.getElementById('pd-title').textContent = title;
    document.getElementById('pd-role-v').textContent = pick(p.role);
    document.getElementById('pd-cat-v').textContent = pick(p.category);
    document.getElementById('pd-year-v').textContent = year;
    document.getElementById('pd-cover-img').src = p.cover;
    document.getElementById('pd-cover-img').alt = title;
    document.getElementById('pd-desc').textContent = pick(p.description);

    const linkEl = document.getElementById('pd-link');
    if (p.link) {
      linkEl.href = p.link;
      linkEl.style.display = 'inline-flex';
    } else {
      linkEl.style.display = 'none';
    }

    const gal = document.getElementById('pd-gallery');
    gal.innerHTML = p.gallery.map(src => `
      <div class="g"><img src="${src}" alt="${title}" loading="lazy"
        onerror="this.parentElement.style.background='${p.accent}';this.remove();"></div>
    `).join('');

    document.getElementById('pd-next-name').textContent = pick(nextP.title);
    document.getElementById('pd-next-link').href = 'project.html?slug=' + nextP.slug;
  }

  window.__rerender = render;
  render();
}

/* ---------------- boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  initCursor();
  initRotator();
  initFilters();
  initProjectDetail();

  if (document.getElementById('home-grid')) {
    window.__rerender = () => { renderCards('home-grid', { layout: 'home' }); syncRotatorLang(); };
    window.__rerender();
  }
  if (document.getElementById('grid') && !document.getElementById('pd-root')) {
    window.__rerender = () => {
      const active = document.querySelector('.filters button.active');
      renderCards('grid', { layout: 'grid', filter: active ? active.dataset.filter : 'all' });
    };
    window.__rerender();
  }
});
