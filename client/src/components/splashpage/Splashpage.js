import React, { Component } from 'react';
import { Grid, Form, Container } from 'semantic-ui-react';
import AuthForm from './AuthForm';

class Splashpage extends Component {
  state = {};

  onAcctSignUp() {
    console.log(this.state);
  }

  onAcctLogin() {
    console.log(this.state);
  }

  render() {
    return (
      <Grid>
        <Grid.Row className="splash-top" />
        <Grid.Row className="splash-header">
          <Grid.Column>
            <h1 className="app-title">AppTitle</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="splash-body">
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

export default Splashpage;
