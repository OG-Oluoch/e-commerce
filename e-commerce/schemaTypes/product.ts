import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title:'Name of product',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title:'Product slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'array',
      of:[{type:'image'}],
    }),
    defineField({
      name: 'body',
      type: 'array',
      title:'Description',
      of: [{type: 'block'}],
    }),
    defineField({
        name:'category',
        title:'Product Category',
        type:'reference',
        to:[{
           type:'category', 
        }],
    }),
  ],
})