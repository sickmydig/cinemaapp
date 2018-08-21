import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 25,
		justifyContent: 'center'
	},
	drawerList: {

	},
	drawerListIcon: {
		width: 27
	},
	drawerListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 23
	},
	selectedDrawerMenuText: {
		color: 'yellow',
		fontWeight: 'bold',
		fontFamily: 'arial',
		fontSize: 23,
		paddingLeft: 15,
		flex: 1
	},
	drawerListItemText: {
		color: 'white',
		fontFamily: 'MontserratAlternates-SemiBold',
		fontSize: 20,
		paddingLeft: 15,
		flex: 1
	},
	linearGradient: {
		// top: 0,
		// left: 0,
		// right: 0,
		// height: 248,
		// position: 'absolute'
		flex: 1
	},
	_version: {
		color: '#3c3c3c',
		position: 'absolute',
		bottom: 25,
		marginLeft: 53
	}
});

export default styles;
