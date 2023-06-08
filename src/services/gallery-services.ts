import axios, { AxiosResponse } from 'axios';

import { TAlbums, TPhotos, TUser } from '../types/types';
import { API } from '../helpers/api';

const http = axios.create({
  baseURL: API.HOST,
});

export default class GalleryServices {
  static async fetchAlbums(): Promise<AxiosResponse<TAlbums[]>> {
    return http.get(`/albums`);
  }
  static async fetchPhotos(): Promise<AxiosResponse<TPhotos[]>> {
    return http.get(`/photos`, {
      params: { _start: 0, _limit: 25 },
    });
  }
  static async fetchUsers(): Promise<AxiosResponse<TUser[]>> {
    return http.get(`/users`);
  }
}
