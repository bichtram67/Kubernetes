import { configureStore } from "@reduxjs/toolkit";
import tod

const store = configureStore({
    reducer:{
        todos:todoReducer,
    }
})

export default store;