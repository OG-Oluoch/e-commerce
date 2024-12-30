import {defineField, defineType} from 'sanity'

export const imageType = defineType({
  name: 'myImage',
  title: 'Images',
  type: 'document',
  fields: [
    defineField({
      name: 'image1',
      type: 'image',
      title:'1st Image',
    }),
    defineField({
        name: 'image2',
        type: 'image',
        title:'2nd Image',
      }),
  ],
})