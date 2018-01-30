import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Auth from 'components/Auth';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Feed from 'components/Feed';
import PrivateCloset from 'components/PrivateCloset';

const App = (props) => [
  props.isLoggedIn ? <Navigation key={1} {...props} /> : null ,
  props.isLoggedIn ? <PrivateRoutes key={2} {...props} /> : <PublicRoutes key={2} />,
  // 리액트는 array를 리턴 할때마다  key로 숫자를 필요
  <Footer key={3} />  
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route exact path={`/${props.name}`} component={PrivateCloset} />
  </Switch>
);

const PublicRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/forgot" render={() => "password"} />
  </Switch>
); 

export default App;
