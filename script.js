
const lightLayer = document.getElementById("bokeh");
const lightColors = ["#d4af37", "#f5c542", "#ffd97a", "#7b2fbe", "#a855f7", "#c084fc"];


function random(min, max) {
  return Math.random() * (max - min) + min;
}


function makeLight(size, opacity, blur, moves) {
  const light = document.createElement("span");
  light.style.width = size + "px";
  light.style.height = size + "px";
  light.style.left = random(-5, 100) + "%";
  light.style.top = random(-5, 100) + "%";
  light.style.background = lightColors[Math.floor(random(0, lightColors.length))];
  light.style.opacity = opacity;
  light.style.filter = "blur(" + blur + "px)";

  if (moves) {
    
    light.style.setProperty("--dx", random(-60, 60) + "px");
    light.style.setProperty("--dy", random(-60, 60) + "px");
    light.style.setProperty("--t", random(14, 30) + "s");
  } else {
    light.style.animation = "none";
  }

  lightLayer.appendChild(light);
}


const isPhone = window.innerWidth < 700;
const bigLights = isPhone ? 14 : 30;
const sparkles = isPhone ? 40 : 100;

for (let i = 0; i < bigLights; i++) {
  makeLight(random(40, 180), random(0.1, 0.3), random(6, 14), true);
}

for (let i = 0; i < sparkles; i++) {
  makeLight(random(2, 5), random(0.5, 1), 0.5, false);
}

const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("site-nav");

menuButton.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);   
});

nav.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");

const watcher = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      navLinks.forEach(function (link) {
        const matches = link.getAttribute("href") === "#" + entry.target.id;
        link.setAttribute("aria-current", matches ? "true" : "false");
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });   

sections.forEach(function (section) {
  watcher.observe(section);
});

document.getElementById("year").textContent = new Date().getFullYear();
