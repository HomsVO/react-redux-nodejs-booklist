const inititalState = {
    news:[],
    loadings:{
        news:false
    }
}
  
export default function isAuth(state = inititalState, action) {
    switch (action.type) {
        case "SET_NEWS":
            return {
                ...state,
                news:[...action.payload],
              };
            break;
        case "SET_NEWS_LOADING":
            state.loadings.news = action.payload;
            return {
                ...state,
              };
            break;
        default:
            return state;
        break;
    }
}
  