import React from 'react';
import { Box, Button, Paper,useMediaQuery, ThemeProvider, createTheme  } from '@mui/material';
import button from './Buttons';
import { useDispatch } from 'react-redux';
import { setAlphabet } from '../reduxState/alphabetSlice';
const theme = createTheme();



const AlphabetButton = () => {

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  const handleClick = (val) => {
    console.log(val);
    dispatch(setAlphabet(val));
  };

  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '40vh',
          boxSizing: 'border-box',
          padding: '1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          background: 'linear-gradient(45deg, #ffcc00, #ff6699)', 
          alignItems: 'center',
          margin:"auto",
          fontFamily: 'Bangers, sans-serif',
          borderRadius:" 0 0 2rem 2rem"
        }}
      >
        {button.map((val) => (
          <Paper
            elevation={4} 
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobile?"4rem":'5rem',
              height: isMobile?"4rem":'5rem',
              borderRadius: '1rem',
              marginBottom: '1rem',
            }}
            key={val}
          >
            <Button
              sx={{
                border: '2px solid grey',
                width: isMobile?"4rem":'5rem',
                height: isMobile?"4rem":'5rem',
                fontSize: '3rem',
                color: 'white',
                borderRadius: '1rem',
                backgroundColor: '#ff6b6b',
                '&:hover': {
                  backgroundColor: '#f07272',
                },
                '&:active': {
                  backgroundColor: '#d63031',
                },
              }}
              onClick={() => handleClick(val)}
            >
              {val}
            </Button>
          </Paper>
        ))}
      </Box>
    </div>
  );
};

export default AlphabetButton;
