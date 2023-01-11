import path from 'path';

export default {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "core": {
    "builder": '@storybook/builder-vite',
  },
  "docs": {
    "autodocs": "tag"
  },
  viteFinal(config) {
    console.log('viteFinal fired');

    return config;
  },
}