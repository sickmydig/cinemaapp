import React from 'react';
import {
	View,
	ProgressBar,
	StyleSheet,
	Platform
} from 'react-native';


const ProgressBarCustom = () =>  (
	<View style={styles.progressBar}>
		<ProgressBar styleAttr="Inverse" />
	</View>
);

const styles = StyleSheet.create({
	progressBar: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default ProgressBarCustom;
