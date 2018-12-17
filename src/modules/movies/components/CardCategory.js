import React from 'react';
import PropTypes from 'prop-types';
import {
	Image, StyleSheet,
	Text,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/CardOne';
import { TMDB_IMG_URL } from '../../../constants/api';

const iconStar = (<Icon name="md-star" size={16} color="#F5B642" />);

const CardCategory = props => {
	const { repos } = props;
	if (!repos) return null;
	return (
		<View>
			<Image source={{ uri: `https://image.tmdb.org/t/p/w150_and_h225_bestv2/tGGJOuLHX7UDlTz57sjfhW1qreP.jpg` }} style={cardstyles.imageBackdrop} />
			<View style={cardstyles.container}>
				<Text style={cardstyles.category_text} numberOfLines={2}>
					{repos.movie_category.title}
				</Text>
			</View>
		</View>
	);
};

// CardCategory.propTypes = {
// 	props: PropTypes.object.isRequired,
// 	viewCategory: PropTypes.func.isRequired
// };

const cardstyles = StyleSheet.create({
	container: {
		flex: 10,
		paddingLeft: 10,
		paddingTop: 20,
		backgroundColor: 'black'
	},
	category_text: { color: 'white' },
	imageBackdrop: {
		width: 100,
		height: 90
	}
});

export default CardCategory;
