/* eslint-disable new-cap */
import React, { PropTypes, Component } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { TMDB_IMG_URL } from '../../../constants/api';
import styles from './styles/CardThree';
import CountDownDate from '../CountDownDate';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const iconStar = <Icon name="md-star" size={16} color="#F5B642" />;

class CardThree extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { info, viewMovie } = this.props;
		const upcoming = (Date.parse(new Date(info.release_date)) - Date.parse(new Date())) / 1000;
		return (
			<View style={styles.cardContainer}>
				<TouchableOpacity activeOpacity={0.9} onPress={viewMovie.bind(this, info.id)}>
					<View style={styles.card}>
						<Image source={{ uri: `${TMDB_IMG_URL}/w780/${(info.backdrop_path || info.poster_path)}` }} style={styles.imageBackdrop} />
						<LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0,0,0, 0.1)', 'rgba(0,0,0, 0.9)']} style={styles.linearGradient} />
						<View style={styles.cardDetailsContainer}>
							<Text
								style={styles.cardTitle}
								numberOfLines={2}>
								{info.original_title}
							</Text>
							<View style={styles.cardStar}>
								{iconStar}
								<Text style={styles.cardStarRatings}>{info.vote_average.toFixed(1)}</Text>
							</View>
							<View style={styles.cardDateLeft}>
								{upcoming > 0 ? <CountDownDate leftTime={upcoming} /> : <Text >{''}</Text> }
							</View>
							{/*<Text style={styles.cardRunningHours} />*/}
						</View>
					</View>

					{/*<View style={styles.card}>
						<View style={styles.cardDetails}>
							<Text
								style={styles.cardTitle}
								numberOfLines={3}>
								{info.original_title}
							</Text>

							<View style={styles.cardGenre}>
								<Text style={styles.cardGenreItem}>{info.release_date.substring(0, 4)}</Text>
							</View>
							<View style={styles.cardNumbers}>
								<View style={styles.cardStar}>
									{iconStar}
									<Text style={styles.cardStarRatings}>{info.vote_average.toFixed(1)}</Text>
								</View>
								<Text style={styles.cardRunningHours} />
							</View>
							<Text style={styles.cardDescription} numberOfLines={2}>
								{info.overview}
							</Text>
						</View>
					</View>*/}
				</TouchableOpacity>
			</View>
		);
	}
}

CardThree.propTypes = {
	info: PropTypes.object.isRequired,
	viewMovie: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		moviesGenres: state.movies.genres
	};
}

export default connect(mapStateToProps, null)(CardThree);
