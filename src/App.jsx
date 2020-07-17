import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import 'simplebar/dist/simplebar.min.css';
import Container from 'react-bootstrap/Container';
import Layout from './components/Layout';
import Home from './routes/Home';
import GameScreen from './routes/GameScreen';
import Checkout from './routes/Checkout';
import Login from './routes/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const App = (props) => (
  <HashRouter basename="/">
    <Switch>
      <Route path="/home">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/game">
        <Layout>
          <GameScreen />
        </Layout>
      </Route>
      <Route path="/checkout">
        <Container className="container-fluid--no-padding" fluid>
          <Checkout />
        </Container>
      </Route>
      <Route path="/login">
        <Container className="container-fluid--no-padding" fluid>
          <Header />
            <Login />
          <Footer isLogin={ true }/>
        </Container>
      </Route>
      <Redirect from="/" to="/home"/>
    </Switch>
  </HashRouter>
);

export default App;
