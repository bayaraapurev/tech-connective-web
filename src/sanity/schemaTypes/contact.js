export const contact = {
  name: 'contact',
  title: 'Холбоо барих',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Гарчиг',
      type: 'string',
      initialValue: 'Холбоо барих'
    },
    {
      name: 'subtitle',
      title: 'Дэд гарчиг',
      type: 'string',
      initialValue: 'Бидэнтэй хамтран ажиллахад бид үргэлж нээлттэй байх болно.'
    },
    // ШИНЭЭР НЭМСЭН ЗУРГИЙН ТАЛБАР
    {
      name: 'image',
      title: 'Оффисын барилгын зураг',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'phone',
      title: 'Утасны дугаар',
      type: 'string',
    },
    {
      name: 'email',
      title: 'И-мэйл хаяг',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Оффисын хаяг',
      type: 'text',
    },
    {
      name: 'workingHours',
      title: 'Цагийн хуваарь',
      type: 'string',
      initialValue: 'Даваа - Баасан: 09:00 - 18:00'
    },
    {
      name: 'mapEmbedUrl',
      title: 'Google Map линк (Embed URL)',
      type: 'url',
      description: 'Google Map-ын "Embed a map" хэсгээс зөвхөн "src=" доторх http-ээр эхэлсэн линкийг хуулж тавина уу.'
    }
  ],
}