import { StyleSheet } from 'react-native';
import { FONT_MEDIUM, FONT_SEMI_BOLD } from '../../../../constants/ComonNames';

const styles = StyleSheet.create({
	linearGradient: {
		top: 0,
		left: 0,
		right: 0,
		height: 248,
		position: 'absolute'
	},
	imageBackdrop: {
		// flex: 1,
		height: 248,
		backgroundColor: 'black'
	},
	cardContainer: {
		position: 'absolute',
		top: 32,
		right: 16,
		left: 16,
		flexDirection: 'row'
	},
	cardImage: {
		height: 184,
		width: 135,
		borderRadius: 3
	},
	cardDetails: {
		paddingLeft: 10,
		flex: 1
	},
	cardTitle: {
		fontFamily: FONT_SEMI_BOLD,
		color: 'white',
		fontSize: 19,
		// fontWeight: '500',
		paddingTop: 10
	},
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		fontFamily: FONT_SEMI_BOLD,
		fontSize: 11,
		marginRight: 5,
		color: 'white'
	},
	cardDescription: {
		fontFamily: FONT_MEDIUM,
		color: '#f7f7f7',
		fontSize: 12,
		marginTop: 5
	},
	cardNumbers: {
		flexDirection: 'row',
		marginTop: 5
	},
	cardStar: {
		flexDirection: 'row'
	},
	cardStarRatings: {
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12
	},
	viewButton: {
		justifyContent: 'center',
		padding: 10,
		borderRadius: 3,
		backgroundColor: '#fff',
		width: 110,
		height: 30,
		marginTop: 10
	},
	viewButtonText: {
		fontFamily: FONT_SEMI_BOLD,
		color: 'black'
	}
});

export default styles;
