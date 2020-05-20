import axios from 'axios';

export const setBooks = (books) => {
    return {
        type: "SET_BOOKS",
        payload:books
    }
}
export const setBooksLoading = (loading) => {
    return {
        type: "SET_BOOKS_LOADING",
        payload:loading
    }
}

export const addBookRequest = data => dispatch => {
    axios.post('/api/book/add', data)
        .then(res => dispatch(setBooks(res.data)))
        .catch(err => console.log(err))
}
export const changeBookRequest = data => dispatch => {
    axios.post('/api/book/u', data)
        .then(res => dispatch(setBooks(res.data)))
        .catch(err => console.log(err))
}
export const deleteBookRequest = _id => dispatch => {
    axios.post('/api/book/d', {_id})
        .then(res => dispatch(setBooks(res.data)))
        .catch(err => console.log(err))
}
export const completeBookRequest = data => dispatch => {
    axios.post('/api/book/complete', data)
        .then(res => {
            dispatch(setBooks(res.data))         
        })
        .catch(err => console.log(err))
}

export const fetchBooks = () => async dispatch => {
    dispatch(setBooksLoading(true));
    axios.get('/api/books')
        .then(res => {
            dispatch(setBooks(res.data))
            dispatch(setBooksLoading(false));
        })
        .catch(err => {
            console.log(err)
            dispatch(setBooksLoading(false));
        })

}