import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	StyleSheet
} from 'react-native';
import CountDown from 'react-native-countdown-component';

// leftTime is total time in seconds
const CountDownDate = (leftTime) => {
	console.log('left time', leftTime);

	return (
		<View>
			<CountDown
				until={leftTime.leftTime}
				onPress={() => alert('hello')}
				size={15}
				timeToShow={['D', 'H', 'M', 'S']}
			/>
		</View>
	);
};

// CountDownDate.propTypes = {
// 	leftTime: PropTypes.string.isRequired
// };
const styles = StyleSheet.create({
	cardContainer: {
		flex: 1
	}
});

export default CountDownDate;
