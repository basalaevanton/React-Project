import React from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const { users, albums } = useTypedSelector((state) => state.GalleryState);

  const location = useLocation();
  const params = useParams();

  const user = users.find((el) => el.id === +params.id!);
  const album = albums.find((el) => el.id === +params.id!);

  const Title = () => {
    if (location.pathname == '/') {
      return ' Альбомы';
    }
    if (location.pathname.includes('profile')) {
      return ` Альбомы ${user?.name}`;
    }
    if (location.pathname.includes('album')) {
      return `Фотографии из альбома ${album?.title}`;
    }
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Typography variant="h1" component="div">
        {Title()}
      </Typography>
    </header>
  );
};
