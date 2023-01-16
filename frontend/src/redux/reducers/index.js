import {combineReducers} from 'redux';
import postsReducer from './postsReducer'
import postsIdReducer from './postIdReducer'

const rootReducer= combineReducers({
    postsReducer: postsReducer,
    postsIdReducer: postsIdReducer,
})

export default rootReducer; 