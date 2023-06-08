import React from 'react';
import { CircularProgress } from '@mui/material';
import classes from './style.module.scss';

export const Loader = () => {
  return (
    <div className={classes.loader}>
      <CircularProgress size={70} color="secondary" />
    </div>
  );
};
