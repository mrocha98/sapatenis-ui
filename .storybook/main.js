module.exports = {
  stories: [
    '../packages/**/stories/*.stories.@(jsx|tsx)',
    '../packages/**/stories/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-storysource'
  ]
}
