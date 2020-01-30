import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import routes from './routes';

const App = () => (
  <Router>
    <main className="main">
      <Link to="/test">Test </Link>
      <ErrorBoundary>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={() => <route.component />}
            />
          ))}
        </Switch>
      </ErrorBoundary>
    </main>
    <Footer />
  </Router>
);

export default App;
