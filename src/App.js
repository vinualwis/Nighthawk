import React, {useContext, Suspense, lazy} from 'react';
import './App.css';
import withAuthentication from './components/Authentication'
import AuthUserContext from './components/Context/authentication';
const AuthenticatedApp = lazy(() => import('./components/AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./components/UnauthenticatedApp'));

const App = () => {
  const authUser = useContext(AuthUserContext);
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        {
          authUser ? <AuthenticatedApp/> : <UnauthenticatedApp/>
        }
      </Suspense>
    </div>
  );
}

export default withAuthentication(App);
