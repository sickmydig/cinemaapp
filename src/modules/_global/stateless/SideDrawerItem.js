import React, { PropTypes } from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

const SideDrawerItem = ({ title, isActive, onPressFunc, id }) => (
	<TouchableOpacity onPress={onPressFunc}>
		<View style={styles.drawerListItem} >
			<Text style={(isActive) ? styles.selected : styles.normal}>
				{title}
			</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	drawerListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 22
	},
	normal: {
		color: 'white',
		fontFamily: 'MontserratAlternates-SemiBold',
		fontSize: 20,
		paddingLeft: 15,
		flex: 1
	},
	selected: {
		color: 'yellow',
		fontFamily: 'MontserratAlternates-SemiBold',
		fontSize: 20,
		paddingLeft: 15
	}
});

// SideDrawerItem.propTypes = {
// 	inheritFunctions: PropTypes.func.isRequired,
// 	item: PropTypes.object.isRequired,
// 	id: PropTypes.number.isRequired,
// };
SideDrawerItem.propTypes = {
	onPressFunc: PropTypes.func.isRequired,
	// isActive: PropTypes.bool.isRequired,
	// title: PropTypes.string.isRequired,
	// id: PropTypes.number.isRequired,
};

export default SideDrawerItem;
