export default {
  title: 'Test',
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export const test = (args = {}, { argTypes = {} }) => ({
  template: `
    <div>
      <MyButton label="Button" primary v-test/>
    </div>
  `
});