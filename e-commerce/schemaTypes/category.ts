import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title:'Name of category',
      validation: (rule) => rule.required(),
    }),
  ],
})