export const heroSlide = {
  name: 'heroSlide',
  title: 'Hero Слайд',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Дараалал (тоо)',
      type: 'number',
      description: 'Слайдууд хэддүгээрт харагдахыг тодорхойлно (1, 2, 3...)'
    },
    {
      name: 'badge',
      title: 'Жижиг шошго (Badge)',
      type: 'string',
      description: 'Гарчигны дээр гарах текст (Жишээ нь: Дижитал шилжилтийн...)'
    },
    {
      name: 'titleMain',
      title: 'Гарчиг - Хар (Эхний хэсэг)',
      type: 'string',
    },
    {
      name: 'titleHighlight',
      title: 'Гарчиг - Өнгөт (Дунд хэсэг)',
      type: 'string',
    },
    {
      name: 'titleSub',
      title: 'Гарчиг - Хар (Сүүлийн хэсэг)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Тайлбар текст',
      type: 'text',
    },
    {
      name: 'primaryBtnText',
      title: 'Үндсэн товчны текст',
      type: 'string',
    },
    {
      name: 'primaryBtnLink',
      title: 'Үндсэн товчны линк (Жишээ нь: /services)',
      type: 'string',
    },
    {
      name: 'secondaryBtnText',
      title: 'Хоёрдогч товчны текст',
      type: 'string',
    },
    {
      name: 'secondaryBtnLink',
      title: 'Хоёрдогч товчны линк (Жишээ нь: /contact)',
      type: 'string',
    },
  ],
  // Админ самбарын жагсаалтад гарчигийг нь харуулах тохиргоо
  preview: {
    select: {
      title: 'titleMain',
      subtitle: 'titleHighlight',
    },
  },
}