import { h, label } from './_helpers.js';

export default { title: 'Components' };

export const SectionHead = () => h(`
  <div style="padding:8px">
    <div class="eyebrow" style="font-family:var(--font-display);font-weight:600;font-size:16px;letter-spacing:.06em;color:var(--blue-500)">Our Solutions</div>
    <h2 style="font-family:var(--font-display);font-weight:600;font-size:var(--fs-h2);line-height:1.05;letter-spacing:-.02em;color:var(--text-display);margin-top:14px">
      Where Cloud, Data, and AI converge
    </h2>
    <p style="font-size:var(--fs-lede);line-height:var(--lh-lede);color:var(--text-mid);max-width:64ch;margin-top:20px">
      The eyebrow names the section, the title carries the idea, the lede is one sentence.
      Always in this order, always these three sizes.
    </p>
  </div>
`);

export const LinkArrow = () => h(`
  <div style="padding:8px;display:flex;gap:40px;align-items:center">
    <a href="#" style="color:var(--text-hi);text-decoration:none;font-weight:600;font-size:14px;display:inline-flex;align-items:center;gap:10px;transition:color .15s"
       onmouseover="this.style.color='var(--blue-300)';this.querySelector('span').style.transform='translateX(4px)'"
       onmouseout="this.style.color='var(--text-hi)';this.querySelector('span').style.transform='none'">
      Explore our products
      <span style="display:inline-grid;place-items:center;width:28px;height:28px;background:var(--blue-500);color:#04121C;font-weight:800;transition:transform .2s">&rarr;</span>
    </a>
    <span style="font:400 12px var(--font-body);color:var(--text-low)">hover me — the tile slides 4px</span>
  </div>
`);

export const ButtonSolid = () => h(`
  <div style="padding:8px">
    <a href="#" style="display:inline-flex;align-items:center;gap:10px;background:var(--blue-500);color:#04121C;font-weight:700;font-size:15px;text-decoration:none;padding:14px 26px;transition:background .2s,box-shadow .2s,transform .2s"
       onmouseover="this.style.background='var(--blue-300)';this.style.boxShadow='0 0 40px var(--glow)';this.style.transform='translateY(-2px)'"
       onmouseout="this.style.background='var(--blue-500)';this.style.boxShadow='none';this.style.transform='none'">
      Take a free GCC assessment <span>&rarr;</span>
    </a>
  </div>
`);

export const Card = () => h(`
  <div style="padding:8px;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">
    ${[['Real-Time Monitoring','Integrate multi-OEM SCADA data for centralized, real-time asset monitoring.'],
       ['Digital Twin','Mirror renewable assets in real time, driving innovation through digital twin technology.'],
       ['Anomaly Detection','Continuously monitor asset health and anticipate failures with predictive alerts.']]
      .map(([t,c]) => `
      <article style="background:var(--bg-card);border:1px solid var(--border);padding:26px 24px;transition:border-color .3s,box-shadow .3s,background .3s"
        onmouseover="this.style.borderColor='var(--border-blue)';this.style.boxShadow='0 0 34px var(--glow)';this.style.background='var(--bg-hover)'"
        onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='none';this.style.background='var(--bg-card)'">
        <h3 style="font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);line-height:1.25;letter-spacing:-.01em;color:var(--text-hi);margin:0">${t}</h3>
        <p style="font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);max-width:34ch;margin-top:10px">${c}</p>
      </article>`).join('')}
  </div>
`);

export const AccentRule = () => h(`
  <div style="padding:8px">
    <div style="width:44px;height:4px;background:var(--blue-500)"></div>
    <div style="font-size:var(--fs-lede);line-height:var(--lh-lede);color:var(--text-mid);margin-top:26px;max-width:46ch">
      Always 44×4px, always --blue-500. Sits above a figure or below an eyebrow.
    </div>
  </div>
`);

export const LineArtIcon = () => h(`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:24px">
      Hairline strokes on a large viewBox. #FFFFFF primary, #A5A5A5 secondary, and exactly
      <strong style="color:var(--text-hi)">one</strong> #1294D7 filled accent per icon. Hover to see
      the dashed connectors stream.
    </div>
    <div class="iconrow" style="display:flex;gap:34px">
      ${[
        '<rect x="4.5" y="10.5" width="55" height="36" stroke="#FFFFFF"/><path d="M4.5 17.5h55" stroke="#A5A5A5"/><path d="M10 39l10-9 7 6 9-15 8 10 9-7" stroke="#FFFFFF"/><path d="M10 53h44" stroke="#1294D7"/><circle cx="36" cy="21" r="3.4" fill="#1294D7"/>',
        '<ellipse cx="32" cy="13.5" rx="16.5" ry="6" stroke="#FFFFFF"/><path d="M15.5 13.5v37c0 3.3 7.4 6 16.5 6s16.5-2.7 16.5-6v-37" stroke="#FFFFFF"/><path d="M15.5 25.8c0 3.3 7.4 6 16.5 6s16.5-2.7 16.5-6" stroke="#1294D7"/><path d="M15.5 38.1c0 3.3 7.4 6 16.5 6s16.5-2.7 16.5-6" stroke="#A5A5A5"/>',
        '<circle cx="12" cy="14" r="5" stroke="#A5A5A5"/><circle cx="52" cy="14" r="5" stroke="#A5A5A5"/><circle cx="12" cy="50" r="5" stroke="#A5A5A5"/><circle cx="52" cy="50" r="5" stroke="#A5A5A5"/><path d="M16 18l10 10M48 18L38 28M16 46l10-10M48 46L38 36" stroke="#1294D7"/><circle cx="32" cy="32" r="9" fill="#1294D7"/>',
      ].map(p => `<div style="width:72px;height:72px"><svg viewBox="0 0 64 64" fill="none" stroke-width="1" style="width:100%;height:100%">${p}</svg></div>`).join('')}
    </div>
    <style>
      .iconrow:hover svg [stroke="#1294D7"]{stroke-dasharray:6 4;animation:flow 1s linear infinite}
      @keyframes flow{to{stroke-dashoffset:-20}}
    </style>
  </div>
`);

export const ScrollReveal = () => {
  const el = h(`
    <div style="padding:8px">
      <button style="background:var(--blue-500);color:#04121C;border:none;font:700 14px var(--font-body);padding:12px 22px;cursor:pointer">Replay</button>
      <div class="row" style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:24px">
        ${[0,1,2].map(i => `
        <div class="rv" style="opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.2,.6,.2,1),transform .7s cubic-bezier(.2,.6,.2,1);transition-delay:${i*0.12}s;background:var(--bg-card);border:1px solid var(--border);padding:26px">
          <div style="font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);color:var(--text-hi)">0${i+1}</div>
          <p style="font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);margin-top:10px">Staggered by .12s.</p>
        </div>`).join('')}
      </div>
    </div>
  `);
  const play = () => {
    const items = el.querySelectorAll('.rv');
    items.forEach(i => { i.style.opacity = '0'; i.style.transform = 'translateY(28px)'; });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      items.forEach(i => { i.style.opacity = '1'; i.style.transform = 'none'; });
    }));
  };
  el.querySelector('button').addEventListener('click', play);
  requestAnimationFrame(play);
  return el;
};
