import { SELECT_POST } from '../types';

const initialState = {
    selectedPostId: null
}

export default function postsIdReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_POST:
            return {selectedPostId: action.payload}
        default:
            return state;
    }
}