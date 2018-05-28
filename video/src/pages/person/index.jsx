import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import VideoList from '../home/video-list'
import Nav from '../home/nav'
import api from './../../api'

class Person extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navs: ['我的收藏', '我喜欢的']
    }
  }

  componentDidMount() {
    const { userId } = this.props

    if (!userId) {
			hashHistory.push('/login')
		}
  }

  render() {
    const { videoList } = this.props
    const { navs } = this.state

    return (
      <section className="person-center">
        <Nav navs={navs} toRouter="/person/love" />
        <VideoList videoList={videoList} title="" />
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.userId,
    videoList: state.user.videoList
  }
}

export default connect(
  mapStateToProps
)(Person)