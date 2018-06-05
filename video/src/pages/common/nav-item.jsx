import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux'
import { logout } from './../../actions/user.js'

class NavItem extends Component {
	logout() {
		this.props.logout()
		hashHistory.push('/')
	}

	render() {
		const { userName, userId } = this.props

		return (
			<ul className="nav-ul">
				<li className="user-name">{userName}</li>
				{
					this.props.items.map((item, index) => {
						let classes = (item.title == this.props.currentItem) ? 'active nav-li' : 'nav-li';
						return (<li key={index} className={classes} onClick={this.changeActiveItem.bind(this, item.title)}>
							<Link to={item.link}>{item.title}</Link>
						</li>)
					})
				}
				{
					userId && <li className='nav-li' onClick={this.logout.bind(this)}>退出</li>
				}
			</ul>
		)
	}

	changeActiveItem(item) {
		this.props.changeActive(item);
	}
}

const mapStateToProps = state => {
	return {
		userName: state.user.userName,
		userId: state.user.userId
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout())
	}
}
export default connect(
	mapStateToProps, mapDispatchToProps
)(NavItem)

