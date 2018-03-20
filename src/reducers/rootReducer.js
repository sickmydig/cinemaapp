import { combineReducers } from 'redux';
import movies from '../modules/movies/movies.reducer';
import players from '../modules/movies/players.reducer';

const rootReducer = combineReducers({
	movies,
	players
});

export default rootReducer;
