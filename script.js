const views = document.querySelectorAll('.view');
const links = document.querySelectorAll('#links a:not(.pill)');
const nav = document.getElementById('links');
const menuBtn = document.querySelector('.menu-btn');
 
function show() {
  const id = location.hash.slice(1) || 'home';
  const target = document.getElementById(id) || document.getElementById('home');
  views.forEach(v => v.classList.toggle('active', v === target));
  links.forEach(a => a.classList.toggle('current', a.getAttribute('href') === '#' + target.id));
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', show);
show();
 
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
 
// Bokeh background: soft purple and gold circles plus tiny sparks
const bokeh = document.getElementById('bokeh');
const colors = ['#8a3ff0', '#6a2cc4', '#b25cff', '#f5c32c'];
for (let i = 0; i < 18; i++) {
  const d = document.createElement('div');
  const size = 60 + Math.random() * 180;
  d.className = 'dot';
  d.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;
    background:radial-gradient(circle,${colors[i % colors.length]}aa,transparent 70%);
    animation-delay:${-Math.random() * 18}s;animation-duration:${14 + Math.random() * 12}s`;
  bokeh.appendChild(d);
}
for (let i = 0; i < 40; i++) {
  const s = document.createElement('div');
  s.className = 'spark';
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 100 + '%';
  s.style.opacity = 0.2 + Math.random() * 0.6;
  bokeh.appendChild(s);
}
