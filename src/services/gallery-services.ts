import axios, { AxiosResponse } from 'axios';

import { TAlbums, TPhotos } from '../types/types';
import { API } from '../helpers/api';

const http = axios.create({
  baseURL: API.HOST,
});

export default class GalleryServices {
  static async fetchAlbums(): Promise<AxiosResponse<TAlbums[]>> {
    return http.get(`/albums/`);
  }
  static async fetchPhotos(): Promise<AxiosResponse<TPhotos[]>> {
    return http.get(`/photos/`);
  }
}
