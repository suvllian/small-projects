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
      navs: ['我的收藏', '我喜欢的'],
      navId: 0,
      lovesVideos: [],
      collectVideos: []
    }
  }

  componentDidMount() {
    const { userId } = this.props

    if (!userId) {
			hashHistory.push('/login')
    }
    
    this.getLoveVideos()
  }

  getLoveVideos () {
    const { userId } = this.props
    const that = this

    api.getlLoveVideosFetch(`userId=${userId}`).then(res => {
      that.setState({
        lovesVideos: res.data
      })
    })
  }


  getCollectVideos () {
    const { userId } = this.props
    const that = this

    api.getlCollectVideosFetch(`userId=${userId}`).then(res => {
      that.setState({
        collectVideos: res.data
      })
    })
  }

  changeNav (index) {
    if (index) {
      this.getCollectVideos()
    } else {
      this.getLoveVideos()
    }

    this.setState({
      navId: index
    })
  }

  render() {
    const { navs, lovesVideos, collectVideos, navId } = this.state
    const showVideos = navId ? collectVideos : lovesVideos

    return (
      <section className="person-center">
        <Nav navs={navs} toRouter="/person/love" changeNav={this.changeNav.bind(this)} />
        <VideoList videoList={lovesVideos} title="" />
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.userId
  }
}

export default connect(
  mapStateToProps
)(Person)