import { Button } from "@mui/material"
import { Exercise } from "../../entities/exercise/exercise"
import { exercises } from "./conts"
import { useTypedSelector } from "../../shared/hooks/use-typed-selector"

export const Exercises = () => {
  const { trainingType} = useTypedSelector(state => state.trainging)
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
      setTimeout(handlerScrollUp, 10);
    }
  }
  return (
    <div>
      {trainingType.length > 0 ?
        exercises.map(item =>
          item.type === trainingType ?
            <Exercise key={item.id} item={item} /> : ''
        ) : ''}

      {trainingType.length ? <Button
        onClick={handlerScrollUp}
        sx={{ display: 'block', margin: '0 auto' }
        } variant="contained" size="large">наверх</Button> : ''}

    </div >
  )
}
