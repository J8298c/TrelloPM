import React from 'react';
import { Grid, Form, Container } from 'semantic-ui-react';

const Splashpage = () => (
  <Grid>
    <Grid.Row className="splash-top" />
    <Grid.Row className="splash-header">
      <Grid.Column>
        <h1 className="app-title">AppTitle</h1>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row className="splash-body">
      <Grid.Column width={3} reversed>
        <Container>
          <Form>
            <Form.Input placeholder="Enter email" />
            <Form.Input placeholder="Enter Password" />
          </Form>
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default Splashpage;
