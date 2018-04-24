import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Splashpage from './components/splashpage/Splashpage';
import Taskpage from './components/tasks/Taskpage';

const RouterComponent = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Splashpage} />
      <Route path="/:id/taskhome" component={Taskpage} />
    </div>
  </BrowserRouter>
);

export default RouterComponent;
