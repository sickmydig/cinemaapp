import { FAVORITE_MENU, MOVIE_MENU, SEARCH_MENU } from "../constants/ComonNames";

export default {
	menu: {
		drawers: [
			{
				id: 1,
				isActive: false,
				menu: SEARCH_MENU,
				title: 'tim kiem',
				imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
			},
			{
				id: 2,
				isActive: false,
				menu: MOVIE_MENU,
				title: 'movie',
				imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
			},
			{
				id: 3,
				isActive: false,
				menu: FAVORITE_MENU,
				title: 'favorite movie',
				imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
			}
		]
	}
};
