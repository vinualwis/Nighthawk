/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import { SIGN_IN } from '../../constants/routes';
import {auth} from '../../services/firebase';

const WithAuthorisation = (Component, condition) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      auth.onAuthStateChanged((authUser) => {
        if(!condition(authUser)){
          this.props.history.push(SIGN_IN);
        }
      })
    }

    render() {
      return (
        <Component {...this.props}/>
      )
    }
  }
}

const withAuthorisation = compose(
  withRouter,
  WithAuthorisation
)

export default withAuthorisation;