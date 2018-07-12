import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0a0a0a'
	},
	textInput: {
		backgroundColor: 'white',
		...Platform.select({
			ios: {
				height: 35
			},
			android: {
				height: 48,
				borderBottomWidth: 1,
				borderBottomColor: 'white',
				backgroundColor: 'black',
				marginLeft: 20,
				color: 'white'
			}
		})
	},
	searchboxBorder: {
		borderRadius: 3,
		backgroundColor: 'black',
		paddingHorizontal: 3
	},
	searchbox: {
		// backgroundColor: '#191919',
		backgroundColor: 'black',
		paddingHorizontal: 16,
		paddingVertical: 8,
		marginBottom: 16
	},
	seperator: {
		marginTop: 10,
		backgroundColor: '#8E8E8E'
	}
});

export default styles;
