import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { play } from '../../actions/user'

class VideoList extends Component {
	constructor(props) {
		super(props)
	}

	setVideoId(id) {
		const { dispatch, play } = this.props

		dispatch(play({videoId: id}))
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
							<div className="col-md-3" key={item.id} onClick={this.setVideoId.bind(this, item.id)}>
								<Link to={`/home/${item.id}`}>
									<div className="news-block">
										<img src={item.imgSrc} className="response-img" />
										<div className="news-info">
											<p>{item.aTime}</p>
											<p>{item.content}</p>
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

const getVideo = state => {
	return {
		videoId: state.user.videoId
	}
}

export default connect(
	getVideo, { play }
)(VideoList)