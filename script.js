// Typing love letter 💌
const text = `
Somewhere between late nights and quiet smiles,
you became my favorite thought.

Loving you feels calm.
It feels safe.
It feels like home.

If I had one rose for every time you crossed my mind,
the whole world would be in bloom tonight. 🌹
`;

let index = 0;
const speed = 45;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

// Button surprise
function showLove() {
  document.getElementById("surprise").innerHTML =
    "No matter where life takes us, my heart always finds its way back to you. 🖤🌙";
}

// ❤️ CHANGE THIS DATE
const loveDate = new Date("2026-01-09");

setInterval(() => {
  const now = new Date();
  const diff = now - loveDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("time").innerText =
    `${days} days, ${hours} hours, ${minutes} minutes`;
}, 1000);
