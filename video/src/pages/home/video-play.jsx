import React, { Component } from 'react';

export default class VideoPlay extends Component {
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
			</section>
		)
	}
}