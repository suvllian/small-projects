import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import api from './../../api'

export default class Register extends Component {
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

	register() {
		const username = this.refs.username.value
		const password = this.refs.password.value

		if (!username || !password) {
			return
		}

		api.registerFetch(`username=${username}&password=${password}`).then(res => {
			const { success, msg = '注册失败' } = res

			if (success) {
				hashHistory.push('/')
			} else {
				alert(msg)
			}
		}).catch(err => {
			console.log(res)
			alert(err)
		})
	}

	render() {
		return (
			<section className="person">
				<div className="login">
					<div className="login-box">
						<h2 className="login-h">注册</h2>
						<input type="text" className="input-item" placeholder="请输入账号" ref="username" />
						<input type="password" className="input-item" placeholder="请输入密码" ref="password" />
						<p className="age-check">
							<span>已满18岁？</span>
							是<input type="checkbox" className="check-box" />
							否<input type="checkbox" className="check-box" />
						</p>
						<input type="submit" className="login-btn" value="注册" onClick={this.register.bind(this)} />
						<p className="login-bottom">已有账号？<Link to="/login">现在登录</Link></p>
					</div>
				</div>
			</section>
		)
	}
}