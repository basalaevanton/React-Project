import React from 'react';
import classes from './style.module.scss';
import { TPhotos, TUser } from '../../types/types';

type TPhotoCardProps = {
  photo: TPhotos;
  user?: TUser;
};

export const PhotoCard = ({ photo, user }: TPhotoCardProps) => {
  return (
    <div className={classes.card} key={photo.id}>
      <div className={classes.image}>
        <img src={photo.url} alt={photo.title} loading="lazy" />
      </div>
      <div>{user ? user.name : 'Имя автора не известно'}</div>
    </div>
  );
};
