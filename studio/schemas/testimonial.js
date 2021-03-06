export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
            name: 'from',
            title: 'From',
            type: 'string',
          }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  