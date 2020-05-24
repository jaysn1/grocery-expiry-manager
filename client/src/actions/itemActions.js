import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';



// returns to the reducer
export const getItems = () => dispatch => {
    dispatch(itemsLoading());
    axios.get('/api/items').then(res =>
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    );
};


// returns to the reducer
export const deleteItem = (id) => dispatch => {
    axios.delete(`/api/items/${id}`).then(res => 
        dispatch({
            type:DELETE_ITEM,
            payload:id
        })
    );
};


// returns to the reducer
export const addItem = (item) => dispatch => {
    axios
        .post('/api/items', item)
        .then( res => 
            dispatch({
                type:ADD_ITEM,
                payload: res.data
            })
            )
};


export const itemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};