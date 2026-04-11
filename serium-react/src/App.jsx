import { useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Collection from './components/Collection';
import Features from './components/Features';
import Ingredients from './components/Ingredients';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    /* ========== PARALLAX HERO ========== */
    const heroImg = document.querySelector('.parallax-img');
    const heroSection = document.getElementById('hero');
    let currentY = 0, targetY = 0;
    let parallaxRafId = null;
    let heroVisible = true;
    if (heroImg && heroSection) {
      const lerp = (start, end, factor) => start + (end - start) * factor;
      const animateParallax = () => {
        if (heroVisible && !document.hidden) {
          targetY = window.scrollY;
          currentY = lerp(currentY, targetY, 0.08);
          if (currentY < window.innerHeight * 1.5) {
            heroImg.style.transform = `translate3d(0, ${currentY * 0.35}px, 0) scale(${1.05 + currentY * 0.0001})`;
          }
        }
        parallaxRafId = requestAnimationFrame(animateParallax);
      };
      const heroObs = new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }, { threshold: 0 });
      heroObs.observe(heroSection);
      parallaxRafId = requestAnimationFrame(animateParallax);
    }

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
      for (let i = 0; i < 12; i++) {
        const p = document.createElement('div');
        p.style.cssText = `position:absolute;width:${2 + Math.random() * 3}px;height:${2 + Math.random() * 3}px;border-radius:50%;background:rgba(212,168,66,${0.15 + Math.random() * 0.4});left:${Math.random() * 100}%;top:${Math.random() * 100}%;pointer-events:none;animation:float ${5 + Math.random() * 7}s ease-in-out ${Math.random() * 5}s infinite;z-index:2;`;
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
      if (email && /\\S+@\\S+\\.\\S+/.test(email)) {
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

    return () => {
      if (parallaxRafId) cancelAnimationFrame(parallaxRafId);
      sObs.disconnect();
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <Marquee />
      <About />
      <Collection />
      <Features />
      <Ingredients />
      <Gallery />
      <Clients />
      <Contact />
    </Layout>
  );
}
