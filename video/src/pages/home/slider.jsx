import React, { Component } from 'react';
require("./index.scss");

const bannerItems = [
	{ src: 'home-1.jpg' },
	{ src: 'home-2.jpg' },
	{ src: 'home-3.jpg' }
]

export default class Slider extends Component{
	constructor(props) {
		super(props);

		this.state = {
			currentItem: 1
		}
	}

	render() {
		return (
			<div className="slider" ref="sliderContainer">
				<ul className="slider-items">
				{	
					bannerItems.map((item, index) =>
					{
						let klass = ((index+1) == this.state.currentItem) ? 
						  "slider-item slider-active" : "slider-item";
						return (
							<a href="#" key={index}>
							  <li className={klass}>
							    <img src={require("./../../assets/" + item.src)} />
							  </li>
						  </a>
						)
					})
				}	
				</ul>
			</div>
		)
	}

	nextImage() {
		let next = 0,
	      now = this.state.currentItem;
		
		if (now == bannerItems.length) {
			next = 1;
		} else {
			next = now + 1;
		}
		return next;
	}

	slideImage() {
		let index = this.nextImage();
		this.setState({ currentItem: index });
	}

	componentDidMount() {
		let slideImage = this.slideImage.bind(this)

		this.handle = setInterval(slideImage, 5000)
	}
}