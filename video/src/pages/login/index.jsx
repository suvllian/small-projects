import React, { Component } from 'react';
import { Link } from 'react-router';
import api from './../../api'

export default class Login extends Component {
	constructor(props) {
		super(props)
	}

	login() {
		const username = this.refs.username.value
		const password = this.refs.password.value
		
		if (!username || !password) {
			return 
		}

		const data = {
			username, password
		}

		api.login(`username=${username}&password=${password}`).then((res) => {
			console.log(res)
		})
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
					</div>
				</div>
			</section>
		)
	}
}