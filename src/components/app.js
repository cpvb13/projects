import React, { Component } from 'react';

import Questions from './questions';
import Result from './result';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="site-title">
          <a>Caitlin Presents</a>
        </h1>
        <h2 className="site-title-dark">
          <a href="/"> Quiz Time! Who should you should hire next?</a>
        </h2>
        <Questions />
        <Result />
        <Footer />
      </div>
    );
  }
}
