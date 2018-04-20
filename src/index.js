import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Bubbles from './Bubbles'

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-weight: bold;
  background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
  color: black;
  font-family: Helvetica;
  line-height: 22px;
  font-size: 20px;
`

const Content = styled.div`
  transform: scaleX(1.2) skewY(-5deg);
  margin-left: 100px;
  margin-top: 50px;
`

const Title = styled.h1`
  margin: 30px 0 10px;
`
const Link = styled.a`
  color: black;
  text-decoration: none;
  margin-right: 5px;
  display: block;
  &:hover {
    padding-left: 5px;
  }
`

const App = () =>
  <Container>
    <Content>
      <Title>BUBBLE CHAMBER</Title>
      <Title>PARTIES</Title>
      <Link href='https://www.facebook.com/events/178381789371767/'>001</Link>
      <Link href='https://www.facebook.com/events/493753987662434/'>002</Link>
      <Link href='https://www.facebook.com/events/2266322840060534/'>003</Link>
      <Link href='https://www.facebook.com/events/217436759008807/'>004</Link>
      <Title>RADIO</Title>
      <Link href='https://www.facebook.com/events/217436759008807/'>APR 18</Link>
      <Link href='https://www.facebook.com/events/217436759008807/'>MAR 18</Link>
      <Link href='https://www.facebook.com/events/217436759008807/'>FEB 18</Link>
      <Link href='https://www.facebook.com/events/217436759008807/'>JAN 18</Link>
      <Link href='https://www.facebook.com/events/217436759008807/'>DEC 17</Link>
      <Link href='https://www.facebook.com/events/217436759008807/'>NOV 17</Link>
      <Link href='https://www.facebook.com/events/217436759008807/'>OCT 17</Link>
      <Title>BOOKINGS</Title>
      <Link href='mailto:bookings@bubblechamber.club'>bookings@bubblechamber.club</Link>
    </Content>
    <Bubbles />
  </Container>

ReactDOM.render(<App />, document.getElementById('app'))
