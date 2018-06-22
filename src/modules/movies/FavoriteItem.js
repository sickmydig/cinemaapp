import React from 'react'
import {
	View,
} from 'react-native'
import TMDB_IMG_URL from '../../constants/api';

const FavoriteItem = (info) =>
(
	<View>
		<Image source={{ uri: `${TMDB_IMG_URL}/w780/${(info.backdrop_path)}` }} />
		<Text numberOfLines={3}>{'this is the title'}</Text>
	</View>
);

export default FavoriteItem;
