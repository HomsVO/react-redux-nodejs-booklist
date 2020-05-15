const inititalState = {
    books:[],
    loadings:{
        books:false
    }
}
  
export default function book(state = inititalState, action) {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                ...state,
                books:[...action.payload],
              };
            break;
        case "SET_BOOKS_LOADING":
            state.loadings.books = action.payload;
            return {
                ...state,
              };
            break;
        case "COMPLETE_BOOK":
            const b = state.books.find((item) => item._id === action.payload._id);
            b.completed = action.payload.completed;
            return {
                ...state,
              };
            break;
        default:
            return state;
        break;
    }
}
  