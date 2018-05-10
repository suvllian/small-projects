import React, { Component } from 'react';
import { Link } from 'react-router';

export default class VideoList extends Component {
	constructor(props) {
		super(props)
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
						videoList.map((item, index) =>
							<div className="col-md-3" key={index}>
								<a href="/#/home/play" target="_blank">
									<div className="news-block">
										<img src={item.imgSrc} className="response-img" />
										<div className="news-info">
											<p>{item.aTime}</p>
											<p>{item.content}</p>
										</div>
									</div>
								</a>
							</div>
						)
					}
				</div>
			</section>
		)
	}
}