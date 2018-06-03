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

	submitFile(e) {
		e.preventDefault()
		const file = this.refs.videoFile.files[0]
		const reader = new FileReader()
		
		reader.readAsDataURL(file)
		reader.onload = function (e) {
			const data = e.target.result

			api.uploadFetch(`file=${data}`)
		}
	}

	render() {
		const { videoList } = this.props
		const list = [...videoList, ...videoList]

		return (
			<section className="upload">
				<form method="post" enctype="multipart/form-data" onSubmit={this.submitFile.bind(this)}>
					<input type="file" name="videoFile" className="choose-file-btn" ref="videoFile" />
					<div className="comment-submit">
						<button>上传视频</button>
					</div>
				</form>
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