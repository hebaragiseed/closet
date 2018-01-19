import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import Footer from 'components/Footer'

const App = (props) => [
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  // 리액트는 array를 리턴 할때마다  key로 숫자를 필요
  <Footer key={3} />  
];

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => "feed" } />
    <Route exact path="/explore" render={() => "explore" } />
  </Switch>
);

const PublicRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => "login"} />
    <Route exact path="/forgot" render={() => "password"} />
  </Switch>
); 

export default App;
