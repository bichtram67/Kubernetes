import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
import { act } from "react-dom/test-utils";

const initialState ={
    list: [],
    loading: false,

}

export const getTodoList = createAsyncThunk('todo/getList', async(data, thunkAPI)=>{
    try {
        const res = await axios.get('https://6374aac208104a9c5f857f08.mockapi.io/api/v1/todos')
        console.log(res.data)
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error when fetching todo list')
    }
})

export const addTodo = createAsyncThunk('todo/addTodo', async(data, thunkAPI)=>{
    try {
        const res = await axios.post('https://6374aac208104a9c5f857f08.mockapi.io/api/v1/todos',
        {
            content : data.content,
            completed : false,

        }
        )
        thunkAPI.dispatch(getTodoList());
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error when adding new todo')
    }
})

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async(data, thunkAPI)=>{
    try {
        const res = await axios.delete(`https://6374aac208104a9c5f857f08.mockapi.io/api/v1/todos/${data}`)
        message.success('deleted successfully!')
        thunkAPI.dispatch(getTodoList());
        return res.data;
    } catch (error) {
        message.error('can not detete!')
        return thunkAPI.rejectWithValue('Error when delete todo')
    }
})

export const updateTodo = createAsyncThunk('todo/updateTodo', async(data, thunkAPI)=>{
    try {
        const res = await axios.put(`https://6374aac208104a9c5f857f08.mockapi.io/api/v1/todos/${data.id}`,
        {
            completed : data.completed,
        }
        )
        message.success('updated successfully!')
        thunkAPI.dispatch(getTodoList());
        return res.data;
    } catch (error) {
        message.error('can not update!')
        return thunkAPI.rejectWithValue('Error when update todo')
    }
})


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: {
        [getTodoList.pending] : (state,action) => {
            state.loading = true
        },

        [getTodoList.fulfilled] : (state, action) => {
            state.list = action.payload;
            state.loading = false;


        },
        [getTodoList.rejected] : (state, action) => {
            state.list=action.payload;
            state.loading=false
        }
    }
})



export const {} = todoSlice.actions;
export default todoSlice.reducer;