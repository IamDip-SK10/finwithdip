
// ── NAVBAR SCROLL ──
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  if (!nb) return;
  nb.classList.toggle('scrolled', window.scrollY > 40);
});

// ── ACTIVE NAV LINK ──

document.addEventListener('DOMContentLoaded', () => {

  const currentUrl = window.location.href;

  document.querySelectorAll('.nav-link').forEach(link => {

    const linkUrl = link.getAttribute('href');

    if(currentUrl.includes(linkUrl)){

      link.classList.add('active');

    }

  });

});

// ── PROGRESS BAR ANIMATE ON LOAD ──
function animateBars() {
  document.querySelectorAll('.prog-fill[data-val]').forEach(el => {
    setTimeout(() => { el.style.width = el.dataset.val + '%'; }, 200);
  });
}
window.addEventListener('DOMContentLoaded', animateBars);

// ── INTERSECTION OBSERVER FADE-UP ──
window.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeUp 0.6s ease forwards';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-on-scroll').forEach(el => {
    el.style.opacity = '0';
    obs.observe(el);
  });
});

// ── COUNTER ANIMATION ──
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const step = target / 40;
  const timer = setInterval(() => {
    if (start >= target) { el.textContent = target + suffix; clearInterval(timer); return; }
    start += step;
    el.textContent = Math.floor(start) + suffix;
  }, 30);
}
