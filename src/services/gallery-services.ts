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
  static async fetchPhotos(
    start: number,
    limit: number
  ): Promise<AxiosResponse<TPhotos[]>> {
    return http.get(`/photos`, {
      params: { _start: start, _limit: limit },
    });
  }
  static async fetchUsers(): Promise<AxiosResponse<TUser[]>> {
    return http.get(`/users`);
  }

  static async fetchAlbumPhotos(
    idAlbum: number
  ): Promise<AxiosResponse<any[]>> {
    return http.get(`/albums/${idAlbum}/photos`);
  }

  static async fetchUserAlbums(idAlbum: number): Promise<AxiosResponse<any[]>> {
    return http.get(`/users/${idAlbum}/albums`);
  }
}
