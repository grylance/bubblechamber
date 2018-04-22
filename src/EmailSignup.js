import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const Input = styled.input`
  width: 180px;
  padding: 10px 15px;
  border: 0;
  outline: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  background: transparent;
  border: 2px solid white;
  color: white;
  max-width: 100%;
`

export default class EmailSignup extends React.Component {
  componentDidMount () {
    ReactDOM.findDOMNode(this.textInput).focus()
  }

  ref = input => {
    this.textInput = input
  }

  render () {
    return (
      <form action='https://club.us18.list-manage.com/subscribe/post' method='POST'>
        <input type='hidden' name='u' value='a86fd108dec61846745479d81' />
        <input type='hidden' name='id' value='660140cbda' />
        <Input
          type='email'
          name='MERGE0'
          id='MERGE0'
          ref={this.ref}
        />
      </form>
    )
  }
}
