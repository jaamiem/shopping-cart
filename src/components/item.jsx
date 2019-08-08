import React, { Component } from 'react';



class Item extends Component {

	// onClick = (e) => {
	// 	const {value} = this.state;
	// 	let incr = parseInt(e.currentTarget.value);
	// 	if(value + incr >= 0) {
	// 		this.setState({ value: value + incr  });
	// 	}
	// }

	render() {
		const item = this.props.item;

		return (
			<div>
				<h3>{item.title}</h3>
			</div>


			// <div style={{ display: 'flex', flexWrap: 'wrap'}}>
			// 	<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
			// 	<button 
			// 		value="1" 
			// 		className="btn btn-secondary btn-sm m-1" 
			// 		onClick={(e) => this.props.onValueChange(e, this.props.item)} 
			// 	>
			// 		+
			// 	</button>
			// 	<button 
			// 		value="-1" 
			// 		className="btn btn-secondary btn-sm m-1" 
			// 		onClick={(e) => this.props.onValueChange(e, this.props.item)} 
			// 	>
			// 		-
			// 	</button>
			// 	<button 
			// 		onClick={() => this.props.onDelete(this.props.item.id)} 
			// 		className="btn btn-danger btn-sm m-2"
			// 	>
			// 	Delete
			// 	</button>
			// </div>
		);
	}

	formatCount() {
		const { value } = this.props.item;
		return value === 0 ? <h1>Zero</h1> : <h1>{value}</h1>;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.props.item.value === 0) ? "warning" : "primary";
		return classes;
	}
}

export default Item;
