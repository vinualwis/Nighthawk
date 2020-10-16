import React from 'react';
import TextInput from '../Common/FormControls/TextInput';
import LoginAction from '../Login/LoginAction';
import { auth } from '../../services/firebase';
import './index.css';
import {withRouter} from 'react-router-dom'
import {BOARD} from '../../constants/routes'

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
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
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      // eslint-disable-next-line react/prop-types
      this.props.history.push(BOARD);
    });
  }

  render() {
    const { username, password, email } = this.state;
    return (
        <form id="signup-form" onSubmit={this.onSubmit}>
          <TextInput 
            id="username" 
            inputLabel="Username" 
            value={username} 
            onChange={this.onUsernameChange}
          />
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
            By signing up, I accept the Nighthawk Terms of Service and acknowledge the Privacy Policy.
          </p>
          <LoginAction type="submit"> Sign up </LoginAction>
        </form>
    )
  }
}

export default withRouter(SignUpForm);