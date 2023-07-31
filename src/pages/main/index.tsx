import { ChooseTrainingType } from "../../features/choose-training-type"
import { FinishButton } from "../../features/finish-button/finish-button"
import { Exercises } from "../../widgets/exercises/exercises"
import { Timer } from "../../features/timer/timer"
import c from './main.module.css'

export const Main = () => {
  return (
    <div>
      <p>Все упражнения расчитаны на то, что они будут выполнены за <b>40-90минут</b>, за идеальное время вы получите <b>30 баллов</b>.</p>
      <p>Если тренировка длится <b>менее 5 минут</b> или более <b>90 минут</b>, то вы получаете <b>0 баллов</b>. Выполняйте абсолютно все упражнения и не делайте слишком длинные перерывы. 1 минута - это достаточно, чтобы дать мышцам отдохнуть.</p>
      <p>Если тренировка длится <b>от 5 до 40 минут</b>, то вы получите <b>1 балл</b>. Не пропускайте упражнения и делайте небольшие перерывы.</p>
      <p>Если тренировка длится <b>от 40 до 90 минут</b>, то вы получите <b>2 балла</b>. Попытайтесь улучшить свое время в следующий раз.</p>
      <p>После окончания тренировки ваше время сразу отобразится в левой панели и баллы суммируются.</p>
      <div className={c.top}>
        <div className={c.top_block}>
          <p>1. Выберите тип тренировки</p>
          <ChooseTrainingType />
        </div>
        <div className={c.top_block}>
          <p>2. Запустите таймер, чтобы отследить время тренировки и сохранить его.</p>
          <Timer />
        </div>
        <div className={c.top_block_bottom}>
          <p>3.Нажмите кнопку после заврешения тренировки, чтобы сохранить свой результат.</p>
          <FinishButton />
        </div>
      </div>
      <Exercises />
    </div>
  )
}

