import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Cart from '../Cart';
import Layout from '../Layout';
// import SignIn from '../SignIn';
import Product from '../Product';
import Products from '../Products';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          {/* <Route path="/sign-in">
            <SignIn />
          </Route> */}
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/">
            <Products />
          </Route>
          <Route path="*">
            <Products />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
