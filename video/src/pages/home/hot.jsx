import React, {Component} from 'react';

const bottomHotItems = [
	{ src: 'hot-1.jpg', title: '视频' },
	{ src: 'hot-2.jpg', title: '视频' },
	{ src: 'hot-3.jpg', title: '视频' }
]

export default class Hot extends Component {
	render() {
		return (
			<section className="hot-article row">
			{
				bottomHotItems.map((item, index) => 
					<div className="col-md-4" key={index}>
					  <a href="#">
							<img className="hot-img" src={require("./../../assets/" + item.src)} />
							<p className="hot-title">{item.title}</p>
							<p className="hot-span">{item.content}</p>
						</a>
					</div>
				)
			}
			</section>
		)
	}

}