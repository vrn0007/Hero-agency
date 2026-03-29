// ====== BIKE DATA WITH OFFICIAL HERO MOTOCORP IMAGES ======
const motorcycles = [
  { name: 'HF 100', cc: '97.2 cc', onRoad: '₹68,000', exShowroom: '₹61,000', emi: '₹1,499', highlights: ['Best-in-class mileage (83 km/l)', 'i3S technology', 'Tubeless tyres'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/motorcycles/hf-100.png' },
  { name: 'Splendor+', cc: '97.2 cc', onRoad: '₹80,000', exShowroom: '₹72,500', emi: '₹1,799', highlights: ['73 km/l mileage', '97.2cc BS6 engine', 'i3S auto start/stop'], img: 'https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/practical/splendor-plus/HSPUMDRSCFIBBK/360/1.png' },
  { name: 'Splendor+ XTEC', cc: '97.2 cc', onRoad: '₹84,000', exShowroom: '₹76,000', emi: '₹1,899', highlights: ['Digital-analog speedometer', 'Bluetooth connectivity', 'i3S technology'], img: 'https://www.heromotocorp.com/en-in/motorcycles/media_158350ae705f0d619073e52372f33681d6afafb8d.png?width=750&format=png&optimize=medium' },
  { name: 'HF Deluxe', cc: '97.2 cc', onRoad: '₹73,000', exShowroom: '₹66,000', emi: '₹1,599', highlights: ['79 km/l mileage', 'Comfortable seat', 'i3S technology'], img: 'https://www.heromotocorp.com/en-in/motorcycles/media_1520eb06f0afb60f82283b50965a2da4d9931828f.png?width=750&format=png&optimize=medium' },
  { name: 'Passion+', cc: '97.2 cc', onRoad: '₹78,000', exShowroom: '₹70,500', emi: '₹1,699', highlights: ['Stylish design', 'Integrated headlamp', '67 km/l mileage'], img: 'https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/executive/content-fragments/passion-plus/assets/phase-2-assets/banner/banner-passion-web.png' },
  { name: 'Glamour', cc: '125 cc', onRoad: '₹92,000', exShowroom: '₹83,000', emi: '₹2,099', highlights: ['125cc powerful engine', 'Auto headlamp on (AHO)', '60 km/l mileage'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/motorcycles/glamour-x-navigation.png' },
  { name: 'Glamour X', cc: '125 cc', onRoad: '₹96,000', exShowroom: '₹87,000', emi: '₹2,199', highlights: ['Sporty graphics', 'Programmed FI', 'LED tail lamp'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/glamourx-product-web.png' },
  { name: 'Super Splendor XTEC', cc: '124.7 cc', onRoad: '₹1,00,000', exShowroom: '₹90,000', emi: '₹2,299', highlights: ['124.7cc engine', 'Side-stand indicator', 'Digital console'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/supersplendorxtec-product-web.png' },
  { name: 'Xtreme 125R', cc: '125 cc', onRoad: '₹1,02,000', exShowroom: '₹92,000', emi: '₹2,399', highlights: ['LED headlamp', 'Sport-tuned exhaust', 'Single-channel ABS'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/xtreme125r-product-web.png' },
  { name: 'Xtreme 160R', cc: '163.2 cc', onRoad: '₹1,25,000', exShowroom: '₹1,12,000', emi: '₹2,899', highlights: ['163.2cc air-cooled engine', '0-60 in 4.7 seconds', 'Full LED lighting'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/xtreme160r-product-web.png' },
  { name: 'Xtreme 160R 4V', cc: '163.2 cc', onRoad: '₹1,32,000', exShowroom: '₹1,19,000', emi: '₹3,099', highlights: ['4-valve engine', 'Dual-channel ABS', 'Connected console'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/xtreme160r-4v-product-web.png' },
  { name: 'Xpulse 200 4V', cc: '199.6 cc', onRoad: '₹1,55,000', exShowroom: '₹1,40,000', emi: '₹3,599', highlights: ['199.6cc 4-valve engine', 'Long travel suspension', 'Turn-by-turn navigation'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/xpulse200-4v-product-web.png' },
  { name: 'Karizma XMR', cc: '210 cc', onRoad: '₹2,10,000', exShowroom: '₹1,89,000', emi: '₹4,899', highlights: ['210cc liquid-cooled engine', 'Traction control system', 'Adjustable clutch lever'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/karizma-xmr-product-web.png' },
  { name: 'Mavrick 440', cc: '440 cc', onRoad: '₹2,45,000', exShowroom: '₹2,20,000', emi: '₹5,799', highlights: ['440cc single-cylinder', 'Dual-channel ABS', '6-speed gearbox'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/premia/Mavrick.png' },
];

const scooters = [
  { name: 'Pleasure+ XTEC', cc: '110.9 cc', onRoad: '₹80,000', exShowroom: '₹72,000', emi: '₹1,799', highlights: ['110.9cc engine', 'Integrated braking', 'External fuel fill'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/scooters/Pleasure-plus-xtec-nav.png' },
  { name: 'Xoom 110', cc: '110.9 cc', onRoad: '₹78,000', exShowroom: '₹70,000', emi: '₹1,699', highlights: ['Sporty design', '110.9cc engine', 'LED DRLs'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/scooters/xoom-110.png' },
  { name: 'Destini 110', cc: '110 cc', onRoad: '₹82,000', exShowroom: '₹74,000', emi: '₹1,849', highlights: ['Family scooter', 'i3S technology', 'Large fuel tank'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/scooters/destini-110-web.png' },
  { name: 'New Destini 125', cc: '125 cc', onRoad: '₹90,000', exShowroom: '₹81,000', emi: '₹2,099', highlights: ['125cc engine', 'Digital-analog console', 'Alloy wheels'], img: 'https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/scooters/content-fragments/new-destini-125/assets/web/compare-variants/destini_125_zx+.svg' },
  { name: 'Xoom 125', cc: '124.6 cc', onRoad: '₹88,000', exShowroom: '₹79,000', emi: '₹1,999', highlights: ['124.6cc engine', 'USB charging port', 'Full-metal body'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/scooters/xoom_125.png' },
  { name: 'Destini Prime', cc: '124.6 cc', onRoad: '₹93,000', exShowroom: '₹84,000', emi: '₹2,149', highlights: ['Premium design', 'Chrome accents', 'Comfortable ride'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/scooters/destini-prime.png' },
  { name: 'Xoom 160', cc: '156 cc', onRoad: '₹1,15,000', exShowroom: '₹1,03,000', emi: '₹2,699', highlights: ['156cc powerful engine', 'Disc brake front', 'Connected display'], img: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/scooters/xoom_160.png' },
];

// ====== SPLASH SCREEN ======
document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');

  setTimeout(() => {
    splash.classList.add('hidden');
  }, 2500);

  setTimeout(() => {
    splash.style.display = 'none';
  }, 3300);

  // Initialize
  renderBikeGrid(motorcycles, 'bike-grid-motorcycles');
  renderBikeGrid(scooters, 'bike-grid-scooters');
  initSlider();
  initNavbar();
  initScrollAnimations();
  calculateEMI();
  loadInstagramGallery();

  // Set min date for service booking to today
  const dateInput = document.getElementById('svc-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});

// ====== RENDER BIKE CARDS ======
function renderBikeGrid(bikes, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = bikes.map((bike, index) => `
    <div class="bike-card animate-on-scroll" data-bike="${bike.name}">
      <div class="bike-card-compare" onclick="toggleCompare('${bike.name}', this)" title="Compare">Compare</div>
      <div class="bike-card-img">
        <img src="${bike.img}" alt="Hero ${bike.name}" loading="lazy" onerror="this.style.opacity='0.3'">
      </div>
      <div class="bike-card-body">
        <h3 class="bike-card-name">Hero ${bike.name}</h3>
        <p class="bike-card-cc">Engine: ${bike.cc}</p>
        <ul class="bike-highlights">
          ${bike.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="bike-prices">
          <div class="bike-price-row on-road"><span>On-Road Price</span><strong>${bike.onRoad}</strong></div>
          <div class="bike-price-row"><span>Ex-Showroom</span><strong>${bike.exShowroom}</strong></div>
          <div class="bike-price-row"><span>EMI from</span><strong>${bike.emi}/mo</strong></div>
        </div>
        <div class="bike-card-actions">
          <button class="btn btn-primary btn-sm" onclick="openInquiry('${bike.name}', 'test-ride')">Book Test Ride</button>
          <button class="btn btn-outline btn-sm" onclick="openInquiry('${bike.name}', 'best-price')">Get Best Price</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ====== TABS ======
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.querySelectorAll('.bike-grid').forEach(g => g.classList.remove('active'));
    document.getElementById(`bike-grid-${tab}`).classList.add('active');
  });
});

// Dropdown tab links
document.querySelectorAll('[data-tab]').forEach(link => {
  link.addEventListener('click', (e) => {
    const tab = e.target.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');
    document.querySelectorAll('.bike-grid').forEach(g => g.classList.remove('active'));
    document.getElementById(`bike-grid-${tab}`).classList.add('active');
  });
});

// ====== COMPARE FEATURE ======
let compareList = [];

function toggleCompare(bikeName, el) {
  const idx = compareList.indexOf(bikeName);
  if (idx > -1) {
    compareList.splice(idx, 1);
    el.classList.remove('selected');
  } else {
    if (compareList.length >= 2) {
      alert('You can compare up to 2 bikes at a time. Please deselect one first.');
      return;
    }
    compareList.push(bikeName);
    el.classList.add('selected');
  }
  updateCompareBar();
}

function updateCompareBar() {
  const bar = document.getElementById('compare-bar');
  const count = document.getElementById('compare-count');
  const btn = document.getElementById('compare-btn');
  count.textContent = compareList.length;
  bar.style.display = compareList.length > 0 ? 'flex' : 'none';
  btn.disabled = compareList.length < 2;
  btn.style.opacity = compareList.length < 2 ? 0.5 : 1;
}

function openCompareModal() {
  if (compareList.length < 2) return;
  const allBikes = [...motorcycles, ...scooters];
  const bike1 = allBikes.find(b => b.name === compareList[0]);
  const bike2 = allBikes.find(b => b.name === compareList[1]);
  if (!bike1 || !bike2) return;

  const container = document.getElementById('compare-table-container');
  container.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>
            <img src="${bike1.img}" alt="Hero ${bike1.name}" style="height:60px; margin-bottom:6px; display:block;"><br>
            Hero ${bike1.name}
          </th>
          <th>
            <img src="${bike2.img}" alt="Hero ${bike2.name}" style="height:60px; margin-bottom:6px; display:block;"><br>
            Hero ${bike2.name}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Engine</strong></td><td>${bike1.cc}</td><td>${bike2.cc}</td></tr>
        <tr><td><strong>On-Road Price</strong></td><td>${bike1.onRoad}</td><td>${bike2.onRoad}</td></tr>
        <tr><td><strong>Ex-Showroom</strong></td><td>${bike1.exShowroom}</td><td>${bike2.exShowroom}</td></tr>
        <tr><td><strong>EMI from</strong></td><td>${bike1.emi}/mo</td><td>${bike2.emi}/mo</td></tr>
        ${bike1.highlights.map((h, i) => `<tr><td><strong>Feature ${i + 1}</strong></td><td>${h}</td><td>${bike2.highlights[i] || '—'}</td></tr>`).join('')}
      </tbody>
    </table>
  `;
  document.getElementById('compare-modal').classList.add('open');
}

function closeCompareModal() {
  document.getElementById('compare-modal').classList.remove('open');
}

function clearCompare() {
  compareList = [];
  document.querySelectorAll('.bike-card-compare').forEach(el => el.classList.remove('selected'));
  updateCompareBar();
}

// ====== INQUIRY MODAL (Test Ride / Get Best Price) ======
function openInquiry(bikeName, type) {
  document.getElementById('inquiry-bike').value = bikeName;
  document.getElementById('inquiry-type').value = type;
  document.getElementById('inquiry-modal-title').textContent =
    type === 'test-ride' ? `Book Test Ride — Hero ${bikeName}` : `Get Best Price — Hero ${bikeName}`;
  document.getElementById('inquiry-form').style.display = 'block';
  document.getElementById('inquiry-success').style.display = 'none';
  document.getElementById('inquiry-modal').classList.add('open');
}

function closeInquiryModal() {
  document.getElementById('inquiry-modal').classList.remove('open');
}

function submitInquiry(e) {
  e.preventDefault();
  
  const bike = document.getElementById('inquiry-bike').value;
  const type = document.getElementById('inquiry-type').value;
  const name = document.getElementById('inq-name').value;
  const phone = document.getElementById('inq-phone').value;
  
  const typeText = type === 'test-ride' ? 'Test Ride Booking' : 'Price Inquiry';
  const text = `Hi, I have a ${typeText}.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interested In:* Hero ${bike}\n\nPlease contact me with more details.`;
  
  window.open(`https://wa.me/919598000909?text=${encodeURIComponent(text)}`, '_blank');
  
  document.getElementById('inquiry-form').style.display = 'none';
  document.getElementById('inquiry-success').style.display = 'block';
  setTimeout(() => closeInquiryModal(), 2500);
}

// ====== SERVICE FORM ======
function submitServiceForm(e) {
  e.preventDefault();
  
  const name = document.getElementById('svc-name').value;
  const phone = document.getElementById('svc-phone').value;
  const bike = document.getElementById('svc-bike').value;
  const reg = document.getElementById('svc-reg').value;
  const date = document.getElementById('svc-date').value;
  const time = document.getElementById('svc-time').value;
  const type = document.getElementById('svc-type').value;
  const issue = document.getElementById('svc-issue').value;
  const notes = document.getElementById('svc-notes').value;
  
  let text = `Hi, I want to book a Service Appointment.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Bike:* ${bike}\n*Reg No:* ${reg}\n*Date:* ${date}\n*Time Slot:* ${time}\n*Service Type:* ${type}\n*Issue:* ${issue}`;
  if (notes) text += `\n*Notes:* ${notes}`;
  
  window.open(`https://wa.me/919598000909?text=${encodeURIComponent(text)}`, '_blank');
  
  const form = document.getElementById('service-form');
  form.style.display = 'none';
  document.getElementById('service-success').style.display = 'block';
  setTimeout(() => {
    form.style.display = 'block';
    form.reset();
    document.getElementById('service-success').style.display = 'none';
  }, 5000);
}

// ====== EMI CALCULATOR ======
function calculateEMI() {
  const price = parseFloat(document.getElementById('emi-price').value) || 80000;
  const down = parseFloat(document.getElementById('emi-down').value) || 0;
  const tenure = parseInt(document.getElementById('emi-tenure').value) || 24;
  const rate = 9.5; // annual interest rate

  const loanAmount = price - down;
  const monthlyRate = rate / 12 / 100;
  let emi;

  if (monthlyRate === 0) {
    emi = loanAmount / tenure;
  } else {
    emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure) / (Math.pow(1 + monthlyRate, tenure) - 1);
  }

  const totalPayable = emi * tenure;

  document.getElementById('emi-monthly').textContent = Math.round(emi).toLocaleString('en-IN');
  document.getElementById('emi-loan').textContent = loanAmount.toLocaleString('en-IN');
  document.getElementById('emi-total').textContent = Math.round(totalPayable).toLocaleString('en-IN');
}

// ====== SLIDER ======
let currentSlide = 0;
let slideInterval;

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const thumbs = document.querySelectorAll('.thumb');
  const totalSlides = slides.length;
  const slideCurrentEl = document.getElementById('slide-current');

  function goTo(idx) {
    currentSlide = idx;
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    thumbs.forEach((t, i) => t.classList.toggle('active', i === currentSlide));
    if (slideCurrentEl) slideCurrentEl.textContent = currentSlide + 1;
  }

  document.querySelector('.slider-next').addEventListener('click', () => {
    goTo((currentSlide + 1) % totalSlides);
    resetInterval();
  });
  document.querySelector('.slider-prev').addEventListener('click', () => {
    goTo((currentSlide - 1 + totalSlides) % totalSlides);
    resetInterval();
  });
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      goTo(parseInt(thumb.dataset.slide));
      resetInterval();
    });
  });

  slideInterval = setInterval(() => goTo((currentSlide + 1) % totalSlides), 5000);

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => goTo((currentSlide + 1) % totalSlides), 5000);
  }
}

// ====== NAVBAR ======
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu toggle
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Mobile dropdown toggle
  document.querySelectorAll('.nav-dropdown .dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        trigger.closest('.nav-dropdown').classList.toggle('open');
      }
    });
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a:not(.dropdown-trigger)').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ====== INSTAGRAM GALLERY ======
// Instagram API Configuration
const INSTAGRAM_CONFIG = {
  username: 'bishunpur_auto_sales_services',
  profileUrl: 'https://www.instagram.com/bishunpur_auto_sales_services/',
  // Replace these with real tokens when available:
  accessToken: '', // YOUR_INSTAGRAM_ACCESS_TOKEN
  userId: '',      // YOUR_INSTAGRAM_USER_ID
};

// Static fallback gallery images (from Instagram @bishunpur_auto_sales_services)
// These simulate what would come from the API - replace with actual downloaded images
const FALLBACK_GALLERY = [
  // Real showroom photos
  { src: 'assets/gallery/showroom-front.jpg', caption: 'Bishunpur Auto Sale and Service — Our Showroom Front', category: 'showroom' },
  { src: 'assets/gallery/showroom-exterior.jpg', caption: 'Bishunpur Auto Sale and Service — Exterior View', category: 'showroom' },
  { src: 'assets/gallery/showroom-bikes.jpg', caption: 'Hero Bikes Ready for Delivery at Our Showroom', category: 'showroom' },
  { src: 'assets/gallery/showroom-inauguration.jpg', caption: 'Grand Opening — Bishunpur Auto Sale and Service', category: 'showroom' },
  // Hero product showcase
  { src: 'https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/practical/splendor-plus/HSPUMDRSCFIBBK/360/1.png', caption: 'New Hero Splendor+ available at Bishunpur!', category: 'bikes' },
  { src: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/glamourx-product-web.png', caption: 'Hero Glamour X — Now in stock!', category: 'bikes' },
  { src: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/xtreme160r-product-web.png', caption: 'Xtreme 160R — Feel the power!', category: 'bikes' },
  { src: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/xpulse200-4v-product-web.png', caption: 'Xpulse 200 4V — Adventure awaits!', category: 'bikes' },
  { src: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/festive-blogs/2025-festiveblogs-oct/product/karizma-xmr-product-web.png', caption: 'Karizma XMR — Premium performance bike', category: 'bikes' },
  { src: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/premia/Mavrick.png', caption: 'Mavrick 440 — Highway cruiser!', category: 'bikes' },
  { src: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/scooters/xoom-110.png', caption: 'Xoom 110 — Perfect city ride', category: 'bikes' },
  { src: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/scooters/Pleasure-plus-xtec-nav.png', caption: 'Pleasure+ XTEC — Rides made fun!', category: 'bikes' },
];

// Categorize captions for placement
function categorizeImage(caption) {
  const lower = caption.toLowerCase();
  if (lower.includes('service') || lower.includes('repair') || lower.includes('workshop')) return 'service';
  if (lower.includes('offer') || lower.includes('deal') || lower.includes('discount') || lower.includes('emi')) return 'offers';
  if (lower.includes('delivery') || lower.includes('congratulations') || lower.includes('handover')) return 'testimonials';
  if (lower.includes('showroom') || lower.includes('visit') || lower.includes('welcome')) return 'banner';
  if (lower.includes('festival') || lower.includes('diwali') || lower.includes('holi')) return 'banner';
  return 'bikes'; // Default to bikes section
}

// Try Instagram Graph API, fallback to static images
async function loadInstagramGallery() {
  const feedContainer = document.getElementById('insta-feed');

  try {
    if (INSTAGRAM_CONFIG.accessToken && INSTAGRAM_CONFIG.userId) {
      // METHOD: Instagram Graph API
      const apiUrl = `https://graph.instagram.com/${INSTAGRAM_CONFIG.userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=12&access_token=${INSTAGRAM_CONFIG.accessToken}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        renderGallery(data.data.map(post => ({
          src: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
          caption: post.caption || '',
          permalink: post.permalink,
          category: categorizeImage(post.caption || ''),
        })));
        return;
      }
    }
    // Fallback to static images
    loadStaticFallbackImages();
  } catch (error) {
    console.log('Instagram API unavailable, loading fallback images:', error);
    loadStaticFallbackImages();
  }
}

function loadStaticFallbackImages() {
  renderGallery(FALLBACK_GALLERY);
}

function renderGallery(images) {
  const feedContainer = document.getElementById('insta-feed');
  feedContainer.innerHTML = images.map((img, i) => `
    <div class="gallery-item" style="animation-delay: ${i * 0.05}s">
      <img src="${img.src}" alt="${img.caption || 'Gallery image'}" loading="lazy" onerror="this.closest('.gallery-item').style.display='none'">
      <div class="gallery-overlay">
        <p class="gallery-caption">${img.caption || ''}</p>
        ${img.permalink ? `<a href="${img.permalink}" target="_blank" class="gallery-link">View on Instagram ↗</a>` : `<a href="${INSTAGRAM_CONFIG.profileUrl}" target="_blank" class="gallery-link">View on Instagram ↗</a>`}
      </div>
    </div>
  `).join('');
}

// Auto-refresh gallery every 24 hours
setInterval(() => {
  loadInstagramGallery();
}, 24 * 60 * 60 * 1000);

// ====== SCROLL ANIMATIONS ======
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Observe elements that should animate
  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll, .offer-card, .package-card, .testimonial-card, .gallery-item').forEach(el => {
      observer.observe(el);
    });
  }, 500);
}

// ====== CLOSE MODALS ON OUTSIDE CLICK ======
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('open');
  }
});

// ====== CLOSE MODALS ON ESCAPE ======
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
  }
});
