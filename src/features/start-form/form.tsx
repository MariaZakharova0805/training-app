import { useState } from 'react'
import c from './form.module.css'
import { textPageData } from './const'
import { InfoPage } from './entities/info-page'
import { InputPage } from './entities/input-page'

export const FillInFrom = () => {
    const [slideNumber, setSlideNumber] = useState(1)
    const nextSlide = (num: number) => {
        setSlideNumber(num)
    }
    return (
        <div className={c.container}>
            {textPageData.map(item =>
                <InfoPage key={item.id} item={item} slideNumber={slideNumber} nextSlide={nextSlide} />
            )}
            <InputPage slideNumber={slideNumber} />
        </div>
    )
}


