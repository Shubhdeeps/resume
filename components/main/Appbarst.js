import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Toolbarlist from "./Toolbarlist";
import { useUserDataStore } from '../../store/store';
import { useReactToPrint } from 'react-to-print';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: '#2E2E2E',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Appbarst = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const ref = useUserDataStore(state => state.printRef)

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const downloadJS = useReactToPrint({
        content: () => ref.current,
    })
    


    return(
        <>
      <AppBar position="fixed" open={open}>
        <Toolbar
        style={{height: '5vh'}}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
           Resume Builder
          </Typography>
        <div onClick={() => downloadJS()} className='download'>
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.45 20.46C29.0389 20.46 28.6447 20.6233 28.354 20.9139C28.0633 21.2046 27.9 21.5989 27.9 22.01V26.815C27.8984 27.1022 27.7835 27.3772 27.5804 27.5804C27.3773 27.7835 27.1023 27.8983 26.815 27.9H4.185C3.89774 27.8983 3.62271 27.7835 3.41959 27.5804C3.21646 27.3772 3.10163 27.1022 3.1 26.815V22.01C3.1 21.5989 2.9367 21.2046 2.64602 20.9139C2.35533 20.6233 1.96109 20.46 1.55 20.46C1.13891 20.46 0.744666 20.6233 0.453984 20.9139C0.163303 21.2046 0 21.5989 0 22.01L0 26.815C0 27.9249 0.440918 28.9894 1.22576 29.7742C2.0106 30.559 3.07507 31 4.185 31H26.815C27.9249 31 28.9894 30.559 29.7742 29.7742C30.5591 28.9894 31 27.9249 31 26.815V22.01C31 21.5989 30.8367 21.2046 30.546 20.9139C30.2553 20.6233 29.8611 20.46 29.45 20.46Z" fill="#F8F8F8"/>
<path d="M14.328 23.684L14.3776 23.8452L14.4582 23.9878C14.4763 24.0303 14.497 24.0717 14.5202 24.1118C14.6335 24.2809 14.7789 24.4262 14.948 24.5396L15.072 24.6016L15.2146 24.6822L15.3758 24.7318L15.4998 24.8C15.7046 24.8388 15.9149 24.8388 16.1198 24.8L16.25 24.7628L16.4112 24.7132L16.5538 24.6326L16.6778 24.5706C16.7605 24.5118 16.8392 24.4476 16.9134 24.3784L22.6112 18.6806C22.9022 18.3896 23.0657 17.9948 23.0657 17.5832C23.0657 17.1716 22.9022 16.7768 22.6112 16.4858C22.3201 16.1948 21.9254 16.0312 21.5138 16.0312C21.1022 16.0312 20.7074 16.1948 20.4164 16.4858L17.3598 19.5052V1.55C17.3598 1.13891 17.1965 0.744666 16.9058 0.453984C16.6151 0.163303 16.2209 0 15.8098 0C15.3987 0 15.0044 0.163303 14.7138 0.453984C14.4231 0.744666 14.2598 1.13891 14.2598 1.55V23.25C14.2609 23.352 14.2713 23.4537 14.2908 23.5538C14.3003 23.598 14.3127 23.6415 14.328 23.684Z" fill="#F8F8F8"/>
<path d="M9.85982 16.3476C9.25451 15.7423 8.27311 15.7423 7.66779 16.3476C7.06248 16.9529 7.06248 17.9343 7.66779 18.5396L10.3728 21.2446C10.9781 21.8499 11.9595 21.8499 12.5648 21.2446C13.1701 20.6393 13.1701 19.6579 12.5648 19.0526L9.85982 16.3476Z" fill="#00C569"/>
        </svg>
            Download
        </div>
        </Toolbar>
      </AppBar>
      <Drawer
      variant="permanent" open={open}>
        <DrawerHeader
        >
          <IconButton onClick={handleDrawerClose}
          >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Toolbarlist />
      </Drawer>
        </>
    )
}

export default Appbarst;