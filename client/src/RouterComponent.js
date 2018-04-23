import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Splashpage from './components/splashpage/Splashpage';
import TaskHome from './components/Welcome/TaskHome';

const RouterComponent = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Splashpage} />
      <Route path="/:id/taskhome" component={TaskHome} />
    </div>
  </BrowserRouter>
);

export default RouterComponent;
