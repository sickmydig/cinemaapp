import React from 'react';
import {
	View, Text,
	StyleSheet
} from 'react-native';

export default function WithLoading(Component) {
	return function WithLoading({ isLoading, ...props }) {
		if (!isLoading) return (<Component {...props} />);
		return (
			<View style={styles.container}>
				<Text style={styles.textGrid}> Be Hold, fetching data may take some time :)
				</Text>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 10,
		paddingTop: 20,
		backgroundColor: 'grey'
	},
	textGrid: {
		color: 'white',
		padding: 10
	}
});
