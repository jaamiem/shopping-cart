import React, { Component } from 'react';
import Item from './item.jsx'

class Basket extends Component {
	render() {
		return (
		<div>
			<button 
				onClick={this.props.onClear}
				className="btn btn-danger btn-sm m-2"
			>Empty Basket</button>
			{ this.props.basket.map(item => 
				<Item
					key={item.id}
					item={item} 
					onDelete={this.props.onDelete} 
					onValueChange={this.props.onValueChange}
				/>) 
			}
		</div>
		)
	}
}

export default Basket;
