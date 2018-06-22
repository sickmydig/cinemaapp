import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';
import I18n from './i18n';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'grey',
	tabBarSelectedButtonColor: 'white',
	tabBarBackgroundColor: 'black',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: false,
	drawUnderTabBar: true
};


const LoadScreen = {
	screen: 'movieapp.Movies',
	// screen: 'movieapp.Countdown',
	title: I18n.t('title'),
	navigatorStyle,
	leftButtons: [
		{
			id: 'sideMenu'
		}
	]
}

/*Navigation.startSingleScreenApp({
	screen: LoadScreen,
	drawer: {
		left: {
			screen: 'movieapp.Drawer'
		}
	}
});*/

Navigation.startTabBasedApp(
{
	tabs: [
		{
			screen: 'movieapp.MoviesList',
			title: 'on the Theathe',
			label: 'On The Thearthe',
			icon: require('./modules/img/film.png'),
			navigatorStyle
		},
		{
			screen: 'movieapp.Movies',
			// screen: 'movieapp.Countdown',
			title: 'hot movies',
			label: 'Hot movies',
			icon: require('./modules/img/film-clap-board.png'),
			navigatorStyle,
			leftButtons: [
				{
					id: 'sideMenu'
				}
			]
		}
	],
		drawer: {
			left: {
				screen: 'movieapp.Drawer'
			}
		}
});
