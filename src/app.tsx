import './app.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { Grid2, Paper, Box, Button, Container} from '@mui/material';

import DateLocale from './DateLocale';
import SWPicker from './SWPicker';
import CandAMenu from './CandAMenu';
import { css } from '@emotion/react';
export function App() {

  return (
    <>
    <DateLocale>
      <Grid2 container spacing={5} >
        <Grid2 size={12}>
          <CandAMenu></CandAMenu>
        </Grid2>
        <Grid2 size={{xs : 12, sm : 6}}>
            <Paper elevation={4}>
              <Typography variant='subtitle2'>Presenze oggi:</Typography>
                <Box>Pippo</Box>
                <Box>Pluto</Box>
                <Box>Paperino</Box>
            </Paper>
        </Grid2>
        <Grid2 size={{xs : 12, sm : 6}}>
            <SWPicker></SWPicker>
        </Grid2>
        <Grid2 size={{xs : 12, sm : 12}}>
          <Container>
            <Button variant='contained' size='large' color='primary'>Esporta come excel</Button>
          </Container>
        </Grid2>
      </Grid2>
    </DateLocale>
    </>
  ) 
}
