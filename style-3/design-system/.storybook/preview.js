import './preview.css';

/** @type { import('@storybook/html-vite').Preview } */
export default {
  parameters: {
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
  initialGlobals: { backgrounds: { value: 'base' } },
};
