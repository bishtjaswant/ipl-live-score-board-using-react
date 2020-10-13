import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const NavBar = () => {
    return (
        <>
         <AppBar  position="fixed">
                <Toolbar>
             <Typography variant="h5">IPL Live score</Typography>
                 
                </Toolbar>
         </AppBar>
        </>
    );
};

export default NavBar;