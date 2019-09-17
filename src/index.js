import React from "react"
import ReactDOM from "react-dom"
import channel from './redux/asyncReducer'
import {combineReducers, createStore} from "redux"
import {Provider} from "react-redux"
import AppContainer from "./component/AppContainer"

let  reducer = combineReducers({
    channel
})

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("root")
);
