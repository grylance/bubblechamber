import React from 'react'
import ReactDOM from 'react-dom'
import styled, {keyframes} from 'styled-components'
import Cookies from 'js-cookie'
import isMobile from 'is-mobile'

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
  border: 2px solid #F07D02;
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
  @media (max-width: 500px) {
    font-size: 20px;
  }
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
  @media (max-width: 500px) {
    font-size: 10px;
    top: 30px;
  }
`

const NewHighScore = HighScore.extend`
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

  setupRef = ref => {
    this.ref = ref
    setInterval(this.trackPosition, 200)
  }

  trackPosition = () => {
    const ele = ReactDOM.findDOMNode(this.ref)

    if (ele) {
      const top = ele.getBoundingClientRect().top
      if (top < 0 && top > -100 && !this.state.hidden) this.props.fail()
    }
  }

  render () {
    return !this.state.hidden ?
      <Bubble
        top={this.props.top + this.state.topOffset}
        left={this.props.left}
        speed={this.props.speed}
        size={this.props.size}
        onMouseOver={this.hide}
        ref={this.setupRef}
      /> : null
  }
}

export default class Bubbles extends React.Component {
  constructor () {
    super()
    this.state = {
      bubbles: [],
      highScore: parseInt(Cookies.get('highScore'), 10) || 0,
      currentScore: 0,
    }
    setInterval(() => this.makeBubble(), isMobile() ? 1500 : 300)

    this.buzzer = new Audio('/fail.mp3')
    this.buzzer.volume = 0.5
    this.win = new Audio('/win.mp3')
    this.win.volume = 0.5
  }

  didPop = () => {
    const nextScore = this.state.currentScore + 1
    this.setState({currentScore: nextScore})

    if (nextScore > this.state.highScore) {
      if (!Cookies.get('highScore')) this.win.play()
      Cookies.set('highScore', nextScore)
    }
  }

  fail = () => {
    const {currentScore, highScore} = this.state
    if (currentScore > 0) this.buzzer.play()

    this.setState({
      currentScore: 0,
      highScore: currentScore > highScore ? currentScore : highScore
    })
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
        {isHighScore ?
          <NewHighScore>NEW HIGH SCORE</NewHighScore> :
          this.state.highScore ?
            <HighScore>HIGH SCORE {this.state.highScore}</HighScore> : null
        }
        {this.state.bubbles.map((bubble, index) =>
          <BubbleComponent
            {...bubble}
            didPop={this.didPop}
            key={index}
            fail={this.fail}
          />)}
      </div>
    )
  }
}
