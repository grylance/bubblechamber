import React from 'react'
import styled, {keyframes} from 'styled-components'
import isMobile from 'is-mobile'

import Bubbles from './Bubbles'
import Sphere from './Sphere'

const hasWindow = typeof window !== 'undefined'

const spin = keyframes`
  0% {transform:rotate(0deg);}
  40% {transform:rotate(0deg);}
  50% {transform:rotate(-1deg);}
  60% {transform:rotate(1deg);}
  70% {transform:rotate(0);}
  100% {transform:rotate(0deg);}
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
  background: #ffea03;
  font-family: Helvetica;
  position: relative;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
`

const Content = styled.div`
  color: #000;
  background: #ffea03;
  text-align: left;
  padding: 35px 30px;
  position: relative;
  min-height: 100vh;
  @media (min-width: 700px) {
    padding: 60px;
  }
  @media (min-width: 1000px) {
    padding-right: 50%;
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
  font-weight: normal;
  letter-spacing: 1px;

  line-height: 24px;
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 20px;
  }
`

const Link = styled.a`
  color: #000;
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
  background: #ffea03;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Univox;
  color: #000;
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
      <Container>
        <Content style={{filter: this.state.toggled ? '' : 'invert(100%)'}}>
          <Logo src='logo.png' onClick={this.toggle} />
          <Title>PARTIES</Title>
          <Links>
            <LinkTitle>UPCOMING</LinkTitle>
            <UpcomingLink target='_blank' href='https://ra.co/events/1478495'>DJ DOUGAL & DJ MAYHEM</UpcomingLink>
            <LinkTitle>PREVIOUS</LinkTitle>
            <Link target='_blank' href='https://www.facebook.com/events/178381789371767/'>001</Link>
            <Link target='_blank' href='https://www.facebook.com/events/493753987662434/'>002</Link>
            <Link target='_blank' href='https://www.facebook.com/events/2266322840060534/'>003</Link>
            <Link target='_blank' href='https://www.facebook.com/events/217436759008807/'>004</Link>
            <Link target='_blank' href='https://www.facebook.com/events/1757292387718758/'>005</Link>
            <Link target='_blank' href='https://www.facebook.com/events/460063541152706/'>006</Link>
            <Link target='_blank' href='https://www.facebook.com/events/1915132838598417/'>007</Link>
            <Link target='_blank' href='https://www.facebook.com/events/455542531884867/'>008</Link>
            <Link target='_blank' href='https://www.facebook.com/events/2457933797622156/'>009</Link>
            <Link target='_blank' href='https://www.facebook.com/events/735829553563438/'>NYE 2019</Link>
            <Link target='_blank' href='https://ra.co/events/1439282'>011</Link>
            <Link target='_blank' href='https://ra.co/events/1454692'>012</Link>
          </Links>
          <Title>RADIO</Title>
          <Links>
            <Link target='_blank' href='https://www.balamii.com/host/bubble-chamber'>BALAMII</Link>
            <Link target='_blank' href='https://www.nts.live/find?q=bubble%20chamber&type=all'>NTS</Link>
          </Links>
          <Links>
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
