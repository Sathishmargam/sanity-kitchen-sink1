export default {
  widgets: [
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
                  buildHookId: '623463fcbd2102727089fc22',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-ppsgk8vb',
                  apiId: 'fbe362e5-ffbe-4c3e-9a30-7aa93d731afb'
                },
                {
                  buildHookId: '623463fc1c0fe20e7d88ae94',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-33ydvf87',
                  apiId: '48dc7b8a-09bf-446e-bff3-61e65d69ac35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sathishmargam/sanity-kitchen-sink1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-33ydvf87.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
