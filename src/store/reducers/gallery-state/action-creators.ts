import { AppDispatch } from '../../index';
import {
  SetErrorAction,
  SetIsLoadingAction,
  SetAlbumsAction,
  GalleryActionEnum,
  SetPhotosAction,
  SetUsersAction,
} from './types';

import { TAlbums, TPhotos, TUser } from '../../../types/types';
import GalleryServices from '../../../services/gallery-services';
import { async } from 'q';

export const GalleryActionCreators = {
  setAlbums: (albums: TAlbums[]): SetAlbumsAction => ({
    type: GalleryActionEnum.SET_ALBUMS,
    payload: albums,
  }),

  setPhotos: (photos: TPhotos[]): SetPhotosAction => ({
    type: GalleryActionEnum.SET_PHOTOS,
    payload: photos,
  }),

  setUsers: (users: TUser[]): SetUsersAction => ({
    type: GalleryActionEnum.SET_USERS,
    payload: users,
  }),

  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: GalleryActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: GalleryActionEnum.SET_FETCH_ERROR,
    payload,
  }),

  fetchAlbums: () => async (dispatch: AppDispatch) => {
    // dispatch(GalleryActionCreators.setIsLoading(true));
    try {
      const response = await GalleryServices.fetchAlbums();
      dispatch(GalleryActionCreators.setAlbums(response.data));
    } catch (e: any) {
      dispatch(
        GalleryActionCreators.setError('Произошла ошибка при загрузке данных')
      );
    } finally {
      // dispatch(GalleryActionCreators.setIsLoading(false));
    }
  },

  fetchUsers: () => async (dispatch: AppDispatch) => {
    // dispatch(GalleryActionCreators.setIsLoading(true));
    try {
      const response = await GalleryServices.fetchUsers();
      dispatch(GalleryActionCreators.setUsers(response.data));
    } catch (e: any) {
      dispatch(
        GalleryActionCreators.setError('Произошла ошибка при загрузке данных')
      );
    } finally {
      // dispatch(GalleryActionCreators.setIsLoading(false));
    }
  },

  fetchPhotos:
    (start: number, limit: number) => async (dispatch: AppDispatch) => {
      dispatch(GalleryActionCreators.setIsLoading(true));
      setTimeout(async () => {
        await GalleryServices.fetchPhotos(start, limit)
          .then((response) =>
            dispatch(GalleryActionCreators.setPhotos(response.data))
          )
          .catch(() => {
            dispatch(
              GalleryActionCreators.setError(
                'Произошла ошибка при загрузке данных'
              )
            );
          })
          .finally(() => dispatch(GalleryActionCreators.setIsLoading(false)));
      }, 500);
    },

  fetchUserAlbums: (id: number) => async (dispatch: AppDispatch) => {
    dispatch(GalleryActionCreators.setIsLoading(true));
    setTimeout(async () => {
      await GalleryServices.fetchUserAlbums(id)
        .then((response) =>
          dispatch(GalleryActionCreators.setAlbums(response.data))
        )
        .catch(() => {
          dispatch(
            GalleryActionCreators.setError(
              'Произошла ошибка при загрузке данных'
            )
          );
        })
        .finally(() => dispatch(GalleryActionCreators.setIsLoading(false)));
    }, 500);
  },

  fetchAlbumPhotos: (id: number) => async (dispatch: AppDispatch) => {
    dispatch(GalleryActionCreators.setIsLoading(true));
    setTimeout(async () => {
      await GalleryServices.fetchAlbumPhotos(id)
        .then((response) =>
          dispatch(GalleryActionCreators.setPhotos(response.data))
        )
        .catch(() => {
          dispatch(
            GalleryActionCreators.setError(
              'Произошла ошибка при загрузке данных'
            )
          );
        })
        .finally(() => dispatch(GalleryActionCreators.setIsLoading(false)));
    }, 500);
  },
};
