import { configureStore } from "@reduxjs/toolkit";
import rootreduser from "./rootReduser";

const store =configureStore({
    reducer:rootreduser
})


export default store;