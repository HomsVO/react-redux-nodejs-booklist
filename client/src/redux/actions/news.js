import axios from 'axios';

export const setNews = (news) => {
    return {
        type: "SET_NEWS",
        payload:news
    }
}
export const setNewsLoading = (loading) => {
    return {
        type: "SET_NEWS_LOADING",
        payload:loading
    }
}


export const fetchNews = () => async dispatch => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ff38cedd9fd84e048e80bd5b1d4610db';
    dispatch(setNewsLoading(true));
    await axios.get(url)
        .then(res => dispatch(setNews(res.data.articles)))
        .catch(err => console.log(err))

    dispatch(setNewsLoading(false));
}