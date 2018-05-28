import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import VideoList from '../home/video-list'
import api from './../../api'

class Upload extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
    const { userId } = this.props

    if (!userId) {
			hashHistory.push('/login')
		}
  }

	render() {
		const { videoList } = this.props

		const list = [...videoList, ...videoList]

		return (
			<section className="upload">
				<div className="comment-submit">
					<button>上传视频</button>
				</div>
				<VideoList videoList={list} title="已上传视频列表" />
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		userId: state.user.userId,
		videoList: state.user.videoList
	}
}

export default connect(
	mapStateToProps
)(Upload)