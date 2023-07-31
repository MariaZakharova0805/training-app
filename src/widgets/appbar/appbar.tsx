import { FC } from "react";
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import { appBarStyles } from "../../app/mui-style"
import { navlinks } from "../navbar/conts"
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
    handleDrawerToggle: () => void;
}

export const Appbar: FC<Props> = ({ handleDrawerToggle }) => {
    let location = useLocation();
    return (
        <AppBar position="fixed" sx={appBarStyles}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    {navlinks.map(link => location.pathname === link.link ? link.name : '')}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}