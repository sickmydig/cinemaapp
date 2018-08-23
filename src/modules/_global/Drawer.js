import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEx from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles/Drawer';
import drawerHandler from './HandleDrawerMenu';
class Drawer extends Component {
	constructor(props) {
		super(props);

		this._goToMovies = this._goToMovies.bind(this);
		this._goToFavorites = this._goToFavorites.bind(this);
		this._openSearch = this._openSearch.bind(this);
		this._eventSelectedMenu = this._eventSelectedMenu.bind(this);
		this.state = {
			drawerSelected: 0,
			list: {
				results: []
			}
		};
	}

	_eventSelectedMenu(menu) {
		const currentPick = this.setState({ drawerSelected: menu });
		console.log('current menu item at', currentPick);
	}

	_openSearch() {
		this._toggleDrawer();
		this.props.navigator.showModal({
			screen: 'movieapp.Search',
			title: 'Search'
		});
	}

	_goToMovies() {
		this._eventSelectedMenu(0);
		this._toggleDrawer();
		this.props.navigator.popToRoot({
			screen: 'movieapp.Movies'
		});
	}

	_goToFavorites() {
		this._eventSelectedMenu(1);
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

	render() {
		// console.log('menu item at render', this.state.drawerSelected);
		const iconSearch = (<Icon name="md-search" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />);
		const iconMovies = (<Icon name="md-film" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);
		const iconTV = (<Icon name="ios-desktop" size={26} color="#9F9F9F" style={styles.drawerListIcon} />);
		const favorites = (<IconEx name="volume-down" size={26} color="#9F9F9F" style={styles.drawerListIcon} />);
		const fontSelect = drawerHandler({ weight: 'SemiBold', style: 'Italic' });
		const {color} = fontSelect;
		console.log(fontSelect);
		const { totalFavorites } = this.props;
		return (
			<LinearGradient colors={['rgba(0, 0, 0, 0.7)', 'rgba(0,0,0, 0.9)', 'rgba(0,0,0, 1)']} style={styles.linearGradient}>
				<View style={styles.container}>
					<View style={styles.drawerList}>
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
								<Text style={{color: 'yellow' }} >
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
		totalFavorites: state.movies.favorites.total_results
	};
}

Drawer.defaultProps = {
	totalFavorites: 0
};

Drawer.propTypes = {
	navigator: PropTypes.object,
	totalFavorites: PropTypes.number.isRequired
	// list: PropTypes.object.required
};

export default connect(mapStateToProps)(Drawer);
