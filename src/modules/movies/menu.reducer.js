import * as types from '../../constants/actionTypes';
import secondState from '../../reducers/secondState';

// export default function (state = [], action) {
export default function (state = secondState.menu, action) {
	switch (action.type) {

		case types.RETRIEVE_MENU:
			return {
				...state,
				drawers: action.actionMenu
			};
		case types.MENU_CLICKED:
			// return {
			// 	...state,
			// 	drawers: action.actionMenu
			// };

			const actives = state.drawers.map(drawer =>
				(drawer.isActive === true)
					? { ...drawer, isActive: !drawer.isActive }
					: drawer
			);


			const drawers = actives.map(drawer =>
				(drawer.id === action.actionMenu)
				? { ...drawer, isActive: !drawer.isActive }
				: drawer
			);
			return Object.assign({ drawers }, drawers);
		default:
			return state;
	}
}
