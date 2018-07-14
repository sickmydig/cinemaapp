import React, { Component, PropTypes } from 'react';
import {
	Image,
	Linking,
	RefreshControl,
	ScrollView,
	Text,
	ToastAndroid,
	TouchableOpacity,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import * as moviesActions from './movies.actions';
import Casts from './tabs/Casts';
import DefaultTabBar from '../_global/scrollableTabView/DefaultTabBar';
import Info from './tabs/Info';
import ProgressBar from '../_global/ProgressBar';
import Trailers from './tabs/Trailers';
import styles from './styles/Movie';
import {
	TMDB_IMG_URL, TMDB_API_KEY, TMDB_SESSION_ID,
	TMDB_URL, YOUTUBE_API_KEY, YOUTUBE_URL
} from '../../constants/api';

class Movie extends Component {
	constructor(props) {
		super(props);

		this.state = {
			castsTabHeight: null,
			heightAnim: null,
			infoTabHeight: null,
			isLoading: true,
			isRefreshing: false,
			showSimilarMovies: true,
			trailersTabHeight: null,
			tab: 0,
			youtubeVideos: [],
			isFavorite: false,
			favoriteSize: 0
		};

		this._getTabHeight = this._getTabHeight.bind(this);
		this._onChangeTab = this._onChangeTab.bind(this);
		this._onContentSizeChange = this._onContentSizeChange.bind(this);
		this._onRefresh = this._onRefresh.bind(this);
		this._onScroll = this._onScroll.bind(this);
		this._viewMovie = this._viewMovie.bind(this);
		this._openYoutube = this._openYoutube.bind(this);
		this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
		this._doToastNotification = this._doToastNotification.bind(this);
		this._checkFavoriteMovie = this._checkFavoriteMovie.bind(this);
		this._retrieveSimilarMovies = this._retrieveSimilarMovies.bind(this);
	}

	componentWillMount() {
		this._retrieveDetails();
		this._checkFavoriteMovie();
	}

	componentDidMount() {
		console.log('fetch the similar movies', this.state.isFavorite);
		this._retrieveSimilarMovies();
	}

	componentWillReceiveProps(nextProps) {
		if (typeof (nextProps) !== 'undefined' && nextProps.details) this._checkFavoriteMovie(nextProps);
		if (nextProps.details) this.setState({ isLoading: false });
	}
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return (this.props.details !== nextProps.details);
	// }

	// componentWillUpdate() {
	// }

	_retrieveDetails(isRefreshed) {
		this.props.actions.retrieveMovieDetails(this.props.movieId).then(() => {
				this._retrieveYoutubeDetails();
		});
		if (isRefreshed && this.setState({ isRefreshing: false }));
	}

	_checkFavoriteMovie(nextPropsParam) {
		const fav = this.props.favorites;
		if (nextPropsParam) {
			if (fav) {
				const currentProps = (nextPropsParam.details !== this.props.details) ? nextPropsParam.details : this.props.details;
				const currentFavorites = (nextPropsParam.favorites.total_results !== this.props.favorites.total_results) ? nextPropsParam.favorites : this.props.favorites;
				currentFavorites.results.map(item => {
					console.log('at item :', item.id, currentProps.id);
					// Check if the movie is favorite, set status for the movie
					if (item.id === currentProps.id) {
						this.setState({ isFavorite: true });
					}
				});
			}
		}
	}

	_retrieveSimilarMovies() {
		this.props.actions.retrieveSimilarMovies(this.props.movieId);
	}

	_onRefresh() {
		this.setState({ isRefreshing: true });
		this._retrieveDetails('isRefreshed');
	}

	_onScroll(event) {
		const contentOffsetY = event.nativeEvent.contentOffset.y.toFixed();
		if (contentOffsetY > 150) {
			this._toggleNavbar('hidden');
		} else {
			this._toggleNavbar('shown');
		}
	}

	_toggleNavbar(status) {
		this.props.navigator.toggleNavBar({
			to: status,
			animated: true
		});
	}

	_onChangeTab({ i, ref }) {
		this.setState({ tab: i });
	}

	// ScrollView onContentSizeChange prop
	_onContentSizeChange(width, height) {
		if (this.state.tab === 0 && this.state.infoTabHeight === this.state.castsTabHeight) {
			this.setState({ infoTabHeight: height });
		}
	}

	_getTabHeight(tabName, height) {
		console.log('tabHeight ', height);
		if (tabName === 'casts') this.setState({ castsTabHeight: height });
		if (tabName === 'trailers') this.setState({ trailersTabHeight: height });
	}

	_retrieveYoutubeDetails() {
		const details = this.props.details;
		if (typeof (details) === 'undefined') {
			return '';
		}
		this.props.details.videos.results.map(item => {
			const request = axios.get(`${YOUTUBE_URL}/?id=${item.key}&key=${YOUTUBE_API_KEY}&part=snippet`)
								.then(res => {
									const data = this.state.youtubeVideos;
									data.push(res.data.items[0]);
								})
								.catch(error => {
									console.log(error); //eslint-disable-line
								});
			return request;
		});
	}

	_viewMovie(movieId) {
		this.props.navigator.push({
			screen: 'movieapp.Movie',
			passProps: {
				movieId
			}
		});
	}
	_openYoutube(youtubeUrl) {
		Linking.canOpenURL(youtubeUrl).then(supported => {
			console.log(supported);
			if (supported) {
				Linking.openURL(youtubeUrl);
			} else {
				ToastAndroid.show(`RN Don't know how to handle this url ${youtubeUrl}`, ToastAndroid.SHORT);
			}
		});
	}

	_sendFavoriteMovie(mediaId) {
		axios.defaults.headers.post['Content-Type'] = 'application/json';
		const request =
			axios.post(`${TMDB_URL}/account/sickmydig/favorite?api_key=${TMDB_API_KEY}&session_id=${TMDB_SESSION_ID}`,
				{
					media_type: "movie",
					media_id: mediaId,
					favorite: !this.state.isFavorite
				})
			.then(res => {
				const data = res.data;

				if (data.status_code <= 13) {
					this.props.actions.retrieveFavorites();
					this.setState({ isFavorite: !this.state.isFavorite });
					this._doToastNotification(this.state.isFavorite);
				}
				if (data.status_code === 404) {
					console.log('Server error');
				}
			})
			.catch(error => {
				console.log(error); //eslint-disable-line
			});
	}

	_onNavigatorEvent(event) {
		if (event.type === 'NavBarButtonPress') {
			if (event.id === 'close') {
				this.props.navigator.dismissModal();
			}
		}
	}

	_doToastNotification(isFavorited) {
		if (isFavorited) ToastAndroid.show('favorite movie', ToastAndroid.SHORT);
	}

	render() {
		// console.log('<<<<<<<<<<<<<<<<<<< RENDER PHASE >>>>>>>>>>>>>>>>>>>>');

		console.log('>>>>>>>>>>>>>>>>>>>>>> Movie render');
		const { details } = this.props;
		const info = details;
		const iconStar = <Icon name="md-star" size={16} color="#F5B642" />;
		// '2018-09-08'
		let height;
		if (this.state.tab === 0) height = this.state.infoTabHeight;
		if (this.state.tab === 1) height = this.state.castsTabHeight - 700;
		if (this.state.tab === 2) height = this.state.trailersTabHeight;
		console.log('render withHeight ', height);
		const favoriteColorSign = (this.state.isFavorite) ? '#d78c45' : '#c0c9d7';
		return (
			this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
			<ScrollView
					style={styles.container}
					onScroll={this._onScroll.bind(this)}
					scrollEventThrottle={100}
					onContentSizeChange={this._onContentSizeChange}
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={this._onRefresh}
							colors={['#EA0000']}
							tintColor="white"
							title="loading..."
							titleColor="white"
							progressBackgroundColor="white"
						/>
					}>
				<View style={{ height }}>
					<Swiper
						style={styles.swiper}
						autoplay
						autoplayTimeout={4}
						showsPagination={false}
						height={248}
						loop
						index={5}>
						{
							info.images.backdrops.map((item, index) => (
								<View key={index}>
									<Image source={{ uri: `${TMDB_IMG_URL}/w780/${(item.file_path)}` }} style={styles.imageBackdrop} />
									<LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']} style={styles.linearGradient} />
								</View>
							))
						}
					</Swiper>

					<View style={styles.cardContainer}>

						<Image source={{ uri: `${TMDB_IMG_URL}/w185/${info.poster_path}` }} style={styles.cardImage} />
						<View style={styles.cardDetails}>
							<Text style={styles.cardTitle}>{info.original_title}</Text>
							<Text style={styles.cardTagline}>{info.tagline}</Text>
							<View style={styles.cardGenre}>
								{
									info.genres.map(item => (
										<Text key={item.id} style={styles.cardGenreItem}>{item.name}</Text>
									))
								}
							</View>
							<View>
								<TouchableOpacity activeOpacity={0.9} onPress={this._sendFavoriteMovie.bind(this, info.id)}>
									<Icon name="md-bookmark" size={35} color={favoriteColorSign} />
								</TouchableOpacity>
							</View>
							<View style={styles.cardNumbers}>
								<View style={styles.cardStar}>
									{iconStar}
									<Text style={styles.cardStarRatings}>8.9</Text>
								</View>
								<Text style={styles.cardRunningHours} />
							</View>
						</View>
					</View>
					<View style={styles.contentContainer}>
						<ScrollableTabView
							onChangeTab={this._onChangeTab}
							renderTabBar={() => (
								<DefaultTabBar
									textStyle={styles.textStyle}
									underlineStyle={styles.underlineStyle}
									style={styles.tabBar}
								/>
							)}>
							<Info tabLabel="INFO" info={info} />
							<Casts tabLabel="CASTS" info={info} getTabHeight={this._getTabHeight} />
							<Trailers tabLabel="TRAILERS" youtubeVideos={this.state.youtubeVideos} openYoutube={this._openYoutube} getTabHeight={this._getTabHeight} />
						</ScrollableTabView>
					</View>
				</View>
			</ScrollView>
		);
	}
}

Movie.navigatorStyle = {
	navBarTransparent: true,
	drawUnderNavBar: true,
	navBarTranslucent: true,
	statusBarHidden: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white'
};

Movie.propTypes = {
	actions: PropTypes.object.isRequired,
	details: PropTypes.object.isRequired,
	navigator: PropTypes.object,
	movieId: PropTypes.number.isRequired,
	favorites: PropTypes.object.isRequired,
	similarMovies: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		details: state.movies.details,
		similarMovies: state.movies.similar,
		favorites: state.movies.favorites
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
