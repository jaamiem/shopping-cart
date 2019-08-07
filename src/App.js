import React, { useState } from 'react';
import NavBar from './components/navbar.jsx';
import Counters from './components/counters.jsx';
import './App.css';

function App() {
	const [counterList, changeList] = useState([
		{ id: 1, value: 0,},
		{ id: 2, value: 1,},
		{ id: 3, value: 2,},
		{ id: 4, value: 3,},
	]);

	const handleDelete = (counterId) => {
		const c = counterList.filter(c => c.id !== counterId );
		changeList( c );
	}
	
	const handleReset = () => {
		const counters = counterList.map(counter => {
			counter.value = 0;
			return counter;
		});
		changeList( counters );
	}
	
	const handleValueChange = (e, counter) => {
		const valueChange = parseInt(e.currentTarget.value);
		if(counter.value + valueChange < 0) return;
	
		const counters = [...counterList];
		const index = counters.indexOf(counter);
		counters[index] = {...counter};
		counters[index].value += valueChange;
		changeList( counters );
	}

	return (
		<React.Fragment>
			<NavBar />
			<main className="container">
				<Counters 
					counters={counterList}
					onReset={handleReset} 
					onValueChange={handleValueChange}
					onDelete={handleDelete} 
				/>
			</main>
		</React.Fragment>
	);
}

export default App;