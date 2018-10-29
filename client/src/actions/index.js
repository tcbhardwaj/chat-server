import axios from 'axios';
import { FETCH_USER, FETCH_CHAT } from './types';

export const fetchUser = () => async dispatch => {    
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchChat = msg => async dispatch => {    
    const res = await axios.get('https://chatskin.herokuapp.com/?txt=A:%20'+msg+'&rspAmt=1');    
    console.log('chat response:', res.data);
    dispatch({type: FETCH_CHAT, payload: res.data});
};