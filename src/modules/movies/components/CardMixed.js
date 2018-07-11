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
const NUMBERS = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six"
];

const CardMixed = props => {
	const { repos } = props;
	if (!repos) return null;
	return (
		<SquareGrid rows={2} columns={3} items={NUMBERS} renderItem={renderItem} />
	);
};

const renderItem = item => {
	return (
		<View style={mixedstyles.item}>
			<View style={mixedstyles.content}>
				<Text style={mixedstyles.text}>{item}{' grid item '}</Text>
			</View>
		</View>
	);
};

// CardMixed.propTypes = {
// 	props: PropTypes.object.isRequired,
// 	viewCategory: PropTypes.func.isRequired
// };

const mixedstyles = StyleSheet.create({

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
		fontSize: 32
	}
});

export default CardMixed;
