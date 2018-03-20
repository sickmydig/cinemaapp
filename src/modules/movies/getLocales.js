import I18n from '../../i18n';
import configureStore from '../../store/configureStore';
import * as moviesActions from './movies.actions';

export default async() => {
	const allLocales = Object.keys(I18n.translations);
	const reduxStore = configureStore.getState();
	if (reduxStore.appLocales.length !== allLocales.length) {
		store.dispatch(moviesActions.setLocales(allLocales));
	}
};
