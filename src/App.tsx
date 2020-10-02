import React from 'react';
import Home from './pages/Home';
import './styles/main.css';
import { Router, RouteComponentProps } from '@reach/router';
import Callback from './pages/Callback';

function App() {
  return (
    <Router>
      <RouterPage path="/" pageComponent={<Home />} />
      <RouterPage path="/callback" pageComponent={<Callback />} />
    </Router>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default App;
