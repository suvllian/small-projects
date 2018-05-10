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
				{ title: "个人中心", link: "/person", isActive: true },
				// { title: "关于讯澜" , link: "/about", isActive: false},
				// { title: "加入讯澜" , link: "/about", isActive: false}
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