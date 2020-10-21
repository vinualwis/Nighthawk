import React, { Suspense, lazy, useContext } from 'react';
import AppHeader from '../AppHeader';
import {Switch,Route} from 'react-router-dom';
import {BOARD, HOME} from '../../constants/routes';
import {auth} from '../../services/firebase';
import AuthUserContext from '../Context/authentication'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const Board = lazy(() => import('../../pages/Board'));
const Home = lazy(() => import('../../pages/Home'));

const AuthenticatedApp = () => {
  const logOutHandler = () => {
    auth.signOut().then(() => {
      alert('Successful Signout');
    });
  }
  const authUser = useContext(AuthUserContext);
  return (
    <React.Fragment>
      <AppHeader logOut={logOutHandler} authUser={authUser}/>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={BOARD} component={Board}/>
            <Route exact path={HOME} component={Home}/>
            <Redirect to={HOME}/>
          </Switch>
        </Suspense>
    </React.Fragment>
  )
}

export default AuthenticatedApp;