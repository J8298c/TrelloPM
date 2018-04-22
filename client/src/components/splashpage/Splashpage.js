import React, { Component } from "react";
import { Grid, Form, Container, Image } from "semantic-ui-react";
import AuthForm from "./AuthForm";

class Splashpage extends Component {
  state = {};

  onAcctSignUp() {
    if (
      this.state.signUpPassword &&
      this.state.signUpPassword === this.state.passwordConfirm
    ) {
      const { signUpEmail, signUpPassword } = this.state;
      fetch("/register", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ email: signUpEmail, password: signUpPassword })
      })
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            //dispatch fetch a user and push user to welcome screen
          }
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        message: "Confirmation password doesnt match password provided"
      });
    }
    console.log(this.state);
  }

  onAcctLogin() {
    console.log(this.state);
  }

  render() {
    return (
      <Grid style={{ height: "100%" }}>
        <Grid.Row className="splash-top" />
        <Grid.Row className="splash-header">
          <Grid.Column>
            <h1 className="app-title">AppTitle</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="splash-body">
          <Grid.Column width={12}>
            <div className="splash-img-container">
              <Image fluid src={require("../../assests/landpageimg.png")} />
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

export default Splashpage;