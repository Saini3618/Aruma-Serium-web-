import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const targetId = hash.replace('#', '');
    const scrollToHashTarget = () => {
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return false;

      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const top = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      return true;
    };

    if (scrollToHashTarget()) return;

    const retryTimer = window.setTimeout(scrollToHashTarget, 80);
    return () => window.clearTimeout(retryTimer);
  }, [hash, pathname]);

  useEffect(() => {
    /* ========== SCROLL TO TOP ON ROUTE CHANGE ========== */
    if (!hash) {
      window.scrollTo(0, 0);
    }

    /* ========== LOADER ========== */
    const loader = document.getElementById('loader');
    const hideLoader = () => setTimeout(() => loader?.classList.add('hidden'), 1200);

    // On mount, if it's not hidden, hide it.
    if (loader && !loader.classList.contains('hidden')) {
      setTimeout(() => loader.classList.add('hidden'), 1500);
    }

    /* ========== MOBILE MENU ========== */
    const menuBtn = document.getElementById('menu-btn');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    const openMenu = () => {
      mobileMenu?.classList.remove('hidden');
      mobileMenu?.classList.add('flex');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      mobileMenu?.classList.add('hidden');
      mobileMenu?.classList.remove('flex');
      document.body.style.overflow = '';
    };

    menuBtn?.addEventListener('click', openMenu);
    menuClose?.addEventListener('click', closeMenu);
    mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    /* ========== CUSTOM CURSOR (desktop only) ========== */
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (isTouchDevice) {
      if (cursor) cursor.style.display = 'none';
      if (follower) follower.style.display = 'none';
      document.body.style.cursor = 'auto';
    }

    if (!cursor || !follower || isTouchDevice) {
      /* skip cursor setup on touch */
      /* but still run rest of the effect */
      const navbarEl = document.getElementById('navbar');
      const scrollProgressEl = document.getElementById('scroll-progress');
      const onScrollFallback = () => {
        const sy = window.scrollY;
        navbarEl?.classList.toggle('scrolled', sy > 60);
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (sy / height) * 100;
        if (scrollProgressEl) scrollProgressEl.style.width = scrolled + '%';
      };
      window.addEventListener('scroll', onScrollFallback, { passive: true });
      const revealElsFallback = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
      const revealObsFallback = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.style.animationDelay || '0') * 1000;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            revealObsFallback.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      revealElsFallback.forEach(el => revealObsFallback.observe(el));
      return () => {
        window.removeEventListener('scroll', onScrollFallback);
        revealObsFallback.disconnect();
        menuBtn?.removeEventListener('click', openMenu);
        menuClose?.removeEventListener('click', closeMenu);
      };
    }

    let mx = 0, my = 0, fx = 0, fy = 0;
    let followerRafId = null;

    const onMouseMove = e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.transform = `translate(${mx - 5}px,${my - 5}px)`;
    };
    document.addEventListener('mousemove', onMouseMove);

    const animFollower = () => {
      if (!document.hidden) {
        fx += (mx - fx - 18) * 0.13;
        fy += (my - fy - 18) * 0.13;
        follower.style.transform = `translate(${fx}px,${fy}px)`;
      }
      followerRafId = requestAnimationFrame(animFollower);
    };
    followerRafId = requestAnimationFrame(animFollower);

    const updateInteractions = () => {
      document.querySelectorAll('a, button, .product-card, .gallery-item, .ing-item, .filter-btn, .bulk-category-card')
        .forEach(el => {
          el.addEventListener('mouseenter', () => { cursor.classList.add('expand'); follower.classList.add('hide'); });
          el.addEventListener('mouseleave', () => { cursor.classList.remove('expand'); follower.classList.remove('hide'); });
        });
    };
    updateInteractions();

    /* ========== NAVBAR & SCROLL PROGRESS ========== */
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const onScroll = () => {
      const sy = window.scrollY;
      navbar?.classList.toggle('scrolled', sy > 60);
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (sy / height) * 100;
      if (scrollProgress) scrollProgress.style.width = scrolled + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });

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

    /* ========== CLEANUP ========== */
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      if (followerRafId) cancelAnimationFrame(followerRafId);
      revealObs.disconnect();
      menuBtn?.removeEventListener('click', openMenu);
      menuClose?.removeEventListener('click', closeMenu);
    };
  }, [pathname]);

  return (
    <>
      <div id="scroll-progress"></div>
      <div id="cursor"></div>
      <div id="cursor-follower"></div>

      {/* Global aura blobs */}
      <div className="aura-container">
        <div className="aura-blob silver" style={{ top: '-10%', left: '-10%' }}></div>
        <div className="aura-blob gold" style={{ bottom: '-10%', right: '-10%', animationDelay: '-5s', scale: '0.8' }}></div>
      </div>

      <Loader />
      <Navbar />
      <MobileMenu />

      <main className="relative z-10 w-full min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}
