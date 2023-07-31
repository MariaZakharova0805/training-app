import { useState, useEffect, FC } from 'react'
import { useTypedSelector } from '../../shared/hooks/use-typed-selector'
import c from './user-icon.module.css'
import { imageItems } from '../../shared/consts'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
        img.value === image ?
          <LazyLoadImage
            key='your_image'
            alt='your monster icon'
            effect="blur"
            src={img.img}
            className={drawer ? c.drawer_img : c.settings_img}
            placeholderSrc={img.img}
          />
          : '')}
    </div>
  )
}

