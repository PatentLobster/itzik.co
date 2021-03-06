// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Itzik',
  siteUrl: 'https://itzik.co',
  siteDescription: 'Itzik Sokolov. A Developer, Hacker, Maker, Gamer, Pilot.',
  icon: {
    favicon: './src/assets/img/ico.png',
    touchicon: './src/assets/img/ico.png'
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'markdownPage', // Required
        baseDir: './content', // Where .md files are located
        template: './src/templates/Base.vue', // Optional
        route: '/',
        plugins: [
          '@gridsome/remark-prismjs'
        ],
      }
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: process.env.GOOGLE_ANALYTICS_ID,
        },
      },
    },

  ]
};
