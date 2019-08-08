import React, { Component } from 'react';
import axios from 'axios';

import StoreCard from '../components/storeCard.jsx';

const cardViewStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}

class Home extends Component {
  state = { 
    items: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=17')
      .then(res => this.setState({ items: res.data }) );
  }

  render() { 
    return ( 
      <div style={cardViewStyles}>
        {this.state.items.map( item =>
          <StoreCard 
            key={item.id}
            item={item}
            onAddToBasket={this.props.handleAddToBasket} /> )}
      </div>
    );
  }
}

export default Home;