import React, { Component } from 'react';
import { Container, Form, Button, ButtonGroup } from 'semantic-ui-react';

class AuthForm extends Component {
  state = {
    showLogin: false
  };

  render(props) {
    return (
      <Container className="splash-auth">
        <Form>
          {!this.state.showLogin ? (
            <span>
              <Form.Input
                placeholder="Enter Email"
                onChange={this.props.onEmailSignUp}
              />
              <Form.Input
                placeholder="Enter Password"
                onChange={this.props.onPasswordSignUp}
              />
              <Form.Input
                placeholder="Confirm Password"
                onChange={this.props.onPasswordConfrim}
              />
              <Button
                onClick={this.props.onSignUp}
                color="blue"
                content="Signup"
                className="splash-btn"
              />
            </span>
          ) : (
            <span>
              <Form.Input
                placeholder="Enter email"
                onChange={this.props.onEmailLogin}
              />
              <Form.Input
                placeholder="Confirm Password"
                onChange={this.props.onPasswordLogin}
              />
              <Button
                className="splash-btn"
                onClick={this.props.onLogin}
                color="blue"
                content="Login"
              />
            </span>
          )}
        </Form>
        <Button.Group className="splash-btn">
          <Button
            color="teal"
            onClick={() => this.setState({ showLogin: true })}
          >
            Login
          </Button>
          <Button.Or />
          <Button
            color="green"
            onClick={() => this.setState({ showLogin: false })}
          >
            Signup
          </Button>
        </Button.Group>
      </Container>
    );
  }
}

export default AuthForm;
