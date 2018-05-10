import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section className="person">
				<div className="login">
					<div className="login-box">
						<h2>登录</h2>
						<input type="text" className="input-item" placeholder="请输入账号" />
						<input type="password" className="input-item" placeholder="请输入密码" />
						<input type="submit" className="login-btn" value="登陆" />
					</div>
				</div>
			</section>
		)
	}
}