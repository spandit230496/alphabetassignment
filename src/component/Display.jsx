import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';
import Audio from '../assests/bg.mp3'
import { useEffect } from 'react';


const Display = () => {
  const alphabetClicked = useSelector((state) => state.alphabetSlice.image);
  const voiceOver =useSelector((state) => state.alphabetSlice.audio);
  const description = alphabetClicked ? alphabetClicked.split('/')[3].split('.')[0].toUpperCase() : null;
  const bounceVariants = {
    hidden: { scale: 0.5 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };

  const audio = document.getElementById('audio-element');
   
   
  useEffect(() => {
    if (audio) {
      audio.play().catch((error) => {
        console.error('Autoplay was prevented: ', error);
      });
    }
  }, [audio]);

  return (
    <>
    <audio id="audio-element" src={Audio} autoPlay volume={0.1} />
    <audio id="audio-element" src={voiceOver} autoPlay volume={1.0} />


    <Box
      sx={{
        width: '100%',
        height: '50vh',
        boxSizing: 'border-box',
        backgroundColor: '#f6e58d',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:"2rem 2rem 0 0"
      }}
    >

      <Paper
        elevation={3}
        sx={{
          padding: '1rem',
          background: 'transparent',
          borderRadius: '20px',
          width: '90%',
          height: '90%',
          position: 'relative', 
        }}
      >
        {alphabetClicked ? (
          <Box sx={{ position: 'relative' }}>
            <ArrowBackwardIcon
            sx={{
                position: 'absolute',
                top: -15,
                left: 0,
                padding: '4px', 
                borderRadius: '4px',
                fontSize: '1.5rem',
                fontWeight:"700"
              }}/>
            <Typography
              sx={{
                position: 'absolute',
                top: -15,
                right: 0,
                padding: '4px', 
                borderRadius: '4px',
                fontSize: '1.5rem',
                fontWeight:"700"
              }}
            >
              {description}
            </Typography>
            <motion.img
              src={alphabetClicked}
              alt={`Image for ${alphabetClicked}`}
              style={{
                width: '90%',
                height: '90%',
              }}
              initial="hidden"
              animate="visible"
              variants={bounceVariants}
            />
          </Box>
        ) : (
            <>
          <Typography sx={{ fontSize: '2rem' }}>Click an Alphabet to Start!</Typography>
          </>
        )}
      </Paper>
    </Box>
    </>
  );
};

export default Display;
