export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fce397bded7dd4079f5a5a5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-test-studio-4dwo86nf',
                  apiId: '83ea7db6-2d4f-4ee4-8ffc-4970c7ace7c8'
                },
                {
                  buildHookId: '5fce397bc8d7e3dceed71a85',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-test-web-4ehhrs2x',
                  apiId: '6aa7b2c0-a327-4b1a-9e10-71f0994811da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eugene-pinpoint/sanity-nextjs-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-test-web-4ehhrs2x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
