import Timeline from 'react-native-timeline-listview';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';

import * as moviesActions from './movies.actions';
import I18n from '../../i18n';

class HotMovies extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 0,
			list: {
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
				this.setState({
					list: this.props.list,
					page: this.props.list.page
				});
			}
		);
	}

	render() {
		const pages = this.state.page;
		console.log('list of favorites:', pages);
		return (
			<View style={styles.container}>
				<Text>
					{pages}
					{I18n.t('usGallons')}
				</Text>
			</View>
		);
	}
}

HotMovies.propTypes = {
	actions: PropTypes.object.isRequired,
	list: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		list: state.movies.favorites
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HotMovies);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop:65,
		backgroundColor: 'white'
	}
});
