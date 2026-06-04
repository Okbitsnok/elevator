import { initElevator, rideTo } from './elevator.js';
import { initScroll, initReveal } from './scroll.js';

// ── Cursor ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx=0, my=0, rx=0, ry=0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function loop() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

// ── Floor buttons ──
document.querySelectorAll('.floor-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    rideTo(btn.dataset.floor);
  });
});

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initElevator();
  initScroll();
  initReveal();
});
