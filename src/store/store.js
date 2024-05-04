import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/rootRedux";

const store=configureStore({
    reducer:rootReducer
});

export default store