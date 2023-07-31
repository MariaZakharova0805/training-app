import c from './navbar.module.css'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { navlinks } from './conts';
export const Navbar = () => {
    const location = useLocation();
    return (
        <List>
            {navlinks.map((navlink) => (
                <ListItem key={navlink.id} disablePadding>
                    <ListItemButton>
                        <NavLink
                            to={navlink.link}
                            className={({ isActive, isPending }) =>
                                isActive ? c.link_active : isPending ? c.link_active : c.link}>
                            <ListItemIcon
                                style={{ color: location.pathname === navlink.link ? "#1976d2" : "rgba(0, 0, 0, 0.87)" }}>
                                {navlink.icon}
                            </ListItemIcon>
                            <ListItemText primary={navlink.name} />
                        </NavLink>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

