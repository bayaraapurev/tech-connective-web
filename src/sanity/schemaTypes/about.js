export const about = {
  name: 'about',
  title: 'Бидний тухай',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Гарчиг',
      type: 'string',
      initialValue: 'Бидний тухай'
    },
    {
      name: 'subtitle',
      title: 'Дэд гарчиг (Уриа үг)',
      type: 'string',
      description: 'Жишээ нь: Технологийн салбарт тэргүүлэгч...'
    },
    {
      name: 'description',
      title: 'Үндсэн танилцуулга (Текст)',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Танилцуулгын зураг / Оффисын зураг',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mission',
      title: 'Эрхэм зорилго',
      type: 'text',
    },
    {
      name: 'vision',
      title: 'Алсын хараа',
      type: 'text',
    }
  ],
}