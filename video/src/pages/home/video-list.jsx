import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { play } from '../../actions/user'
import { formatTime } from '../../utils/index'

class VideoList extends Component {
	constructor(props) {
		super(props)
	}

	setVideoId(id) {
		this.props.setVideoId(id)
	}

	render() {
		const { videoList, title } = this.props

		return (
			<section className="video-container">
				<div className="section-title-1">
					<h2>{title}</h2>
				</div>
				<div className="row">
					{
						videoList && videoList.map((item, index) =>
							<div className="col-md-3" key={index} onClick={this.setVideoId.bind(this, item.id)}>
								<Link to={`/home/${item.id}`}>
									<div className="news-block">
										<img src={require("./../../assets/" + item.imgSrc)} className="response-img" />
										<div className="news-info">
											<p className="video-title">{item.title} - {formatTime(item.aTime).split(' ')[0]}</p>
											<p className="video-intro">{item.content}</p>
										</div>
									</div>
								</Link>
							</div>
						)
					}
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		videoId: state.user.videoId
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setVideoId: id => dispatch(play({videoId: id}))
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps
)(VideoList)