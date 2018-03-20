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
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'orange',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};


const LoadScreen = {
	screen: 'movieapp.Movies',
	// screen: 'movieapp.TVShow',
	title: I18n.t('title'),
	navigatorStyle,
	leftButtons: [
		{
			id: 'sideMenu'
		}
	]
}
Navigation.startSingleScreenApp({
	screen:
		LoadScreen
	,
	drawer: {
		left: {
			screen: 'movieapp.Drawer'
		}
	}
});
