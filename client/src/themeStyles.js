import { createTheme, ThemeProvider } from '@mui/material';
import { fontFamily } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: 'cursive',
    margin: '0% 0% 0% 0%',
    fontWeight: 900,
  }
});

theme.typography.h1 = {
  fontSize: '5vw',
  fontFamily: 'cursive',
  fontWeight: 900,
  margin: '0% 0% 0% 0%'
};

theme.typography.h2 = {
  fontSize: '3vw',
  fontFamily: 'cursive',
  margin: '0% 0% 0% 0%'
};

theme.typography.h5 = {
  fontFamily: 'cursive',
  margin: '0% 0% 0% 0%'
};

export default theme;