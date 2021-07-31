import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CategoryPage from "./components/categories/CategoryPage";
import ProductPage from "./components/products/ProductPage";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Categories/:name" component={CategoryPage} />
          <Route exact path="/Products/:name" component={ProductPage} />
          <Route exact path="/Checkout" component={Checkout} />
        </Switch>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
