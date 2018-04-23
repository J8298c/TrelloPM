import React, { Component } from 'react';
import { Grid, Form, Container, Image } from 'semantic-ui-react';
import AuthForm from './AuthForm';
import { connect } from 'react-redux';
import { logUserIn, registerUser } from '../services/actions/auth.actions';
import { Redirect } from 'react-router-dom';
import * as _ from 'lodash';

class Splashpage extends Component {
  state = {};

  onAcctSignUp() {
    if (
      this.state.signUpPassword &&
      this.state.signUpPassword === this.state.passwordConfirm
    ) {
      const { signUpEmail, signUpPassword } = this.state;
      this.props.registerUser(signUpEmail, signUpPassword);
    } else {
      this.setState({
        message: 'Confirmation password doesnt match password provided'
      });
    }
  }

  onAcctLogin() {
    const { email, password } = this.state;
    this.props.logUserIn(email, password);
  }

  render() {
    if (this.props.user && !_.isEmpty(this.props.user)) {
      return <Redirect to={`${this.props.user._id}/taskhome`} />;
    }
    return (
      <Grid style={{ height: '100%' }}>
        <Grid.Row className="splash-top" />
        <Grid.Row className="splash-header">
          <Grid.Column>
            <h1 className="app-title">AppTitle</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="splash-body">
          <Grid.Column width={12}>
            <div className="splash-img-container">
              <Image fluid src={require('../../assests/landpageimg.png')} />
            </div>
          </Grid.Column>
          <Grid.Column width={3} reversed>
            <AuthForm
              onEmailSignUp={evt =>
                this.setState({ signUpEmail: evt.target.value })
              }
              onPasswordSignUp={evt =>
                this.setState({ signUpPassword: evt.target.value })
              }
              onPasswordConfrim={evt =>
                this.setState({ passwordConfirm: evt.target.value })
              }
              onSignUp={() => this.onAcctSignUp()}
              onEmailLogin={evt => this.setState({ email: evt.target.value })}
              onPasswordLogin={evt =>
                this.setState({ password: evt.target.value })
              }
              onLogin={() => this.onAcctLogin()}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ userState }) {
  const { user } = userState;
  return {
    user
  };
}
export default connect(mapStateToProps, { logUserIn, registerUser })(
  Splashpage
);
