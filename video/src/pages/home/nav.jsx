import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeId: 0
    }
  }

  changeNav(index) {
    this.setState({
      activeId: index
    })

    if (this.props.changeNav) {
      this.props.changeNav(index)
    }
  }

  render() {
    const { activeId } = this.state
    const { toRouter } = this.props

    return (
      <section className="home-nav">
        {
          this.props.navs.map((nav, index) =>
            <Link to={toRouter} key={index}>
              <div className={activeId === index ? 'home-nav-item home-nav-active' : 'home-nav-item'}
                onClick={this.changeNav.bind(this, index)}>
                {nav}
              </div>
            </Link>
          )
        }
      </section>
    )
  }
}