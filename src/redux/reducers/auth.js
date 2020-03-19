const inititalState = localStorage.getItem('isAuth');

export default function isAuth(state = inititalState, action) {
  if (action.type === 'LOG_IN') {
    return true;
  }
  if (action.type === 'LOG_OUT') {
    return false;
  }
  return state;
}
