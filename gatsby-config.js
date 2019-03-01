module.exports = {
  siteMetadata: {
    title: 'AlgorithmX',
    description: 'A library for network visualization and algorithm simulation.',
    keywords: ['network', 'graph', 'visualization', 'javascript', 'python', 'jupyter']
  },
  pathPrefix: '/algorithmx-website',
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'Json'
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: `${__dirname}/src/assets/logo.svg`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-meta-redirect'
  ]
}
