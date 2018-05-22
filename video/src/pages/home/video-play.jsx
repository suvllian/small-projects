import React, { Component } from 'react';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import api from './../../api/index'
import formatTime from '../../utils/index.js'

class VideoPlay extends Component {
	constructor(props) {
		super(props)

		this.state = {
			commentList: []
		}
	}

	componentDidMount() {
		this.getCommentList()
	}

	getCommentList() {
		const $this = this
		const { videoId } = this.props

		api.getCommentFetch(videoId).then(res => {
			const { data } = res

			$this.setState({
				commentList: data
			})
		})
	}

	submitComment() {
		const { userId, videoId } = this.props
		const commentValue = this.refs.comment.value
		const $this = this

		if (!userId) {
			hashHistory.push('/login')
		}

		if (!commentValue) {
			console.log('请输入内容')
			
			return
		}

		api.commentFetch(`userId=${userId}&videoId=${videoId}&content=${commentValue}`).then(res => {
			$this.refs.comment.value = ''
			$this.getCommentList()
		})
	}

	render() {
		const { src, title } = this.props
		const { commentList = [] } = this.state

		return (
			<section className="video-container">
				<div className="section-title-1">
					<h2>{title}</h2>
				</div>
				<div className="row">
					<video className="video-player" src={src}
						controls="controls" autoPlay="autoplay" />
				</div>

				<div className="comment-container">
					<h2 className="comment-title">留下你的足迹：</h2>
					<textarea name="comment" id="comment-input" cols="30" rows="10" ref="comment"></textarea>
					<div className="comment-submit">
						<button onClick={this.submitComment.bind(this)}>发表</button>
					</div>
					<h2 className="comment-title">评论区</h2>
					<div className="comment-list">
						{
							commentList.map((comment, index) => (<div className="comment-item" key={index}>
								<div className="comment-info">
									<div className="comment-username">{comment.username}</div>
									<div className="comment-time">{formatTime(comment.aTime)}</div>
								</div>
								<div>{comment.content}</div>
							</div>
							))
						}
					</div>
				</div>
			</section>
		)
	}
}

const getUser = state => {
	return {
		userId: state.user.userId,
		videoId: state.user.videoId
	}
}

export default connect(
	getUser
)(VideoPlay)