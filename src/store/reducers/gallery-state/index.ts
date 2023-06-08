import { GalleryAction, GalleryState, GalleryActionEnum } from './types';

const initialState: GalleryState = {
  albums: [],
  photos: [],
  error: '',
  isLoading: false,
};

export default function accountReducer(
  state = initialState,
  action: GalleryAction
): GalleryState {
  switch (action.type) {
    case GalleryActionEnum.SET_ALBUMS:
      return { ...state, albums: action.payload };
    case GalleryActionEnum.SET_PHOTOS:
      return { ...state, photos: action.payload };
    case GalleryActionEnum.SET_FETCH_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case GalleryActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
