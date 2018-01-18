import { createStore, combineReducers, applyMiddleware } from 'redux';
//리덕스 스토어로 우리가 원할때 액션을 보내줌
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import  createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from 'redux/modules/user';

//process의 전체 정보를 가짐
const env = process.env.NODE_ENV;

const history = createHistory();

//routerMiddleware는 history랑 싱크되야함
//history오브젝트를 미들웨어에게 주기
const middlewares = [thunk, routerMiddleware(history)];

if (env === 'development') {
  const {logger} = require('redux-logger');
  middlewares.push(logger);
}

const reducer = combineReducers({
  user,
  routing: routerReducer
});

let store;

if(env === 'development') {
  store = initialState => 
    createStore(
      reducer, 
      composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

//router는 history 오브젝트 필요함
export { history };
export default store();