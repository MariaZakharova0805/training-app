import { FC, useState } from 'react'
import { Button, FormControl, InputLabel, List, ListItem, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import c from '../form.module.css'
import { newtrainingData } from '../const'
import { imageItems } from '../../../shared/consts'
import { useActions } from '../../../shared/hooks/use-actions'

type Props = {
    slideNumber: number,
}

export const InputPage: FC<Props> = ({ slideNumber }) => {
    // const { hours, minutes, seconds } = useTypedSelector(state => state.timer)
    const [weight, setWeight] = useState(0)
    const [name, setName] = useState('')
    const [image, setImage] = useState('1.png');
    const [userImage, setUserImage] = useState('img1')
    const handleChangeName = (event: any) => {
        setName(event.target.value);
    };
    const handleChangeWeight = (event: any) => {
        setWeight(event.target.value)
    };
    const handleChangeImg = (event: SelectChangeEvent) => {
        setImage(event.target.value);
    };
    const chooseImg = (userImage: string) => {
        setUserImage(userImage)
    }

    const { addUsersData } = useActions()

    const saveUserData = (name: string, userImage: string, weight: number) => {
        if (name.length > 0 && weight > 30 && weight < 300) {
            newtrainingData.name = name;
            newtrainingData.img = userImage;
            newtrainingData.weightInfo.push(Number(weight));
            newtrainingData.trainingTime = [0, 0, 0];
            addUsersData(newtrainingData);
        } else {
            alert('Введите корректное значение')
        }
    }

    return (
        <div className={slideNumber === 4 ? c.window : c.hiddenSlide}>
            <div className={c.window_header}>
                <h2>Заполни форму</h2>
            </div>
            <List>
                <ListItem>
                    <FormControl sx={{ width: '100px' }}>
                        <InputLabel id="demo-simple-select-helper-label">Аватар</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={image}
                            label="Аватар"
                            onChange={handleChangeImg}
                            sx={{ height: '100px' }}
                        >
                            {imageItems.map(item =>
                                <MenuItem key={item.id} value={item.value} onClick={() => chooseImg(item.value)}>
                                    <img src={item.img} alt='monster' className={c.img_sm} />
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </ListItem>
                <ListItem>
                    <TextField
                        label="Имя"
                        value={name}
                        onChange={handleChangeName}
                        variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField
                        type="number"
                        label="Вес(кг)"
                        value={weight}
                        onChange={handleChangeWeight}
                        variant="outlined" />
                </ListItem>
            </List>
            <Button sx={{ mb: '20px' }} onClick={() => saveUserData(name, userImage, weight)} variant="contained">далее</Button>
        </div>
    )
}

