import { setup } from '@storybook/vue3';
import Button from '../src/stories/Button.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [],
});

setup((app) => {
  app.use(router);
  app.component('MyButton', Button);
  app.directive('test', {});
});