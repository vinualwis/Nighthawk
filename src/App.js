import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import Board from './pages/Board';
import LandingPage from './pages/Landing/Landing';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { LANDING_PAGE, BOARD, SIGN_IN, SIGN_UP } from './constants/routes';
import withAuthentication from './components/Authentication'
import AuthUserContext from './components/Context/authentication';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = AuthUserContext;

  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path={BOARD} component={Board}/>
            <Route exact path={LANDING_PAGE} component={LandingPage}/>
            <Route path={SIGN_UP} component={Signup}/>
            <Route path={SIGN_IN} component={Signin} exact/>
          </Switch>
        </div>
    );
  }
}

export default withAuthentication(App);
