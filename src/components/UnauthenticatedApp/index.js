import React, {Suspense, lazy, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { 
  LANDING_PAGE, 
  SIGN_IN, 
  SIGN_UP,
 } from '../../constants/routes';
const LandingPage = lazy(() => import('../../pages/Landing'));
const Signin = lazy(() => import('../../pages/Signin'));
const Signup = lazy(() => import('../../pages/Signup'));

const UnauthenticatedApp = () => {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={LANDING_PAGE} exact component={LandingPage}/>
          <Route path={SIGN_IN} exact component={Signin}/>
          <Route path={SIGN_UP} exact component={Signup}/>
          <Redirect to={SIGN_IN}/>
        </Switch>
      </Suspense>
    </Fragment>
  )
}

export default UnauthenticatedApp;