export const footer = {
  name: 'footer',
  title: 'Хөл хэсэг (Footer)',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Компанийн нэр',
      type: 'string',
      initialValue: 'ТЕХ КОННЕКТИВ'
    },
    {
      name: 'description',
      title: 'Компанийн тухай товч текст',
      type: 'text',
    },
    {
      name: 'address',
      title: 'Хаяг',
      type: 'string',
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
      name: 'copyright',
      title: 'Зохиогчийн эрхийн бичиг',
      type: 'string',
      initialValue: '© 2026 Тех Коннектив ХХК. Бүх эрх хуулиар хамгаалагдсан.'
    }
  ],
}