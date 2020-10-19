import React from 'react';
import './index.css';
import LoginContainer from '../../components/Login/LoginContainer';
import LoginHeader from '../../components/Login/LoginHeader';
import LoginFooter from '../../components/Login/LoginFooter';
import SigninForm from '../../components/SigninForm';
import {Link} from 'react-router-dom';
import {SIGN_UP} from '../../constants/routes';

const Signin = () => {
  return (
    <div className="signin">
      <LoginContainer>
        <LoginHeader>
          <p>Sign in with an existing account</p>
        </LoginHeader>
        <SigninForm/>
        <LoginFooter>
          <Link to={SIGN_UP} className='sign-up-link'>Sign up for an account</Link>
        </LoginFooter>
      </LoginContainer>
    </div>
  )
}

export default Signin;