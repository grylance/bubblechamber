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
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  cursor: pointer;
  background: white;
  border: 5px solid orange;
  animation: ${float} ${props => props.speed}s linear infinite;
`

class BubbleComponent extends React.Component {
  constructor (props) {
    super(props)
    this.pop = new Audio('/pop.mp3')
    this.pop.volume = 0.5
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
        size={this.props.size}
        onMouseOver={this.hide}
      /> : null
  }
}

export default class Bubbles extends React.Component {
  constructor () {
    super()
    this.state = {bubbles: []}
    setInterval(() => this.makeBubble(), 500)
  }

  makeBubble () {
    const {bubbles} = this.state

    const top = Math.floor(Math.random() * window.innerHeight)
    const left = Math.floor(Math.random() * window.innerWidth) - 50

    this.setState({
      bubbles: [
        ...this.state.bubbles,
        {
          top: Math.floor(Math.random() * window.innerHeight),
          left: Math.floor(Math.random() * window.innerWidth) - 50,
          size: Math.floor(Math.random() * 50) + 50,
          speed: Math.floor(Math.random() * 30) + 10,
        },
      ]
    })
  }

  render () {
    return (
      <div>
        {this.state.bubbles.map((bubble, index) =>
          <BubbleComponent
            {...bubble}
            key={index}
          />
        )}
      </div>
    )
  }
}
