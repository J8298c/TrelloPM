import React from 'react';
import { Grid } from 'semantic-ui-react';

const TaskBoardHeader = () => (
  <Grid celled>
    <Grid.Row columns={4}>
      <Grid.Column className="task-header">Task</Grid.Column>
      <Grid.Column className="task-header">Assignee</Grid.Column>
      <Grid.Column className="task-header">Status</Grid.Column>
      <Grid.Column className="task-header">Due On</Grid.Column>
    </Grid.Row>
  </Grid>
);

export default TaskBoardHeader;
