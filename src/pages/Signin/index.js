import React from 'react';
import './index.css';
import LoginContainer from '../../components/Login/LoginContainer';
import LoginHeader from '../../components/Login/LoginHeader';
import SigninForm from '../../components/SigninForm';

const Signin = () => {
  return (
    <div className="signin">
      <LoginContainer>
        <LoginHeader>
          <p>Sign in with an existing account</p>
        </LoginHeader>
        <SigninForm/>
      </LoginContainer>
    </div>
  )
}

export default Signin;