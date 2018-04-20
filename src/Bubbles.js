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
  border: 1px solid #ccc;
  cursor: pointer;
  background: linear-gradient(to bottom, #3dff32 1%,#a189ff 100%);
  opacity: 0.3;
  animation: ${float} ${Math.floor(Math.random() * 200)}s linear;
`

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
        onMouseOver={this.onMouseOver}
      /> : null
  }
}

export default class Bubbles extends React.Component {
  constructor () {
    super()
    this.state = {bubbles: []}
    // document.onmousemove = ({clientX, clientY}) => this.makeBubble(clientX, clientY)

    setInterval(() => this.makeBubble(), 200)
  }

  makeBubble () {
    const top = Math.floor(Math.random() * window.innerHeight)
    const left = Math.floor(Math.random() * window.innerWidth)

    this.setState({
      bubbles: [...this.state.bubbles, {top, left}]
    })
  }

  render () {
    return this.state.bubbles.map((bubble, index) =>
      <BubbleComponent
        top={bubble.top}
        left={bubble.left}
        key={index}
      />
    )
  }
}
