import React, { Component } from 'react';
import { Link, IndexLink, hashHistory } from 'react-router';
import NavItem from './nav-item.jsx';
import { connect } from 'react-redux'
import api from './../../api'
import { fetchPostsIfNeeded } from '../../actions/user'
import { searchVideo } from './../../actions/user.js'

require('./nav.scss');

class Nav extends Component {
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

	search() {
		const value = this.refs.search.value
		const { fetchPostsIfNeeded } = this.props

		fetchPostsIfNeeded(api.searchFetch, searchVideo, `searchValue=${value}`)

		hashHistory.push('/search')
	}

	render() {
		
		return (
			<header className="header small-header">
				<div className="header-container">
					<div>
						<h1 className="header-logo"><IndexLink to="/">C站</IndexLink></h1>
						<div className="search-container">
							站内搜索：<input type="text" className="search-input" ref="search" />
							<div className="comment-submit" onClick={this.search.bind(this)}>
								<button>搜索</button>
							</div>
						</div>
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

const mapStateToProps = state => {
	return {
		searchVideos: state.user.searchVideos
	}
}

export default connect(
	mapStateToProps, {
		fetchPostsIfNeeded
	}
)(Nav)