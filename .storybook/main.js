// https://stackoverflow.com/questions/66216033/compiling-js-via-webpacker-results-in-sasserror-expected

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
};
