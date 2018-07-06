import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { connect } from 'react-redux'
import { updateUser, apiRequest } from './actions/user-actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest()
    }, 1500)
  }

  onUpdateUser(event) {
    switch (event.type) {
      case 'click':
        return this.props.onUpdateUser('Reset')
      default:
        return this.props.onUpdateUser(event.target.value)
    }
  }

  render() {
    console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={this.onUpdateUser}>Update user</div>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    )
  }
}

// Need to add props as the second argument to keep them
const mapStateToProps = (state, props) => {
  console.log('Application State:', state)
  console.log('Component Props', props)

  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`,
    passedProps: props
  }
}

// Action Creators mapped as event handlers here, and passed to props.
const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
}

// Make State and Functions Available as Props in the component
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)
