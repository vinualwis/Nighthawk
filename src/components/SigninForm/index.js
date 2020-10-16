import React from 'react';
import TextInput from '../Common/FormControls/TextInput';
import LoginAction from '../Login/LoginAction';
import { auth } from '../../services/firebase';
import './index.css';
import { withRouter } from 'react-router-dom'
import { BOARD } from '../../constants/routes'

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((user) => {
      // eslint-disable-next-line react/prop-types
      this.props.history.push(BOARD);
    });
  }

  render() {
    const { password, email } = this.state;
    return (
        <form id="signup-form" onSubmit={this.onSubmit}>
          <TextInput 
            id="email" 
            inputLabel="Email" 
            value={email} 
            onChange={this.onEmailChange}
          />
          <TextInput 
            id="password" 
            inputLabel="Password" 
            value={password} 
            onChange={this.onPasswordChange}
          />
          <p className="terms-statement">
            By signing in, I accept the Nighthawk Terms of Service and acknowledge the Privacy Policy.
          </p>
          <LoginAction type="submit"> Sign In </LoginAction>
        </form>
    )
  }
}

export default withRouter(SignInForm);