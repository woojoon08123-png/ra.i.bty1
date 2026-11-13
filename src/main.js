import { createIcons, icons } from 'lucide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import naturalPermImg from './assets/natural-perm.png';

gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// [DATA] 라이뷰티 시술 컬렉션 룩북 및 서비스 데이터 (8대 핵심 시술)
// =============================================================================
const LOOKBOOK_DATA = [
  {
    id: 'look-1',
    category: 'perm',
    serviceName: '네츄럴펌',
    title: '내추럴 뷰러 C컬 래쉬펌',
    desc: '눈두덩에 닿지 않고 자연스럽게 둥근 곡선을 그리며 올라가는 학생 최애 내추럴펌입니다.',
    price: '35,000원',
    duration: '45분',
    fit: '자연스러운 눈매, 무쌍 및 얇은 속쌍꺼풀',
    tag: '원장님 실제 시술',
    img: naturalPermImg,
  },
  {
    id: 'look-2',
    category: 'perm',
    serviceName: '영양클리닉펌',
    title: '케라틴 수분 앰플 영양펌',
    desc: '잦은 뷰러 사용으로 건조해진 속눈썹에 고농축 단백질을 듬뿍 채워주는 복구 영양펌입니다.',
    price: '45,000원',
    duration: '50분',
    fit: '손상모, 건조하고 얇은 속눈썹',
    tag: '영양 집중 케어',
    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'look-3',
    category: 'perm',
    serviceName: '블랙클리닉펌',
    title: '블랙 틴팅 딥클리닉펌',
    desc: '속눈썹 모발 한 올 한 올에 천연 블랙 색소를 코팅하여 마스카라를 한 듯 또렷한 딥블랙 래쉬.',
    price: '50,000원',
    duration: '55분',
    fit: '생얼에도 또렷한 눈매, 엷은 털색',
    tag: '마스카라 생략',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'look-4',
    category: 'extension',
    serviceName: '네츄럴 연장',
    title: '초슬림 초경량 플랫모 1:1 연장',
    desc: '자연모와 무게 차이가 거의 없는 0.10mm 초경량 모로 원래 내 속눈썹이 긴 것처럼 연출합니다.',
    price: '55,000원',
    duration: '60분',
    fit: '자연스러움을 추구하는 모든 눈매',
    tag: '깃털 가벼움',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'look-5',
    category: 'extension',
    serviceName: '디자인 연장',
    title: '아이돌 포인트 가닥 디자인 연장',
    desc: '길이와 굵기가 다른 가닥을 리드미컬하게 배치해 트렌디한 아이돌 눈매를 만드는 커스텀 연장.',
    price: '70,000원',
    duration: '75분',
    fit: '포인트 눈매, 특별한 날, 화려한 입체감',
    tag: '트렌드 래쉬',
    img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'look-6',
    category: 'scalp',
    serviceName: '새치염색',
    title: '식물성 저자극 새치 커버 컬러링',
    desc: '암모니아 향 없이 두피를 보호하는 저자극 식물성 크림으로 얼룩 없이 부드럽게 염색합니다.',
    price: '40,000원~',
    duration: '50분',
    fit: '스트레스성 새치, 민감한 두피',
    tag: '저자극 포뮬러',
    img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'look-7',
    category: 'scalp',
    serviceName: '앰플영양클리닉케어',
    title: '나노 펩타이드 모발 영양 스팀 클리닉',
    desc: '열기구로 갈라진 모발 끝까지 단백질을 침투시키는 살롱 전용 고보습 앰플 스팀 케어입니다.',
    price: '60,000원',
    duration: '60분',
    fit: '건조한 모발, 엉키는 모발',
    tag: '윤기 복구',
    img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'look-8',
    category: 'scalp',
    serviceName: '탈모 or 지루성 두피케어',
    title: '스칼프 스케일링 & 쿨링 진정 케어',
    desc: '학업 스트레스와 열감으로 민감해진 두피의 각질을 정화하고 모근 영양을 공급하는 두피 스파.',
    price: '65,000원',
    duration: '60분',
    fit: '가려움, 붉은기, 열감 두피',
    tag: '두피 힐링',
    img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
  },
];

// =============================================================================
// [STORAGE KEYS & STATE]
// =============================================================================
const STORAGE_KEYS = {
  RECENT_VIEWED: 'rai_beauty_recent_viewed',
  WISHLIST: 'rai_beauty_wishlist',
  BOOKINGS: 'rai_beauty_bookings',
  LAST_DIAGNOSIS: 'rai_beauty_last_diagnosis',
};

function getStorage(key, defaultValue = []) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage save error', e);
  }
}

// =============================================================================
// [1. ICONS RENDER HELPER]
// =============================================================================
function renderIcons() {
  createIcons({ icons });
}

// =============================================================================
// [2. 1:1 PERSONAL LASH DIAGNOSIS ENGINE]
// =============================================================================
const DIAGNOSIS_PRESCRIPTIONS = {
  natural: {
    title: '네츄럴펌 (클래식 내추럴 래쉬펌)',
    desc: '학교나 일상에서도 인위적임 없이 원래 내 속눈썹이 예쁘게 올라간 듯한 맑고 투명한 눈매를 완성합니다.',
    serviceName: '네츄럴펌',
  },
  defined: {
    title: '블랙클리닉펌 (틴팅 & 영양)',
    desc: '마스카라 번짐 없이 하루 종일 또렷한 딥블랙 광택과 탄탄한 컬을 선사하는 10대 인기 No.1 틴팅펌입니다.',
    serviceName: '블랙클리닉펌',
  },
  glam: {
    title: '디자인 연장 (아이돌 포인트 래쉬)',
    desc: '눈매 끝을 시원하게 트여보이게 하거나 은은한 가닥 포인트를 주어 눈이 1.5배 커 보이는 맞춤 디자인입니다.',
    serviceName: '디자인 연장',
  },
  damaged: {
    title: '영양클리닉펌 + 케라틴 앰플',
    desc: '끊어지거나 얇아진 속눈썹을 먼저 건강하게 복구하며 처짐 없이 우아한 C컬을 만들어 드립니다.',
    serviceName: '영양클리닉펌',
  },
  shortLash: {
    title: '네츄럴 연장 (초경량 플랫모)',
    desc: '무게감 0%의 초경량 플랫모로 내 눈썹 손상 없이 자연스럽고 촘촘하게 길이를 연장합니다.',
    serviceName: '네츄럴 연장',
  },
};

function initDiagnosisEngine() {
  const form = document.getElementById('diagnosis-form');
  if (!form) return;

  const resultTitle = document.getElementById('result-title');
  const resultDesc = document.getElementById('result-desc');
  const btnApply = document.getElementById('btn-apply-diagnosis');

  function calculateDiagnosis() {
    const goal = form.querySelector('input[name="goal"]:checked')?.value || 'natural';
    const worry = form.querySelector('input[name="worry"]:checked')?.value || 'droop';

    let prescription = DIAGNOSIS_PRESCRIPTIONS.natural;

    if (worry === 'damage') {
      prescription = DIAGNOSIS_PRESCRIPTIONS.damaged;
    } else if (worry === 'short') {
      prescription = DIAGNOSIS_PRESCRIPTIONS.shortLash;
    } else {
      prescription = DIAGNOSIS_PRESCRIPTIONS[goal] || DIAGNOSIS_PRESCRIPTIONS.natural;
    }

    if (resultTitle && resultDesc) {
      resultTitle.textContent = prescription.title;
      resultDesc.textContent = prescription.desc;
      if (btnApply) {
        btnApply.dataset.targetService = prescription.serviceName;
      }

      // Animate card highlight
      gsap.fromTo(
        '#diagnosis-result',
        { scale: 0.98, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out' }
      );
    }

    setStorage(STORAGE_KEYS.LAST_DIAGNOSIS, prescription);
  }

  // Update styles for radio buttons
  form.addEventListener('change', (e) => {
    const groupName = e.target.name;
    form.querySelectorAll(`input[name="${groupName}"]`).forEach((input) => {
      const parent = input.closest('.diagnosis-option');
      const dot = parent?.querySelector('.check-dot');
      if (input.checked) {
        parent?.classList.add('bg-white', 'border-black');
        dot?.classList.add('bg-[#FFE600]', 'border-black');
        dot?.classList.remove('border-zinc-300');
      } else {
        parent?.classList.remove('bg-white', 'border-black');
        dot?.classList.remove('bg-[#FFE600]', 'border-black');
        dot?.classList.add('border-zinc-300');
      }
    });

    calculateDiagnosis();
  });

  // Apply button: scroll to reservation & pre-select service
  btnApply?.addEventListener('click', () => {
    const targetService = btnApply.dataset.targetService || '네츄럴펌';
    const selectElem = document.getElementById('res-service');
    if (selectElem) {
      selectElem.value = targetService;
    }

    const resSection = document.getElementById('reservation');
    if (resSection) {
      resSection.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      selectElem?.focus();
      selectElem?.classList.add('ring-4', 'ring-[#FFE600]');
      setTimeout(() => selectElem?.classList.remove('ring-4', 'ring-[#FFE600]'), 1500);
    }, 600);
  });

  calculateDiagnosis();
}

// =============================================================================
// [3. LOOKBOOK & WISHLIST & RECENT VIEWED SYSTEM]
// =============================================================================
let activeCategory = 'all';

function renderLookbookGrid() {
  const container = document.getElementById('lookbook-grid');
  if (!container) return;

  const wishlist = getStorage(STORAGE_KEYS.WISHLIST, []);
  const filtered = activeCategory === 'all'
    ? LOOKBOOK_DATA
    : LOOKBOOK_DATA.filter((item) => item.category === activeCategory);

  container.innerHTML = filtered
    .map((item) => {
      const isWished = wishlist.includes(item.id);
      return `
      <div class="lookbook-card group bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 flex flex-col justify-between" data-id="${item.id}">
        <div>
          <!-- Image Box with hover zoom -->
          <div class="relative aspect-[4/3] overflow-hidden bg-black">
            <img 
              src="${item.img}" 
              alt="${item.title}" 
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black text-[#FFE600] text-[11px] font-bold border border-yellow-400">
              ${item.tag}
            </span>
            <button 
              class="btn-wishlist absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-black hover:bg-black hover:text-[#FFE600] flex items-center justify-center transition-all shadow ${isWished ? 'text-red-500 fill-red-500' : ''}" 
              data-id="${item.id}"
              title="찜하기"
            >
              <i data-lucide="heart" class="w-4 h-4 ${isWished ? 'fill-current text-red-500' : ''}"></i>
            </button>
          </div>

          <!-- Content Box -->
          <div class="p-5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-bold text-black">${item.serviceName}</span>
              <span class="text-xs text-zinc-500">${item.duration}</span>
            </div>
            <h4 class="text-base font-bold text-black font-serif-kr line-clamp-1 group-hover:text-zinc-700 transition-colors">
              ${item.title}
            </h4>
            <p class="text-xs text-zinc-600 mt-1.5 line-clamp-2 leading-relaxed">
              ${item.desc}
            </p>
          </div>
        </div>

        <!-- Bottom Action Bar -->
        <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-zinc-100">
          <span class="text-sm font-black text-black">${item.price}</span>
          <button 
            class="btn-open-zoom inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black hover:bg-zinc-800 text-xs font-bold text-[#FFE600] transition-colors border border-black"
            data-id="${item.id}"
          >
            <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i>
            <span>상세보기</span>
          </button>
        </div>
      </div>
    `;
    })
    .join('');

  renderIcons();
  updateRecentBadge();
}

function updateRecentBadge() {
  const recent = getStorage(STORAGE_KEYS.RECENT_VIEWED, []);
  const countElem = document.getElementById('recent-view-count');
  const badge = document.getElementById('recent-badge');

  if (countElem) countElem.textContent = recent.length.toString();
  if (badge) {
    if (recent.length > 0) {
      badge.textContent = recent.length.toString();
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function trackRecentItem(item) {
  let recent = getStorage(STORAGE_KEYS.RECENT_VIEWED, []);
  recent = recent.filter((x) => x.id !== item.id);
  recent.unshift(item);
  if (recent.length > 10) recent = recent.slice(0, 10);
  setStorage(STORAGE_KEYS.RECENT_VIEWED, recent);
  updateRecentBadge();
}

function toggleWishlist(itemId) {
  let wishlist = getStorage(STORAGE_KEYS.WISHLIST, []);
  if (wishlist.includes(itemId)) {
    wishlist = wishlist.filter((id) => id !== itemId);
  } else {
    wishlist.push(itemId);
  }
  setStorage(STORAGE_KEYS.WISHLIST, wishlist);
  renderLookbookGrid();
}

// =============================================================================
// [4. MODAL INTERACTIONS (ZOOM, RESERVATION CONFIRM, RECENT VIEWER)]
// =============================================================================
function initModals() {
  // Zoom Modal
  const modalZoom = document.getElementById('modal-zoom');
  const btnCloseZoom = document.getElementById('btn-close-zoom');
  const zoomImg = document.getElementById('zoom-img');
  const zoomTag = document.getElementById('zoom-tag');
  const zoomTitle = document.getElementById('zoom-title');
  const zoomPrice = document.getElementById('zoom-price');
  const zoomDesc = document.getElementById('zoom-desc');
  const zoomFit = document.getElementById('zoom-fit');
  const zoomDuration = document.getElementById('zoom-duration');
  const zoomTime = document.getElementById('zoom-time');
  const btnZoomReserve = document.getElementById('btn-zoom-reserve');
  const zoomBtnWish = document.getElementById('zoom-btn-wish');

  let currentZoomItem = null;

  function openZoomModal(item) {
    currentZoomItem = item;
    trackRecentItem(item);

    if (zoomImg) zoomImg.src = item.img;
    if (zoomTag) zoomTag.textContent = item.tag;
    if (zoomTitle) zoomTitle.textContent = item.title;
    if (zoomPrice) zoomPrice.textContent = `${item.serviceName} | ${item.price}`;
    if (zoomDesc) zoomDesc.textContent = item.desc;
    if (zoomFit) zoomFit.textContent = item.fit;
    if (zoomDuration) zoomDuration.textContent = '약 4~6주 유지';
    if (zoomTime) zoomTime.textContent = item.duration;

    const wishlist = getStorage(STORAGE_KEYS.WISHLIST, []);
    const isWished = wishlist.includes(item.id);
    if (zoomBtnWish) {
      zoomBtnWish.classList.toggle('text-red-500', isWished);
      zoomBtnWish.innerHTML = `<i data-lucide="heart" class="w-5 h-5 ${isWished ? 'fill-current text-red-500' : ''}"></i>`;
    }

    modalZoom?.classList.remove('hidden');
    renderIcons();
  }

  function closeZoomModal() {
    modalZoom?.classList.add('hidden');
  }

  btnCloseZoom?.addEventListener('click', closeZoomModal);
  modalZoom?.addEventListener('click', (e) => {
    if (e.target === modalZoom) closeZoomModal();
  });

  zoomBtnWish?.addEventListener('click', () => {
    if (currentZoomItem) {
      toggleWishlist(currentZoomItem.id);
      openZoomModal(currentZoomItem);
    }
  });

  btnZoomReserve?.addEventListener('click', () => {
    closeZoomModal();
    if (currentZoomItem) {
      const selectElem = document.getElementById('res-service');
      if (selectElem) selectElem.value = currentZoomItem.serviceName;
    }
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Global Lookbook Card delegation
  document.getElementById('lookbook-grid')?.addEventListener('click', (e) => {
    const wishBtn = e.target.closest('.btn-wishlist');
    if (wishBtn) {
      const id = wishBtn.dataset.id;
      toggleWishlist(id);
      return;
    }

    const zoomBtn = e.target.closest('.btn-open-zoom');
    if (zoomBtn) {
      const id = zoomBtn.dataset.id;
      const found = LOOKBOOK_DATA.find((x) => x.id === id);
      if (found) openZoomModal(found);
    }
  });

  // Recent Modal
  const modalRecent = document.getElementById('modal-recent');
  const btnOpenRecent = document.getElementById('btn-recent-modal');
  const btnCloseRecent = document.getElementById('btn-close-recent');
  const recentContainer = document.getElementById('recent-list-container');
  const btnClearRecent = document.getElementById('btn-clear-recent');

  function renderRecentModal() {
    const recent = getStorage(STORAGE_KEYS.RECENT_VIEWED, []);
    if (!recentContainer) return;

    if (recent.length === 0) {
      recentContainer.innerHTML = `
        <div class="text-center py-10 text-zinc-400 text-xs">
          최근 둘러본 시술이 없습니다.<br />룩북에서 마음에 드는 스타일을 살펴보세요.
        </div>
      `;
    } else {
      recentContainer.innerHTML = recent
        .map(
          (item) => `
        <div class="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-black transition-colors">
          <img src="${item.img}" class="w-14 h-14 rounded-xl object-cover shrink-0" alt="${item.title}">
          <div class="flex-1 min-w-0">
            <h5 class="text-xs font-bold text-black truncate">${item.title}</h5>
            <p class="text-[11px] text-zinc-600 font-medium">${item.serviceName} • <strong class="text-black">${item.price}</strong></p>
          </div>
          <button class="btn-select-from-recent px-3 py-1.5 rounded-full bg-black text-[#FFE600] text-[11px] font-bold hover:bg-zinc-800 shrink-0" data-service="${item.serviceName}">
            선택
          </button>
        </div>
      `
        )
        .join('');
    }
    renderIcons();
  }

  btnOpenRecent?.addEventListener('click', () => {
    renderRecentModal();
    modalRecent?.classList.remove('hidden');
  });

  btnCloseRecent?.addEventListener('click', () => modalRecent?.classList.add('hidden'));
  modalRecent?.addEventListener('click', (e) => {
    if (e.target === modalRecent) modalRecent?.classList.add('hidden');
  });

  btnClearRecent?.addEventListener('click', () => {
    setStorage(STORAGE_KEYS.RECENT_VIEWED, []);
    updateRecentBadge();
    renderRecentModal();
  });

  recentContainer?.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-select-from-recent');
    if (btn) {
      const sName = btn.dataset.service;
      const selectElem = document.getElementById('res-service');
      if (selectElem) selectElem.value = sName;
      modalRecent?.classList.add('hidden');
      document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  document.getElementById('btn-view-wishlist')?.addEventListener('click', () => {
    renderRecentModal();
    modalRecent?.classList.remove('hidden');
  });

  // Confirm Modal
  const modalConfirm = document.getElementById('modal-confirm');
  const btnCloseConfirm = document.getElementById('btn-close-confirm');
  const btnConfirmOk = document.getElementById('btn-confirm-ok');

  function closeConfirmModal() {
    modalConfirm?.classList.add('hidden');
  }

  btnCloseConfirm?.addEventListener('click', closeConfirmModal);
  btnConfirmOk?.addEventListener('click', closeConfirmModal);
  modalConfirm?.addEventListener('click', (e) => {
    if (e.target === modalConfirm) closeConfirmModal();
  });
}

// =============================================================================
// [5. RESERVATION FORM SUBMISSION]
// =============================================================================
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  const dateInput = document.getElementById('res-date');

  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  document.querySelectorAll('.btn-select-service').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sName = btn.dataset.service;
      const selectElem = document.getElementById('res-service');
      if (selectElem && sName) {
        selectElem.value = sName;
      }
      document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const service = document.getElementById('res-service').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const name = document.getElementById('res-name').value;
    const phone = document.getElementById('res-phone').value;
    const note = document.getElementById('res-note').value;

    const bookingId = `RAI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const bookingRecord = {
      bookingId,
      service,
      date,
      time,
      name,
      phone,
      note,
      createdAt: new Date().toISOString(),
    };

    const existing = getStorage(STORAGE_KEYS.BOOKINGS, []);
    existing.unshift(bookingRecord);
    setStorage(STORAGE_KEYS.BOOKINGS, existing);

    document.getElementById('confirm-name').textContent = name;
    document.getElementById('confirm-phone').textContent = phone;
    document.getElementById('confirm-service').textContent = service;
    document.getElementById('confirm-datetime').textContent = `${date} (${time})`;
    document.getElementById('confirm-booking-id').textContent = bookingId;

    document.getElementById('modal-confirm')?.classList.remove('hidden');

    form.reset();
    if (dateInput) {
      dateInput.value = new Date().toISOString().split('T')[0];
    }
  });

  document.getElementById('btn-quick-reserve')?.addEventListener('click', () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('btn-mobile-reserve')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.add('hidden');
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// =============================================================================
// [6. MOBILE MENU & HEADER SCROLL]
// =============================================================================
function initNavigation() {
  const toggleBtn = document.getElementById('btn-mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.getElementById('main-header');

  toggleBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('shadow-md', 'bg-white/95');
    } else {
      header?.classList.remove('shadow-md', 'bg-white/95');
    }
  });

  // Filter Buttons in Lookbook
  document.querySelectorAll('#lookbook-filters .filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#lookbook-filters .filter-btn').forEach((b) => {
        b.classList.remove('active');
        b.classList.add('bg-white');
      });
      btn.classList.add('active');
      btn.classList.remove('bg-white');

      activeCategory = btn.dataset.category || 'all';
      renderLookbookGrid();
    });
  });
}

// =============================================================================
// [7. GSAP & SCROLLTRIGGER ANIMATIONS]
// =============================================================================
function initAnimations() {
  gsap.from('.hero-text-box', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
  });

  gsap.from('.hero-visual-box', {
    duration: 1.2,
    scale: 0.96,
    opacity: 0,
    delay: 0.2,
    ease: 'power3.out',
  });

  // Always keep cards visible and responsive
  gsap.set('.about-cards > div, #service .service-item', { opacity: 1, y: 0 });
}

// =============================================================================
// [INITIALIZATION]
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderIcons();
  initNavigation();
  initDiagnosisEngine();
  renderLookbookGrid();
  initModals();
  initReservationForm();
  initAnimations();
});

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
