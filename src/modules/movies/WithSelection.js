import React from 'react';
import {
	View, Text,
	StyleSheet
} from 'react-native';

const withSelection = Component => {
	return function WithSelection({ isSelected, ...props }) {
		if (!isSelected) return (<Component {...props} />);
		return (
			<View style={styles.container}>
				<Text style={styles.textGrid}> still intact :)
				</Text>
			</View>
		);
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 10,
		paddingTop: 20,
		backgroundColor: 'yellow'
	},
	textGrid: {
		color: 'green',
		padding: 10
	}
});
