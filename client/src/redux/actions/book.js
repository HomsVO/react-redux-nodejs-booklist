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
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ff38cedd9fd84e048e80bd5b1d4610db';
    dispatch(setBooksLoading(true));
    await axios.get(url)
        .then(res => dispatch(setBooks(res.data.articles)))
        .catch(err => console.log(err))

    dispatch(setBooksLoading(false));
}