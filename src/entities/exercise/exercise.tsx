import c from './exercise.module.css'
import { FC, useEffect, useState } from 'react'
import { IExercise } from '../../widgets/exercises/types'

type Exercise = {
    item: IExercise
}

export const Exercise: FC<Exercise> = ({ item}) => {
    const images = item.images.map(img => img.img)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const updateImageIndex = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const timer = setInterval(updateImageIndex, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={c.container}>
            <div className={c.head}>
                <h1>{item.header}</h1>
                <div className={c.head_image}>
                    <img src={images[currentImageIndex]} alt="image" style={{ width: `${item.imgWidth}px` }} />
                </div>
            </div>
            <div className={c.amount}>
                <h4 className={c.header}>Кол-во подходов:</h4>
                <p> {item.amount}</p>
            </div>
            <div className={c.block}>
                <h4 className={c.header}>Как выполнять:</h4>
                <ul className={c.instructuons}>
                    {item.instructions.map(text =>
                        <li key={text.id}>{text.text}</li>)}
                </ul>
            </div>
         </div>
    )
}

