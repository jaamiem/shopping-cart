import React, { Component } from 'react';
import axios from 'axios';

import StoreCard from '../components/storeCard.jsx';

class Home extends Component {
  state = { 
    items: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ items: res.data }) );
  }

  render() { 
    return ( 
      <React.Fragment>
        <h1>Honey, I'm home</h1>
        {this.state.items.map( item =>
          <StoreCard 
            key={item.id}
            item={item} /> )}
      </React.Fragment>
    );
  }
}

export default Home;