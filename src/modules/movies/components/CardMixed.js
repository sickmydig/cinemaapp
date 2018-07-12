import React, { PropTypes } from 'react';
import {
	Image, StyleSheet,
	Text,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SquareGrid from "react-native-square-grid";
import styles from './styles/CardOne';

const iconStar = (<Icon name="md-star" size={16} color="#F5B642" />);

const CardMixed = props => {
	const genresArr = props.genres.genres;
	if (genresArr.length === 0) return null;
	const modRows = genresArr.length % 3;
	const showRows = modRows > 0 ? (genresArr.length / 3) + 1 : genresArr.length / 3;
	return (
		<SquareGrid rows={showRows} columns={3} items={genresArr} renderItem={renderItem} />
	);
};

const renderItem = item => {
	return (
		<View style={mixedStyles.item}>
			<View style={mixedStyles.content}>
				<Text style={mixedStyles.text}>{item.name}</Text>
			</View>
		</View>
	);
};

// CardMixed.propTypes = {
// 	props: PropTypes.array.isRequired,
// 	viewCategory: PropTypes.func.isRequired
// };

const mixedStyles = StyleSheet.create({

	item: {
		flex: 1,
		alignSelf: "stretch",
		padding: 5
	},
	content: {
		flex: 1,
		borderRadius: 4,
		backgroundColor: "brown",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: "white",
		fontSize: 13
	}
});

export default CardMixed;
