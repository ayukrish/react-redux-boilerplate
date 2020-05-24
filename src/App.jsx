import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Tabs from './components/Tabs';
import routes from './routes';

const App = () => (
  <Router>
    <main className="main">
      <ErrorBoundary>
        <Tabs />
        <section className="section">
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
        </section>
      </ErrorBoundary>
    </main>
  </Router>
);

export default App;
