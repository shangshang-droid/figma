:root{
  --bg:#12042a; --bg2:#2a0a5c; --violet:#7a35d6; --gold:#f5c32c;
  --text:#fff; --muted:#cbbbe8; --line:rgba(255,255,255,.28);
  --font:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{font-family:var(--font);color:var(--text);line-height:1.6;min-height:100vh;
  background:linear-gradient(180deg,#12032a 0%,#2a0a5c 55%,#4a1a80 100%) fixed}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
 
/* Bokeh background */
.bokeh{position:fixed;inset:0;overflow:hidden;z-index:-1;pointer-events:none}
.dot{position:absolute;border-radius:50%;filter:blur(1.5px);opacity:.55;
  animation:drift 18s ease-in-out infinite alternate}
.spark{position:absolute;width:3px;height:3px;border-radius:50%;background:var(--gold);opacity:.7}
@keyframes drift{to{transform:translate(30px,-40px)}}
 
/* Layout */
.wrap{width:min(1100px,100% - 48px);margin-inline:auto}
.view{display:none;padding:56px 0 80px}
.view.active{display:block}
.eyebrow{color:var(--gold);font-size:.78rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;margin-bottom:12px}
h1{font-size:clamp(2rem,4.6vw,3.4rem);line-height:1.12;font-weight:700;max-width:18em}
h1.caps{text-transform:uppercase}
h2{font-size:1.6rem;margin-bottom:24px}
h2.big{font-size:clamp(1.8rem,3vw,2.4rem)}
h2.huge{font-size:clamp(2.8rem,9.5vw,8rem);line-height:1;letter-spacing:-.035em;font-weight:700;margin:0}
h3{font-size:1.2rem;margin-bottom:8px}
.lead{color:var(--muted);max-width:34em;margin:20px 0 28px}
 
/* Nav */
.nav{position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;align-items:center;
  padding:18px max(24px,calc((100% - 1100px)/2));backdrop-filter:blur(10px);background:rgba(18,4,42,.55)}
.logo{font-weight:600;font-size:1.15rem}
#links{display:flex;gap:36px;align-items:center;font-size:1.05rem}
#links a:not(.pill):hover,#links a.current{color:var(--gold)}
.pill{border:2px solid var(--gold);color:var(--text);font-weight:600;padding:10px 26px;border-radius:99px}
.pill:hover{background:var(--gold);color:#12042a}
.menu-btn{display:none;background:none;border:1px solid var(--line);color:var(--text);
  padding:6px 14px;border-radius:99px;font:inherit;cursor:pointer}
 
/* Buttons */
.btns{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-block;background:var(--gold);color:#1b0a3a;font-weight:600;font-size:.9rem;
  padding:10px 22px;border-radius:99px;transition:transform .15s}
.btn:hover{transform:translateY(-2px)}
.btn.ghost{background:transparent;color:var(--text);border:1px solid var(--gold)}
 
/* Home */
.hero{padding:72px 0 64px}
.band{padding:48px 0}
 
/* Project card */
.project{display:grid;grid-template-columns:1.1fr 1fr;gap:40px;align-items:center;
  background:rgba(255,255,255,.05);border:1px solid var(--line);border-radius:20px;padding:24px}
.project p:not(.eyebrow){color:var(--muted);margin-bottom:20px}
.thumb{display:block;aspect-ratio:16/10;border-radius:12px;overflow:hidden;
  background:linear-gradient(135deg,#4b2a7d,#241047);border:1px solid var(--line)}
.thumb img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
.thumb:hover img{transform:scale(1.03)}
 
/* About */
.about{padding:80px 0 56px}
.big-lead{font-size:clamp(1.2rem,2.2vw,1.6rem);color:var(--text);max-width:28em}
.tags{display:flex;flex-wrap:wrap;gap:10px;list-style:none;padding:0}
.tags li{border:1px solid var(--line);padding:4px 16px;border-radius:99px;font-size:.85rem}
.skills-band{background:rgba(122,53,214,.22);padding:48px 0}
.icons{display:flex;gap:28px;flex-wrap:wrap}
.skill{width:64px;text-align:center;font-size:.72rem;color:var(--muted)}
.skill img{width:44px;height:44px;margin:0 auto 6px;border-radius:8px;object-fit:contain}
 
/* Contact */
.contact{padding:clamp(80px,16vh,170px) 0 clamp(120px,24vh,260px);display:grid;gap:32px;justify-items:start}
.mail{color:var(--gold);font-weight:600;font-size:clamp(1.3rem,2.6vw,2.2rem)}
.contact .btn{font-size:1.2rem;padding:18px 40px}
 
/* Case study */
.meta{display:flex;gap:48px;flex-wrap:wrap;margin-bottom:40px}
.meta dt{color:var(--gold);font-size:.75rem;font-weight:600}
.meta dd{margin:0}
.screens{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:20px;margin-bottom:56px;
  border-radius:16px;background:rgba(255,255,255,.05);border:1px solid var(--line);min-height:140px}
.screens img{border-radius:8px;border:1px solid var(--line)}
.three{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-bottom:56px}
.three p:not(.eyebrow){color:var(--muted);font-size:.92rem}
.steps{list-style:none;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}
.steps li{background:rgba(255,255,255,.05);border:1px solid var(--line);border-radius:14px;padding:18px}
.steps span{color:var(--gold);font-size:.75rem;font-weight:600}
.steps h4{margin:4px 0 6px}
.steps p{color:var(--muted);font-size:.85rem}
.cta-bar{background:rgba(0,0,0,.35);padding:28px 0;margin-top:40px}
.row{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
.cta-bar h3{margin:0}
 
/* Responsive */
@media(max-width:820px){
  .menu-btn{display:block}
  #links{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:flex-start;
    gap:16px;padding:20px 24px;background:rgba(18,4,42,.96)}
  #links.open{display:flex}
  .project,.three,.steps,.screens{grid-template-columns:1fr}
}
@media(prefers-reduced-motion:reduce){.dot{animation:none}html{scroll-behavior:auto}.btn,.thumb img{transition:none}}
 
/* Updated to match About / Work / Case study screens */
.row2{display:grid;grid-template-columns:minmax(120px,350px) 1fr;gap:40px}
.label{color:var(--gold);font-weight:600;letter-spacing:.2em;text-transform:uppercase;font-size:.95rem}
.about{padding:clamp(90px,16vh,170px) 0 clamp(60px,10vh,110px)}
.big-lead{font-size:clamp(1.3rem,2.6vw,2.2rem);line-height:1.5;margin:0 0 32px}
.tags li{border:2px solid var(--gold);padding:10px 26px;font-size:1.1rem}
.skills-band{padding:56px 0 120px}
.skill{width:84px;font-size:.7rem}.skill img{width:72px;height:72px;border-radius:4px;margin-bottom:8px}
.icons{gap:44px}
.head{display:flex;justify-content:space-between;align-items:baseline}
.idx{color:var(--muted);font-size:1.1rem}
.project{display:block;max-width:660px;background:none;border:0;padding:0}
.project .thumb{margin-bottom:28px;border-radius:16px}
.project h3{text-transform:uppercase;font-size:1.7rem;margin-bottom:12px}
.project p:not(.eyebrow){font-size:1.15rem;line-height:1.7}
.project .btn.ghost{color:var(--gold);font-weight:600}
/* CSS-drawn page previews, so the pictures work without exported images */
.mock{width:100%;height:100%;padding:14px 20px;text-align:left;background:linear-gradient(160deg,#2b0f55,#150530);overflow:hidden}
.mock .bar{display:flex;gap:5px;margin-bottom:12px}
.mock .bar i{width:7px;height:7px;border-radius:50%;background:var(--gold)}
.mock .bar i+i,.mock .bar i+i+i{background:var(--violet)}
.mock .mnav{display:flex;justify-content:space-between;font-size:.55rem;color:var(--muted)}
.mock h5{font-size:clamp(.85rem,1.9vw,1.4rem);line-height:1.2;margin:16px 0;max-width:11em}
.mock .mb{display:flex;gap:6px}
.mock .mb b{font-size:.55rem;padding:4px 10px;border-radius:99px;background:var(--gold);color:#1b0a3a}
.mock .mb b+b{background:none;border:1px solid var(--gold);color:var(--text)}
.mock .mm{color:var(--gold);font-size:.6rem;margin-bottom:10px}
.mock .card{display:flex;gap:10px;padding:14px;border-radius:8px;background:rgba(255,255,255,.07)}
.mock .card s{width:22px;height:22px;border-radius:50%;background:var(--violet)}
.mock .card s:first-child{background:#b79a82}
.screens{grid-template-columns:1fr 1.3fr 1fr;align-items:center;padding:56px 28px;gap:20px;
  background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(122,53,214,.3))}
.screens .mock{aspect-ratio:16/10;border-radius:12px;border:1px solid var(--line);height:auto}
@media(max-width:820px){.row2{grid-template-columns:1fr;gap:16px}.screens{grid-template-columns:1fr}}
