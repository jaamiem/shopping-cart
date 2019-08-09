import React, { Component } from 'react';

import StoreCard from '../components/storeCard.jsx';

const cardViewStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}

class Home extends Component {
  render() { 
    return ( 
      <div style={cardViewStyles}>
        {this.props.itemList.map( item =>
          <StoreCard 
            key={item.id}
            item={item}
            onAddToBasket={this.props.onAddToBasket} /> )}
      </div>
    );
  }
}

export default Home;