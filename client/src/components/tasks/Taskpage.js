import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TaskBoardHeader from './TaskBoardHeader';

class Taskpage extends Component {
  render() {
    return (
      <Container>
        <TaskBoardHeader />
      </Container>
    );
  }
}

function mapStateToProps({ userState }) {
  const { user } = userState;

  return {
    user
  };
}
export default connect(mapStateToProps, null)(Taskpage);
