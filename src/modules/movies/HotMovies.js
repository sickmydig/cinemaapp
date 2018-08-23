import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import WithLoading from './WithLoading';
import CardMixed from './components/CardMixed';
import {
	StyleSheet,
	Text,
	View,
	ListView
} from 'react-native';


import ProgressBar from '../_global/ProgressBar';
import CardThree from './components/CardThree';
import * as moviesActions from './movies.actions';
import I18n from '../../i18n';
import FavoriteItem from "./FavoriteItem";

const CategoryView = WithLoading(CardMixed);

class HotMovies extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isGridView: true,
			isLoading: true,
			isRefreshing: false,
			page: 0,
			favorites: {
				results: []
			}
		};
	}

	componentWillMount() {
		this._retrieveFavorites();
	}

	_retrieveFavorites() {
		this.props.actions.retrieveFavorites()
			.then(() => {
				console.log('favorite result', this.props.favorites.results);
				const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2 });
				const dataSource = ds.cloneWithRows(this.props.favorites.results);

				this.setState({
					favorites: this.props.favorites,
					dataSource,
					page: this.props.favorites.page,
					isLoading: false
				});
			}
		);
	}

	_viewMovie(movieId) {
		this.props.navigator.showModal({
			screen: 'movieapp.Movie',
			passProps: {
				movieId
			},
			backButtonHidden: true,
			navigatorButtons: {
				rightButtons: [
					{
						id: 'close',
						icon: iconsMap['ios-arrow-round-down']
					}
				]
			}
		});
	}

	renderItem() {
		if (typeof (this.props) === 'undefined')
			return false;
		return (
			<FavoriteItem info={this.props.favorites.results} />
		);
	}

	/*render() {
		const pages = this.state.page;
		console.log('props at render ', this.props.favorites.results);
		return (
			this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
			<View style={styles.container}>
				<Text>
					{pages}
					{I18n.t('usGallons')}
				</Text>

				<ListView
					style={styles.container}
					enableEmptySections
					onEndReached={type => {}}
					onEndReachedThreshold={1200}
					dataSource={this.state.dataSource}
					renderRow={rowData => <CardThree info={rowData} viewMovie={this._viewMovie} />}
					renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.seperator} />}
					renderFooter={() => <View style={{ height: 50 }}><ProgressBar /></View>}
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
					}
				/>
			</View>
		);
	}
	*/

	render() {
		const pages = this.state.page;
		console.log('props at render ', this.props.favorites.results);
		return (
			this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
			<View style={styles.container}>
				<CategoryView isLoading={false} genres={this.props.favorites.results} action={this.props.actions} />
			</View>
		);
	}
}

HotMovies.propTypes = {
	actions: PropTypes.object.isRequired,
	favorites: PropTypes.object.isRequired,
	navigator: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		favorites: state.movies.favorites
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingTop: 20,
		backgroundColor: 'black'
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(HotMovies);
