import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEx from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/Drawer';
import SideDrawerItem from './stateless/SideDrawerItem';

import drawerStylesMaker from './drawerStylesMaker';
import { SEARCH_MENU, MOVIE_MENU, FAVORITE_MENU } from '../../constants/ComonNames';
import * as moviesActions from "../movies/movies.actions";


class Drawer extends Component {
	constructor(props) {
		super(props);

		this._goToMovies = this._goToMovies.bind(this);
		this._goToFavorites = this._goToFavorites.bind(this);
		this._openSearch = this._openSearch.bind(this);
		this._eventSelectedMenu = this._eventSelectedMenu.bind(this);
		//this._onEventPress = this._eventSelectedMenu.bind(this);
		this._toggleSelectedDrawer = this._toggleSelectedDrawer.bind(this);
		this.state = {
			// drawerSelected: [],
			drawerSelected: [],
			isLoading: true,
			list: {
				results: []
			}
		};
	}

	// _onEventPress(data) {
	// 	this.setState({ drawerSelected: data });
	// }
	componentWillMount() {

	}

	componentDidMount() {
		//this.props.actions.retrieveMenuLocalSuccess()
	}

	shouldComponentUpdate(nextProps) {
		console.log('should update here ', this.props.drawers, nextProps.drawers);
		// this.props.actions.retrieveMenuLocalSuccess();
		// if (typeof this.props.drawers === 'undefined') {
		// 	console.log('---> updated props in drawers', nextProps.drawers);
		// 	return false;
		// }
		return true;
	}

	_eventSelectedMenu() {
		// const currentPick = this.setState({ drawerSelected: menu });
		console.log('current menu item at', this.state.drawerSelected);
	}

	_openSearch() {
		this._toggleDrawer();
		this.props.navigator.showModal({
			screen: 'movieapp.Search',
			title: 'Search'
		});
	}

	_goToMovies() {
		// this._eventSelectedMenu(0);
		this._toggleDrawer();
		this.props.navigator.popToRoot({
			screen: 'movieapp.Movies'
		});
	}

	_goToFavorites() {
		// this._eventSelectedMenu(1);
		this._toggleDrawer();
		this.props.navigator.showModal({
			screen: 'movieapp.Favorites',
			title: 'Favorites movies'
		});
	}

	_toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}

	_toggleSelectedDrawer(id) {
		// this._toggleDrawer();
		this.props.actions.clickOnMenu(id);
	}

	render() {
		const { drawers } = this.props;
		const iconSearch = (<Icon name="md-search" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />);
		const iconMovies = (<Icon name="md-film" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);
		const iconTV = (<Icon name="ios-desktop" size={26} color="#9F9F9F" style={styles.drawerListIcon} />);
		const favorites = (<IconEx name="volume-down" size={26} color="#9F9F9F" style={styles.drawerListIcon} />);

		// The way to retrieve current drawer item
		const fontFamily = drawerStylesMaker({ weight: 'SemiBold', style: 'Italic', color: 'blue', drawerItem: 'favorite' });
		// console.log('font family data for favorite menu click', fontFamily);
		const { totalFavorites } = this.props;
		return (
			<LinearGradient colors={['rgba(0, 0, 0, 0.7)', 'rgba(0,0,0, 0.9)', 'rgba(0,0,0, 1)']} style={styles.linearGradient}>
				<View style={styles.container}>
					<View style={styles.drawerList}>
						{

							(drawers) ? drawers.map((value, item) =>
								<SideDrawerItem key={item} item={value} inheritFunctions={() => this._toggleSelectedDrawer(value.id)} id={value.id} isActive={value.isActive} />
							)
								:
								<TouchableOpacity onPress={this._openSearch}>
									<View style={styles.drawerListItem}>
										{iconSearch}
										<Text style={styles.drawerListItemText}>
											not yet add drawers
										</Text>
									</View>
								</TouchableOpacity>

						}

						<TouchableOpacity onPress={this._openSearch}>
							<View style={styles.drawerListItem}>
								{iconSearch}
								<Text style={styles.drawerListItemText}>
									Search
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={this._goToMovies}>
							<View style={styles.drawerListItem}>
								{iconMovies}
								<Text style={styles.drawerListItemText}>
									Movies
								</Text>
							</View>
						</TouchableOpacity>
						<View style={styles.drawerListItem}>
							{iconTV}
							<Text style={styles.drawerListItemText} onPress={() => ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT)}>
								TV Shows
							</Text>
						</View>
						<TouchableOpacity onPress={this._goToFavorites}>
							<View style={styles.drawerListItem}>
								{favorites}
								{/*<Text style={(this.state.drawerSelected === 1) ?  styles.selectedDrawerMenuText : styles.drawerListItemText} >*/}
									{/*Favorite*/}
								{/*</Text>*/}
								<Text style={styles.selectedDrawerMenuText} >
									Favorite
								</Text>
								<Text style={styles.drawerListItemText} >
									{totalFavorites}
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={this._goToFavorites}>
							<View style={styles.drawerListItem}>
								<Text style={styles.drawerListItemText} >
									About
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<Text style={styles._version}>
						{/* 'v1.0.0' */}
					</Text>
				</View>
			</LinearGradient>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		list: state.movies.favorites,
		drawers: state.menu.drawers,
		// drawers: state.menu,
		totalFavorites: state.movies.favorites.total_results
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

Drawer.defaultProps = {
	totalFavorites: 0
};

Drawer.propTypes = {
	actions: PropTypes.object.isRequired,
	navigator: PropTypes.object,
	totalFavorites: PropTypes.number.isRequired,
	drawers: PropTypes.array
	// list: PropTypes.object.required
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
