import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import NavItem from './nav-item.jsx';

require('./nav.scss');

export default class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{ title: "首页", link: "/", isActive: true },
				{ title: "投稿", link: "/upload", isActive: true },
				{ title: "个人中心", link: "/person/love", isActive: true }
			],
			currentItem: "首页",
			small: false
		}

		this.changeActive = this.changeActive.bind(this);
	}

	render() {
		return (
			<header className="header small-header">
				<div className="header-container">
					<h1 className="header-logo"><IndexLink to="/">C站</IndexLink></h1>
					<div className="search-container">
						站内搜索：<input type="text" className="search-input" />
					</div>
					<nav className="header-nav">
						<NavItem changeActive={this.changeActive} items={this.state.items} currentItem={this.state.currentItem} />
					</nav>
				</div>
			</header>
		)
	}

	changeActive(item) {
		this.setState({ currentItem: item });
	}
}
