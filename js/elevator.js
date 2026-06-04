// ── Elevator Door Animation ──

export function initElevator() {
  const overlay   = document.getElementById('elevator-overlay');
  const indicator = document.getElementById('floor-indicator');
  const buttons   = document.getElementById('floor-buttons');

  setTimeout(() => {
    const ding = document.createElement('div');
    ding.className = 'ding-text';
    ding.textContent = '✦  lobby floor  ✦';
    document.body.appendChild(ding);
    setTimeout(() => ding.remove(), 2000);

    overlay.classList.add('elevator-open');

    setTimeout(() => {
      overlay.style.pointerEvents = 'none';
      indicator.classList.add('visible');
      buttons.classList.add('visible');
    }, 1800);

  }, 800);
}

// ── Ride to floor — full close → scroll → full open ──
export function rideTo(floorId) {
  const overlay = document.getElementById('elevator-overlay');
  const CLOSE_DURATION = 1600; // must match --door-speed in ms
  const OPEN_DURATION  = 1600;

  // 1. Block interaction
  overlay.style.pointerEvents = 'all';

  // 2. Close doors
  overlay.classList.remove('elevator-open');

  // 3. Wait until fully closed, THEN scroll instantly
  setTimeout(() => {
    document.getElementById(floorId).scrollIntoView({ behavior: 'instant' });

    // 4. Small pause so user feels the "arrival"
    setTimeout(() => {
      // Show floor ding
      const ding = document.createElement('div');
      ding.className = 'ding-text';
      const labels = {
        'floor-1': '✦  lobby  ✦',
        'floor-2': '✦  floor 2  ✦',
        'floor-3': '✦  floor 3  ✦',
        'floor-4': '✦  rooftop  ✦',
      };
      ding.textContent = labels[floorId] || '✦';
      document.body.appendChild(ding);
      setTimeout(() => ding.remove(), 2000);

      // 5. Open doors
      overlay.classList.add('elevator-open');

      // 6. Release interaction after fully open
      setTimeout(() => {
        overlay.style.pointerEvents = 'none';
      }, OPEN_DURATION);

    }, 200); // short pause at closed state

  }, CLOSE_DURATION); // wait for full close
}
