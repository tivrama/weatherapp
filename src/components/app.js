import React, { Component } from 'react';

import Search from '../containers/search';
import List from '../containers/listItems';

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    );
  }
}
