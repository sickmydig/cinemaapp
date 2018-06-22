import React, { PropTypes} from 'react'
import CountDown from 'react-native-countdown-component';

// leftTime is total time in seconds
const CountDownDate = (leftTime) => {
	console.log('left time', leftTime);

	return (
		<CountDown
			until={leftTime.leftTime}
			onPress={() => alert('hello')}
			size={13}
			timeToShow={['D', 'H', 'M', 'S']}
		/>
	);
};

// CountDownDate.propTypes = {
// 	leftTime: PropTypes.string.isRequired
// };

export default CountDownDate;
