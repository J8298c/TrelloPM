import React from 'react';
import { Card } from 'semantic-ui-react';

const TaskCard = props => (
  <Card>
    <Card.Content>{props.task}</Card.Content>
  </Card>
);

export default TaskCard;
