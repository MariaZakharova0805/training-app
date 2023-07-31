import { useState } from 'react';
import { Box, CssBaseline, Drawer, Toolbar } from '@mui/material';
import { Outlet } from 'react-router';
import { smBrawerStyles, bigBrawerStyles, drawerBoxStyles, contentBoxStyles } from './mui-style';
import './App.css'
import { FillInFrom } from '../features/start-form/form';
import { useTypedSelector } from '../shared/hooks/use-typed-selector';
import { DrawerContent } from '../widgets/drawer/drawer';
import { Appbar } from '../widgets/appbar/appbar';
import ScrollToTop from '../features/scroll-top/scroll-top';
import { Alert } from '../widgets/alert/alert';

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  const { newUserAuth } = useTypedSelector(state => state.users);

  return (
    <>
      <div className='App'>
        <Alert text='нет, я передумал'/>
        <ScrollToTop />
        {newUserAuth ? <FillInFrom /> :
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Appbar handleDrawerToggle={handleDrawerToggle} />
            <Box component="nav" sx={drawerBoxStyles}>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={bigBrawerStyles}>
                <DrawerContent />
              </Drawer>
              <Drawer variant="permanent" open sx={smBrawerStyles}>
                <DrawerContent />
              </Drawer>
            </Box>
            <Box component="main" sx={contentBoxStyles}>
              <Toolbar />
              <Outlet />
            </Box>
          </Box>
        }
      </div>
    </>
  );
}


