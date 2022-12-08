import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, List, Popconfirm, Switch, Tag, Tooltip, Typography } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../redux/todoSlice'

const TodoItem = ({item}) => {
    const dispatch = useDispatch();
  return (
    <List.Item actions={[
        <Tooltip title={item.completed ? 'mask as uncompletes' : 'mash as done'}>
            <Switch
                defaultChecked={item.completed ? true : false}
                onChange={(value)=>{
                    dispatch(updateTodo({
                        id: item.id,
                        completed: value
                    }))
                }}
                unCheckedChildren={<CloseOutlined/>}
                checkedChildren={<CheckOutlined/>}
            />
        </Tooltip>,
        <Popconfirm 
            title='Are you sure you wanna delete todo?'
            onConfirm={()=>{
                dispatch(deleteTodo(item.id))
            }}
        >
            <Button danger>x</Button>
        </Popconfirm>
    ]}>
        <div>
            <Tag color={item.completed ? 'red' : 'cyan'}>{item.content}</Tag>
        </div>
    </List.Item>
  )
}

export default TodoItem
