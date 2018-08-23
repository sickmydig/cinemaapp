import React, { PropTypes } from 'react';
import {
	Image, StyleSheet,
	Text,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SquareGrid from "react-native-square-grid";
import { TMDB_IMG_URL } from "../../../constants/api";


const iconClose = <Icon name="md-close" size={20} color="#F5B642" />;

const CardMixed = props => {
	const action = props.action;
	const genresArr = props.genres;
	if (genresArr.length === 0) return null;
	const modRows = genresArr.length % 3;
	const showRows = modRows > 0 ? (genresArr.length / 3) + 1 : genresArr.length / 3;
	return (
		<SquareGrid rows={showRows} columns={3} items={genresArr} renderItem={renderItem} />
	);
};

const MoviesGenres = props => {
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
			<View style={mixedStyles.closeButton}>
				{iconClose}
			</View>
			{/*<View style={mixedStyles.content}>*/}
				{/*<Text style={mixedStyles.text}>{item.title}</Text>*/}
				{/**/}
			{/*</View>*/}
			<View>
				<Image source={{ uri: `${TMDB_IMG_URL}/w780/${(item.backdrop_path || item.poster_path)}` }} style={mixedStyles.imageBackdrop} />
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
	closeButton: {
		right: 0,
		top: 0,
		zIndex: 1,
		position: 'absolute'
	},
	imageBackdrop: {
		height: 75,
		borderRadius: 5,
		backgroundColor: 'black'
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
