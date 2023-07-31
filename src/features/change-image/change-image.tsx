import c from './change-image.module.css'
import { useActions } from '../../shared/hooks/use-actions'
import { useTypedSelector } from '../../shared/hooks/use-typed-selector'
import { imageItems } from '../../shared/consts'

export const ChangeImage = () => {
    const { trainingData } = useTypedSelector(state => state.users)
    const { addUsersData } = useActions()

    const updateImage = (newImg: string) => {
        let newTrainingData = trainingData[0];
        newTrainingData.img = newImg;
        addUsersData(newTrainingData);
    }
    return (
        <div className={c.grid}>
            {imageItems.map(img => <div key={img.id} className={c.grid_item}>
                <img src={img.img} alt='monster' className={c.img}
                    onClick={() => updateImage(img.value)}
                /></div>)}
        </div>
    )
}