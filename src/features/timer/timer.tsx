import { useEffect } from 'react'
import c from './timer.module.css'
import { useTypedSelector } from '../../shared/hooks/use-typed-selector'
import { useActions } from '../../shared/hooks/use-actions'

export const Timer = () => {
  const { trainingType } = useTypedSelector(state => state.trainging)
  const { hours, minutes, seconds, timeGo } = useTypedSelector(state => state.timer)
  const { setHours, setMinutes, setSeconds, timerStart } = useActions()

  useEffect(() => {
    if (timeGo === true) {
      const tick = (num: number) => {
        if (seconds < 59) {
          setSeconds(seconds + num);
        } else {
          setSeconds(0);
          if (minutes < 59) {
            setMinutes(minutes + num)
          } else {
            setMinutes(0);
            setHours(hours + num)
          }
        }
      }
      const interval = setInterval(() => tick(1), 1000);
      const cleanup = () => {
        clearInterval(interval);
      };
      return cleanup;
    }
  });

  const startTimer = () => {
    trainingType.length ? timerStart(true) : alert('Выберите тип тренировки')
  }
  const clearTimer = () => {
    timerStart(false)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }
  return (
    <div className={c.timer}>
      <h2 className={c.timer_header}>Таймер</h2>
      <div className={c.timer_numbers}>
        <div className={c.num}>
          <p className={c.num_number}>{hours > 9 ? hours : '0' + hours}</p>
          <p>час</p>
        </div>
        <div className={c.num}>
          <p className={c.num_number}>{minutes > 9 ? minutes : '0' + minutes}</p>
          <p>мин</p>
        </div>
        <div className={c.num}>
          <p className={c.num_number}>{seconds > 9 ? seconds : '0' + seconds}</p>
          <p>сек</p>
        </div>
      </div>
      <div className={c.timer_buttons}>
        <button className={c.timer_button} onClick={startTimer}>старт</button>
        <button className={c.timer_button} onClick={clearTimer}>обнулить</button>
      </div>
    </div>
  )
}