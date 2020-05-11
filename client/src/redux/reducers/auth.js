const inititalState = {
  isAuth:localStorage.getItem('isAuth')
}

export default function isAuth(state = inititalState, action) {

  switch (action.type) {
    case 'LOG_IN':
        return true
        break;
    case 'LOG_OUT':
        return false
        break;
    default:
        return state;
    break;
}
}
