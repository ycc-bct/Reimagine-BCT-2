import{j as e,M as i}from"./blocks-D3eWQnx7.js";import{useMDXComponents as s}from"./index-nCq2JDQf.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-m3Zg2xvi.js";function t(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Foundations/Line-break rules"}),`
`,e.jsx(n.h1,{id:"line-break-rules",children:"Line-break rules"}),`
`,e.jsx(n.p,{children:"The headline discipline — the rules most often broken by editing copy."}),`
`,e.jsx(n.h2,{id:"titles-must-never-exceed-two-lines",children:"Titles must never exceed two lines"}),`
`,e.jsxs(n.p,{children:["Applies to ",e.jsx(n.code,{children:".hero-h1"}),", ",e.jsx(n.code,{children:".section-title"}),", and every card title."]}),`
`,e.jsx(n.p,{children:"Enforced three ways, in order of preference:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"1. Size the line to its container"}),", so the break point cannot move with the viewport."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.hero-h1 { container-type: inline-size; }
.hero-h1 .l1,
.hero-h1 .l2 { font-size: min(94px, 9.4cqw); text-wrap: balance; }
`})}),`
`,e.jsxs(n.p,{children:["Each line is set in ",e.jsx(n.code,{children:"cqw"}),` — a share of the headline column, not the viewport — so both lines hold
at every width.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"2. Rewrite the copy."}),` If a title wraps to three lines, shorten the words. Do not shrink the font
to fix it; that breaks the scale for every other title on the page.`]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["3. A hard ",e.jsx(n.code,{children:"<br>"})," only as a last resort"]}),`, and only where the copy is fixed and the column width
is known.`]}),`
`,e.jsx(n.h2,{id:"verify-by-measurement-never-by-eye",children:"Verify by measurement, never by eye"}),`
`,e.jsx(n.p,{children:"Poppins wraps unpredictably around hyphenated compounds."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const el = document.querySelector('.section-title');
const lines = el.getBoundingClientRect().height /
              parseFloat(getComputedStyle(el).lineHeight);
// lines must be <= 2
`})}),`
`,e.jsxs(n.p,{children:["Re-check at ",e.jsx(n.strong,{children:"1920 / 1440 / 1280 / 1024 / 768 / 390"}),`. A title that holds at 1440 routinely breaks
at 1280. The live counter in `,e.jsx(n.em,{children:"Foundations → Typography → Line Break Rule"})," does this for you."]}),`
`,e.jsx(n.h2,{id:"paragraph-wrapping",children:"Paragraph wrapping"}),`
`,e.jsxs(n.p,{children:[`| Rule | Implementation |
|---|---|
| Body copy never wider than ~65–75 characters | `,e.jsx(n.code,{children:"max-width"})," in ",e.jsx(n.code,{children:"ch"})," — ",e.jsx(n.code,{children:"34ch"})," inside cards, ",e.jsx(n.code,{children:"46ch"}),"–",e.jsx(n.code,{children:"64ch"}),` for ledes |
| Short centred paragraphs get even line lengths | `,e.jsx(n.code,{children:"text-wrap: balance"}),` |
| Long paragraphs avoid orphans | `,e.jsx(n.code,{children:"text-wrap: pretty"})," — applied globally to ",e.jsx(n.code,{children:"p"})," |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"balance"}),` is for headings and short centred copy only; browsers ignore it past a line-count
threshold, so long paragraphs use `,e.jsx(n.code,{children:"pretty"}),"."]})]})}function d(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{d as default};
