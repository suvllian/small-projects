import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import api from './../../api'
import { fetchPostsIfNeeded } from '../../actions/user'

class Login extends Component {
	constructor(props) {
		super(props)
	}

	componentWillReceiveProps(nextProps) {
		const { userId } = nextProps

		if (userId) {
			hashHistory.push('/')
		}
	}

	componentDidMount() {
		const { userId } = this.props
		
		if (userId) {
			hashHistory.push('/')
		}
	}

	login() {
		const { fetchPostsIfNeeded } = this.props
		const username = this.refs.username.value
		const password = this.refs.password.value

		if (!username || !password) {
			return
		}

		fetchPostsIfNeeded(api.loginFetch, `username=${username}&password=${password}`)
	}

	render() {
		return (
			<section className="person">
				<div className="login">
					<div className="login-box">
						<h2 className="login-h">登录</h2>
						<input type="text" className="input-item" placeholder="请输入账号" ref="username" />
						<input type="password" className="input-item" placeholder="请输入密码" ref="password" />
						<input type="submit" className="login-btn" value="登陆" onClick={this.login.bind(this)} />
						<p className="login-bottom">没有账号？<Link to="/register">现在注册</Link></p>
					</div>
				</div>
			</section>
		)
	}
}

const getUser = state => {
	return {
		userId: state.user.userId
	}
}

export default connect(
	getUser,
	{ fetchPostsIfNeeded }
)(Login)