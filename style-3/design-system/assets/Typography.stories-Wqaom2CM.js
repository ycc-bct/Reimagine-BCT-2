import{h as v}from"./helpers-CtHPbzQ_.js";const I={title:"Foundations/Typography"},t=(n,l,o,i)=>`
  <div style="border-bottom:1px solid var(--border);padding:26px 0">
    <div style="display:flex;justify-content:space-between;gap:24px;align-items:baseline;margin-bottom:14px">
      <div style="font:600 13.5px var(--font-body);color:var(--text-hi)">${n}</div>
      <div style="font:400 12px var(--font-body);color:var(--text-low);text-align:right">${l}</div>
    </div>
    <div style="${o}">${i}</div>
  </div>`,r=()=>v(`
  <div style="padding:8px">
    ${t(".hero-h1","clamp(42px,6.2vw,94px) / 700 / lh 1.0 / ls -.03em","font-family:var(--font-display);font-weight:700;font-size:clamp(42px,6.2vw,94px);line-height:1.0;letter-spacing:-.03em;color:var(--text-display)","Engineering for the<br>intelligent enterprise")}
    ${t(".section-title — --fs-h2","clamp(32px,4vw,52px) / 600 / lh 1.05 / ls -.02em","font-family:var(--font-display);font-weight:600;font-size:var(--fs-h2);line-height:1.05;letter-spacing:-.02em;color:var(--text-display)","End-to-end enterprise digital capability")}
    ${t("Card title — --fs-h3","clamp(19px,1.5vw,22px) / 700 / lh 1.25 / ls -.01em","font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);line-height:1.25;letter-spacing:-.01em;color:var(--text-hi)","Real-Time Monitoring")}
    ${t(".eyebrow","16px / 600 / ls .06em / --blue-500","font-family:var(--font-display);font-weight:600;font-size:16px;letter-spacing:.06em;color:var(--blue-500)","What we do")}
  </div>
`),a=()=>v(`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:8px">
      Three roles, one value each. Every paragraph on the page resolves to one of these — a section
      never invents its own size. If a paragraph seems to need a fourth, the layout is wrong.
    </div>
    ${t("--fs-lede","15.5px / lh 1.70 — the paragraph under a section title","font-size:var(--fs-lede);line-height:var(--lh-lede);color:var(--text-mid);max-width:64ch","Integrating cloud, data, and AI to accelerate growth, and turn technology ecosystems into a competitive advantage.")}
    ${t("--fs-body","14.5px / lh 1.70 — copy inside a card or column","font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);max-width:34ch","Cloud provides the foundation for flexible, secure, and cost-efficient operations.")}
    ${t("--fs-small","13.5px / lh 1.60 — captions, meta, dense descriptions","font-size:var(--fs-small);line-height:var(--lh-small);color:var(--text-low);max-width:44ch","Government · AI · Analytics")}
  </div>
`),s=()=>{const n="lbr-"+Math.random().toString(36).slice(2,8),l=v(`
    <div id="${n}" style="padding:8px">
      <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:24px">
        Titles must never exceed two lines. Resize the preview and watch the counter — it measures
        the live line count, the only reliable check. Poppins wraps unpredictably around hyphenated
        compounds, so eyeballing it is not enough.
      </div>
      <div style="border:1px solid var(--border);padding:26px;background:var(--bg-card)">
        <h2 class="probe" style="font-family:var(--font-display);font-weight:600;font-size:var(--fs-h2);line-height:1.05;letter-spacing:-.02em;color:var(--text-display);margin:0">
          Where Cloud, Data, and AI converge, intelligence becomes an advantage.
        </h2>
      </div>
      <div class="readout" style="font:600 13.5px var(--font-body);margin-top:16px"></div>
    </div>
  `),o=()=>{const e=document.getElementById(n);if(!e)return;const d=e.querySelector(".probe"),p=e.querySelector(".readout");if(!d||!p)return;const B=d.getBoundingClientRect().height/parseFloat(getComputedStyle(d).lineHeight),c=Math.round(B*100)/100,h=e.getBoundingClientRect().width;if(h<768){p.innerHTML=`<span style="color:var(--text-low)">
        ${c} lines at ${Math.round(h)}px — rule does not bind below 768px</span>`;return}const m=c<=2.05;p.innerHTML=`<span style="color:${m?"#5FBEEA":"#FF6B6B"}">
      ${c} lines at ${Math.round(h)}px — ${m?"passes":"FAILS: rewrite the copy, do not shrink the font"}</span>`},i=()=>{const e=document.getElementById(n);if(!e){setTimeout(i,50);return}o(),new ResizeObserver(o).observe(e)};return setTimeout(i,0),l};var f,u,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => h(\`
  <div style="padding:8px">
    \${row('.hero-h1', 'clamp(42px,6.2vw,94px) / 700 / lh 1.0 / ls -.03em', 'font-family:var(--font-display);font-weight:700;font-size:clamp(42px,6.2vw,94px);line-height:1.0;letter-spacing:-.03em;color:var(--text-display)', 'Engineering for the<br>intelligent enterprise')}
    \${row('.section-title — --fs-h2', 'clamp(32px,4vw,52px) / 600 / lh 1.05 / ls -.02em', 'font-family:var(--font-display);font-weight:600;font-size:var(--fs-h2);line-height:1.05;letter-spacing:-.02em;color:var(--text-display)', 'End-to-end enterprise digital capability')}
    \${row('Card title — --fs-h3', 'clamp(19px,1.5vw,22px) / 700 / lh 1.25 / ls -.01em', 'font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);line-height:1.25;letter-spacing:-.01em;color:var(--text-hi)', 'Real-Time Monitoring')}
    \${row('.eyebrow', '16px / 600 / ls .06em / --blue-500', 'font-family:var(--font-display);font-weight:600;font-size:16px;letter-spacing:.06em;color:var(--blue-500)', 'What we do')}
  </div>
\`)`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,x,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`() => h(\`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:8px">
      Three roles, one value each. Every paragraph on the page resolves to one of these — a section
      never invents its own size. If a paragraph seems to need a fourth, the layout is wrong.
    </div>
    \${row('--fs-lede', '15.5px / lh 1.70 — the paragraph under a section title', 'font-size:var(--fs-lede);line-height:var(--lh-lede);color:var(--text-mid);max-width:64ch', 'Integrating cloud, data, and AI to accelerate growth, and turn technology ecosystems into a competitive advantage.')}
    \${row('--fs-body', '14.5px / lh 1.70 — copy inside a card or column', 'font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);max-width:34ch', 'Cloud provides the foundation for flexible, secure, and cost-efficient operations.')}
    \${row('--fs-small', '13.5px / lh 1.60 — captions, meta, dense descriptions', 'font-size:var(--fs-small);line-height:var(--lh-small);color:var(--text-low);max-width:44ch', 'Government · AI · Analytics')}
  </div>
\`)`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var b,$,z;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  // Kicked off with a timer, not requestAnimationFrame: a Storybook tab that
  // is not visible when the story loads never fires rAF, and the readout would
  // stay blank for good. The node is re-resolved by id so a re-render is fine.
  const uid = 'lbr-' + Math.random().toString(36).slice(2, 8);
  const el = h(\`
    <div id="\${uid}" style="padding:8px">
      <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:24px">
        Titles must never exceed two lines. Resize the preview and watch the counter — it measures
        the live line count, the only reliable check. Poppins wraps unpredictably around hyphenated
        compounds, so eyeballing it is not enough.
      </div>
      <div style="border:1px solid var(--border);padding:26px;background:var(--bg-card)">
        <h2 class="probe" style="font-family:var(--font-display);font-weight:600;font-size:var(--fs-h2);line-height:1.05;letter-spacing:-.02em;color:var(--text-display);margin:0">
          Where Cloud, Data, and AI converge, intelligence becomes an advantage.
        </h2>
      </div>
      <div class="readout" style="font:600 13.5px var(--font-body);margin-top:16px"></div>
    </div>
  \`);
  const measure = () => {
    const scope = document.getElementById(uid);
    if (!scope) return;
    const t = scope.querySelector('.probe'),
      out = scope.querySelector('.readout');
    if (!t || !out) return;
    const n = t.getBoundingClientRect().height / parseFloat(getComputedStyle(t).lineHeight);
    const lines = Math.round(n * 100) / 100;
    const w = scope.getBoundingClientRect().width;
    // the rule binds at >=768px — below that, forcing two lines would push the
    // font under the scale floor, and unreadable type is the worse failure
    if (w < 768) {
      out.innerHTML = \`<span style="color:var(--text-low)">
        \${lines} lines at \${Math.round(w)}px — rule does not bind below 768px</span>\`;
      return;
    }
    const ok = lines <= 2.05;
    out.innerHTML = \`<span style="color:\${ok ? '#5FBEEA' : '#FF6B6B'}">
      \${lines} lines at \${Math.round(w)}px — \${ok ? 'passes' : 'FAILS: rewrite the copy, do not shrink the font'}</span>\`;
  };
  const start = () => {
    const scope = document.getElementById(uid);
    if (!scope) {
      setTimeout(start, 50);
      return;
    }
    measure();
    new ResizeObserver(measure).observe(scope);
  };
  setTimeout(start, 0);
  return el;
}`,...(z=($=s.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const S=["Scale","BodyRoles","LineBreakRule"];export{a as BodyRoles,s as LineBreakRule,r as Scale,S as __namedExportsOrder,I as default};
