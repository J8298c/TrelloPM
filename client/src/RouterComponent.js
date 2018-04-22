import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Splashpage from './components/splashpage/Splashpage';
const RouterComponent = () => (
  <BrowserRouter>
    <Route path="/" component={Splashpage} />
  </BrowserRouter>
);

export default RouterComponent;
