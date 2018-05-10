import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from './slider.jsx';
import HomeNav from './nav.jsx';
import VideoList from './video-list.jsx';
import VideoPlay from './video-play.jsx';
import Connect from './connect.jsx';
import Hot from './hot.jsx'
import api from './../../api'

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sliderImage: [],
			hotImage: [],
			newsList: [],
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
			this.setState({ sliderImage: data.banner });
			this.setState({ hotImage: data.hot });
			this.setState({ newsList: data.news });
		})
	}

	changeNav() {
		this.setState({
			playStatus: false
		})
	}

	render() {
		const { sliderImage, hotImage, newsList, navs } = this.state;
		const showType = this.props.params.type

		return (
			<div>
				<Slider slider={sliderImage} />
				<HomeNav navs={navs} changeNav={this.changeNav.bind(this)} />
				{
					showType === 'play' ? <VideoPlay title='视频' src="http://suvllian.top/walk.mp4" /> : (
						<div>
							<VideoList videoList={newsList} title="最新视频" />
							<VideoList videoList={newsList} title="最热视频" />
						</div>
					)
				}
				<Hot hot={hotImage} />
			</div>
		)
	}
}