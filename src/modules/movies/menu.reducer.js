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

			// const actives = state.drawers.map(drawer =>
			// 	(drawer.isActive === true)
			// 		? { ...drawer, isActive: !drawer.isActive }
			// 		: drawer
			// );

			const drawers = state.drawers.map(drawer => {
				return (
				(drawer.id === action.actionMenu)
					? { ...drawer, isActive: true }
					: { ...drawer, isActive: false }
				);
			});
			// return Object.assign({ drawers }, drawers);
			return Object.assign({ drawers }, drawers);
		default:
			return state;
	}
}
