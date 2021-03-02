import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import Home from '../Home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
