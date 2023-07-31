import { FC } from 'react'
import { slideData, ITexts } from '../types'
import { Button, List, ListItem } from '@mui/material'
import c from '../form.module.css'

type Props = {
    item: slideData,
    slideNumber: number,
    nextSlide: (arg: number) => void
}

export const InfoPage: FC<Props> = ({ item, slideNumber, nextSlide }) => {
    return (
        <div key={item.id} className={slideNumber === item.slideNum ? c.window : c.hiddenSlide}>
            <div className={c.window_header}>
                <h2>{item.title}</h2>
                <img src={item.img} alt='monster training' className={c.img} />
            </div>
            <List>
                {item.texts.map((text: ITexts) =>
                    <ListItem key={text.id}>{text.text}</ListItem>
                )}
            </List>
            <Button onClick={() => nextSlide(item.slideNum + 1)} variant="contained">далее</Button>
        </div>
    )
}

