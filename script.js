/* ============================================================
   MOXAGIFTS — script.js
   Ganti WHATSAPP_NUMBER dengan nomor WA kamu (format: 628xxxxxxxxxx)
   Ganti INSTAGRAM_URL dengan URL Instagram kamu
   ============================================================ */

const WHATSAPP_NUMBER = '628xxxxxxxxxx'; // ← GANTI INI
const INSTAGRAM_URL = 'https://instagram.com/moxagifts'; // ← GANTI INI

/* ============================================================
   DATA PRODUK
   Tambah/edit produk di sini. Setiap objek = 1 kartu produk.
   ============================================================ */
const products = [
  {
    id: 1,
    title: 'Sweet Birthday Hampers',
    category: 'birthday',
    price: 'Mulai Rp199K',
    priceNum: 199000,
    shortDesc: 'Hampers manis untuk teman ulang tahunmu dengan isian snack dan dekorasi ceria.',
    longDesc: 'Hadirkan kebahagiaan di hari spesial seseorang dengan Sweet Birthday Hampers dari Moxagifts. Dikemas dalam box premium dengan pita satin dan dekorasi balon mini, hampers ini siap membuatnya merasa sangat dihargai.',
    highlights: ['Aneka snack premium', 'Kartu ucapan personal', 'Lilin ulang tahun', 'Pita satin', 'Mini balloon'],
    options: ['Bisa request isi', 'Tambah kartu ucapan', 'Gift wrapping premium'],
    tags: ['bestseller'],
    emoji: '🎂',
    gradient: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
    estimasi: '1–2 hari',
  },
  {
    id: 2,
    title: 'Romantic Anniversary Box',
    category: 'anniversary',
    price: 'Mulai Rp275K',
    priceNum: 275000,
    shortDesc: 'Ungkapkan rasa cinta dengan hampers romantis berisi coklat, bunga, dan lilin aroma.',
    longDesc: 'Rayakan momen cinta kalian dengan Anniversary Box yang penuh makna. Setiap detail dipilih dengan cermat — dari bunga segar mini, coklat artisan, hingga lilin aroma yang menciptakan suasana romantis tak terlupakan.',
    highlights: ['Coklat artisan', 'Bunga segar mini', 'Lilin aroma terapi', 'Kartu ucapan', 'Premium box merah'],
    options: ['Bisa request isi', 'Tambah kartu ucapan', 'Gift wrapping premium'],
    tags: ['bestseller'],
    emoji: '💕',
    gradient: 'linear-gradient(135deg, #ffe4e6, #fecdd3)',
    estimasi: '1–2 hari',
  },
  {
    id: 3,
    title: 'Graduation Proud Hampers',
    category: 'graduation',
    price: 'Mulai Rp225K',
    priceNum: 225000,
    shortDesc: 'Rayakan keberhasilan wisuda dengan hampers penuh semangat dan kebanggaan.',
    longDesc: 'Jadikan momen wisuda semakin berkesan dengan Graduation Proud Hampers. Didesain dengan tema pencapaian, hampers ini cocok untuk diberikan kepada sahabat, adik, atau pasangan yang baru saja meraih gelarnya.',
    highlights: ['Snack premium', 'Jurnal/buku catatan', 'Pulpen eksklusif', 'Kartu ucapan', 'Dekorasi toga mini'],
    options: ['Bisa request isi', 'Tambah kartu ucapan', 'Gift wrapping premium'],
    tags: ['new'],
    emoji: '🎓',
    gradient: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
    estimasi: '1–2 hari',
  },
  {
    id: 4,
    title: 'Wedding Gift Premium',
    category: 'wedding',
    price: 'Mulai Rp350K',
    priceNum: 350000,
    shortDesc: 'Hadiah pernikahan elegan dalam kemasan mewah yang berkesan sepanjang masa.',
    longDesc: 'Berikan kado pernikahan yang tak hanya indah tapi juga penuh makna. Wedding Gift Premium hadir dalam kotak premium putih gading dengan sentuhan emas, berisi produk-produk pilihan untuk pasangan baru.',
    highlights: ['Teh & kopi premium', 'Lilin dekorasi', 'Produk perawatan pasangan', 'Kartu ucapan', 'Pita emas mewah'],
    options: ['Bisa request isi', 'Tambah kartu ucapan', 'Gift wrapping premium'],
    tags: ['bestseller'],
    emoji: '💍',
    gradient: 'linear-gradient(135deg, #fef9c3, #fde68a)',
    estimasi: '2–3 hari',
  },
  {
    id: 5,
    title: 'Self-Care Birthday Box',
    category: 'birthday',
    price: 'Mulai Rp280K',
    priceNum: 280000,
    shortDesc: 'Hampers perawatan diri untuk teman yang butuh me-time di hari ulang tahunnya.',
    longDesc: 'Tidak semua ulang tahun butuh balon. Kadang hadiah terbaik adalah waktu untuk diri sendiri. Self-Care Birthday Box hadir dengan produk perawatan kulit, aromaterapi, dan camilan sehat yang memanjakan.',
    highlights: ['Sheet mask premium', 'Body lotion', 'Lilin aroma lavender', 'Camilan sehat', 'Bath bomb'],
    options: ['Bisa request isi', 'Tambah kartu ucapan', 'Gift wrapping premium'],
    tags: ['new'],
    emoji: '🌸',
    gradient: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    estimasi: '1–2 hari',
  },
  {
    id: 6,
    title: 'Baby Shower Hampers',
    category: 'others',
    price: 'Mulai Rp320K',
    priceNum: 320000,
    shortDesc: 'Hadiah bayi shower yang lucu dan berguna untuk sang ibu & baby baru.',
    longDesc: 'Sambut kehadiran si kecil dengan Baby Shower Hampers yang menggemaskan. Dikemas dalam box pastel lembut, berisi perlengkapan bayi pilihan yang aman dan berkualitas.',
    highlights: ['Perlengkapan bayi (wash, lotion)', 'Bib & washlap', 'Boneka mini', 'Snack untuk ibu', 'Kartu ucapan'],
    options: ['Bisa request isi', 'Tambah kartu ucapan', 'Gift wrapping premium'],
    tags: ['bestseller'],
    emoji: '👶',
    gradient: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
    estimasi: '1–2 hari',
  },
  {
    id: 7,
    title: 'Farewell Premium Box',
    category: 'others',
    price: 'Mulai Rp240K',
    priceNum: 240000,
    shortDesc: 'Ucapkan selamat tinggal dengan hampers berkesan untuk rekan atau sahabatmu.',
    longDesc: 'Farewell Premium Box adalah cara terbaik untuk mengucapkan "semoga sukses di tempat baru" kepada orang-orang yang berarti. Dikemas elegan dengan nuansa hangat dan personal.',
    highlights: ['Snack & minuman premium', 'Foto polaroid frame', 'Sticky notes set', 'Kartu ucapan personal', 'Box kraft premium'],
    options: ['Bisa request isi', 'Tambah kartu ucapan', 'Gift wrapping premium'],
    tags: [],
    emoji: '✈️',
    gradient: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    estimasi: '1–2 hari',
  },
  {
    id: 8,
    title: 'Silver Anniversary Luxury',
    category: 'anniversary',
    price: 'Mulai Rp450K',
    priceNum: 450000,
    shortDesc: 'Hampers mewah untuk perayaan anniversary istimewa dengan sentuhan premium.',
    longDesc: 'Untuk momen cinta yang lebih dari biasa, Silver Anniversary Luxury menghadirkan pengalaman unboxing yang tak terlupakan. Setiap elemen dipilih dengan standar premium tertinggi, dari box hingga isian.',
    highlights: ['Wine non-alkohol premium', 'Coklat Belgia', 'Parfum couple', 'Bunga kering dekoratif', 'Box silver eksklusif'],
    options: ['Bisa request isi', 'Tambah kartu ucapan', 'Gift wrapping premium'],
    tags: ['bestseller'],
    emoji: '🥂',
    gradient: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
    estimasi: '2–3 hari',
  },
  {
    id: 9,
    title: 'Custom Budget Hampers',
    category: 'others',
    price: 'Mulai Rp150K',
    priceNum: 150000,
    shortDesc: 'Tidak perlu khawatir soal budget! Hampers cantik bisa dimulai dari Rp150K.',
    longDesc: 'Kami percaya kado yang bermakna tidak harus mahal. Custom Budget Hampers memungkinkan kamu mendapatkan hampers yang cantik dan personal sesuai dengan budget yang tersedia. Ceritakan kebutuhan dan budget kamu, dan kami akan merancang yang terbaik!',
    highlights: ['Isian sesuai budget', 'Kartu ucapan', 'Kemasan rapi', 'Bebas request tema', 'Konsultasi gratis'],
    options: ['Bisa request isi', 'Tambah kartu ucapan', 'Gift wrapping premium'],
    tags: ['new'],
    emoji: '💝',
    gradient: 'linear-gradient(135deg, #fdf4ff, #fae8ff)',
    estimasi: '1–2 hari',
  },
];

/* ============================================================
   DATA TESTIMONI
   ============================================================ */
const testimonials = [
  {
    text: 'Packingnya rapi banget, kotak-nya cantik dan bisa buat dipajang! Temen aku sampai tanya beli dimana, langsung aku kasih kontak Moxagifts.',
    name: 'Adinda Sari',
    loc: 'Jakarta Selatan',
    stars: 5,
    avatar: '👩',
    bg: '#dbeafe',
  },
  {
    text: 'Beli buat hadiah anniversary, minta custom isi sesuai kesukaan doi. Admin-nya super ramah dan sabar banget ngasih saran. Hasilnya diluar ekspektasi!',
    name: 'Rizky Pratama',
    loc: 'Bandung',
    stars: 5,
    avatar: '👨',
    bg: '#ede9fe',
  },
  {
    text: 'Pengiriman aman, bubble wrap berlapis dan anti bocor. Sampai di tangan penerima dalam kondisi sempurna. Definitely repeat order!',
    name: 'Nurul Hidayah',
    loc: 'Surabaya',
    stars: 5,
    avatar: '👩‍🦱',
    bg: '#d1fae5',
  },
  {
    text: 'Sesuai request banget! Aku minta tambah foto dan kartu ucapan tulisan tangan, hasilnya touching banget. Teman wisuda aku sampai nangis senang.',
    name: 'Mega Wulandari',
    loc: 'Yogyakarta',
    stars: 5,
    avatar: '👩‍🎓',
    bg: '#fce7f3',
  },
  {
    text: 'Responsnya cepet, harganya worth it banget sama kualitas yang dikasih. Udah pesan 3x dan selalu puas. Rekomendasiin ke semua temen-temen!',
    name: 'Fajar Hermawan',
    loc: 'Bekasi',
    stars: 5,
    avatar: '👦',
    bg: '#fef9c3',
  },
];

/* ============================================================
   RENDER PRODUK
   ============================================================ */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  filtered.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'product-card reveal';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${p.title}, ${p.price}`);
    card.dataset.id = p.id;
    card.style.transitionDelay = `${i * 0.07}s`;

    const tagsHtml = p.tags.map(t =>
      t === 'bestseller'
        ? `<span class="card-tag bestseller">⭐ Best Seller</span>`
        : `<span class="card-tag new">🆕 Baru</span>`
    ).join('');

    card.innerHTML = `
      <div class="card-img" style="background:${p.gradient}">
        <span style="font-size:3rem">${p.emoji}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${p.category}</span>
          ${tagsHtml}
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.shortDesc}</p>
        <div class="card-footer">
          <span class="card-price">${p.price}</span>
          <button class="card-detail-btn" aria-label="Lihat detail ${p.title}">Lihat Detail</button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(p.id));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(p.id); } });

    grid.appendChild(card);
    // trigger reveal
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
  });
}

/* ============================================================
   FILTER
   ============================================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

/* ============================================================
   RENDER TESTIMONIALS
   ============================================================ */
function renderTestimonials() {
  const grid = document.getElementById('testiGrid');
  testimonials.forEach((t, i) => {
    const el = document.createElement('article');
    el.className = 'testi-card reveal';
    el.setAttribute('role', 'listitem');
    el.style.transitionDelay = `${i * 0.1}s`;
    el.innerHTML = `
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background:${t.bg}">${t.avatar}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-loc">${t.loc}</div>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

/* ============================================================
   MODAL SYSTEM
   ============================================================ */
const overlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

let previousFocus = null;

function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  const highlightsHtml = p.highlights.map(h => `<span class="highlight-chip">${h}</span>`).join('');
  const optionsHtml = p.options.map(o => `<span class="modal-option">${o}</span>`).join('');

  // Build WhatsApp message
  const waMsg = encodeURIComponent(`Halo Moxagifts! Saya tertarik dengan *${p.title}* (${p.price}). Boleh info lebih lanjut?`);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  modalContent.innerHTML = `
    <div class="modal-img" style="background:${p.gradient}">
      <span style="font-size:5rem">${p.emoji}</span>
    </div>
    <div class="modal-category">${p.category}</div>
    <h2 class="modal-title" id="modalTitle">${p.title}</h2>
    <p class="modal-desc">${p.longDesc}</p>

    <p class="modal-section-label">🎁 Isi Hampers</p>
    <div class="modal-highlights">${highlightsHtml}</div>

    <p class="modal-section-label">✅ Opsi Custom</p>
    <div class="modal-options">${optionsHtml}</div>

    <div class="modal-meta">
      <div class="modal-meta-item modal-price-big">
        <span>Harga Mulai</span>
        <span>${p.price}</span>
      </div>
      <div class="modal-meta-item">
        <span>Estimasi Pengerjaan</span>
        <span>${p.estimasi}</span>
      </div>
      <div class="modal-meta-item">
        <span>Kategori</span>
        <span style="text-transform:capitalize">${p.category}</span>
      </div>
    </div>

    <p class="modal-note">⚠️ Custom minimal H-2 sebelum acara. Segera hubungi kami untuk memastikan ketersediaan.</p>

    <div class="modal-actions">
      <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Pesan via WhatsApp
      </a>
      <button class="btn btn-outline modal-close-btn" id="modalCloseBtnInner">Tutup</button>
    </div>
  `;

  // Inner close btn
  document.getElementById('modalCloseBtnInner').addEventListener('click', closeModal);

  // Store focus & open
  previousFocus = document.activeElement;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
  // Move focus to modal
  setTimeout(() => { modal.focus(); trapFocus(); }, 100);
}

function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (previousFocus) previousFocus.focus();
}

// Close triggers
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* Simple focus trap inside modal */
function trapFocus() {
  const focusable = modal.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  modal.addEventListener('keydown', function handler(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    if (!overlay.classList.contains('open')) modal.removeEventListener('keydown', handler);
  });
}

/* ============================================================
   NAVBAR — scroll effect & active link
   ============================================================ */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  // Scrolled style
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Active link highlight
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ============================================================
   MOBILE MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMenu(open) {
  hamburger.classList.toggle('open', open);
  navLinksEl.classList.toggle('open', open);
  mobileOverlay.classList.toggle('active', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => toggleMenu(!navLinksEl.classList.contains('open')));
mobileOverlay.addEventListener('click', () => toggleMenu(false));
navLinksEl.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

/* ============================================================
   CONTACT FORM — submit handler
   ============================================================ */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  showToast('🎉 Terima kasih! Tim Moxagifts akan menghubungi Anda segera.');
  this.reset();
});

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ============================================================
   SCROLL ANIMATION (IntersectionObserver)
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ============================================================
   SMOOTH SCROLL — for anchor buttons
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  renderTestimonials();
  // Small delay so rendered cards can be observed
  requestAnimationFrame(() => observeReveal());
});
