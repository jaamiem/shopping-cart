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
			<div className='item-div'>
				<div className='item-buttons'>
					<i className='pi pi-times'/>
				</div>

				<div className='item-img'>
					<img src='http://placekitten.com/50/50' alt='Cat.' />
				</div>

				<div className='item-desc'>
					<span>{item.title}</span>
				</div>

				<div className='item-quantity'>
					<button 
						value='1' 
						className='btn btn-secondary btn-sm m-1 pi pi-plus'
						onClick={(e) => this.props.onValueChange(e, this.props.item)} 
					/>
					{item.quantity}
					<button 
						value='-1' 
						className='btn btn-secondary btn-sm m-1 pi pi-minus'
						onClick={(e) => this.props.onValueChange(e, this.props.item)} 
					/>
				</div>

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
