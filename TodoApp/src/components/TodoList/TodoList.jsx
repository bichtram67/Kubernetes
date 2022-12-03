import { Divider, List, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'
import { getTodoList } from '../todoSlice'

const TodoList = () => {
    const data = ['Shopping', 'Having Dinner']
    const todoList = useSelector((state) => state.todos.list);
    const loading = useSelector((state) => state.todos.loading);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTodoList())
    },[])
  return (
    
    <List
    loading={loading}
    header={<div>Todo list</div>}
    bordered
    dataSource={todoList}
    renderItem={(item) => <TodoItem key={item.id} item={item}/>}
    />
    
  )
}



export default TodoList
