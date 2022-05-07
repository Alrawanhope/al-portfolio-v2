export default {
    name: 'quotes',
    title: 'Quotes',
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
        name: 'quoteList',
        title: 'Quote List',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'quote' } }]
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
  