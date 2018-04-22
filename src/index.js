import React from 'react'
import ReactDOM from 'react-dom'
import styled, {keyframes} from 'styled-components'
import isMobile from 'is-mobile'

import EmailSignup from './EmailSignup'
import Bubbles from './Bubbles'

const spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`

const pulse = keyframes`
  0% {transform: translateX(0) translateY(0);}
  20% {transform: translateX(-3px) translateY(4px);}
  40% {transform: translateX(3px) translateY(-2px);}
  50% {transform: translateX(0px) translateY(3px);}
  70% {transform: translateX(-5px) translateY(0);}
  80% {transform: translateX(-2px) translateY(3px);}
  90% {transform: translateX(-1px) translateY(5px);}
  100% {transform: translateX(0) translateY(0);}
`

const Container = styled.div`
  min-height: 100vh;
  font-weight: bold;
  background: linear-gradient(to right, orange,   green, blue);
  color: black;
  font-family: Helvetica;
  line-height: 28px;
  font-size: 16px;
  position: relative;
`

const Content = styled.div`
  margin: 20px;
  color: white;
  text-align: left;
  padding: 15px;
  @media (min-width: 500px) {
    padding: 30px;
  }
  z-index: ${() => isMobile() ? 1 : 0};
`

const Title = styled.h1`
  margin: 30px 0 0;
  opacity: 0.3;
  color: black;
`
const Links = styled.div`
  font-weight: bold;
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  flex-shrink: 1;
  display: inline-block;
  margin-right: 15px;
  &:hover {
    animation: ${spin} 0.5s linear infinite;
  }
  span {
    font-size: 10px;
  }
`

const ScaleLink = Link.extend`
  transition: all 0.2s ease-in-out;
  &:hover {
    animation: none;
    transform: scale(1.3);
  }
`

const LinkTitle = styled.span`
  margin-right: 10px;
  opacity: 0.5;
  display: inline-block;
`

const Logo = styled.img`
  width: 150px;
  @media (min-width: 500px) {
    width: 250px;
  }
`

const UpcomingLink = Link.extend`
  animation: ${pulse} 1s linear infinite;
`

const App = () =>
  <Container>
    <Content>
      <Logo src='dist/logo.png' />
      <Title>BUBBLE MAIL</Title>
      <EmailSignup />
      <Title>PARTIES</Title>
      <Links>
        <LinkTitle>2018</LinkTitle>
        <UpcomingLink href='https://www.facebook.com/events/178381789371767/'>JUN</UpcomingLink>
        <Link href='https://www.facebook.com/events/178381789371767/'>FEB</Link>
        <Link href='https://www.facebook.com/events/493753987662434/'>MAR</Link>
      </Links>
      <Links>
        <LinkTitle>2017</LinkTitle>
        <Link href='https://www.facebook.com/events/178381789371767/'>SEP</Link>
        <Link href='https://www.facebook.com/events/493753987662434/'>NOV</Link>
      </Links>
      <Title>RADIO</Title>
      <Links>
        <LinkTitle>2018</LinkTitle>
        <Link href='https://www.mixcloud.com/balamii/bubble-chamber-jan-2018/'>JAN</Link>
        <Link href='https://www.mixcloud.com/balamii/bubble-chamber-feb-2018/'>FEB</Link>
        <Link href='https://www.mixcloud.com/balamii/bubble-chamber-march-2018/'>MAR</Link>
        <Link href='https://www.mixcloud.com/balamii/bubble-chamber-april-2018/'>APR</Link>
      </Links>
      <Links>
        <LinkTitle>2017</LinkTitle>
        <Link href='https://www.mixcloud.com/balamii/bubble-chamber-dec-2017/'>DEC</Link>
        <Link href='https://www.mixcloud.com/balamii/bubble-chamber-oct-2017/'>OCT</Link>
      </Links>
      <Title>DATES</Title>
      <Links>
        <LinkTitle>13.05.18</LinkTitle>
        <ScaleLink href='https://www.residentadvisor.net/events/1085790'>JADED</ScaleLink><br/>
        <LinkTitle>08.06.18</LinkTitle>
        <ScaleLink href='http://www.meadowsinthemountains.com/'>MEADOWS IN THE MOUNTAINS</ScaleLink><br/>
        <LinkTitle>30.06.18</LinkTitle>
        <ScaleLink href='https://www.the-tower.co.uk/'>THE TOWER</ScaleLink><br/>
      </Links>
      <br />
      <Links>
      <ScaleLink href='mailto:bookings@bubblechamber.club'>info@bubblechamber.club</ScaleLink>
      </Links>
    </Content>
    <Bubbles />
  </Container>

ReactDOM.render(<App />, document.getElementById('app'))
