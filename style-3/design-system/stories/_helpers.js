export const h = (html) => { const d = document.createElement('div'); d.innerHTML = html.trim(); return d; };

export const swatch = (name, value, note = '') => `
  <div style="border:1px solid var(--border);background:var(--bg-card)">
    <div style="height:78px;background:${value}"></div>
    <div style="padding:12px 14px">
      <div style="font:600 13.5px var(--font-body);color:var(--text-hi)">${name}</div>
      <div style="font:400 12px var(--font-body);color:var(--text-low);margin-top:4px">${value}</div>
      ${note ? `<div style="font:400 12px var(--font-body);color:var(--text-mid);margin-top:6px">${note}</div>` : ''}
    </div>
  </div>`;

export const grid = (inner, min = '190px') =>
  `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(${min},1fr));gap:14px">${inner}</div>`;

export const label = (t) =>
  `<div style="font:600 11px var(--font-body);letter-spacing:.16em;text-transform:uppercase;color:var(--text-low);margin:32px 0 14px">${t}</div>`;
