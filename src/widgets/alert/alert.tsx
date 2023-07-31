import { FC } from 'react';
import c from './alert.module.css'
import { Button } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useActions } from '../../shared/hooks/use-actions';
import { useTypedSelector } from '../../shared/hooks/use-typed-selector';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import img from '../../assets/monsters/7.png'

type AlertProps = {
    text: string;
}
export const Alert: FC<AlertProps> = ({text }) => {
    const { showAlert, clearUserData } = useActions()
    const { opened } = useTypedSelector(state => state.alert)
    const closeAlert = () => {
        clearUserData();
        showAlert(false);
    }
    
    return (
        <div className={opened ? c.alert : c.hidden}>
            <div className={c.alert_block}>
                <p className={c.text}>Ты точно хочешь удалить все данные? Статистика тренировок, баллы, а также личные данные будут удалены безвозрватно.</p>
                <img src={img} alt='delete monster' className={c.img} />
                <Button onClick={() => closeAlert()} color="error" variant="outlined" sx={{ mb: 2 }} startIcon={<SentimentVeryDissatisfiedIcon />}>да, точно удаляй</Button>
                <Button onClick={() => showAlert(false)} color="success" variant="outlined" startIcon={<SentimentSatisfiedAltIcon />}>{text}</Button>
            </div>
        </div>
    )
}

