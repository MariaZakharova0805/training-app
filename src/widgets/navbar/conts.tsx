import { nanoid } from 'nanoid'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

export const navlinks = [
    { id: nanoid(), name: 'Главная', link: '/', icon: <SportsMartialArtsIcon />, active: true },
    { id: nanoid(), name: 'Статистика', link: '/statistic', icon: <BarChartIcon />, active: false },
    { id: nanoid(), name: 'Настройки', link: '/settings', icon: <SettingsIcon />, active: false },
    { id: nanoid(), name: 'Советы', link: '/instructions', icon: <InfoIcon />, active: false },
    { id: nanoid(), name: 'Контакты', link: '/contacts', icon: <PhoneIcon />, active: false },
]

