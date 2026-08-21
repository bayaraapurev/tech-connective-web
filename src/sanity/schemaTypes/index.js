import { blog } from './blog'
import { partner } from './partner'
import { heroSlide } from './heroSlide'
import { about } from './about'
import { contact } from './contact'
import { footer } from './footer'
import { feedback } from './feedback' // 1. Санал хүсэлт файраа import хийх

export const schema = {
  types: [
    blog, 
    partner, 
    heroSlide, 
    about, 
    contact,
    footer,
    feedback // 2. Types массив дотор нэмэх
  ],
}