import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		position: 'relative',

		marginTop: 170, // top alignment from upper container
		height: 180,
		width: 120,
		backgroundColor: 'grey',
		flexDirection: 'column',
		marginRight: 10,
		borderRadius: 3
	},
	castImage: {
		margin: 5,
		width: 110,
		height: 110,
		borderRadius: 10 / 2
	},
	// cardImage: {
	// 	height: 134,
	// 	width: 135,
	// 	borderTopLeftRadius: 3,
	// 	borderTopRightRadius: 3
	// },
	cardTitleContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	cardTitle: {
		color: 'white',
		fontSize: 13,
		fontWeight: '500',
		textAlign: 'center',
		paddingHorizontal: 1
	}
});

export default styles;
