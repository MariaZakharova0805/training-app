import img from '../../assets/monsters/6.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import c from './error.module.css'

export const Error = () => {
  return (
    <div className={c.box}>
      <div className={c.container}>
        <h4>Что-то пошло не так :(</h4>
        <p>лучше вернуться</p>
        <Button variant="contained" sx={{color: 'white'}}><Link to={`/`}>на главную</Link></Button>
      </div>
      <img src={img} alt='error monster' className={c.img} />
    </div>

  )
}
