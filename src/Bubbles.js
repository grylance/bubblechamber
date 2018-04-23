import React from 'react'
import ReactDOM from 'react-dom'
import styled, {keyframes} from 'styled-components'
import isMobile from 'is-mobile'

const float = keyframes`
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(-200vh);
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
  animation: ${float} ${props => props.speed}s linear infinite;
`

class BubbleComponent extends React.Component {
  constructor (props) {
    super(props)
    this.pop = new Audio('/pop.mp3')
    this.pop.volume = 0.2
    this.state = {
      hidden: false,
      topOffset: 0,
    }
    setTimeout(this.remove, props.speed * 1000)
  }

  hide = () => {
    this.pop.play()
    this.remove()
  }

  remove = () => this.setState({hidden: true})

  render () {
    return !this.state.hidden ?
      <Bubble
        top={this.props.top + this.state.topOffset}
        left={this.props.left}
        speed={this.props.speed}
        onMouseOver={this.hide}
      /> : null
  }
}

export default class Bubbles extends React.Component {
  constructor () {
    super()
    this.state = {bubbles: []}
    setInterval(() => this.makeBubble(), 400)
  }

  makeBubble () {
    const {bubbles} = this.state

    const top = Math.floor(Math.random() * window.innerHeight)
    const left = Math.floor(Math.random() * window.innerWidth) - 50

    this.setState({
      bubbles: [
        ...this.state.bubbles,
        {top, left, speed: 10 + Math.floor(Math.random() * 50)}
      ]
    })
  }

  render () {
    return (
      <div>
        {this.state.bubbles.map((bubble, index) =>
          <BubbleComponent
            top={bubble.top}
            left={bubble.left}
            speed={bubble.speed}
            key={index}
          />
        )}
      </div>
    )
  }
}
