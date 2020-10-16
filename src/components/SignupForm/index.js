import React from 'react';
import TextInput from '../Common/FormControls/TextInput';
import LoginAction from '../Login/LoginAction';
import { auth } from '../../services/firebase';
import './index.css';
import {withRouter} from 'react-router-dom';
import {BOARD} from '../../constants/routes';
import LoginError from '../Login/LoginError';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      error: null
    }
  }

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
      error: null
    });
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
      error: null
    });
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      error: null
    });
  }

  onSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      // eslint-disable-next-line react/prop-types
      this.props.history.push(BOARD);
    }).catch((error) => {
      this.setState({error});
    });
  }

  render() {
    const { username, password, email, error } = this.state;
    const isDisabled = password === '' || email === '' || username === '' || error;
    return (
      <div className="form-container">
         { 
          error && <LoginError error={error.code}/>
        }
        <form id="signup-form" onSubmit={this.onSubmit}>
          <TextInput 
            id="username" 
            inputLabel="Username" 
            value={username} 
            onChange={this.onUsernameChange}
            required
          />
          <TextInput 
            id="email" 
            inputLabel="Email" 
            value={email} 
            onChange={this.onEmailChange}
            type="email"
            required
          />
          <TextInput 
            id="password" 
            inputLabel="Password" 
            value={password} 
            onChange={this.onPasswordChange}
            type="password"
            required
          />
          <p className="terms-statement">
            By signing up, I accept the Nighthawk Terms of Service and acknowledge the Privacy Policy.
          </p>
          <LoginAction type="submit" disabled={isDisabled}> Sign up </LoginAction>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUpForm);