# 📼 Vintage Cassette Stopwatch

A sleek, interactive, and retro-inspired Stopwatch Web Application built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed with a vintage cassette tape aesthetic, custom color palette, realistic mechanical details, and animated spinning reels.
 <img width="606" height="378" alt="Screenshot 2026-10-23 212406" src="https://github.com/user-attachments/assets/5968a187-812d-4388-a466-679d2a64c649" />


---

## ✨ Features

* **📼 Retro Cassette Interface**: Authentic audio cassette design complete with corner screws, label texture, trapezoid tape notch, and a center display window.
* **🔄 Animated Spinning Reels**: Dual cassette sprockets that rotate dynamically while the timer is running.
* **⏱️ High Precision Timing**: Built using timestamp differentials (`Date.now()`) to prevent timing drift, accurate down to **1/100th of a second (centiseconds)**.
* **🚩 Lap Tracking System**: Record unlimited lap split times, logged sequentially inside a vintage scrollable history card.
* **🎨 Custom Color Palette**: Hand-picked earthy vintage tones:
  * **Vintage Coin** (`#7A6B5E`) – Main Casing
  * **Pine Tree** (`#292E1E`) – Background & Screen
  * **Dark Oak** (`#3D2B1D`) – Secondary Borders & Accents
  * **Deep Burgundy** (`#401216`) – Action Highlights
* **📱 Fully Responsive**: Scales smoothly for desktop, tablet, and mobile browsers.

---

## 🛠️ Tech Stack

* **HTML5**: Semantic markup structuring the cassette body, controls, and lap display.
* **CSS3**: Custom CSS variables, Flexbox layout, inset box-shadows, and keyframe rotation animations (`@keyframes`).
* **JavaScript (ES6+)**: Event listeners, interval timing, state management, and dynamic DOM manipulation.

---

## 📂 Project Structure

```text
cassette-stopwatch/
│
├── index.html     # Structural markup for the cassette body & controls
├── style.css      # Custom styling, animations, and vintage color palette
├── script.js     # Stopwatch logic, formatting, and DOM updates
└── README.md      # Project documentation
