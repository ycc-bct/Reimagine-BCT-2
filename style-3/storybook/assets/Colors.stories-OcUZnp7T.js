import{h as c,l as t,g as a,s as e}from"./_helpers-CtHPbzQ_.js";const h={title:"Foundations/Color"},o=()=>c(`
  <div style="padding:8px">
    ${t("Surfaces")}
    ${a([e("--bg-base","#060810","Page background"),e("--bg-surface","#0C0F1A","Section that separates from the page"),e("--bg-card","#111522","Card and tile fill"),e("--bg-hover","#161B2C","Card fill on hover")].join(""))}

    ${t("Brand blue")}
    ${a([e("--blue-500","#0092D7","The accent — CTAs, eyebrows, accent rules"),e("--blue-300","#5FBEEA","Hover state of anything already blue"),e("--blue-700","#0A6395","Blue on a LIGHT background only"),e("--blue-900","#06344F","Deep decorative fill"),e("--blue-950","#072338","Deepest decorative fill")].join(""))}

    ${t("Text")}
    ${a([e("--text-hi","#F5F8FC","Primary text, card titles"),e("--text-display","#D7DFE9","Large display headings"),e("--text-mid","rgba(242,246,250,.68)","Body copy"),e("--text-low","rgba(242,246,250,.44)","Meta, captions, indices")].join(""))}

    ${t("Lines & glow")}
    ${a([e("--border","rgba(255,255,255,.13)","Every hairline"),e("--border-blue","rgba(0,146,215,.4)","Card edge on hover"),e("--glow","rgba(0,146,215,.18)","box-shadow bloom on hover")].join(""))}

    ${t("Light band")}
    ${a([e("--light-bg","#EDF3F7"),e("--light-card","#FFFFFF"),e("--light-text","#0A1620"),e("--light-mid","rgba(10,22,32,.62)"),e("--light-low","rgba(10,22,32,.42)"),e("--light-border","rgba(10,22,32,.12)")].join(""))}
  </div>
`),r=()=>c(`
  <div style="padding:8px;display:grid;grid-template-columns:1fr 1fr;gap:16px">
    <div style="background:var(--light-card);padding:26px;border:1px solid var(--light-border)">
      <div style="font:600 16px var(--font-display);letter-spacing:.06em;color:#0092D7">--blue-500 on white</div>
      <div style="font:400 13.5px var(--font-body);color:var(--light-mid);margin-top:10px">
        ~3.1:1 — <strong style="color:#B3261E">fails</strong> WCAG AA for body text. Do not use.
      </div>
    </div>
    <div style="background:var(--light-card);padding:26px;border:1px solid var(--light-border)">
      <div style="font:600 16px var(--font-display);letter-spacing:.06em;color:#0A6395">--blue-700 on white</div>
      <div style="font:400 13.5px var(--font-body);color:var(--light-mid);margin-top:10px">
        ~5.6:1 — <strong style="color:#146C43">passes</strong>. Use this on the light band.
      </div>
    </div>
  </div>
`);r.parameters={backgrounds:{value:"light"}};var i,l,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => h(\`
  <div style="padding:8px">
    \${label('Surfaces')}
    \${grid([swatch('--bg-base', '#060810', 'Page background'), swatch('--bg-surface', '#0C0F1A', 'Section that separates from the page'), swatch('--bg-card', '#111522', 'Card and tile fill'), swatch('--bg-hover', '#161B2C', 'Card fill on hover')].join(''))}

    \${label('Brand blue')}
    \${grid([swatch('--blue-500', '#0092D7', 'The accent — CTAs, eyebrows, accent rules'), swatch('--blue-300', '#5FBEEA', 'Hover state of anything already blue'), swatch('--blue-700', '#0A6395', 'Blue on a LIGHT background only'), swatch('--blue-900', '#06344F', 'Deep decorative fill'), swatch('--blue-950', '#072338', 'Deepest decorative fill')].join(''))}

    \${label('Text')}
    \${grid([swatch('--text-hi', '#F5F8FC', 'Primary text, card titles'), swatch('--text-display', '#D7DFE9', 'Large display headings'), swatch('--text-mid', 'rgba(242,246,250,.68)', 'Body copy'), swatch('--text-low', 'rgba(242,246,250,.44)', 'Meta, captions, indices')].join(''))}

    \${label('Lines & glow')}
    \${grid([swatch('--border', 'rgba(255,255,255,.13)', 'Every hairline'), swatch('--border-blue', 'rgba(0,146,215,.4)', 'Card edge on hover'), swatch('--glow', 'rgba(0,146,215,.18)', 'box-shadow bloom on hover')].join(''))}

    \${label('Light band')}
    \${grid([swatch('--light-bg', '#EDF3F7'), swatch('--light-card', '#FFFFFF'), swatch('--light-text', '#0A1620'), swatch('--light-mid', 'rgba(10,22,32,.62)'), swatch('--light-low', 'rgba(10,22,32,.42)'), swatch('--light-border', 'rgba(10,22,32,.12)')].join(''))}
  </div>
\`)`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var s,n,g;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => h(\`
  <div style="padding:8px;display:grid;grid-template-columns:1fr 1fr;gap:16px">
    <div style="background:var(--light-card);padding:26px;border:1px solid var(--light-border)">
      <div style="font:600 16px var(--font-display);letter-spacing:.06em;color:#0092D7">--blue-500 on white</div>
      <div style="font:400 13.5px var(--font-body);color:var(--light-mid);margin-top:10px">
        ~3.1:1 — <strong style="color:#B3261E">fails</strong> WCAG AA for body text. Do not use.
      </div>
    </div>
    <div style="background:var(--light-card);padding:26px;border:1px solid var(--light-border)">
      <div style="font:600 16px var(--font-display);letter-spacing:.06em;color:#0A6395">--blue-700 on white</div>
      <div style="font:400 13.5px var(--font-body);color:var(--light-mid);margin-top:10px">
        ~5.6:1 — <strong style="color:#146C43">passes</strong>. Use this on the light band.
      </div>
    </div>
  </div>
\`)`,...(g=(n=r.parameters)==null?void 0:n.docs)==null?void 0:g.source}}};const p=["Palette","ContrastRule"];export{r as ContrastRule,o as Palette,p as __namedExportsOrder,h as default};
