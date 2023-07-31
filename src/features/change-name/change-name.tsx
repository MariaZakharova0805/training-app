import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material"
import c from './change-name.module.css'
import { useTypedSelector } from "../../shared/hooks/use-typed-selector";
import { useActions } from "../../shared/hooks/use-actions";

export const ChangeName = () => {
    const { trainingData } = useTypedSelector(state => state.users)
    const { addUsersData } = useActions()
    const [name, setName] = useState('');

    const updateUserData = () => {
        let newTrainingData = trainingData[0];
        if (name.length > 0) {
            newTrainingData.name = name;
            addUsersData(newTrainingData);
        } else alert('Введите имя')
    }
    useEffect(() => {
        setName(trainingData[0] ? trainingData[0].name : '');
    }, [trainingData])
    return (
        <div className={c.flex}>
            <TextField id="outlined-basic"
                variant="outlined"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
            />
            <Button onClick={() => updateUserData()} variant="outlined">сохранить</Button>
        </div>
    )
}

