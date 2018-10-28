import { FETCH_CHAT } from '../actions/types'
export default function(state = null, action) {
    console.log("fetch_chat action.payload:",action.payload);
    switch(action.type) {
        case FETCH_CHAT:
            console.log("fetch chat reducer"); 
            return action.payload || "no response";
        default:
            return state;
    }
}