# Elevator — Going Up 🛗

<img width="2486" height="1261" alt="image" src="https://github.com/user-attachments/assets/bc1f0810-9de6-4ff5-8f9b-5973d7bc145c" />

🌐 **Live demo:** https://kontsybko-elevator.netlify.app/

---

## ✨ About

An elevator-themed landing page with cinematic door animation. When the page loads, elevator doors slowly open revealing the content inside. Navigation between floors triggers a full door close → travel → open sequence.

Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

## 🎬 Features

- **Door animation** — smooth open/close with purple glow effect
- **Floor navigation** — ride between sections like a real elevator
- **Ding effect** — floor name appears on arrival
- **Custom cursor** with lag ring
- **Scroll reveal** animations on all sections
- **Purple aesthetic** — dark background with electric purple accents
- **Grid background** — subtle lines with radial mask

## 🗂 Structure

```
elevator/
├── index.html           # Main HTML
├── css/
│   ├── variables.css    # Design tokens & color palette
│   ├── base.css         # Reset, cursor, scroll reveal
│   ├── elevator.css     # Door animation, floor indicator, buttons
│   └── sections.css     # Hero, features, stats, CTA, footer
└── js/
    ├── elevator.js      # Door open/close logic & floor riding
    ├── scroll.js        # Floor tracking & scroll reveal
    └── main.js          # Cursor, init, event listeners
```

## 🚀 Run locally

No build step needed. Just open `index.html` in your browser or use any static server:

```bash
# VS Code Live Server, WebStorm built-in server, or:
npx serve .
```

## 🎨 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#06050d` | Main background |
| `--accent` | `#7c3aed` | Electric purple |
| `--accent2` | `#a78bfa` | Light purple |
| `--text` | `#f5f3ff` | Primary text |

## 📦 Tech Stack

**HTML · CSS · Vanilla JS · CSS Custom Properties · IntersectionObserver API**

---

Made by [Dmitry Kontsybko](https://github.com/Okbitsnok) — comment **CODE** to get the source 👇
