import React, {Component} from 'react';

const bottomHotItems = [
	{ src: '41.jpg', title: '拉丁男孩的天空' },
	{ src: '37.jpg', title: '花儿与少年' },
	{ src: '61.jpg', title: '犬夜叉' }
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