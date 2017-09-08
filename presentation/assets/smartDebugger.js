import React, { Component } from 'react'
import { Heading, Text } from 'spectacle'

export default class smartDebugger extends Component {
  constructor () {
    super()
    this.handleSyncClick = this.handleSyncClick.bind(this)
    this.handleAwaitClick = this.handleAwaitClick.bind(this)
    this.handlePromiseClick = this.handlePromiseClick.bind(this)
    this.state = {
      debuggerVal: 'so much more!'
    }
  }

  sleep (time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  handleSyncClick () {
    const newState = 'synchronous code!'
    this.setState({
      debuggerVal: newState
    })
  }

  async handleAwaitClick () {
    await this.sleep(1000)
    const newState = 'asynchronous code!'
    await this.setState({
      debuggerVal: newState
    })
    await this.sleep(5000)
  }

  handlePromiseClick () {
    return Promise.resolve()
      .then(_ => this.sleep(500))
      .then(_ => 'promises too')
      .then(newState => this.setState({
        debuggerVal: newState
      }))
      .then(_ => this.sleep(1000))
  }

  render () {
    return (
      <div>
        <Heading padding='10px' size={5}>
          More than just dropping a debugger in the code
        </Heading>
        <Text>
          We can use debugging for {this.state.debuggerVal}
        </Text>
        <div className='smartDebuggerButtonContainer'>
          <button onClick={this.handleSyncClick}>Synchronous Code</button>
          <button onClick={this.handleAwaitClick}>Asynchronouse Code</button>
          <button onClick={this.handlePromiseClick}>Promises Code</button>
        </div>
      </div>
    )
  }
}
