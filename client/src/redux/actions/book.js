import axios from 'axios';

export const setBooks = (books) => {
    return {
        type: "SET_BOOKS",
        payload:books
    }
}
export const completeBook = ( {completed, _id}) => {
    return {
        type: "COMPLETE_BOOK",
        payload:{
            completed,
            _id
        }
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
export const completeBookRequest = data => dispatch => {
    axios.post('/api/book/complete', data)
        .then(res => {
            dispatch(setBooks(res.data))
            dispatch(completeBook(data))
            
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