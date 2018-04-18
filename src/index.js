import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Content = styled.div`
  background: #333;
  padding: 30px;
`

const Title = styled.h1`
  margin: 30px 0 10px;
`
const Link = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 5px;
  display: block;
  font-size: 30px;
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
      <Title>DATES</Title>
      <Title>BOOKINGS</Title>
    </Content>
  </Container>

ReactDOM.render(<App />, document.getElementById('app'))
