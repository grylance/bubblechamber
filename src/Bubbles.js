import React from 'react'
import styled, {keyframes} from 'styled-components'

const float = keyframes`
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(-200vh);
  }
`

const flash = keyframes`
  0% {opacity: 1}
  50% {opacity: 0}
  100% {opacity: 1}
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
  border: 2px solid orange;
  animation: ${float} ${props => props.speed}s linear infinite;
`

const Score = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  font-family: Univox;
  font-weight: normal;
  letter-spacing: 1px;
  color: white;
  font-size: 50px;
`

const HighScore = styled.div`
  position: fixed;
  top: 70px;
  right: 20px;
  font-family: Plank;
  font-weight: normal;
  letter-spacing: 1px;
  color: white;
  font-size: 20px;
  animation: ${flash} 2s linear infinite;
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
    this.props.didPop()
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
    this.state = {
      bubbles: [],
      highScore: window.localStorage.getItem('highScore'),
      currentScore: 0,
    }
    setInterval(() => this.makeBubble(), 300)
  }

  didPop = () => {
    const nextScore = this.state.currentScore + 1
    this.setState({currentScore: nextScore})

    if (nextScore > this.state.highScore) {
      window.localStorage.setItem('highScore', nextScore)
    }
  }

  makeBubble = () =>
      this.setState({
      bubbles: [
        ...this.state.bubbles,
        {
          top: Math.floor(Math.random() * window.innerHeight),
          left: Math.floor(Math.random() * window.innerWidth) - 50,
          size: Math.floor(Math.random() * 50) + 50,
          speed: Math.floor(Math.random() * 20) + 10,
        },
      ],
    })

  render () {
    const isHighScore = this.state.currentScore > this.state.highScore

    return (
      <div>
        <Score>{this.state.currentScore}</Score>
        {isHighScore && <HighScore>NEW HIGH SCORE</HighScore>}
        {this.state.bubbles.map((bubble, index) =>
          <BubbleComponent
            {...bubble}
            didPop={this.didPop}
            key={index}
          />)}
      </div>
    )
  }
}
