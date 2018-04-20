import React from 'react'
import ReactDOM from 'react-dom'
import styled, {keyframes} from 'styled-components'

const float = keyframes`
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(-500vh);
  }
`

const Bubble = styled.div`
  position: fixed;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: 100px;
  height: 100px;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  background: linear-gradient(to bottom, #3dff32 1%,#a189ff 100%);
  opacity: 0.3;
  animation: ${float} ${props => props.speed}s linear;
`

const maxBubbles = 41

class BubbleComponent extends React.Component {
  constructor () {
    super()
    this.pop = new Audio('/dist/pop.mp3')
    this.pop.volume = 0.2
    this.state = {
      hidden: false,
      topOffset: 0,
    }
  }

  onMouseOver = () => {
    this.pop.play()
    this.setState({hidden: true})
  }

  render () {
    return !this.state.hidden ?
      <Bubble
        top={this.props.top + this.state.topOffset}
        left={this.props.left}
        speed={this.props.speed}
        onMouseOver={this.onMouseOver}
      /> : null
  }
}

export default class Bubbles extends React.Component {
  constructor () {
    super()
    this.state = {bubbles: []}
    setInterval(() => this.makeBubble(), 200)
  }

  makeBubble () {
    const {bubbles} = this.state

    const top = Math.floor(Math.random() * window.innerHeight)
    const left = Math.floor(Math.random() * window.innerWidth)

    const lastFortyBubbles = bubbles.length > maxBubbles ?
      loc_array[loc_array.length - 40] : bubbles

    this.setState({
      bubbles: [
        ...lastFortyBubbles,
        {top, left, speed: 10 + Math.floor(Math.random() * 200)}
      ]
    })
  }

  render () {
    return this.state.bubbles.map((bubble, index) =>
      <BubbleComponent
        top={bubble.top}
        left={bubble.left}
        speed={bubble.speed}
        key={index}
      />
    )
  }
}
