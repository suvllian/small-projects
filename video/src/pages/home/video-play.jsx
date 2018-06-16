import React, { Component } from 'react';
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import api from './../../api/index'
import { formatTime } from '../../utils/index.js'

const URL = location.href.includes('localhost') ?  "http://127.0.0.1/" : "http://suvllian.top/"

class VideoPlay extends Component {
	constructor(props) {
		super(props)

		this.state = {
			commentList: [],
			isLoved: false,
			loveCount: 0,
			isCollected: false,
			collectCount: 0,
			videoInfo: {}
		}
	}

	componentDidMount() {
		this.getResource()
		this.getCommentList()
		this.getLoveCollectCount()
		this.judgeAge()
	}

	judgeAge () {
		const { videoId } = this.props
		if (videoId === 10) {
			alert('未满十八岁，禁止观看')
			hashHistory.push('/')
		}
	}

	getResource() {
		const { videoId } = this.props
		const that = this

		api.getVideoResource(`videoId=${videoId}`).then(res => {
			that.setState({
				videoInfo: res.data[0]
			})
		})
	}

	getLoveCollectCount() {
		const { userId, videoId } = this.props
		const $this = this

		if (!videoId) {
			return
		}

		api.getCollectLoveCount(`userId=${userId}&videoId=${videoId}`).then(res => {
			$this.setState({
				loveCount: res.isLove,
				loveCount: res.loveCount[0]['COUNT(*)'],
				collectCount: res.isCollect,
				collectCount: res.collectCount[0]['COUNT(*)']
			})
		})
	}

	getCommentList() {
		const $this = this
		const { videoId } = this.props

		if (!videoId) {
			return
		}

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

	clickLoveBtn() {
		const { userId, videoId } = this.props
		const count = this.state.isLoved ? -1 : 1

		if (!userId) {
			hashHistory.push('/login')
		}

		api.loveFetch(`userId=${userId}&videoId=${videoId}`)
		// 加载页面判断用户是否添加喜欢
		this.setState({
			isLoved: !this.state.isLoved,
			loveCount: this.state.loveCount + count
		})
	}

	clickCollectBtn() {
		const { userId, videoId } = this.props
		const count = this.state.isCollected ? -1 : 1

		if (!userId) {
			hashHistory.push('/login')
		}

		api.collectFetch(`userId=${userId}&videoId=${videoId}`)

		this.setState({
			isCollected: !this.state.isCollected,
			collectCount: this.state.collectCount + count
		})
	}

	render() {
		const { commentList = [], isLoved, loveCount, isCollected, collectCount, videoInfo = {} } = this.state
		const { title, videoSrc } = videoInfo
		const loveImgSrc = isLoved ? 'love-after.png' : 'love-before.png'
		const collectImgSrc = isCollected ? 'collect-after.png' : 'collect-before.png'

		return (
			<section className="video-container">
			{/* <div className="mask"></div> */}
				<div className="section-title-1">
					<h2>{title}</h2>
				</div>
				<div className="row">
					{videoSrc && <video className="video-player" src={URL + videoSrc}
						controls="controls" autoPlay="autoplay" height="540" width="960" />}
				</div>

				<div className="operate-list">
					<div className="operate-btn" onClick={this.clickCollectBtn.bind(this)}>
						<img src={require("./../../assets/" + collectImgSrc)} className="operate-img" />
						收藏({collectCount})
					</div>
					<div className="operate-btn" onClick={this.clickLoveBtn.bind(this)}>
						<img src={require("./../../assets/" + loveImgSrc)} className="operate-img" />
						喜欢({loveCount})
					</div>
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