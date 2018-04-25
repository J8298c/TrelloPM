import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Splashpage from './components/splashpage/Splashpage';
import Taskpage from './components/tasks/Taskpage';
import Menubar from './components/shared/Menubar';

const RouterComponent = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Splashpage} />
      <Route path="/:id/taskhome" component={Taskpage} />
    </div>
  </BrowserRouter>
);

export default RouterComponent;
