import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'

class NavItem extends Component {
	render() {
		const { userName } = this.props

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
			</ul>
		)
	}

	changeActiveItem(item) {
		this.props.changeActive(item);
	}
}

const getUserName = state => {
	return {
		userName: state.user.userName
	}
}

export default connect(
	getUserName
)(NavItem)

