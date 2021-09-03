import { combineReducers, createStore } from 'redux'
import pinned from './reducers/pinned'
import { result } from './reducers/result'
import { search } from './reducers/search'

const rootReducer = combineReducers({
    users: pinned,
    search: search,
    result: result,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
