import { nanoid } from 'nanoid'
import img1 from '../assets/monsters/1.png'
import img2 from '../assets/monsters/2.png'
import img3 from '../assets/monsters/3.png'
import img4 from '../assets/monsters/4.png'
import img5 from '../assets/monsters/5.png'
import img6 from '../assets/monsters/6.png'
import img7 from '../assets/monsters/7.png'
import img8 from '../assets/monsters/8.png'
import img9 from '../assets/monsters/9.png'

export const imageItems = [
    { id: nanoid(), value: '1.png', img: img1, alt:'Сильный злобный монстр' },
    { id: nanoid(), value: '2.png', img: img2, alt:'Зубастый монстр' },
    { id: nanoid(), value: '3.png', img: img3, alt:'Одноглазый добрый монстр' },
    { id: nanoid(), value: '4.png', img: img4, alt:'Одногласный монстр восьминог' },
    { id: nanoid(), value: '5.png', img: img5, alt:'Одноглазый веселый монстрик' },
    { id: nanoid(), value: '6.png', img: img6, alt:'Ворчилвый синий монстр' },
    { id: nanoid(), value: '7.png', img: img7, alt:'Растерянный монстр-слизняк' },
    { id: nanoid(), value: '8.png', img: img8, alt:'Милый синий моснтр-жижа' },
    { id: nanoid(), value: '9.png', img: img9, alt:'Зубыстый монстр-улитка' }
]