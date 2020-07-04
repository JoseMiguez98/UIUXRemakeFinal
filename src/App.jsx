import React from 'react';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './routes/Home';
import GameScreen from './routes/GameScreen';
import Footer from './components/Footer';
import 'simplebar/dist/simplebar.min.css';

const App = () => (
  <Router>
    <Header/>
      <Container fluid>
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/game"><GameScreen/></Route>
          <Redirect from="/" to="/home"/>
        </Switch>
      </Container>
    <Footer/>
  </Router>
);

export default App;
