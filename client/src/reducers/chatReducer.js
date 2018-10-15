import { FETCH_CHAT } from '../actions/types'
export default function(state = null, action) {
    console.log("action.payload:",action.payload);
    switch(action.type) {
        case FETCH_CHAT: 
            return action.payload || "";
        default:
            return state;
    }
}