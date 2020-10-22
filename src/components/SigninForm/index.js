import React from 'react';
import TextInput from '../Common/FormControls/TextInput';
import LoginAction from '../Login/LoginAction';
import { auth, database} from '../../services/firebase';
import './index.css';
import { withRouter } from 'react-router-dom';
import LoginError from '../Login/LoginError';

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    }
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
    auth.signInWithEmailAndPassword(email, password).then((authUser) => {
      database.ref(`users/${authUser.user.uid}`).set({
        isActive: true
      });
    }).catch((error) => {
      this.setState({error})
    });
  }

  render() {
    const { password, email, error } = this.state;
    const isDisabled = password === '' || email === '' || error;
    return (
      <div className='form-container'>
        { 
          error && <LoginError error={error.code}/>
        }
        <form id="signup-form" onSubmit={this.onSubmit}>
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
            By signing in, I accept the Nighthawk Terms of Service and acknowledge the Privacy Policy.
          </p>
          <LoginAction type="submit" disabled={isDisabled}> Sign In </LoginAction>
        </form>
      </div>
    )
  }
}

export default withRouter(SignInForm);