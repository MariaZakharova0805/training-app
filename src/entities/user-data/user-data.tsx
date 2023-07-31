import { useEffect } from "react"
import { List, ListItem, ListItemButton, Tooltip } from "@mui/material"
import { useTypedSelector } from "../../shared/hooks/use-typed-selector"
import { useActions } from "../../shared/hooks/use-actions"
import ScaleIcon from '@mui/icons-material/Scale';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FaceIcon from '@mui/icons-material/Face';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { NavLink } from "react-router-dom";
import { formTime, translateTrainingType } from "./hooks";
import c from './user-data.module.css'

export const UserData = () => {
  const { trainingData } = useTypedSelector(state => state.users)
  const { fetchUsers } = useActions()
  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <List>
      <ListItem>
        <FaceIcon sx={{ mr: 1 }} />
        <span className={c.name}>Имя: {trainingData.length ? trainingData[0].name : ''}</span>
      </ListItem>
      <Tooltip title='динамика веса'>
        <NavLink to={'/statistic'}>
          <ListItem disablePadding>
            <ListItemButton sx={{ w: '100%' }}>
              <ScaleIcon sx={{ mr: 1 }} />
              <span>Вес: {trainingData.length ? trainingData[0].weightInfo.at(-1) : ''}кг</span>
              <AdsClickIcon fontSize='small' color='info' sx={{ ml: 2 }} />
            </ListItemButton>
          </ListItem></NavLink></Tooltip>
      <ListItem>
        <EmojiEventsIcon sx={{ mr: 1 }} />
        <span>Очки: {trainingData.length ? trainingData[0].points : ''}</span></ListItem>
      <Tooltip title="дата последней тренировки">
        <ListItem sx={{alignItems: 'flex-start'}}>
          <FitnessCenterIcon sx={{ mr: 1 }} />
          <div className={c.training}>
            <b>Последняя тренировка:</b>
            <p>Дата: {trainingData.length ? trainingData[0].lastDate : ''}</p>
            <p>Тип: {trainingData.length ? translateTrainingType(trainingData[0].trainingType) : ''}</p>
            <p>Время:
              {formTime(trainingData.length ? trainingData[0].trainingTime[0] : 0) +
                ':' + formTime(trainingData.length ? trainingData[0].trainingTime[1] : 0) +
                ':' + formTime(trainingData.length ? trainingData[0].trainingTime[2] : 0)}</p>
          </div>
        </ListItem></Tooltip>


    </List>

  )
}

