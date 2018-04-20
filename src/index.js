import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Bubbles from './Bubbles'

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-weight: bold;
  background: linear-gradient(to right, orange,   green, blue);
  color: black;
  font-family: Helvetica;
  line-height: 30px;
  font-size: 20px;
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
  margin: 30px 0 10px;
`
const Links = styled.div`
  text-align: center;
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  flex-shrink: 1;
  transition: all 0.5s ease-in-out;
  margin: 0 5px;
  display: inline-block;
  &:hover {
    transform: rotate(1440deg) scale(5);
  }
`

const App = () =>
  <Container>
    <Content>
      <Title>BUBBLE CHAMBER</Title>
      <Title>PARTIES</Title>
      <Links>
        <Link href='https://www.facebook.com/events/178381789371767/'>001</Link>
        <Link href='https://www.facebook.com/events/493753987662434/'>002</Link>
        <Link href='https://www.facebook.com/events/2266322840060534/'>003</Link>
        <Link href='https://www.facebook.com/events/217436759008807/'>004</Link>
      </Links>
      <Title>RADIO</Title>
      <Links>
        <Link href='https://www.facebook.com/events/217436759008807/'>APR 18</Link>
        <Link href='https://www.facebook.com/events/217436759008807/'>MAR 18</Link>
        <Link href='https://www.facebook.com/events/217436759008807/'>FEB 18</Link>
        <Link href='https://www.facebook.com/events/217436759008807/'>JAN 18</Link>
        <Link href='https://www.facebook.com/events/217436759008807/'>DEC 17</Link>
        <Link href='https://www.facebook.com/events/217436759008807/'>NOV 17</Link>
        <Link href='https://www.facebook.com/events/217436759008807/'>OCT 17</Link>
      </Links>
      <Title>BOOKINGS</Title>
      <Link href='mailto:bookings@bubblechamber.club'>bookings@bubblechamber.club</Link>
    </Content>
    <Bubbles />
  </Container>

ReactDOM.render(<App />, document.getElementById('app'))
