const d=t=>{const r=document.createElement("div");return r.innerHTML=t.trim(),r},i=(t,r,o="")=>`
  <div style="border:1px solid var(--border);background:var(--bg-card)">
    <div style="height:78px;background:${r}"></div>
    <div style="padding:12px 14px">
      <div style="font:600 13.5px var(--font-body);color:var(--text-hi)">${t}</div>
      <div style="font:400 12px var(--font-body);color:var(--text-low);margin-top:4px">${r}</div>
      ${o?`<div style="font:400 12px var(--font-body);color:var(--text-mid);margin-top:6px">${o}</div>`:""}
    </div>
  </div>`,e=(t,r="190px")=>`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(${r},1fr));gap:14px">${t}</div>`,a=t=>`<div style="font:600 11px var(--font-body);letter-spacing:.16em;text-transform:uppercase;color:var(--text-low);margin:32px 0 14px">${t}</div>`;export{e as g,d as h,a as l,i as s};
