import { h, label } from './_helpers.js';

export default { title: 'Foundations/Spacing' };

const bar = (px, note) => `
  <div style="display:flex;align-items:center;gap:18px;padding:9px 0">
    <div style="width:60px;font:600 13px var(--font-body);color:var(--text-hi);text-align:right">${px}</div>
    <div style="height:14px;width:${px};background:var(--blue-500);flex:none"></div>
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid)">${note}</div>
  </div>`;

export const StackingInterval = () => h(`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch">
      Inside a block, spacing steps through this set. Do not invent intermediate values.
    </div>
    ${label('Stacking interval')}
    ${bar('10px', 'A title and the line directly under it')}
    ${bar('14px', 'Eyebrow → section title')}
    ${bar('20px', 'Section title → lede paragraph')}
    ${bar('28px', 'A block and its CTA')}
    ${bar('32px', 'Columns in a .section-head')}
    ${bar('56px', '.section-head → the content it introduces')}
    ${label('Section padding')}
    ${bar('90px', 'Standard section padding-block')}
    ${bar('80px', 'Compact section, and every section below 720px')}
    ${bar('52px', 'A section that should hug the band above it')}
    ${bar('72px', 'Fixed nav height, and the scroll-padding-top that matches it')}
  </div>
`);

export const PageGutter = () => h(`
  <div style="padding:8px">
    <div style="font:400 13.5px var(--font-body);color:var(--text-mid);max-width:64ch;margin-bottom:20px">
      One token controls every page gutter: <code style="color:var(--blue-300)">--pad-x: clamp(24px, 5vw, 72px)</code>.
      Nothing else sets a page gutter. Resize to watch it move.
    </div>
    <div style="position:relative;background:var(--bg-surface);border:1px solid var(--border);padding:40px var(--pad-x)">
      <div style="position:absolute;inset:0 auto 0 0;width:var(--pad-x);background:rgba(0,146,215,.16)"></div>
      <div style="position:absolute;inset:0 0 0 auto;width:var(--pad-x);background:rgba(0,146,215,.16)"></div>
      <div style="border:1px dashed var(--border-blue);padding:26px;font:400 14.5px var(--font-body);color:var(--text-mid)">
        Content column — caps at max-width 1360px and centres.
      </div>
    </div>
  </div>
`);
