import React from 'react';
import AlphabetButton from '../component/AlphabetButton';
import Display from '../component/Display';
import { Box, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

const MainPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: isMobile ? '90%' : '30%', margin: '1rem' }}>
        <Display />
        <AlphabetButton />
      </Box>
    </ThemeProvider>
  );
};

export default MainPage;
