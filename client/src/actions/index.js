import axios from 'axios';
import { FETCH_USER, FETCH_CHAT } from './types';

export const fetchUser = () => async dispatch => {    
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchChat = msg => async dispatch => {    
    const res = await axios.get('/api/fetch_chat', {
        param: {
            'msg': msg
        }
    });    
    dispatch({type: FETCH_CHAT, payload: res.data});
};