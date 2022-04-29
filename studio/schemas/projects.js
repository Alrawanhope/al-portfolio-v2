export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'projectList',
        title: 'Project List',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'project' } }]
    },
    ]
    // ,
    // preview: {
    //   select: {
    //     title: 'info',
    //     media: 'image',
    //   },
    // },
  }
  