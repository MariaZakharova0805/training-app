import { Button, Tooltip } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useActions } from "../../shared/hooks/use-actions";

export const DangerButton = () => {
    const { showAlert } = useActions()
    return (
        <Tooltip title='нажатие этой кнопки приведет к сбросу всех ваших данных'>
            <Button
                sx={{ mt: 5, ml: 4 }}
                color="error"
                onClick={() => showAlert(true)}
                variant="outlined" startIcon={<DeleteIcon />}>
                Удалить все
            </Button>
        </Tooltip>
    )
}

