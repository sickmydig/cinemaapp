import I18n from 'react-native-i18n';

import en from './en';
import de from './de';
import vn from './vn';


I18n.fallbacks = true;
I18n.defaultLocale = 'vn';

I18n.translations = {
	vn,
de,
	en,
};

export default I18n;
