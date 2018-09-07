import * as types from '../../constants/actionTypes';
import secondState from '../../reducers/secondState';

export default function (state = secondState.menu, action) {
	switch (action.type) {

		case types.RETRIEVE_MENU:
			return {
				...state,
				drawers: action.actionMenu
			};
		default:
			return state;
	}
}
