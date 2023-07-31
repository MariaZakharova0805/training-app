import { Button } from "@mui/material"
import { useTypedSelector } from "../../shared/hooks/use-typed-selector"
import { useActions } from "../../shared/hooks/use-actions"
import { CountPoitns } from "./hooks"

export const FinishButton = () => {
  const { trainingData } = useTypedSelector(state => state.users)
  const { trainingType } = useTypedSelector(state => state.trainging)
  const { hours, minutes, seconds, timeGo } = useTypedSelector(state => state.timer)
  const { addUsersData, timerStart, setTrainingType, setHours, setMinutes, setSeconds } = useActions()

  const saveUserData = () => {
    if (trainingType.length && timeGo === true) {
      //Остановка таймера
      timerStart(false);
      //Убираем тип тренировки и прячем упражнения
      setTrainingType('');
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      //Смотрим прошлое время тренировки
      const lastTrainingTime = trainingData[0].trainingTime;
      //Смотрим новое время тренировки
      const newTrainingData = trainingData[0];
      //Записываем новый тип тренировки
      newTrainingData.trainingType = trainingType;
      //Записываем новое время тренировки
      newTrainingData.trainingTime = ([hours, minutes, seconds]);
      //Записываем очки за тренировку
      newTrainingData.points += CountPoitns(minutes, hours);
      //Записываем новую дату тренировки
      newTrainingData.lastDate = new Date().toLocaleDateString();
      //Сравниваем предыдущее время тренировки и выводим alert
      alert(
        `В прошлый раз вы тренировались: ${lastTrainingTime[0]}ч ${lastTrainingTime[1]}м ${lastTrainingTime[2]}с
Длительность текущей тренировки: ${newTrainingData.trainingTime[0]}ч ${newTrainingData.trainingTime[1]}м ${newTrainingData.trainingTime[2]}с
За эту тренироку вы получили баллы: ${CountPoitns(minutes, hours)}`
      )
      //Сохраняем новые данные
      addUsersData(newTrainingData);
    } else {
      alert('Сперва выберите тип тренировки и запустите таймер')
    }
  }

  return (
    <Button onClick={saveUserData} variant="contained">закончить</Button>
  )
}

