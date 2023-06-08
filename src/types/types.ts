export type TAlbums = {
  userId: number;
  id: number;
  title: string;
};

export type TPhotos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
