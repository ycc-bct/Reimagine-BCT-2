/** @type { import('@storybook/html-vite').StorybookConfig } */
export default {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: { name: '@storybook/html-vite', options: {} },
};
