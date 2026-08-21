export const partner = {
  name: 'partner',
  title: 'Хамтрагч байгууллага',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Байгууллагын нэр',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Лого зураг',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Вэб сайтын линк (URL)',
      type: 'url',
    },
  ],
}