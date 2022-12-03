import React from 'react'
import './sass/reset.scss'
import './sass/style.scss'
import 'antd/dist/antd.min.css'
import styled from 'styled-components'

import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

const Wrapper = styled.div`
    height : 100vh;
    display : flex;
    align-items: center;
    justify-content: center;
  `;

  const Container = styled.div`
    width : 500px;
    box-shadow : 0px 0px 4px -2px;
    padding: 20px;
  `;

  const Spacer = styled.div `
    height : 20px;
  `
const App = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wrapper>
      <Container>
        <TodoForm/>
        <Spacer/>
        <TodoList/>
      </Container>
    </Wrapper>
  )
}

export default App
