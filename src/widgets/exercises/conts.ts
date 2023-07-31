import { nanoid } from "nanoid";
import burpi1 from '../../assets/exercises/burpi/burpi1.png'
import burpi2 from '../../assets/exercises/burpi/burpi2.png'
import burpi3 from '../../assets/exercises/burpi/burpi3.png'
import burpi4 from '../../assets/exercises/burpi/burpi4.png'
import burpi5 from '../../assets/exercises/burpi/burpi5.png'
import burpi6 from '../../assets/exercises/burpi/burpi6.png'
import hips1 from '../../assets/exercises/hips-b/hips1.png'
import hips2 from '../../assets/exercises/hips-b/hips2.png'
import steps1 from '../../assets/exercises/side-steps/steps1.png'
import steps2 from '../../assets/exercises/side-steps/steps2.png'
import pushups1 from '../../assets/exercises/push-ups/push-ups1.png'
import pushups2 from '../../assets/exercises/push-ups/push-ups2.png'
import pushups3 from '../../assets/exercises/push-ups/push-ups3.png'
import backsteps1 from '../../assets/exercises/backsteps/backsteps1.png'
import backsteps2 from '../../assets/exercises/backsteps/backsteps2.png'
import legswings1 from '../../assets/exercises/swing-legs/swing-legs1.png'
import legswings2 from '../../assets/exercises/swing-legs/swing-legs2.png'
import run1 from '../../assets/exercises/run/run1.png'
import run2 from '../../assets/exercises/run/run2.png'
import jump1 from '../../assets/exercises/jumps/jumps1.png'
import jump2 from '../../assets/exercises/jumps/jumps2.png'
import jump3 from '../../assets/exercises/jumps/jumps3.png'
import climber1 from '../../assets/exercises/climber/clibmer1.png'
import climber2 from '../../assets/exercises/climber/clibmer2.png'
import climber3 from '../../assets/exercises/climber/clibmer3.png'
import woodcutter1 from '../../assets/exercises/woodcutter/woodcutter1.png'
import woodcutter2 from '../../assets/exercises/woodcutter/woodcutter2.png'
import cardioCrambs1 from '../../assets/exercises/cardioCrambs/cardiocrambs1.png'
import cardioCrambs2 from '../../assets/exercises/cardioCrambs/cardiocrambs2.png'
import cramps1 from '../../assets/exercises/crambs/crambs1.png'
import cramps2 from '../../assets/exercises/crambs/crambs2.png'
import superman1 from '../../assets/exercises/superman/superman1.png'
import superman2 from '../../assets/exercises/superman/superman2.png'
import lateralSlope1 from '../../assets/exercises/lateralSlope/lateralSlope1.png'
import lateralSlope2 from '../../assets/exercises/lateralSlope/lateralSlope2.png'
import slope1 from '../../assets/exercises/slope/slope1.png'
import slope2 from '../../assets/exercises/slope/slope2.png'
import cat1 from '../../assets/exercises/cat/cat1.png'
import cat2 from '../../assets/exercises/cat/cat2.png'
import dog1 from '../../assets/exercises/dog/dog1.png'
import dog2 from '../../assets/exercises/dog/dog2.png'
import stretch1 from '../../assets/exercises/stretch/stertch1.png'
import stretch2 from '../../assets/exercises/stretch/stertch2.png'

export const exercises = [
    //cardio
    {
        id: nanoid(),
        header: 'Берпи',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Встаньте, расставив ноги на ширине плеч. Напрягите мышцы корпуса и ягодицы' },
            { id: nanoid(), text: 'Согните колени и потянитесь вперед, чтобы положить руки на пол на ширине плеч.' },
            { id: nanoid(), text: 'Вытяните ноги прямо за собой и сразу же опустите все тело на землю, согнув локти так, чтобы грудь коснулась пола. Выполните отжимание.' },
            { id: nanoid(), text: 'Используйте руки, чтобы быстро подтолкнуть свое тело обратно вверх, одновременно подпрыгивая ногами к груди.' }
        ],
        images: [
            { id: nanoid(), img: burpi1 },
            { id: nanoid(), img: burpi2 },
            { id: nanoid(), img: burpi3 },
            { id: nanoid(), img: burpi4 },
            { id: nanoid(), img: burpi5 },
            { id: nanoid(), img: burpi6 },
        ],
        imgWidth: 150,
        type: 'cardio'
    },
    {
        id: nanoid(),
        header: 'Прыжки',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Встаньте, расставив ноги на ширине плеч. Напрягите мышцы корпуса и ягодицы. Вытяните руки перед собой' },
            { id: nanoid(), text: 'Соните ноги в полуприседе, чтобы колени не выходили за край пальцев ног' },
            { id: nanoid(), text: 'Сильно оттлкнитесь ногами вверх, выпрямив руки вниз' },
        ],
        images: [
            { id: nanoid(), img: jump1 },
            { id: nanoid(), img: jump2 },
            { id: nanoid(), img: jump3 }
        ],
        imgWidth: 110,
        type: 'cardio'
    },
    {
        id: nanoid(),
        header: 'Дровосек',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Встаньте, расставив ноги на ширине плеч. Поднимите руки сокнутые в замок слева над собой.' },
            { id: nanoid(), text: 'Опустите руки вниз в право, выполняя присед.' },
            { id: nanoid(), text: 'Вернитесь в исходное положение.' },
            { id: nanoid(), text: 'Повторите движение сменив сторону. Чтобы усложинть - возьмите в руки гантели или бутылку воды' },

        ],
        images: [
            { id: nanoid(), img: woodcutter1 },
            { id: nanoid(), img: woodcutter2 }
        ],
        imgWidth: 120,
        type: 'cardio'
    },
    {
        id: nanoid(),
        header: 'Скалолаз',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Встаньте в вертикальную планку на вытянутых руках. Руки находятся строко под плечами' },
            { id: nanoid(), text: 'Поочередно динамично подтягивайте ноги к коленям, оставляя опопрную ногу сзади' },
        ],
        images: [
            { id: nanoid(), img: climber1 },
            { id: nanoid(), img: climber2 },
            { id: nanoid(), img: climber3 }
        ],
        imgWidth: 120,
        type: 'cardio'
    },
    {
        id: nanoid(),
        header: 'Динамичные скручивания',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Лягте на спину, вытяните ноги и руки вдоль туловища.' },
            { id: nanoid(), text: 'При помощи брюшного пресса поднимите полусогнутые ноги вверх и запрокиньте их за голову.' },
        ],
        images: [
            { id: nanoid(), img: cardioCrambs1 },
            { id: nanoid(), img: cardioCrambs2 }
        ],
        imgWidth: 120,
        type: 'cardio'
    },

    {
        id: nanoid(),
        header: 'Бег на месте',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Встаньте, расставив ноги на ширине плеч. Напрягите мышцы корпуса и ягодицы' },
            { id: nanoid(), text: 'Поднимайте поочередно ноги.' },
            { id: nanoid(), text: 'Ритмично повторйте действия чередуя ноги' },
        ],
        images: [
            { id: nanoid(), img: run1 },
            { id: nanoid(), img: run2 }
        ],
        imgWidth: 100,
        type: 'cardio'
    },


    //strength
    {
        id: nanoid(),
        header: 'Боковые выпады',
        amount: 30,
        instructions: [
            { id: nanoid(), text: 'Встаньте прямо, ноги вместе. Сделайте большой шаг вправо правой ногой и согните правое колено, приседая бедрами назад, чтобы опуститься в боковой выпад.' },
            { id: nanoid(), text: 'Держите левую ногу прямо, а грудь расправленной. Убедитесь, что ваше правое колено остается над пальцами ног и не выходит за их проекцию.' },
            { id: nanoid(), text: 'Оттолкнитесь правой ногой, чтобы вернуться в исходное положение, а затем повторите движение на другую сторону.' },
        ],
        images: [
            { id: nanoid(), img: steps1 },
            { id: nanoid(), img: steps2 }
        ],
        imgWidth: 150,
        type: 'strength'
    },
    {
        id: nanoid(),
        header: 'Приседания в выпаде',
        amount: 30,
        instructions: [
            { id: nanoid(), text: 'Встаньте спиной к скамейке или аналогичной возвышенной поверхности (дома это может быть диван или стул). Поставьте левую ногу на пол на расстоянии широкого шага от опоры. Поставьте верхнюю часть стопы правой ноги на опору шнурками вниз.' },
            { id: nanoid(), text: 'Напрягите мышцы корпуса и согните колени, чтобы опуститься в выпад. В идеале левое колено должно образовывать угол 90 градусов, чтобы бедро было параллельно земле, а правое колено парило над полом.' },
        ],
        images: [
            { id: nanoid(), img: backsteps1 },
            { id: nanoid(), img: backsteps2 },
        ],
        imgWidth: 150,
        type: 'strength'
    },
    {
        id: nanoid(),
        header: 'Скручивания',
        amount: 30,
        instructions: [
            { id: nanoid(), text: 'Лягте на спину, руки сомкнуты в замок за головой. Ноги опущены на пол и сонуты в коленях' },
            { id: nanoid(), text: 'С помощью брюшного пресса подтените корпус к коленям. Не напрягайте и не давите на шею. Используйте только усилия корпуса' },
        ],
        images: [
            { id: nanoid(), img: cramps1 },
            { id: nanoid(), img: cramps2 },
        ],
        imgWidth: 250,
        type: 'strength'
    },
    {
        id: nanoid(),
        header: 'Супермен',
        amount: 30,
        instructions: [
            { id: nanoid(), text: 'Лягте на живот, руки и ноги вытянуты.' },
            { id: nanoid(), text: 'Одновременно поднимите руки и ноги вверх. Не напрягайте поясницу.' },
        ],
        images: [
            { id: nanoid(), img: superman1 },
            { id: nanoid(), img: superman2 },
        ],
        imgWidth: 250,
        type: 'strength'
    },
    {
        id: nanoid(),
        header: 'Ягодичный мостик',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Лягте на спину, руки по бокам, колени согнуты, ступни на полу на ширине плеч. Если есть эластичная лента, то оберните ее вокруг бедер чуть выше колен.' },
            { id: nanoid(), text: 'Напрягите ягодицы и пресс и оттолкнитесь пятками, чтобы поднять бедра от пола, пока ваше тело не образует прямую линию от плеч до колен.' },
            { id: nanoid(), text: 'Держите эту позицию. Усилиями растяните резинку и верните в изначальную позицию. ' },
        ],
        images: [
            { id: nanoid(), img: hips1 },
            { id: nanoid(), img: hips2 }
        ],
        imgWidth: 250,
        type: 'strength'
    },
    {
        id: nanoid(),
        header: 'Отжимания',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Примите упор лежа, опираясь на руки и стопы. Ладони расположите чуть дальше ширины плеч, а стопы — на ширине таза. ' },
            { id: nanoid(), text: 'На вдохе согните руки в локтях и опускайтесь вниз.' },
            { id: nanoid(), text: 'На выдохе выпрямите руки поднимайтесь в исходное положение.' },
        ],
        images: [
            { id: nanoid(), img: pushups1 },
            { id: nanoid(), img: pushups2 },
            { id: nanoid(), img: pushups3 }
        ],
        imgWidth: 250,
        type: 'strength'
    },
    {
        id: nanoid(),
        header: 'Махи ногами на четвереньках',
        amount: 30,
        instructions: [
            { id: nanoid(), text: 'Встаньте на четвереньки, колени под бедрами, а ладони под плечами.' },
            { id: nanoid(), text: 'Согните правую ногу и оторвите ее от пола, одновременно выпрямляя ее назад.' },
            { id: nanoid(), text: 'Используйте ягодичные мышцы, чтобы поднять ногу. Если вы начинаете чувствовать какое-либо напряжение в пояснице, не поднимайте ногу высоко.' },
            { id: nanoid(), text: 'Сделайте 15 повторений на одну сторону, а затем перейдите на другую сторону.' },
        ],
        images: [
            { id: nanoid(), img: legswings1 },
            { id: nanoid(), img: legswings2 },
        ],
        imgWidth: 250,
        type: 'strength'
    },
    //stretching
    {
        id: nanoid(),
        header: 'Наклоны вперед',
        amount: 30,
        instructions: [
            { id: nanoid(), text: 'Встаньте, ноги вметсе, слегка разведите пятки. Руки либо подняты вперед, либо сцеплены над говлой.' },
            { id: nanoid(), text: 'Опустите корпус вниз и вперед. Тянитесь носом к коленям.' },
            { id: nanoid(), text: 'Позвоночник прямой, не скручивайте спину. Страйтесь достать нижними ребрами до бедер. Больше тянитесь вперед, нежели вниз.' },
        ],
        images: [
            { id: nanoid(), img: slope1 },
            { id: nanoid(), img: slope2 },
        ],
        imgWidth: 120,
        type: 'stretching'
    },
    {
        id: nanoid(),
        header: 'Боковые наклоны',
        amount: 30,
        instructions: [
            { id: nanoid(), text: 'Встаньте, ногина ширине плеч, левая рука на бедере, правую руку выпрямите и поднимите над голвой.' },
            { id: nanoid(), text: 'Наклоните корпус в лево, тянитесь рукой вверх и в лево.' },
            { id: nanoid(), text: 'Позвоночник прямой, не сркуичвайте спину.' },

        ],
        images: [
            { id: nanoid(), img: lateralSlope1 },
            { id: nanoid(), img: lateralSlope2 },
        ],
        imgWidth: 150,
        type: 'stretching'
    },
    {
        id: nanoid(),
        header: 'Поза кошки',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Встаньте на четвереньки. Руки строго под плечами.' },
            { id: nanoid(), text: 'Прогнтиесь в шее, грудном отделен и пояснице, потяните весь позвоночник вниз. Не заламывайте шею.' },
            { id: nanoid(), text: 'Скруглите шею, грудной отдел и поясицу, потяните весь позвоночник вверх.' },
        ],
        images: [
            { id: nanoid(), img: cat1 },
            { id: nanoid(), img: cat2 },
        ],
        imgWidth: 250,
        type: 'stretching'
    },
    {
        id: nanoid(),
        header: 'Поза собаки',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Встаньте на четвереньки. Руки строго под плечами.' },
            { id: nanoid(), text: 'Сильно толкайтесь выпряпленными руками от пола и выпрямите ноги, не отрывая пяток.' },
            { id: nanoid(), text: 'Не сгибайте руки и не сркугляйте спину. Если пятки не касаются пола, слегка согните колне.' },
        ],
        images: [
            { id: nanoid(), img: dog1 },
            { id: nanoid(), img: dog2 },
        ],
        imgWidth: 220,
        type: 'stretching'
    },
    {
        id: nanoid(),
        header: 'Прогибы',
        amount: 20,
        instructions: [
            { id: nanoid(), text: 'Опустите бедра на пятки. Ноги поставьте сзади на ширину плеч или на щиколотки.' },
            { id: nanoid(), text: 'Потянитесь бедрами вперед, выгните спину. Не запрокидывайте и заламывайте шею слишком глубоко.' },
        ],
        images: [
            { id: nanoid(), img: stretch1 },
            { id: nanoid(), img: stretch2 },
        ],
        imgWidth: 180,
        type: 'stretching'
    },
]