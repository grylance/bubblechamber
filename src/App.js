import React from 'react'
import styled, {keyframes} from 'styled-components'
import isMobile from 'is-mobile'

import EmailSignup from './EmailSignup'
import Bubbles from './Bubbles'
import Sphere from './Sphere'

const hasWindow = typeof window !== 'undefined'

const spin = keyframes`
  0% {transform:rotate(0deg);}
  80% {transform:rotate(0deg);}
  100% {transform:rotate(360deg);}
`

const pulse = keyframes`
  0% {transform: translateX(0) translateY(0) scale(1, 1.5);}
  20% {transform: translateX(-3px) translateY(4px) scale(1, 1.7);}
  40% {transform: translateX(3px) translateY(-2px) scale(1, 1.9);}
  50% {transform: translateX(0px) translateY(3px) scale(1, 1.5);}
  70% {transform: translateX(-5px) translateY(0) scale(1, 1.9);}
  80% {transform: translateX(-2px) translateY(3px) scale(1, 1.6);}
  90% {transform: translateX(-1px) translateY(5px) scale(1, 2);}
  100% {transform: translateX(0) translateY(0) scale(1, 1.5);}
`

const shake = keyframes`
  0% {transform: rotate(0deg);}
  40% {transform: rotate(-1deg);}
  80% {transform: rotate(1deg);}
  100% {transform: rotate(0deg);}
`

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, orange, blue);
  background: #F07D02;
  font-family: Helvetica;
  position: relative;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
`

const Content = styled.div`
  color: white;
  text-align: left;
  padding: 35px 30px;
  position: relative;
  @media (min-width: 700px) {
    padding: 60px;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`

const Title = styled.h1`
  margin: 40px 0 10px;
  font-family: 'Univox';

  font-size: 18px;
  line-height: 30px;
  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 16px;
  }
`

const Links = styled.div`
  font-family: Plank;
  font-weight: normal;
  letter-spacing: 1px;

  line-height: 30px;
  font-size: 24px;
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 20px;
  }
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  display: inline-block;
  margin-right: 15px;
  &:hover {
    animation: ${pulse} 0.5s linear infinite;
  }
`

const Email = Link.extend`
  margin-top: 40px;
`

const LinkTitle = styled.span`
  margin-top: 10px;
  opacity: 0.5;
  display: block;
`

const Logo = styled.img`
  width: 250px;
  cursor: zoom-in;
  &:hover {
    animation: ${shake} 0.1s linear infinite;
  }
  @media (max-width: 500px) {
    width: 150px;
    margin-top: 15px;
  }
`

const UpcomingLink = Link.extend`
  animation: ${spin} 1.5s linear infinite;
`

const StartClicker = styled.div`
  position: fixed;
  cursor: zoom-in;
  background: #F07D02;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pulse} 0.5s linear infinite;
  font-family: Univox;
  color: white;
  z-index: 2;
  @media (min-width: 700px) {
    font-size: 30px;
  }
`

var docTitle = hasWindow ? document.title + ' '  : ''

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      toggled: true,
      started: false,
    }

    if (hasWindow) {
      this.drone = new Audio('/drone.mp3')
      this.drone.volume = 0.2
      this.bleep = new Audio('/bleep.mp3')
      this.bleep.volume = 0
      this.gong = new Audio('/gong.mp3')
      this.gong.volume = 0.7

      this.docTitle = document.title + ' '
      this.flashTitle()
    }
  }

  flashTitle = () => {
    this.docTitle = this.docTitle.substring(1) + this.docTitle.substring(0,1)
    document.title = this.docTitle
    setTimeout(this.flashTitle, 50)
  }


  start = () => {
    this.setState({started: true})

    this.gong.play()

    this.drone.play()
    this.drone.addEventListener('ended', () => this.drone.play())
    this.bleep.play()
    this.bleep.addEventListener('ended', () => this.bleep.play())
  }

  toggle = () => {
    const nextToggle = !this.state.toggled
    this.setState({toggled: nextToggle})

    if (nextToggle) {
      this.drone.volume = 0.3
      this.bleep.volume = 0
    } else {
      this.bleep.volume = 0.3
      this.drone.volume = 0
    }
  }

  render () {
    const showFun = (this.state.started && hasWindow)
    const showEnter = !this.state.started

    return (
      <Container style={{filter: this.state.toggled ? '' : 'invert(100%)'}}>
        <Content>
          <Logo src='logo.png' onClick={this.toggle} />
          <Title>EMAIL</Title>
          <EmailSignup />
          <Title>PARTIES</Title>
          <Links>
            <Link target='_blank' href='https://www.facebook.com/events/178381789371767/'>001</Link>
            <Link target='_blank' href='https://www.facebook.com/events/493753987662434/'>002</Link>
            <Link target='_blank' href='https://www.facebook.com/events/2266322840060534/'>003</Link>
            <Link target='_blank' href='https://www.facebook.com/events/217436759008807/'>004</Link>
            <Link target='_blank' href='https://www.facebook.com/events/1757292387718758/'>005</Link>
          </Links>
          <Title>RADIO</Title>
          <Links>
            <LinkTitle>2018</LinkTitle>
            <Link target='_blank' href='https://www.mixcloud.com/balamii/bubble-chamber-jan-2018/'>JAN</Link>
            <Link target='_blank' href='https://www.mixcloud.com/balamii/bubble-chamber-feb-2018/'>FEB</Link>
            <Link target='_blank' href='https://www.mixcloud.com/balamii/bubble-chamber-march-2018/'>MAR</Link>
            <Link target='_blank' href='https://www.mixcloud.com/balamii/bubble-chamber-april-2018/'>APR</Link>
            <Link target='_blank' href='https://soundcloud.com/balamii/bubble-chamber-with-96-back-may-2018/'>MAY</Link>
            <Link target='_blank' href='https://www.mixcloud.com/balamii/bubble-chamber-june-2018/'>JUN</Link>
            <Link target='_blank' href='https://www.mixcloud.com/balamii/bubble-chamber-august-2018/'>AUG</Link>
          </Links>
          <Links>
            <LinkTitle>2017</LinkTitle>
            <Link target='_blank' href='https://www.mixcloud.com/balamii/bubble-chamber-dec-2017/'>DEC</Link>
            <Link target='_blank' href='https://www.mixcloud.com/balamii/bubble-chamber-oct-2017/'>OCT</Link>
          </Links>
          <Title>DATES</Title>
          <Links>
            <LinkTitle>13.05.18</LinkTitle>
            <Link target='_blank' href='https://www.residentadvisor.net/events/1085790'>JADED</Link><br />
            <LinkTitle>08.06.18</LinkTitle>
            <Link target='_blank' href='http://www.meadowsinthemountains.com/'>MEADOWS IN THE MOUNTAINS</Link><br />
            <LinkTitle>30.06.18</LinkTitle>
            <Link target='_blank' href='https://www.the-tower.co.uk/'>THE TOWER</Link><br />
            <LinkTitle>14.07.18</LinkTitle>
            <Link target='_blank' href='https://brainchildfestival.co.uk/'>BRAINCHILD</Link><br />
            <Email target='_blank' href='mailto:hello@bubblechamber.club'>hello@bubblechamber.club</Email>
          </Links>
        </Content>
        {showFun && <Bubbles />}
        {showFun && !isMobile() && <Sphere toggled={this.state.toggled} toggle={this.toggle} />}
        {showEnter && <StartClicker onClick={this.start}>ENTER</StartClicker>}
      </Container>
    )
  }
}
