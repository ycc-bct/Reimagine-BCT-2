import{h as l}from"./_helpers-CtHPbzQ_.js";const $={title:"Foundations/Typography"},e=(t,n,o,a)=>`
  <div style="border-bottom:1px solid var(--border);padding:26px 0">
    <div style="display:flex;justify-content:space-between;gap:24px;align-items:baseline;margin-bottom:14px">
      <div style="font:600 13.5px var(--font-body);color:var(--text-hi)">${t}</div>
      <div style="font:400 12px var(--font-body);color:var(--text-low);text-align:right">${n}</div>
    </div>
    <div style="${o}">${a}</div>
  </div>`,i=()=>l(`
  <div style="padding:8px">
    ${e(".hero-h1","clamp(42px,6.2vw,94px) / 700 / lh 1.0 / ls -.03em","font-family:var(--font-display);font-weight:700;font-size:clamp(42px,6.2vw,94px);line-height:1.0;letter-spacing:-.03em;color:var(--text-display)","Engineering for the<br>intelligent enterprise")}
    ${e(".section-title — --fs-h2","clamp(32px,4vw,52px) / 600 / lh 1.05 / ls -.02em","font-family:var(--font-display);font-weight:600;font-size:var(--fs-h2);line-height:1.05;letter-spacing:-.02em;color:var(--text-display)","End-to-end enterprise digital capability")}
    ${e("Card title — --fs-h3","clamp(19px,1.5vw,22px) / 700 / lh 1.25 / ls -.01em","font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);line-height:1.25;letter-spacing:-.01em;color:var(--text-hi)","Real-Time Monitoring")}
    ${e(".eyebrow","16px / 600 / ls .06em / --blue-500","font-family:var(--font-display);font-weight:600;font-size:16px;letter-spacing:.06em;color:var(--blue-500)","What we do")}
  </div>
`),r=()=>l(`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:8px">
      Three roles, one value each. Every paragraph on the page resolves to one of these — a section
      never invents its own size. If a paragraph seems to need a fourth, the layout is wrong.
    </div>
    ${e("--fs-lede","15.5px / lh 1.70 — the paragraph under a section title","font-size:var(--fs-lede);line-height:var(--lh-lede);color:var(--text-mid);max-width:64ch","Integrating cloud, data, and AI to accelerate growth, and turn technology ecosystems into a competitive advantage.")}
    ${e("--fs-body","14.5px / lh 1.70 — copy inside a card or column","font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);max-width:34ch","Cloud provides the foundation for flexible, secure, and cost-efficient operations.")}
    ${e("--fs-small","13.5px / lh 1.60 — captions, meta, dense descriptions","font-size:var(--fs-small);line-height:var(--lh-small);color:var(--text-low);max-width:44ch","Government · AI · Analytics")}
  </div>
`),s=()=>{const t=l(`
    <div style="padding:8px">
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
  `),n=()=>{const o=t.querySelector(".probe"),a=t.querySelector(".readout");if(!o||!a)return;const w=o.getBoundingClientRect().height/parseFloat(getComputedStyle(o).lineHeight),d=Math.round(w*100)/100,p=d<=2.05;a.innerHTML=`<span style="color:${p?"#5FBEEA":"#FF6B6B"}">
      ${d} lines — ${p?"passes":"FAILS: rewrite the copy, do not shrink the font"}</span>`};return requestAnimationFrame(n),new ResizeObserver(n).observe(t),t};var c,h,v;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => h(\`
  <div style="padding:8px">
    \${row('.hero-h1', 'clamp(42px,6.2vw,94px) / 700 / lh 1.0 / ls -.03em', 'font-family:var(--font-display);font-weight:700;font-size:clamp(42px,6.2vw,94px);line-height:1.0;letter-spacing:-.03em;color:var(--text-display)', 'Engineering for the<br>intelligent enterprise')}
    \${row('.section-title — --fs-h2', 'clamp(32px,4vw,52px) / 600 / lh 1.05 / ls -.02em', 'font-family:var(--font-display);font-weight:600;font-size:var(--fs-h2);line-height:1.05;letter-spacing:-.02em;color:var(--text-display)', 'End-to-end enterprise digital capability')}
    \${row('Card title — --fs-h3', 'clamp(19px,1.5vw,22px) / 700 / lh 1.25 / ls -.01em', 'font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);line-height:1.25;letter-spacing:-.01em;color:var(--text-hi)', 'Real-Time Monitoring')}
    \${row('.eyebrow', '16px / 600 / ls .06em / --blue-500', 'font-family:var(--font-display);font-weight:600;font-size:16px;letter-spacing:.06em;color:var(--blue-500)', 'What we do')}
  </div>
\`)`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var m,f,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => h(\`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:8px">
      Three roles, one value each. Every paragraph on the page resolves to one of these — a section
      never invents its own size. If a paragraph seems to need a fourth, the layout is wrong.
    </div>
    \${row('--fs-lede', '15.5px / lh 1.70 — the paragraph under a section title', 'font-size:var(--fs-lede);line-height:var(--lh-lede);color:var(--text-mid);max-width:64ch', 'Integrating cloud, data, and AI to accelerate growth, and turn technology ecosystems into a competitive advantage.')}
    \${row('--fs-body', '14.5px / lh 1.70 — copy inside a card or column', 'font-size:var(--fs-body);line-height:var(--lh-body);color:var(--text-mid);max-width:34ch', 'Cloud provides the foundation for flexible, secure, and cost-efficient operations.')}
    \${row('--fs-small', '13.5px / lh 1.60 — captions, meta, dense descriptions', 'font-size:var(--fs-small);line-height:var(--lh-small);color:var(--text-low);max-width:44ch', 'Government · AI · Analytics')}
  </div>
\`)`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,u,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const el = h(\`
    <div style="padding:8px">
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
    const t = el.querySelector('.probe'),
      out = el.querySelector('.readout');
    if (!t || !out) return;
    const n = t.getBoundingClientRect().height / parseFloat(getComputedStyle(t).lineHeight);
    const lines = Math.round(n * 100) / 100;
    const ok = lines <= 2.05;
    out.innerHTML = \`<span style="color:\${ok ? '#5FBEEA' : '#FF6B6B'}">
      \${lines} lines — \${ok ? 'passes' : 'FAILS: rewrite the copy, do not shrink the font'}</span>\`;
  };
  requestAnimationFrame(measure);
  new ResizeObserver(measure).observe(el);
  return el;
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const z=["Scale","BodyRoles","LineBreakRule"];export{r as BodyRoles,s as LineBreakRule,i as Scale,z as __namedExportsOrder,$ as default};
