import React, { Component } from 'react';

class Counter extends Component {
	state = {
		id: 1,
		count: 0,
		img: 'http://placekitten.com/200/300',
	}

	onClick = (e) => {
		let value = parseInt(e.currentTarget.value);
		// value = parseInt(value)
		this.setState({ count: this.state.count + value });
	}

	render() {
		let classes = {
			count: "badge m-2 badge-",
			button: "btn btn-secondary btn-sm m-1",
		}
		classes.count += (this.state.count === 0) ? "warning" : "primary";

		return (
			<React.Fragment>
				<img src={this.state.img} alt="" />
				<container> 
					<span className={classes.count}>{this.formatCount()}</span>
				</container>
				<button value="1" className={classes.button} onClick={this.onClick}>+</button>
				<button value="-1" className={classes.button} onClick={this.onClick}>-</button>
			</React.Fragment>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>;
	}
}

export default Counter;
