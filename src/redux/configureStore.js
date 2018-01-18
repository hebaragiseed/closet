import { createStore, combineReducers, applyMiddleware } from 'redux';
//리덕스 스토어로 우리가 원할때 액션을 보내줌
import thunk from 'redux-thunk';
import users from 'redux/modules/users';

const middlewares = [thunk];
//process의 전체 정보를 가짐
const env = process.env.NODE_ENV;

if (env === 'development') {
  const {logger} = require('redux-logger');
  middlewares.push(logger);
}

const reducer = combineReducers({
  users
});

let store = initialState => createStore(reducer, applyMiddleware(...middlewares));

export default store();