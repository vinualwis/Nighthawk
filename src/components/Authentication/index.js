/* eslint-disable react/display-name */
import React from 'react';
import {auth} from  '../../services/firebase';
import AuthUserContext from '../Context/authentication'

const withAuthentication = Component => {

  return class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        authUser: null
      }
    }
    componentDidMount() {
      this.listener = auth.onAuthStateChanged((currentUser) => {
        this.setState({
          authUser: currentUser
        });
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>  
          <Component {...this.props}/>
        </AuthUserContext.Provider>
      )
    }
  }
}

export default withAuthentication;