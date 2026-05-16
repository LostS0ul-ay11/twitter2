/* ── Tab switching ── */
const tabBtns     = document.querySelectorAll('.tab-btn');
const tabPanels   = document.querySelectorAll('.tab-panel');
const indicator   = document.querySelector('.tab-indicator');

function moveIndicator(btn) {
  const nav   = btn.closest('.tabs-nav');
  const navRect = nav.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();
  indicator.style.left  = (btnRect.left - navRect.left - 6) + 'px';
  indicator.style.width = btnRect.width + 'px';
}

function switchTab(targetId) {
  tabBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.tab === targetId);
    b.setAttribute('aria-selected', b.dataset.tab === targetId);
  });
  tabPanels.forEach(p => {
    const isActive = p.id === 'panel-' + targetId;
    p.classList.toggle('active', isActive);
    if (isActive) {
      // Re-trigger animation
      p.style.animation = 'none';
      requestAnimationFrame(() => {
        p.style.animation = '';
      });
    }
  });

  // Animate skill bars when skills tab opens
  if (targetId === 'skills') animateSkillBars();
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    moveIndicator(btn);
    switchTab(btn.dataset.tab);
  });
});

// Init indicator position
window.addEventListener('load', () => {
  const active = document.querySelector('.tab-btn.active');
  if (active) moveIndicator(active);
});

window.addEventListener('resize', () => {
  const active = document.querySelector('.tab-btn.active');
  if (active) moveIndicator(active);
});

/* ── Skill bar animation ── */
let skillsAnimated = false;
function animateSkillBars() {
  if (skillsAnimated) return;
  skillsAnimated = true;
  document.querySelectorAll('.skill-fill').forEach((bar, i) => {
    setTimeout(() => bar.classList.add('animated'), i * 100);
  });
}

/* ── Contact form ── */
function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-send');
  const msg = document.getElementById('form-success');
  btn.textContent = 'Enviando…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Mensagem enviada! ✅';
    msg.textContent = 'Obrigado! Entrarei em contato em breve.';
    e.target.reset();
    setTimeout(() => {
      btn.textContent = 'Enviar mensagem ✉️';
      btn.disabled = false;
      msg.textContent = '';
    }, 3500);
  }, 1200);
}

/* ── Footer year ── */
document.getElementById('footer-year').textContent = new Date().getFullYear();

/* ── Subtle parallax on glow orbs (mouse) ── */
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelector('.bg-glow-1').style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  document.querySelector('.bg-glow-2').style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`;
});
