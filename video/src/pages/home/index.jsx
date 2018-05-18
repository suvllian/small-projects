import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from './slider.jsx';
import HomeNav from './nav.jsx';
import VideoList from './video-list.jsx';
import VideoPlay from './video-play.jsx';
import Connect from './connect.jsx';
import Hot from './hot.jsx'
import api from './../../api'

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videoList: [],
			navs: ['首页', '电视剧', '电影', '综艺', '纪录片', '音乐', '动画'],
			playStatus: false //list
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		this.getIndexData();
	}

	getIndexData() {
		api.getIndexData().then((data) => {
			this.setState({ videoList: data.data });
		})
	}

	changeNav() {
		this.setState({
			playStatus: false
		})
	}

	render() {
		const { videoList, navs } = this.state;
		const showType = this.props.params.type

		return (
			<div>
				<Slider />
				<HomeNav navs={navs} changeNav={this.changeNav.bind(this)} />
				{
					showType == 'list' || !showType ? (
						<div>
							<VideoList videoList={videoList} title="最新视频" />
							<VideoList videoList={videoList} title="最热视频" />
						</div>
					) : (
							<div className="video-play-container">
								<VideoPlay title='视频' src="http://suvllian.top/walk.mp4" />
								<div className="video-play-list">
									<h3>视频列表</h3>
									{
										videoList && videoList.map((video, index) => (
											<div className="recommend-item" key={index}>
												<div className="recommend-img">
													<img src={video.imgSrc} className="response-img" />
												</div>
												<div className="recommend-info">
													<p>{video.aTime}</p>
													<p>{video.content}</p>
												</div>
											</div>
										))
									}
								</div>
							</div>
						)
				}
				<Hot />
			</div>
		)
	}
}

export default Home