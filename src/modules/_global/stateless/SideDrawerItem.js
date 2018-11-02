import React, { PropTypes } from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';


const SideDrawerItem = ({ item, inheritFunctions, id, isActive }) => (
	<TouchableOpacity onPress={inheritFunctions}>
		<View style={styles.drawerListItem} >
			<Text style={(isActive) ? styles.selected : styles.itemtext}>
				{item.title} - {id} - {isActive}
			</Text>
		</View>
	</TouchableOpacity>
);

// const SideDrawerItem = ({  item }) => (
// 	<View style={styles.drawerListItem}>
// 		<Text style={styles.itemtext}>
// 			{'render sub items'}
// 		</Text>
// 	</View>
// );

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
	selected: {
		color: 'yellow',
		fontFamily: 'MontserratAlternates-SemiBold',
		fontSize: 20,
	}
});

SideDrawerItem.propTypes = {
	inheritFunctions: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired,
	isActive: PropTypes.bool.isRequired
};

export default SideDrawerItem;
