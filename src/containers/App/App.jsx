import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const App = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Fragment>
          <Button variant="info">
            Start
            <FontAwesomeIcon icon={faCoffee} />
          </Button>

        </Fragment>
      )}
    />
  </Switch>
);

export default App;
