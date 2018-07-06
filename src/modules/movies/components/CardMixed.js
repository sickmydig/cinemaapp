import React, { PropTypes } from 'react';
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
			<Image source={{ uri: `https://image.tmdb.org/t/p/w150_and_h225_bestv2/tGGJOuLHX7UDlTz57sjfhW1qreP.jpg` }} style={mixedstyles.imageBackdrop} />
			<View style={mixedstyles.container}>
					<Text style={mixedstyles.textGrid} numberOfLines={1}>
						This is the wrapped component
						{iconStar}
						{repos.movie_category.type}
					</Text>
			</View>
		</View>
	);
};

// CardCategory.propTypes = {
// 	props: PropTypes.object.isRequired,
// 	viewCategory: PropTypes.func.isRequired
// };

const mixedstyles = StyleSheet.create({
	container: {
		flex: 10,
		paddingLeft: 10,
		paddingTop: 20,
		backgroundColor: 'black'
	},
	textGrid: {
		color: 'white'
	},
	imageBackdrop: {
		width: 120,
		height: 90
	}
});

export default CardCategory;
