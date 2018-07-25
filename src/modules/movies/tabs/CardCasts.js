import React, { PropTypes } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import styles from './styles/CardCasts';
import { TMDB_IMG_URL } from '../../../constants/api';

const CardCasts = ({ info }) => (
	<TouchableOpacity activeOpacity={0.8} >
		<View style={styles.cardContainer}>
			<Image source={{ uri: `${TMDB_IMG_URL}/w185/${info.profile_path}` }} style={styles.castImage} />
			<View style={styles.cardTitleContainer}>
				<Text style={styles.cardTitle} numberOfLines={1}>
					{info.character && `in ${info.character}`}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

CardCasts.propTypes = {
	info: PropTypes.object.isRequired,
	// viewMovie: PropTypes.func.isRequired
};

export default CardCasts;
