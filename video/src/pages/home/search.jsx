import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from './slider.jsx';
import VideoList from './video-list.jsx';
import VideoPlay from './video-play.jsx';
import Hot from './hot.jsx'
import { connect } from 'react-redux'

class SearchResult extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { searchVideos } = this.props
		console.log('searchVideos', searchVideos)

		return (
			<div>
				<Slider />
				<VideoList videoList={searchVideos} title="搜索结果" />
				<Hot />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		searchVideos: state.user.searchVideos
	}
}

export default connect(
	mapStateToProps
)(SearchResult)