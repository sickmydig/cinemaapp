import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		marginHorizontal: 10
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 5,
		minHeight: 148,
		// flexDirection: 'row',
		// paddingRight: 16,
		// alignItems: 'center',
		// overflow: 'hidden'
	},
	linearGradient: {
		top: 0,
		left: 0,
		right: 0,
		height: 163,
		position: 'absolute'
	},
	imageBackdrop: {
		height: 163,
		borderRadius: 5,
		backgroundColor: 'black'
	},
	cardDetailsContainer: {
		flex: 1,
		flexDirection: 'row',
		// justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 5,
		top: 110,
		position: 'absolute'
	},
	cardStar: {
		top: 22,
		flexDirection: 'row',
		marginLeft: 5,
		alignItems: 'flex-end'
	},
	cardTitle: {
		right: 5
	},
	cardTitleText: {
		color: 'white',
		// fontFamily: 'Helvetica Neue ,Helvetica,Arial,sans-serif',
		fontFamily: 'MontserratAlternates-SemiBold',
		fontSize: 17,
		// fontWeight: '600'
	},
	cardStarRatings: {
		fontFamily: 'MontserratAlternates-SemiBold',
		marginLeft: 5,
		fontSize: 17,
		// fontWeight: '500',
		color: 'white'
	},
	cardDateLeft: {
		flex: 1,
		alignItems: 'flex-end',
		paddingRight: 5,
		paddingBottom: 10
	},
	cardImage: {
		height: 153,
		width: 130,
		borderTopLeftRadius: 3,
		borderBottomLeftRadius: 3
	},
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		color: 'white',
		fontSize: 11,
		marginRight: 5
	},
	cardDescription: {
		color: 'white',
		fontSize: 14,
		marginTop: 5
	},
	cardNumbers: {
		flexDirection: 'row',
		marginTop: 5
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	}
});

export default styles;
