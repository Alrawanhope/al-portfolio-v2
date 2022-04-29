export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'info',
      title: 'Info',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
  preview: {
    select: {
      title: 'info',
      media: 'image',
    },
  },
}
