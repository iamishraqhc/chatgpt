import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component='nav' position='static'>
            <Toolbar>
                <Typography style={{ fontFamily: 'CustomFont' }}>
                    AI Search App
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  );
};

export default NavBar;
