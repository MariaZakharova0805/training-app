import { nanoid } from 'nanoid'
import img1 from '../../assets/monsters/1.png'
import img2 from '../../assets/monsters/2.png'
import img9 from '../../assets/monsters/9.png'

export const textPageData = [
    {
        id: nanoid(),
        title: 'Прокачай своего внутреннего монстра!',
        img: img1,
        texts: [{ id: nanoid(), text: 'Выполняй задания не реже чем раз в 2 дня' },
        { id: nanoid(), text: 'Получай баллы за тренировку' },
        { id: nanoid(), text: 'Следи за прогрессом веса' },
        { id: nanoid(), text: 'Нажми кнопку "далее" и обязательно ознакомься с инструкцией, а также советами по питанию и тренировкам' },
        ],
        slideNum: 1
    },
    {
        id: nanoid(),
        title: 'Правила',
        img: img9,
        texts: [{ id: nanoid(), text: 'Выполняй задания не реже чем раз в 2 дня' },
        { id: nanoid(), text: 'Ты можешь засечь время тренировки, нажав кнопку старт перед началом тренировки' },
        { id: nanoid(), text: 'Слева в панели отображаются твои данные: твой аватар, имя, вес, дата последней тренировки' },
        { id: nanoid(), text: 'Если нажать на вес в левой панели, то ты можешь увидеть свою динамику веса в графике за последние 30 тренировок' },
        { id: nanoid(), text: 'Под графиком веса есть окошо, куда можно записать свой текущий вес' },
        ],
        slideNum: 2
    },
    {
        id: nanoid(),
        title: 'Безопасность',
        img: img2,
        texts: [
            { id: nanoid(), text: 'Приложение не скачивает и не отправляет твои персональные данные абсолютно ни-ку-да, все хранится на твоем устройстве. Поэтому убедись, что для тренировок ты пользуешься одним и тем же гаджетом' },
            { id: nanoid(), text: 'Чтобы сбросить все данные нажми красную кнопку в левой панели. Будь осторожен с этой кнопкой, она обнулит абсолютно все твои достижения' },
            { id: nanoid(), text: 'Нажми кнопку далее и заполни свои данные' },
        ],
        slideNum: 3
    },
]

export const inputFields = [
    { id: nanoid(), label: 'Имя', data: 'name' },
    { id: nanoid(), label: 'Вес', data: 'weight' }
]


export const newtrainingData = {
    id: nanoid(),
    name: '',
    img: '',
    weightInfo: [] as number[],
    waistInfo: [] as number[],
    hipsInfo: [] as number[],
    bicepsInfo: [] as number[],
    lastDate: new Date().toLocaleDateString(),
    trainingType: '',
    trainingTime: [] as number[],
    points: 0,
}