import { nanoid } from "nanoid";
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const contacts = [
    { id: nanoid(), text: 'gitHub', icon: <GitHubIcon sx={{ fontSize: 40 }} />, link: 'https://github.com/MariaZakharova0805' },
    { id: nanoid(), text: 'email', icon: <AlternateEmailIcon sx={{ fontSize: 40 }} />, link: 'mailto:fraumaria2011@yandex.ru' },
    { id: nanoid(), text: 'telegram', icon: <TelegramIcon sx={{ fontSize: 40 }} />, link: 'https://t.me/Maria_Zakharova_V' },
    { id: nanoid(), text: 'linkedIn', icon: <LinkedInIcon sx={{ fontSize: 40 }} />, link: 'https://www.linkedin.com/in/мария-захарова-a64312258' }
]