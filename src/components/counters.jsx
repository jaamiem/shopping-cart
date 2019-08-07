import React, { Component } from 'react';
import Counter from './counter.jsx'

class Counters extends Component {
	render() {
		return (
		<div>
			<button 
				onClick={this.props.onReset}
				className="btn btn-primary btn-sm m-2"
			>Reset</button>
			{ this.props.counters.map(counter => 
				<Counter
					key={counter.id}
					counter={counter} 
					onDelete={this.props.onDelete} 
					onValueChange={this.props.onValueChange}
				/>) 
			}
		</div>
		)
	}
}

export default Counters;
