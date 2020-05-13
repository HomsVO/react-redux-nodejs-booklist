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


export const fetchBooks = () => async dispatch => {
    dispatch(setBooksLoading(true));
    await axios.get('/api/books')
        .then(res => dispatch(setBooks(res.data)))
        .catch(err => console.log(err))

    dispatch(setBooksLoading(false));
}