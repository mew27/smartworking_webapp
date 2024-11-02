import './app.css'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { css } from '@emotion/react';
import { Paper } from '@mui/material';

import DateLocale from './DateLocale';
import { DateCalendar } from '@mui/x-date-pickers';

export function App() {

  return (
    <>
    <Container>Ciao mondo!</Container>
    <DateLocale>
      <DateCalendar></DateCalendar>
    </DateLocale>
    </>
  ) 
}
