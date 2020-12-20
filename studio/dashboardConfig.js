export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdf13dc238605e47c79086f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wh2qkz4b',
                  apiId: 'b45dd4ff-572b-4f72-95cc-6fbfb5e6feb1'
                },
                {
                  buildHookId: '5fdf13dc40dec1e70ada7967',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-69brvnvx',
                  apiId: 'ed545ba1-9cdc-4b95-b4fa-0bd30dc3d3cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frf-ai/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-69brvnvx.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
