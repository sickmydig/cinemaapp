import I18n from '../../i18n';
import configureStore from '../../store/configureStore';
import * as moviesActions from '../movies/movies.actions';

export default async() => {
	const allLocales = Object.keys(I18n.translations);
	console.log(allLocales);
	const reduxStore = configureStore.getState();
	if (reduxStore.appLocales.length !== allLocales.length) {
		store.dispatch(moviesActions.setLocales(allLocales));
	}
};
