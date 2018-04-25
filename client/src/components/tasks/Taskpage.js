import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TaskBoardHeader from './TaskBoardHeader';
import TaskBody from './TaskBody';
import Menubar from '../shared/Menubar';
class Taskpage extends Component {
  render() {
    return (
      <div>
        <Menubar />
        <Container>
          <TaskBoardHeader />
          <TaskBody />
        </Container>
      </div>
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
