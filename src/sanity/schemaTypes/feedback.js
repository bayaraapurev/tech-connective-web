export const feedback = {
  name: 'feedback',
  title: 'Санал хүсэлт',
  type: 'document',
  fields: [
    { name: 'name', title: 'Нэр', type: 'string' },
    { name: 'email', title: 'И-мэйл', type: 'string' },
    { 
      name: 'category', 
      title: 'Чиглэл (Аль алба руу илгээх?)', 
      type: 'string',
      options: {
        list: [
          { title: 'Үйлчилгээ', value: 'service' },
          { title: 'Удирдлага', value: 'management' },
          { title: 'Маркетинг', value: 'marketing' },
          { title: 'Технологи', value: 'technology' },
        ]
      }
    },
    { name: 'message', title: 'Санал хүсэлт', type: 'text' },
    { 
      name: 'status', 
      title: 'Төлөв', 
      type: 'string',
      initialValue: 'pending',
      options: {
        list: [
          { title: 'Хүлээгдэж буй', value: 'pending' },
          { title: 'Шийдвэрлэсэн', value: 'resolved' }
        ]
      }
    },
    { 
      name: 'internalNote', 
      title: 'Мэдэгдэл / Санамж (Дотоод)', 
      type: 'text',
      description: 'Админууд хоорондоо үлдээх тэмдэглэл.'
    },
    { 
      name: 'adminResponse', 
      title: 'Админы хариулт', 
      type: 'text',
      description: 'Энэ талбар хэрэглэгч рүү илгээх хариулт болно.' 
    }
  ]
}