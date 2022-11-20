import { compose } from "@mui/system"
import { configureStore } from "@reduxjs/toolkit"
import { toggleReducer } from "./reducer.js"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = configureStore({
    reducer: {
        toggle: toggleReducer
    }
})