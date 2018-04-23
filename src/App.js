import React from 'react'
import styled, {keyframes} from 'styled-components'
import isMobile from 'is-mobile'

import EmailSignup from './EmailSignup'
import Bubbles from './Bubbles'

const spin = keyframes`
  from {transform:rotate(0deg) scale(1, 1.5);}
  to {transform:rotate(360deg) scale(1, 1.5);}
`

const pulse = keyframes`
  0% {transform: translateX(0) translateY(0) scale(1, 1.5);}
  20% {transform: translateX(-3px) translateY(4px) scale(1, 1.5);}
  40% {transform: translateX(3px) translateY(-2px) scale(1, 1.5);}
  50% {transform: translateX(0px) translateY(3px) scale(1, 1.5);}
  70% {transform: translateX(-5px) translateY(0) scale(1, 1.5);}
  80% {transform: translateX(-2px) translateY(3px) scale(1, 1.5);}
  90% {transform: translateX(-1px) translateY(5px) scale(1, 1.5);}
  100% {transform: translateX(0) translateY(0) scale(1, 1.5);}
`

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, orange,   green, blue);
  color: black;
  font-family: Helvetica;
  line-height: 28px;
  font-size: 16px;
  position: relative;
  font-weight: bold;
`

const Content = styled.div`
  color: white;
  text-align: left;
  padding: 35px 30px;
  z-index: ${() => isMobile() ? 1 : 0};
  @media (min-width: 700px) {
    padding: 60px;
  }
`

const Title = styled.h1`
  @media (max-width: 700px) {
    transform: scale(1, 1.2) rotate(1deg);
    margin: 30px 0 0;
    opacity: 0.5;
    color: black;    
  }
  @media (min-width: 700px) {
    margin: 40px 0 10px;
    font-family: 'Univox';
    font-size: 24px;
  }
`

const Links = styled.div`
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  flex-shrink: 1;
  display: inline-block;
  margin-right: 15px;
  transform: scale(1, 1.1);
  &:hover {
    animation: ${pulse} 0.5s linear infinite;
  }
  span {
    font-size: 10px;
  }
`

const RegularLink = Link.extend`
  transition: all 0.2s ease-in-out;
  &:hover {
    animation: ${pulse} 0.5s linear infinite;
  }
`

const LinkTitle = styled.span`
  margin-right: 10px;
  opacity: 0.5;
  display: inline-block;
  transform: scale(1, 1.1) rotate(1deg);
`

const Logo = styled.img`
  width: 150px;
  @media (min-width: 500px) {
    width: 250px;
  }
`

const UpcomingLink = Link.extend`
  animation: ${pulse} 2s linear infinite;
`

export default () =>
  <Container>
    <Content>
      <Logo src='logo.png' />
      <Title>MAIL</Title>
      <EmailSignup />
      <Title>PARTIES</Title>
      <Links>
        <LinkTitle>2018</LinkTitle>
        <Link href='https://www.facebook.com/events/2266322840060534/'>FEB</Link>
        <Link href='https://www.facebook.com/events/217436759008807/'>MAR</Link>
        <UpcomingLink href='https://www.facebook.com/events/178381789371767/'>JUN</UpcomingLink>
      </Links>
      <Links>
        <LinkTitle>2017</LinkTitle>
        <Link href='https://www.facebook.com/events/493753987662434/'>NOV</Link>
        <Link href='https://www.facebook.com/events/178381789371767/'>SEP</Link>
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
        <RegularLink href='https://www.residentadvisor.net/events/1085790'>JADED</RegularLink><br/>
        <LinkTitle>08.06.18</LinkTitle>
        <RegularLink href='http://www.meadowsinthemountains.com/'>MEADOWS IN THE MOUNTAINS</RegularLink><br/>
        <LinkTitle>30.06.18</LinkTitle>
        <RegularLink href='https://www.the-tower.co.uk/'>THE TOWER</RegularLink><br/>
      </Links>
      <br />
      <Links>
      <RegularLink href='mailto:bookings@bubblechamber.club'>info@bubblechamber.club</RegularLink>
      </Links>
    </Content>
    {typeof window !== 'undefined' &&    
      <Bubbles />
    }
  </Container>
