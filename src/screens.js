/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Drawer from './modules/_global/Drawer';
import Movies from './modules/movies/Movies';
import Favorites from './modules/movies/HotMovies';
import MoviesList from './modules/movies/MoviesList';
import Movie from './modules/movies/Movie';
import {
SCREEN_MOVIES, SCREEN_FAVORITE, SCREEN_MOVIE,
SCREEN_SEARCH, SCREEN_MOVIE_LIST, SCREEN_DRAWER
} from './constants/ComonNames';
import Search from './modules/movies/Search';

export function registerScreens(store, Provider) {
	Navigation.registerComponent(SCREEN_MOVIE, () => Movie, store, Provider);
	Navigation.registerComponent(SCREEN_MOVIES, () => Movies, store, Provider);
	Navigation.registerComponent(SCREEN_MOVIE_LIST, () => MoviesList, store, Provider);
	Navigation.registerComponent(SCREEN_SEARCH, () => Search, store, Provider);
	Navigation.registerComponent(SCREEN_DRAWER, () => Drawer, store, Provider);
	Navigation.registerComponent(SCREEN_FAVORITE, () => Favorites, store, Provider);
}
