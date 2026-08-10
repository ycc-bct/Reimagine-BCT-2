import{h as l}from"./helpers-CtHPbzQ_.js";const C={title:"Foundations/Responsive"},i=()=>{const e="bsf-"+Math.random().toString(36).slice(2,8),a=l(`
    <div id="${e}" style="padding:8px">
      <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch">
        The three body roles keep their names at every width — only their values change. Switch the
        viewport toolbar between a phone and a desktop and watch the readout: below 768px each role
        gets a floor, because light-on-dark copy held at arm's length stops being comfortable at the
        desktop sizes.
      </div>
      <div class="readout" style="font:600 13px var(--font-body);color:var(--brand);margin-top:18px"></div>
      <div style="margin-top:26px;border-top:1px solid var(--border);padding-top:26px">
        <div class="r-lede" style="font-size:var(--fs-lede);line-height:var(--lh-lede);color:var(--text-mid);max-width:64ch">
          <strong style="color:var(--text-hi)">--fs-lede</strong> — the paragraph under a section title.
          Integrating cloud, data, and AI to accelerate growth, and turn technology ecosystems into a
          competitive advantage.
        </div>
        <div class="r-body" style="font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);max-width:34ch;margin-top:22px">
          <strong style="color:var(--text-hi)">--fs-body</strong> — copy inside a card or column.
          Cloud provides the foundation for flexible, secure, and cost-efficient operations.
        </div>
        <div class="r-small" style="font-size:var(--fs-small);line-height:var(--lh-small);color:var(--text-low);margin-top:22px">
          <strong style="color:var(--text-mid)">--fs-small</strong> — captions, meta, dense descriptions.
        </div>
      </div>
    </div>
  `),t=()=>{const r=document.getElementById(e);if(!r)return;const c=r.querySelector(".readout");if(!c)return;const p=T=>getComputedStyle(r.querySelector(T)).fontSize,v=Math.round(r.getBoundingClientRect().width),B=v<768?"mobile tier (<768)":"desktop tier (≥768)";c.textContent=`${v}px — ${B} · lede ${p(".r-lede")} · body ${p(".r-body")} · small ${p(".r-small")}`},o=()=>{const r=document.getElementById(e);if(!r){setTimeout(o,50);return}t(),new ResizeObserver(t).observe(r)};return setTimeout(o,0),a},n=()=>l(`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:24px">
      Every interactive element is at least 44px tall on touch widths. The arrow link is the usual
      offender — its text is only ~20px tall, so it needs an explicit minimum.
    </div>
    <div style="display:grid;gap:26px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
      <div>
        <div style="font:600 11px var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:#FF6B6B;margin-bottom:12px">Too small — 28px</div>
        <div style="position:relative;outline:1px dashed rgba(255,107,107,.5)">
          <a href="#" style="display:inline-flex;align-items:center;gap:10px;height:28px;color:var(--text-hi);text-decoration:none;font:600 14px var(--font-body)">
            Explore our products
            <span style="display:grid;place-items:center;width:28px;height:28px;background:var(--blue-500);color:#04121C;font-weight:800">&rarr;</span>
          </a>
        </div>
      </div>
      <div>
        <div style="font:600 11px var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:#5FBEEA;margin-bottom:12px">Correct — 44px</div>
        <div style="position:relative;outline:1px dashed rgba(95,190,234,.5)">
          <a href="#" style="display:inline-flex;align-items:center;gap:10px;min-height:44px;color:var(--text-hi);text-decoration:none;font:600 14px var(--font-body)">
            Explore our products
            <span style="display:grid;place-items:center;width:32px;height:32px;background:var(--blue-500);color:#04121C;font-weight:800">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
`),d=()=>l(`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:24px">
      A row of cards that would become unreadably narrow becomes a horizontal snap rail instead. The
      row bleeds to the edge so a cut-off card signals the swipe. It reverts to a grid once the
      columns can hold their width.
    </div>
    <div style="display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;margin-inline:-8px;padding-inline:8px;scrollbar-width:none">
      ${["We build, run, and improve it","Platform-led, not people-led","AI in the core, not layered on","Proven at the highest stakes","Engineering accountability"].map(e=>`
        <article style="flex:0 0 78%;max-width:300px;scroll-snap-align:start;background:var(--bg-card);border:1px solid var(--border);padding:24px">
          <h3 style="font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);line-height:1.25;color:var(--text-hi);margin:0">${e}</h3>
          <p style="font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);margin-top:12px">Full operational ownership of mission-critical infrastructure.</p>
        </article>`).join("")}
    </div>
    <div style="font:400 13.5px var(--font-body);color:var(--text-low);margin-top:14px">Swipe for more &rarr;</div>
  </div>
`),s=()=>{const e=[["Navigation","drawer","drawer","drawer","inline","inline"],["Capability cards","1","2","2","3","3"],["Product cards","1","2","2","3","4"],["Stats","1","3","3","3","3"],["Footer","1","2","2","3","3"],["Why BCT","swipe rail","swipe rail","swipe rail","grid","grid"]],a=(t,o)=>`<td style="padding:12px 14px;border-bottom:1px solid var(--border);font:${o?"600":"400"} 13px var(--font-body);color:${o?"var(--text-hi)":t==="drawer"||t==="swipe rail"?"var(--blue-300)":"var(--text-mid)"}">${t}</td>`;return l(`
    <div style="padding:8px">
      <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:22px">
        The navigation stays a drawer through 768 on purpose — five items plus the locale do not fit
        comfortably inline at tablet portrait.
      </div>
      <div style="overflow-x:auto">
        <table style="border-collapse:collapse;min-width:560px;width:100%">
          <thead><tr>
            ${["","<640","640","768","1024","1280+"].map(t=>`<th style="text-align:left;padding:12px 14px;border-bottom:1px solid var(--border);font:600 11px var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:var(--text-low)">${t}</th>`).join("")}
          </tr></thead>
          <tbody>${e.map(t=>`<tr>${a(t[0],!0)}${t.slice(1).map(o=>a(o)).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `)};var h,x,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  // timer kick-off + resolve by id — see the note in Typography.stories.js
  const uid = 'bsf-' + Math.random().toString(36).slice(2, 8);
  const el = h(\`
    <div id="\${uid}" style="padding:8px">
      <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch">
        The three body roles keep their names at every width — only their values change. Switch the
        viewport toolbar between a phone and a desktop and watch the readout: below 768px each role
        gets a floor, because light-on-dark copy held at arm's length stops being comfortable at the
        desktop sizes.
      </div>
      <div class="readout" style="font:600 13px var(--font-body);color:var(--brand);margin-top:18px"></div>
      <div style="margin-top:26px;border-top:1px solid var(--border);padding-top:26px">
        <div class="r-lede" style="font-size:var(--fs-lede);line-height:var(--lh-lede);color:var(--text-mid);max-width:64ch">
          <strong style="color:var(--text-hi)">--fs-lede</strong> — the paragraph under a section title.
          Integrating cloud, data, and AI to accelerate growth, and turn technology ecosystems into a
          competitive advantage.
        </div>
        <div class="r-body" style="font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);max-width:34ch;margin-top:22px">
          <strong style="color:var(--text-hi)">--fs-body</strong> — copy inside a card or column.
          Cloud provides the foundation for flexible, secure, and cost-efficient operations.
        </div>
        <div class="r-small" style="font-size:var(--fs-small);line-height:var(--lh-small);color:var(--text-low);margin-top:22px">
          <strong style="color:var(--text-mid)">--fs-small</strong> — captions, meta, dense descriptions.
        </div>
      </div>
    </div>
  \`);
  const read = () => {
    const scope = document.getElementById(uid);
    if (!scope) return;
    const out = scope.querySelector('.readout');
    if (!out) return;
    const g = s => getComputedStyle(scope.querySelector(s)).fontSize;
    const w = Math.round(scope.getBoundingClientRect().width);
    const tier = w < 768 ? 'mobile tier (<768)' : 'desktop tier (≥768)';
    out.textContent = \`\${w}px — \${tier} · lede \${g('.r-lede')} · body \${g('.r-body')} · small \${g('.r-small')}\`;
  };
  const start = () => {
    const scope = document.getElementById(uid);
    if (!scope) {
      setTimeout(start, 50);
      return;
    }
    read();
    new ResizeObserver(read).observe(scope);
  };
  setTimeout(start, 0);
  return el;
}`,...(m=(x=i.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var g,y,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => h(\`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:24px">
      Every interactive element is at least 44px tall on touch widths. The arrow link is the usual
      offender — its text is only ~20px tall, so it needs an explicit minimum.
    </div>
    <div style="display:grid;gap:26px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
      <div>
        <div style="font:600 11px var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:#FF6B6B;margin-bottom:12px">Too small — 28px</div>
        <div style="position:relative;outline:1px dashed rgba(255,107,107,.5)">
          <a href="#" style="display:inline-flex;align-items:center;gap:10px;height:28px;color:var(--text-hi);text-decoration:none;font:600 14px var(--font-body)">
            Explore our products
            <span style="display:grid;place-items:center;width:28px;height:28px;background:var(--blue-500);color:#04121C;font-weight:800">&rarr;</span>
          </a>
        </div>
      </div>
      <div>
        <div style="font:600 11px var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:#5FBEEA;margin-bottom:12px">Correct — 44px</div>
        <div style="position:relative;outline:1px dashed rgba(95,190,234,.5)">
          <a href="#" style="display:inline-flex;align-items:center;gap:10px;min-height:44px;color:var(--text-hi);text-decoration:none;font:600 14px var(--font-body)">
            Explore our products
            <span style="display:grid;place-items:center;width:32px;height:32px;background:var(--blue-500);color:#04121C;font-weight:800">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
\`)`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var u,b,w;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`() => h(\`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:24px">
      A row of cards that would become unreadably narrow becomes a horizontal snap rail instead. The
      row bleeds to the edge so a cut-off card signals the swipe. It reverts to a grid once the
      columns can hold their width.
    </div>
    <div style="display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;margin-inline:-8px;padding-inline:8px;scrollbar-width:none">
      \${['We build, run, and improve it', 'Platform-led, not people-led', 'AI in the core, not layered on', 'Proven at the highest stakes', 'Engineering accountability'].map(t => \`
        <article style="flex:0 0 78%;max-width:300px;scroll-snap-align:start;background:var(--bg-card);border:1px solid var(--border);padding:24px">
          <h3 style="font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);line-height:1.25;color:var(--text-hi);margin:0">\${t}</h3>
          <p style="font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);margin-top:12px">Full operational ownership of mission-critical infrastructure.</p>
        </article>\`).join('')}
    </div>
    <div style="font:400 13.5px var(--font-body);color:var(--text-low);margin-top:14px">Swipe for more &rarr;</div>
  </div>
\`)`,...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var $,k,S;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const rows = [['Navigation', 'drawer', 'drawer', 'drawer', 'inline', 'inline'], ['Capability cards', '1', '2', '2', '3', '3'], ['Product cards', '1', '2', '2', '3', '4'], ['Stats', '1', '3', '3', '3', '3'], ['Footer', '1', '2', '2', '3', '3'], ['Why BCT', 'swipe rail', 'swipe rail', 'swipe rail', 'grid', 'grid']];
  const cell = (v, head) => \`<td style="padding:12px 14px;border-bottom:1px solid var(--border);font:\${head ? '600' : '400'} 13px var(--font-body);color:\${head ? 'var(--text-hi)' : v === 'drawer' || v === 'swipe rail' ? 'var(--blue-300)' : 'var(--text-mid)'}">\${v}</td>\`;
  return h(\`
    <div style="padding:8px">
      <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:22px">
        The navigation stays a drawer through 768 on purpose — five items plus the locale do not fit
        comfortably inline at tablet portrait.
      </div>
      <div style="overflow-x:auto">
        <table style="border-collapse:collapse;min-width:560px;width:100%">
          <thead><tr>
            \${['', '<640', '640', '768', '1024', '1280+'].map(x => \`<th style="text-align:left;padding:12px 14px;border-bottom:1px solid var(--border);font:600 11px var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:var(--text-low)">\${x}</th>\`).join('')}
          </tr></thead>
          <tbody>\${rows.map(r => \`<tr>\${cell(r[0], true)}\${r.slice(1).map(v => cell(v)).join('')}</tr>\`).join('')}</tbody>
        </table>
      </div>
    </div>
  \`);
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const E=["BodyScaleFloor","TouchTargets","SwipeRail","BreakpointMap"];export{i as BodyScaleFloor,s as BreakpointMap,d as SwipeRail,n as TouchTargets,E as __namedExportsOrder,C as default};
