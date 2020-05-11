import { combineReducers } from 'redux';
import isAuth from './auth';
import news from './news';

export default combineReducers({
  isAuth,news
});
