import { TAlbums, TPhotos } from '../../../types/types';

export interface GalleryState {
  albums: TAlbums[];
  photos: TPhotos[];
  isLoading: boolean;
  error: string;
}

export enum GalleryActionEnum {
  SET_ALBUMS = 'SET_ALBUMS',
  SET_PHOTOS = 'SET_PHOTOS',
  SET_FETCH_ERROR = 'SET_FETCH_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetAlbumsAction {
  type: GalleryActionEnum.SET_ALBUMS;
  payload: TAlbums[];
}

export interface SetPhotosAction {
  type: GalleryActionEnum.SET_PHOTOS;
  payload: TPhotos[];
}

export interface SetErrorAction {
  type: GalleryActionEnum.SET_FETCH_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: GalleryActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export type GalleryAction =
  | SetAlbumsAction
  | SetPhotosAction
  | SetErrorAction
  | SetIsLoadingAction;
