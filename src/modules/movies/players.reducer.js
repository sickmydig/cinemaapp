import * as types from '../../constants/actionTypes';
import secondState from '../../reducers/secondState';

export default function (state = secondState.players, action) {
	switch (action.type) {

		case types.RETRIEVE_PLAYERS_LIST_SUCCESS:
			return {
				...state,
				players: action.players
			};

		default:
			return state;
	}
}
