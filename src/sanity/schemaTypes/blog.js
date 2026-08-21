export const blog = {
  name: 'blog',
  title: 'Блог нийтлэл',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Гарчиг',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Линкний нэр (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Ангилал',
      type: 'string',
      options: {
        list: [
          { title: 'AI & Автоматжуулалт', value: 'AI & Автоматжуулалт' },
          { title: 'Дижитал стратеги', value: 'Дижитал стратеги' },
          { title: 'Вэб & Апп хөгжүүлэлт', value: 'Вэб & Апп хөгжүүлэлт' },
          { title: 'Интеграци & Дэд бүтэц', value: 'Интеграци & Дэд бүтэц' },
          { title: 'Технологи & Инноваци', value: 'Технологи & Инноваци' },
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Огноо',
      type: 'date',
    },
    {
      name: 'mainImage',
      title: 'Үндсэн зураг',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Агуулга (Editor)',
      type: 'array',
      of: [
        { 
          type: 'block',
          styles: [
            { title: 'Хэвийн (Зүүн)', value: 'normal' },
            { title: 'Голлон байрлуулах', value: 'center' },
            { title: 'Баруун тийш шахах', value: 'right' },
            { title: 'Хоёр талаас нь тэгшлэх (Justify)', value: 'justify' },
            { title: 'Гарчиг 1', value: 'h1' },
            { title: 'Гарчиг 2', value: 'h2' },
            { title: 'Гарчиг 3', value: 'h3' },
            { title: 'Ишлэл', value: 'blockquote' },
          ],
          lists: [
            { title: 'Цэгтэй жагсаалт', value: 'bullet' },
            { title: 'Дугаартай жагсаалт', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Тодруулсан (Bold)', value: 'strong' },
              { title: 'Налуу (Italic)', value: 'em' },
              { title: 'Код (Code)', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Вэб линк холбох',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL хаяг'
                  }
                ]
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Өөр нийтлэл рүү холбох (Tag)',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Блог нийтлэл сонгох',
                    to: [{ type: 'blog' }]
                  }
                ]
              }
            ]
          }
        },
        { type: 'image' }
      ],
    },
  ],
}