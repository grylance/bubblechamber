import React from 'react'
import ReactDOM from 'react-dom'
import styled, {keyframes} from 'styled-components'

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
  display: flex;
  height: 100vh;
  font-weight: bold;
  background: linear-gradient(to right, orange,   green, blue);
  color: black;
  font-family: Helvetica;
  line-height: 40px;
  font-size: 25px;
  align-items: çenter;
`

const Content = styled.div`
  margin: 20px;
  color: white;
  padding: 0 30px;
  border: 10px solid white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
`

const Title = styled.h1`
  margin: 40px 0 5px;
  // border-bottom: 10px solid white;
`
const Links = styled.div`
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  flex-shrink: 1;
  margin: 0 15px;
  display: inline-block;
  margin-right: 15px;
  &:hover {
    animation: ${spin} 0.5s linear infinite;
  }
  span {
    font-size: 10px;
  }
`
const LinkTitle = styled.span`
  margin-right: 10px;
  opacity: 0.5;
  display: inline-block
`

const Logo = styled.img`
  margin: 0 auto;
  width: 300px;
`

const UpcomingLink = Link.extend`
  animation: ${pulse} 1s linear infinite;
`

const App = () =>
  <Container>
    <Content>
      <Logo src='dist/logo.png' />
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
      <br />
      <Link href='mailto:bookings@bubblechamber.club'>info@bubblechamber.club</Link>
    </Content>
    <Bubbles />
  </Container>

ReactDOM.render(<App />, document.getElementById('app'))
