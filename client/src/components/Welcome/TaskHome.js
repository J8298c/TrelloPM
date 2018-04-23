import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
class TaskHome extends Component {
  render() {
    return (
      <Container>
        <Grid celled>
          <Grid.Row columns={4}>
            <Grid.Column className="title-cell">This Month</Grid.Column>
            <Grid.Column className="title-cell">Owner</Grid.Column>
            <Grid.Column className="title-cell">Task</Grid.Column>
            <Grid.Column className="title-cell">Due on</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps({ userState }) {
  const { user } = userState;
  console.log(user);
  return {
    user
  };
}

export default connect(mapStateToProps, null)(TaskHome);
