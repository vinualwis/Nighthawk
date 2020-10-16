import React from 'react';
import './index.css';
import LoginContainer from '../../components/Login/LoginContainer';
import LoginHeader from '../../components/Login/LoginHeader';
import SignUpForm from '../../components/SignupForm';

const Signup = () => {
  return (
    <div className="signup">
      <LoginContainer>
        <LoginHeader>
          <p>Sign up for an account</p>
        </LoginHeader>
        <SignUpForm/>
      </LoginContainer>
    </div>
  );
}

export default Signup;