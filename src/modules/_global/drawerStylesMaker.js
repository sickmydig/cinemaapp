import {
	Platform
} from 'react-native';

export const DrawerItem = {
	favorite: {
		styles: {
			Italic: 'italic'
		},
		colors: {
			color: 'magenta'
		},
		weights: {
			ExtraBold: '800',
			Bold: '700',
			SemiBold: '600',
			Light: '300',
			Normal: '400'
		},
		family: 'Montserrat-Medium'
	},
	movies: {
		styles: {
			Italic: 'italic'
		},
		colors: {
			color: 'magenta'
		},
		weights: {
			ExtraBold: '800',
			Bold: '700'
		},
		family: 'Times new roman'
	}
};

const drawerStylesMaker = (options = {}) => {
	let { weight, style, color, drawerItem } = Object.assign(
		{
			weight: null,
			style: null,
			color: null,
			menu: null
		}, options);

	const { colors, weights, styles, family } = DrawerItem[drawerItem];
	if (Platform.OS === 'android') {
		weight = weights[weight] ? weight : '';
		style = styles[style] ? style : '';
		const suffix = weight + style;

		return {
			// fontFamily: family + (suffix.length ? `-${suffix}` : '')
			fontFamily: family
		};
	} else {
		weight = weights[weight] || weights.Normal;
		style = styles[style] || 'normal';

		return {
			fontFamily: family,
			fontWeight: weight,
			fontStyle: style
		};
	}
};

export default drawerStylesMaker;
