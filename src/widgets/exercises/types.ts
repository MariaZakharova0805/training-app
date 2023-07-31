
export interface IImages {
    id: string,
    img: string
}

export interface IInstructions {
    id: string,
    text: string
}

export interface IExercise {
    id: string,
    header: string,
    amount: number,
    instructions: IInstructions[],
    images: IImages[],
    imgWidth:number,
    type: string
}

export type exercises = {
    exercise: IExercise[]
}