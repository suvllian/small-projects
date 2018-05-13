import React, { Component } from 'react';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

class VideoPlay extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	submitComment() {
		const { userId } = this.props

		if (!userId) {
			hashHistory.push('/login')
		}
	}

	render() {
		const { src, title } = this.props

		return (
			<section className="video-container">
				<div className="section-title-1">
					<h2>{title}</h2>
				</div>
				<div className="row">
					<video className="video-player" src={src}
						controls="controls" autoplay="autoplay" />
				</div>

				<div className="comment-container">
					<h2 className="comment-title">留下你的足迹：</h2>
					<textarea name="comment" id="comment-input" cols="30" rows="10"></textarea>
					<div className="comment-submit">
						<button onClick={this.submitComment.bind(this)}>发表</button>
					</div>
					<h2 className="comment-title">评论区</h2>
					<div className="comment-list">
						<div className="comment-item">
							<div className="comment-info">
								<div className="comment-username">demo</div>
								<div className="comment-time">2018/5/13 20:16</div>
							</div>
							<div>这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</div>
						</div>
						<div className="comment-item">
							<div className="comment-info">
								<div className="comment-username">demo</div>
								<div className="comment-time">2018/5/13 20:16</div>
							</div>
							<div>这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

const getUser = state => {
	return {
		userId: state.user.userId
	}
}

export default connect(
	getUser
)(VideoPlay)