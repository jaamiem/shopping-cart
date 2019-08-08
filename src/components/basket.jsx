import React, { Component } from 'react';
import Item from './item.jsx'

class Basket extends Component {
	render() {
		return (
		<div>
			<button 
				onClick={this.props.onReset}
				className="btn btn-primary btn-sm m-2"
			>Reset</button>
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
