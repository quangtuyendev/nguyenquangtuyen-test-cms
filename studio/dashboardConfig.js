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
                  buildHookId: '5f49138d0664ec7a3d61e2c7',
                  title: 'Sanity Studio',
                  name: 'nguyenquangtuyen-test-cms-studio',
                  apiId: 'ee3432ae-db9c-48c0-af3f-58300ae5588c'
                },
                {
                  buildHookId: '5f49138d0f230a9cf9ea6f36',
                  title: 'Landing pages Website',
                  name: 'nguyenquangtuyen-test-cms',
                  apiId: '3cc9d352-ec7b-48c3-82df-42c4ea0236e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/quangtuyendev/nguyenquangtuyen-test-cms',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nguyenquangtuyen-test-cms.netlify.app', category: 'apps'}
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
