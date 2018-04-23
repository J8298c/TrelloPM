import React, { Component } from 'react';
import { connect } from 'react-redux';

class TaskHome extends Component {
  render() {
    return <div>taskhome</div>;
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
