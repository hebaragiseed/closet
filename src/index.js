import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from 'redux/configureStore';
import App from 'components/App';

//store.dispatch({type: "BULL"})

//리액트 앱과 리듀서 연결
//console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
  {/*라우터에게 history오브젝트주기, 그래서 라우터의 히스토리오브젝트와 나의 미들웨어 히스토리오브젝트와 같은 오브젝트 같게됨*/}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
   document.getElementById('root')
  );
