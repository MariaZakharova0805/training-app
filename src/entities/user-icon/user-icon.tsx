import { useState, useEffect, FC } from 'react'
import { useTypedSelector } from '../../shared/hooks/use-typed-selector'
import c from './user-icon.module.css'
import { imageItems } from '../../shared/consts'
type UserIconProps = {
  drawer: boolean
}

export const UserIcon: FC<UserIconProps> = ({ drawer }) => {

  const [image, setImage] = useState('1.png');

  const { trainingData } = useTypedSelector(state => state.users)

  useEffect(() => {
    setImage(trainingData[0] ? trainingData[0].img : '1.png');
  }, [trainingData])

  return (
    <div>
      {imageItems.map(img =>
        img.value === image ? <img src={img.img} key='your_image' className={drawer ? c.drawer_img : c.settings_img} /> : '')}

    </div>
  )
}

