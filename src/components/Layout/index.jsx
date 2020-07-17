import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Container fluid>
      { children }
    </Container>
    <Footer />
  </Fragment>
);

export default Layout;