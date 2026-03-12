/* ==============================================
   SERIUM · Script.js — Dynamic Interactions
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ========== LOADER ========== */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1200);
  });
  // Fallback
  setTimeout(() => loader.classList.add('hidden'), 3000);

  /* ========== CUSTOM CURSOR ========== */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 5}px,${my - 5}px)`;
  });

  (function animFollower() {
    fx += (mx - fx - 18) * 0.13;
    fy += (my - fy - 18) * 0.13;
    follower.style.transform = `translate(${fx}px,${fy}px)`;
    requestAnimationFrame(animFollower);
  })();

  document.querySelectorAll('a, button, .product-card, .gallery-item, .ing-item, .filter-btn')
    .forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('expand'); follower.classList.add('hide'); });
      el.addEventListener('mouseleave', () => { cursor.classList.remove('expand'); follower.classList.remove('hide'); });
    });

  /* ========== NAVBAR ========== */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ========== MOBILE MENU ========== */
  const menuBtn = document.getElementById('menu-btn');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn?.addEventListener('click', () => { mobileMenu.style.display = 'flex'; document.body.style.overflow = 'hidden'; });
  const closeMenu = () => { mobileMenu.style.display = 'none'; document.body.style.overflow = ''; };
  menuClose?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));

  /* ========== PARALLAX HERO ========== */
  const heroImg = document.querySelector('.parallax-img');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        if (heroImg && sy < window.innerHeight * 1.2) {
          heroImg.style.transform = `translateY(${sy * 0.3}px) scale(1.06)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ========== SCROLL REVEAL ========== */
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseFloat(entry.target.style.animationDelay || '0') * 1000;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  /* ========== COUNTER ANIMATION ========== */
  const counters = document.querySelectorAll('.counter');
  let countersRan = false;
  const runCounters = () => {
    if (countersRan) return;
    countersRan = true;
    counters.forEach(c => {
      const target = parseInt(c.dataset.target);
      let current = 0;
      const step = target / 70;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        c.textContent = target >= 10000
          ? (current >= target ? target.toLocaleString() : Math.floor(current).toLocaleString()) + '+'
          : Math.floor(current) + (current >= target ? '+' : '');
        if (current >= target) clearInterval(timer);
      }, 22);
    });
  };
  if (counters.length) {
    const cObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { runCounters(); cObs.disconnect(); }
    }, { threshold: 0.5 });
    cObs.observe(counters[0]);
  }

  /* ========== FLOATING PARTICLES ========== */
  const hero = document.getElementById('hero');
  if (hero) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.style.cssText = `
        position:absolute;
        width:${2 + Math.random() * 3}px;
        height:${2 + Math.random() * 3}px;
        border-radius:50%;
        background:rgba(212,168,66,${0.15 + Math.random() * 0.4});
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        pointer-events:none;
        animation:float ${5 + Math.random() * 7}s ease-in-out ${Math.random() * 5}s infinite;
        z-index:2;
      `;
      hero.appendChild(p);
    }
  }

  /* ========== PRODUCT CARD 3D TILT ========== */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 12;
      card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-6px)`;
      card.style.transition = 'transform 0.08s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.4s, box-shadow 0.4s';
    });
  });

  /* ========== GALLERY 3D TILT ========== */
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mousemove', e => {
      const r = item.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 8;
      item.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.01)`;
      item.style.transition = 'transform 0.08s ease';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
      item.style.transition = 'transform 0.5s ease';
    });
  });

  /* ========== PRODUCT FILTER TABS ========== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      productCards.forEach(card => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;

        if (show) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.display = '';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = '';
          }, 30);
        } else {
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => { card.style.display = 'none'; }, 310);
        }
      });
    });
  });

  /* ========== ACTIVE NAV HIGHLIGHT ========== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const sObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => {
          const active = l.getAttribute('href') === `#${id}`;
          l.classList.toggle('active', active);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sObs.observe(s));

  /* ========== SUBSCRIBE FORM ========== */
  const subBtn = document.getElementById('sub-btn');
  const subInput = document.getElementById('sub-email');
  subBtn?.addEventListener('click', () => {
    const email = subInput.value.trim();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      subInput.value = '';
      subInput.placeholder = '✓ Welcome to the world of Serium';
      subInput.style.borderColor = 'rgba(212,168,66,0.6)';
      subBtn.textContent = 'Subscribed ✓';
      subBtn.style.background = 'rgba(212,168,66,0.3)';
      subBtn.style.color = '#f0d080';
      setTimeout(() => {
        subInput.placeholder = 'Your email address';
        subInput.style.borderColor = ''; subBtn.textContent = 'Subscribe';
        subBtn.style.background = ''; subBtn.style.color = '';
      }, 4000);
    } else {
      subInput.style.borderColor = 'rgba(255,80,80,0.5)';
      subInput.style.boxShadow = '0 0 15px rgba(255,50,50,0.15)';
      subInput.placeholder = 'Please enter a valid email ✗';
      setTimeout(() => {
        subInput.style.borderColor = ''; subInput.style.boxShadow = '';
        subInput.placeholder = 'Your email address';
      }, 2500);
    }
  });

  /* ========== WISHLIST HEART TOGGLE ========== */
  document.querySelectorAll('.product-wish-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const active = btn.textContent === '♥';
      btn.textContent = active ? '♡' : '♥';
      btn.style.color = active ? '' : '#d4a842';
    });
  });

  console.log('%c✦ SERIUM · AMOR EXOTIC ✦', 'color:#d4a842;font-size:18px;font-family:serif;font-style:italic');
  console.log('%cAroma of Paris — Where Scent Becomes Soul', 'color:#8c6410;font-size:11px');
});