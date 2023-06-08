import { AppDispatch } from '../../index';
import {
  SetErrorAction,
  SetIsLoadingAction,
  SetAlbumsAction,
  GalleryActionEnum,
  SetPhotosAction,
} from './types';

import { TAlbums, TPhotos } from '../../../types/types';
import GalleryServices from '../../../services/gallery-services';

export const GalleryActionCreators = {
  setAlbums: (albums: TAlbums[]): SetAlbumsAction => ({
    type: GalleryActionEnum.SET_ALBUMS,
    payload: albums,
  }),

  setPhotos: (photos: TPhotos[]): SetPhotosAction => ({
    type: GalleryActionEnum.SET_PHOTOS,
    payload: photos,
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
    try {
      dispatch(GalleryActionCreators.setIsLoading(true));
      const response = await GalleryServices.fetchAlbums();
      dispatch(GalleryActionCreators.setAlbums(response.data));
    } catch (e: any) {
      dispatch(GalleryActionCreators.setError(e.response?.data?.message));
    } finally {
      dispatch(GalleryActionCreators.setIsLoading(false));
    }
  },

  fetchPhotos: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(GalleryActionCreators.setIsLoading(true));
      const response = await GalleryServices.fetchPhotos();
      dispatch(GalleryActionCreators.setPhotos(response.data));
    } catch (e: any) {
      dispatch(GalleryActionCreators.setError(e.response?.data?.message));
    } finally {
      dispatch(GalleryActionCreators.setIsLoading(false));
    }
  },
};
