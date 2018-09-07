import React, { PropTypes } from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

const SideDrawerItem = ({ inheritFunctions, item }) => (
	<TouchableOpacity onPress={inheritFunctions}>
		<View style={styles.drawerListItem}>
			<Text style={styles.itemtext}>
				{item}
			</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	itemtext: {
		color: 'white',
		fontFamily: 'MontserratAlternates-SemiBold',
		fontSize: 20,
		paddingLeft: 15,
		flex: 1
	},
	drawerListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 23
	},
});

SideDrawerItem.propTypes = {
	inheritFunctions: PropTypes.func.isRequired,
	item: PropTypes.number.isRequired
};

export default SideDrawerItem;
