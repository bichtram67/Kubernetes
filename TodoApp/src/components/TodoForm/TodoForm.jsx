import React from 'react'
import { Button, Form, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';



const TodoForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm()
    const onFinish = (values) => {
        // console.log('Success:', values);
        dispatch(addTodo(values));
        form.resetFields()
    };
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
        
    return (
        <Form
            name="todo-form"
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="inline"
            form={form}
        >
            <Form.Item
            name="content"
            style={{flex : 1}}
            rules={[
                {
                required: true,
                message: 'Please input content!',
                },
            ]}
            >
        
        
            <Input placeholder='Enter todo...'/>
            
            
            </Form.Item>
            <Button icon={<PlusOutlined/>} type="primary" htmlType="submit">
                Add Todo
            </Button>
        </Form>
    )
}

export default TodoForm
