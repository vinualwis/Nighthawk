import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import AuthUserContext from '../Context/authentication';
import {SIGN_IN} from '../../constants/routes';

const PrivateRoute = ({Component, path}) => {
  return (
    <AuthUserContext.Consumer>
      {
        authUser => {
          console.log('🤪');
          console.log(authUser);
         return (
           <Route path={path} exact>
             {
               authUser !== null ? <Component/> : <Redirect to={SIGN_IN}/>
             }
           </Route>
         )
        }
      }
    </AuthUserContext.Consumer>
  )
}

PrivateRoute.propTypes = {
  Component: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired
}

export default PrivateRoute;