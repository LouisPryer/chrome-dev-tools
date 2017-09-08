import React, { Component } from 'react'
import { Heading, Text } from 'spectacle'

export default class Appraisal extends Component {
  constructor () {
    super()
    this.state = {
      currentAppraisal: 'Awesome'
    }
    this.handleClick = this.handleClick.bind(this)
    this.appraislas = [
      'Amazing!',
      'Awesome!',
      'Excellent!',
      'Fantastic!'
    ]
  }

  handleClick () {
    this.setState({
      currentAppraisal: this.appraislas[Math.floor(Math.random() * this.appraislas.length)]
    })
  }

  render () {
    return (
      <div>
        <Heading padding='15px' size={5}>
          <Text>
            This is {this.state.currentAppraisal}
          </Text>
        </Heading>
        <button className='appraisalButton' onClick={this.handleClick}>Even works for Javascript!</button>
      </div>
    )
  }
}
