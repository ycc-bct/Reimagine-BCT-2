import './preview.css';

/* Device widths the pages are actually verified against. Design.md's line-break
   rule binds at >=768, so 768 is the boundary between the two mobile tiers. */
const viewports = {
  small:   { name: 'Small phone (360)',  styles: { width: '360px', height: '780px' }, type: 'mobile' },
  phone:   { name: 'Phone (390)',        styles: { width: '390px', height: '844px' }, type: 'mobile' },
  large:   { name: 'Large phone (430)',  styles: { width: '430px', height: '932px' }, type: 'mobile' },
  tablet:  { name: 'Tablet (768)',       styles: { width: '768px', height: '1024px' }, type: 'tablet' },
  laptop:  { name: 'Laptop (1024)',      styles: { width: '1024px', height: '800px' }, type: 'desktop' },
  desktop: { name: 'Desktop (1440)',     styles: { width: '1440px', height: '900px' }, type: 'desktop' },
};

/** @type { import('@storybook/html-vite').Preview } */
export default {
  parameters: {
    viewport: { options: viewports },
    backgrounds: {
      options: {
        base:    { name: 'bg-base',    value: '#060810' },
        surface: { name: 'bg-surface', value: '#0C0F1A' },
        light:   { name: 'light-bg',   value: '#EDF3F7' },
      },
    },
    controls: { matchers: { color: /(background|color)$/i } },
    docs: { toc: true },
  },
  initialGlobals: {
    backgrounds: { value: 'base' },
    viewport: { value: 'phone', isRotated: false },
  },
};
