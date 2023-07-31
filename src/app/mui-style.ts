const drawerWidth = 240;

export const smBrawerStyles = {
  display: { xs: 'none', sm: 'block' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: 240,
  },
};

export const bigBrawerStyles = {
  display: {
    xs: 'block',
    sm: 'none'
  },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: drawerWidth
  },
};

export const appBarStyles = {
  width: { sm: `calc(100% - ${drawerWidth}px)` },
  ml: { sm: `${drawerWidth}px` },
};

export const drawerBoxStyles = {
  width: { sm: drawerWidth },
  flexShrink: { sm: 0 }
};

export const contentBoxStyles = {
  flexGrow: 1, p: 3,
  width: {
    sm: `calc(100% - ${drawerWidth}px)`
  }
};
