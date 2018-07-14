import axios from 'axios';
import * as types from '../../constants/actionTypes';
import { TMDB_URL, TMDB_API_KEY, TMDB_SESSION_ID } from '../../constants/api';

// LOCALE
export const setLocales = payload => ({
	type: types.SET_LOCALES,
	payload,
});

// GENRES
export function retrieveMoviesGenresSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIES_GENRES_SUCCESS,
		moviesGenres: res.data
	};
}

export function retrieveFavorites(res) {
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/account/sickmydig/favorite/movies?api_key=${TMDB_API_KEY}&session_id=${TMDB_SESSION_ID}`)
			.then(res => {
				dispatch(retrieveSuccessFavorite(res));
			})
			.catch(error => {
				console.log(error); //eslint-disable-line
			});
	};
}
// get list of favorite movies
export function retrieveSuccessFavorite(res) {
	return {
		type: types.RETRIEVE_FAVORITES_SUCCESS,
		favorites: res.data
	};
}

export function retrieveMoviesGenres() {
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`)
		.then(res => {
			dispatch(retrieveMoviesGenresSuccess(res));
		})
		.catch(error => {
			console.log(error); //eslint-disable-line
		});
	};
}

// POPULAR
export function retrievePopularMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_POPULAR_MOVIES_SUCCESS,
		popularMovies: res.data
	};
}

export function retrievePopularMovies(page) {
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`)
		.then(res => {
			dispatch(retrievePopularMoviesSuccess(res));
		})
		.catch(error => {
			console.log('Popular', error); //eslint-disable-line
		});
	};
}

// NOW PLAYING
export function retrieveNowPlayingMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS,
		nowPlayingMovies: res.data
	};
}

export function retrieveNowPlayingMovies(page) {
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&page=${page}`)
		.then(res => {
			dispatch(retrieveNowPlayingMoviesSuccess(res));
		})
		.catch(error => {
			console.log('Now Playing', error); //eslint-disable-line
		});
	};
}

// MOVIES LIST
export function retrieveMoviesListSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIES_LIST_SUCCESS,
		list: res.data
	};
}

export function retrieveMoviesList(type, page) {
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/movie/${type}?api_key=${TMDB_API_KEY}&page=${page}`)
		.then(res => {
			dispatch(retrieveMoviesListSuccess(res));
		})
		.catch(error => {
			console.log('Movies List', error); //eslint-disable-line
		});
	};
}

// SEARCH RESULTS
export function retrieveMoviesSearchResultsSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS,
		searchResults: res.data
	};
}

export function retrieveMoviesSearchResults(query, page) {
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`)
		.then(res => {
			dispatch(retrieveMoviesSearchResultsSuccess(res));
		})
		.catch(error => {
			console.log('Movies Search Results', error); //eslint-disable-line
		});
	};
}

// MOVIE DETAILS
export function retrieveMovieDetailsSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIE_DETAILS_SUCCESS,
		details: res.data
	};
}

export function retrieveMovieDetails(movieId) {
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=casts,images,videos`)
		.then(res => {
			dispatch(retrieveMovieDetailsSuccess(res));
		})
		.catch(error => {
			console.log('Movie Details', error); //eslint-disable-line
		});
	};
}

export function retrieveSimilarMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIES_SIMILAR_SUCCESS,
		similarPayload: res.data
	};
}

export function retrieveSimilarMovies(movieId) {
	// https://api.themoviedb.org/3/movie/351286/similar?api_key=503989c02d0aeef0d8f0acd6c505f052&language=en-US&page=1
	return function (dispatch) {
		return axios.get(`${TMDB_URL}/movie/${movieId}/similar?api_key=${TMDB_API_KEY}`)
			.then(res => {
				dispatch(retrieveSimilarMoviesSuccess(res));
			})
			.catch(error => {
				console.log('Similar movie Details', error); //eslint-disable-line
			});
	};
}

// belongs_to_collection
// https://api.themoviedb.org/3/collection/{collection_id}?api_key=<<api_key>>&language=en-US
// 	https://api.themoviedb.org/3/collection/422834?api_key=503989c02d0aeef0d8f0acd6c505f052&language=en-US
