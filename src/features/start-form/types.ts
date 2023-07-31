export interface ITexts {
    id: string,
    text: string
}

export type slideData = {
    id: string,
    title: string,
    img: string,
    texts: ITexts[]
    slideNum: number
}