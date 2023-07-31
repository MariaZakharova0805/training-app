
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { useTypedSelector } from "../../shared/hooks/use-typed-selector"
import { useActions } from "../../shared/hooks/use-actions"

export const ChooseTrainingType = () => {
    const { trainingType} = useTypedSelector(state => state.trainging)
    const { setTrainingType } = useActions()
    const chooseTrainingType = (event: SelectChangeEvent) => {
        setTrainingType(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Тренировка</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={trainingType}
                label="Тренировка"
                onChange={chooseTrainingType}
            >
                <MenuItem value={'strength'}>Силовая</MenuItem>
                <MenuItem value={'cardio'}>Кардио</MenuItem>
                <MenuItem value={'stretching'}>Растяжка</MenuItem>
            </Select>
        </FormControl>
    )
}

