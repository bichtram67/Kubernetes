import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./redux/todoSlice";

const store = configureStore({
    reducer:{
        todos:todoReducer,
    }
})

export default store;