import { h, label } from './helpers.js';

export default { title: 'Foundations/Typography (responsive build)' };

/* ---------------------------------------------------------------------------
   These are the type roles BCT-V4-Mobile.html actually renders, read straight
   out of tw-src.css. They are NOT identical to Foundations/Typography, which
   documents the hand-written pages — the differences are called out below and
   are deliberate, not drift.
   ------------------------------------------------------------------------ */

const row = (name, spec, style, sample, note = '', cls = '') => `
  <div style="border-bottom:1px solid var(--border);padding:26px 0">
    <div style="display:flex;justify-content:space-between;gap:24px;align-items:baseline;margin-bottom:14px">
      <div style="font:600 13.5px var(--font-body);color:var(--text-hi)">${name}</div>
      <div style="font:400 12px var(--font-body);color:var(--text-low);text-align:right">${spec}</div>
    </div>
    <div class="${cls}" style="${style}">${sample}</div>
    ${note ? `<div style="font:400 12px var(--font-body);color:var(--text-mid);margin-top:12px;max-width:70ch">${note}</div>` : ''}
  </div>`;

const intro = (t) =>
  `<div style="font:400 13.5px/1.7 var(--font-body);color:var(--text-mid);max-width:70ch;margin-bottom:8px">${t}</div>`;

/* -------------------------------------------------------------------------- */

export const DisplayRoles = () => {
  // Kicked off with a timer, not requestAnimationFrame: a Storybook tab that
  // is not visible when the story loads never fires rAF, and the readout would
  // stay blank for good. The node is re-resolved by id so a re-render is fine.
  const uid = 'pov-display-' + Math.random().toString(36).slice(2, 8);
  const el = h(`
  <div id="${uid}" style="padding:8px">
    ${intro(`The two display roles are sized in <code>cqw</code> against a
      <code>container-type: inline-size</code> parent, not in <code>vw</code>. That is what holds
      them at a fixed line count from 320 to 1920 — a <code>vw</code> size is measured against the
      page while the text is measured against its column, so the two disagree the moment the
      headline sits in anything narrower than full width. The <code>min()</code> caps the size on
      wide viewports where the container is already large.`)}

    <div style="container-type:inline-size;border:1px solid var(--border);background:var(--bg-card);padding:26px;margin-top:22px">
      ${row('Hero h1', 'min(84px, 8.6cqw) / 700 / lh 1.08 / ls -.03em / --text-display',
        'font-family:var(--font-display);font-weight:700;font-size:min(84px,8.6cqw);line-height:1.08;letter-spacing:-.03em;color:var(--text-display);margin:0',
        'Engineering for the<br>intelligent enterprise',
        'The &lt;br&gt; is always honoured — this headline is authored at exactly two lines at every width.',
        'probe')}
    </div>

    <div style="container-type:inline-size;border:1px solid var(--border);background:linear-gradient(168deg,#0A2038 0%,#0B4E8F 58%,#0E9BE0 100%);padding:26px;margin-top:22px">
      ${row('Point-of-view statement', 'min(34px, 6cqw) / 700 / lh 1.14 / ls -.025em / #fff',
        'font-family:var(--font-display);font-weight:700;font-size:min(34px,6cqw);line-height:1.14;letter-spacing:-.025em;color:#fff;margin:0',
        'The future belongs to enterprises that operationalize AI',
        '6cqw was found by binary search, not chosen: at 6.2cqw the total width is still sufficient but no word boundary falls in the right place, so &ldquo;AI&rdquo; is orphaned onto a third line. Width alone does not decide a break — the words have to divide there.',
        'probe')}
    </div>

    <div class="readout" style="font:600 13px var(--font-body);margin-top:18px"></div>
  </div>`);

  const measure = () => {
    const scope = document.getElementById(uid);
    if (!scope) return;
    const out = scope.querySelector('.readout');
    if (!out) return;
    const w = scope.getBoundingClientRect().width;
    const counts = [...scope.querySelectorAll('.probe')].map((t) => {
      const n = t.getBoundingClientRect().height / parseFloat(getComputedStyle(t).lineHeight);
      return Math.round(n * 100) / 100;
    });
    if (!counts.length) return;
    const ok = counts.every((c) => c <= 2.05);
    const ln = (n) => `${n} ${n === 1 ? 'line' : 'lines'}`;
    out.innerHTML = `<span style="color:${ok ? '#5FBEEA' : '#FF6B6B'}">
      hero ${ln(counts[0])}, statement ${ln(counts[1])} at ${Math.round(w)}px &mdash;
      ${ok ? 'both within two' : 'over two lines'}</span>`;
  };
  const start = () => {
    const scope = document.getElementById(uid);
    if (!scope) { setTimeout(start, 50); return; }
    measure();
    new ResizeObserver(measure).observe(scope);
  };
  setTimeout(start, 0);
  return el;
};

/* -------------------------------------------------------------------------- */

export const HeadingScale = () => h(`
  <div style="padding:8px">
    ${intro(`Section and card headings are fluid across the whole range in one <code>clamp()</code>,
      so there is no breakpoint where a heading jumps. Both differ slightly from the hand-written
      pages: the responsive build starts h2 at <strong>28px</strong> rather than 32px (32px forces
      three lines on a 320px screen) and lets h3 grow on <code>4.4vw</code> rather than 1.5vw so
      card titles do not sit at their floor for the whole phone range.`)}
    ${row('--text-h2 — section title', 'clamp(28px, 4.8vw, 52px) / 600 / lh 1.08 / ls -.02em',
      'font-family:var(--font-display);font-weight:600;font-size:clamp(28px,4.8vw,52px);line-height:1.08;letter-spacing:-.02em;color:var(--text-display)',
      'End-to-end enterprise digital capability')}
    ${row('--text-h3 — card &amp; sub-heading', 'clamp(19px, 4.4vw, 22px) / 700 / lh 1.25 / ls -.01em',
      'font-family:var(--font-display);font-weight:700;font-size:clamp(19px,4.4vw,22px);line-height:1.25;letter-spacing:-.01em;color:var(--text-hi)',
      'Accountability beyond adoption')}
  </div>
`);

/* -------------------------------------------------------------------------- */

export const BodyRoles = () => h(`
  <div style="padding:8px">
    ${intro(`Three roles, one value each — the same rule as the hand-written pages, but on a
      device tier: <strong>15 / 14 / 13</strong> instead of 15.5 / 14.5 / 13.5. Light-on-dark copy
      held at arm&rsquo;s length needs the floor. The roles themselves never change, only their
      values.`)}
    ${row('--text-lede', '15px / lh 1.72 — the paragraph under a section title',
      'font-size:15px;line-height:1.72;color:var(--text-mid);max-width:64ch',
      'BCT builds, operates, and powers mission-critical digital infrastructure using proprietary platforms, deep domain expertise, and AI to engineer, modernize, and continuously improve enterprise operations.')}
    ${row('--text-body', '14px / lh 1.70 — copy inside a card or column',
      'font-size:14px;line-height:1.7;color:var(--text-mid);max-width:38ch',
      'AI market leaders aren&rsquo;t winning because they have access to better AI. They&rsquo;re winning because they&rsquo;ve embedded it into the way their organizations operate.')}
    ${row('--text-small', '13px / lh 1.60 — captions, meta, dense descriptions',
      'font-size:13px;line-height:1.6;color:var(--text-mid);max-width:44ch',
      'Repeatable execution, strong governance, and integration into core operations, built to scale across the enterprise.')}
  </div>
`);

/* -------------------------------------------------------------------------- */

export const NamedRoles = () => h(`
  <div style="padding:8px">
    ${intro(`Fixed-size roles that sit outside the fluid scale. Each is pinned because it labels
      or numbers something rather than reading as prose — a fluid size would make these drift
      against the element they annotate.`)}

    ${label('Eyebrow — above every section title')}
    ${row('.eyebrow', '--text-lede 15px / 600 / ls .06em / --blue-500',
      'font-family:var(--font-display);font-weight:600;font-size:15px;letter-spacing:.06em;color:var(--blue-500)',
      'Our point of view')}

    ${label('Cards')}
    ${row('Product name', '17px / 600 / lh 1.25 / ls -.01em / --text-hi',
      'font-family:var(--font-display);font-weight:600;font-size:17px;line-height:1.25;letter-spacing:-.01em;color:var(--text-hi);text-align:center',
      'retina360',
      'Centred under a full-bleed logo plate at the desktop&rsquo;s 264/171 aspect.')}
    ${row('Why-BCT card title', '20px / 600 / lh 1.30 / --text-hi + text-shadow',
      'font-family:var(--font-display);font-weight:600;font-size:20px;line-height:1.3;color:var(--text-hi);text-shadow:0 2px 16px rgba(0,0,0,.8),0 1px 3px rgba(0,0,0,.6);background:#1b2433;padding:14px',
      'We build, run,<br>and improve it',
      'Sits over photography, so it carries a two-stop shadow rather than relying on the gradient alone.')}

    ${label('Meta')}
    ${row('Case-study kicker', '11px / 500 / uppercase / ls .1em / --text-low',
      'font-family:var(--font-body);font-weight:500;font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--text-low)',
      'Government &middot; AI &middot; Analytics',
      'The one role allowed below the 13px small floor: it is a label, never read as a sentence.')}
    ${row('Stat figure', 'clamp(28px, 7.4vw, 60px) / 700 / lh 1.0 / --text-hi',
      'font-family:var(--font-display);font-weight:700;font-size:clamp(28px,7.4vw,60px);line-height:1;color:var(--text-hi)',
      '2.2K',
      'Sized so three figures hold one row at 320px — which is why 2,200+ was shortened to 2.2K.')}
  </div>
`);

/* -------------------------------------------------------------------------- */

export const Typeface = () => h(`
  <div style="padding:8px">
    ${intro(`One typeface for the whole system. <code>--font-display</code> and
      <code>--font-body</code> both resolve to Poppins; they stay separate tokens so a display face
      could be swapped in later without touching body copy. Weights in use are 400, 500, 600 and
      700 — nothing else.`)}
    <div style="display:grid;gap:12px;margin-top:22px">
      ${[400, 500, 600, 700].map((w) => `
        <div style="display:flex;gap:20px;align-items:baseline;border-bottom:1px solid var(--border);padding-bottom:12px">
          <div style="font:400 12px var(--font-body);color:var(--text-low);width:120px;flex:none">Poppins ${w}</div>
          <div style="font-family:var(--font-display);font-weight:${w};font-size:22px;color:var(--text-hi)">Engineering for the intelligent enterprise</div>
        </div>`).join('')}
    </div>
  </div>
`);
