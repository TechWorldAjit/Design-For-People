// Theme toggle
const toggle = document.querySelector('.theme-toggle');
toggle?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('light');
  // Switch variables by toggling class (optional: you can implement a full theme map)
});

// Scroll reveal using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Subtle tilt effect for cards
function addTilt(el) {
  const strength = 40; // degrees

  // Smooth transition
  el.style.transition = 'transform 0.05s ease-in-out';

  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Flip the signs to make tilt opposite
    const rx = ((y / rect.height) - 0.5) * strength;   // removed the minus
    const ry = ((x / rect.width) - 0.5) * -strength;   // flipped sign

    el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  });
}


document.querySelectorAll('.tilt').forEach(addTilt);

// Magnetic button effect
document.querySelectorAll('.magnetic').forEach(btn => {
  const strength = 24;
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)';
  });
});

// Parallax on hero neon ring
const neon = document.querySelector('.neon-ring');
window.addEventListener('mousemove', (e) => {
  if (!neon) return;
  const { innerWidth: w, innerHeight: h } = window;
  const x = (e.clientX / w - 0.5) * 20;
  const y = (e.clientY / h - 0.5) * 20;
  neon.style.transform = `translate(${x}px, ${y}px)`;
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
