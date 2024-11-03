import { AppBar, IconButton, Toolbar, Button, Typography } from "@mui/material";
import { css } from '@emotion/react';

const CandAMenu = () => {
    return (
    <>
        <AppBar position='static'>
            <Toolbar>
                <IconButton></IconButton>
                <Typography variant='h5' component='h1' sx={css`flex-grow : 1`}>CandA SmartWorking</Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
    </>
    )
}

export default CandAMenu;