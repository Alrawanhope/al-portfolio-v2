export default {
    name: 'testimonials',
    title: 'Testimonials',
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
        name: 'testimonialsList',
        title: 'Testimonials List',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'testimonial' } }]
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
  