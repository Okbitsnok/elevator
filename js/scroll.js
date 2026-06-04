// ── Scroll & Floor Tracking ──

const floors = [
  { id: 'floor-1', num: 'L',  label: 'Lobby' },
  { id: 'floor-2', num: '2',  label: 'Features' },
  { id: 'floor-3', num: '3',  label: 'Stats' },
  { id: 'floor-4', num: 'R',  label: 'Rooftop' },
];

export function initScroll() {
  const numEl   = document.getElementById('current-floor-num');
  const labelEl = document.getElementById('current-floor-label');
  const btns    = document.querySelectorAll('.floor-btn');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const floor = floors.find(f => f.id === entry.target.id);
        if (!floor) return;

        // Update indicator
        numEl.textContent   = floor.num;
        labelEl.textContent = floor.label;

        // Update active button
        btns.forEach(b => b.classList.toggle('active', b.dataset.floor === floor.id));
      }
    });
  }, { threshold: 0.5 });

  floors.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) observer.observe(el);
  });
}

// ── Scroll Reveal ──
export function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io  = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}
