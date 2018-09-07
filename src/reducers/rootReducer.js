import { combineReducers } from 'redux';
import movies from '../modules/movies/movies.reducer';
import menu from '../modules/movies/menu.reducer';

const rootReducer = combineReducers({
	movies,
	menu
});

export default rootReducer;
