import React from 'react';
import { withLayout } from '../layout/Layout';
import { Typography } from '@mui/material';

const Start = () => {
  return (
    <>
      <h1>Start React KIT</h1>
      <div> from Redux</div>
      <Typography variant="h1" component="div">
        Start page
      </Typography>
    </>
  );
};

export default withLayout(Start);
