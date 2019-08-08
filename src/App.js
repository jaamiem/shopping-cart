import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from 'axios'

import NavBar from './components/navbar.jsx';
import Basket from './components/basket.jsx';
import Store from './pages/store.jsx';
import NoMatch from './pages/noMatch.jsx';
import './App.css';

function App() {
	const [basketList, changeList] = useState([
		{ id: 1, value: 0,},
		{ id: 2, value: 1,},
		{ id: 3, value: 2,},
		{ id: 4, value: 3,},
	]);

	const handleDelete = (itemId) => {
		const i = basketList.filter(i => i.id !== itemId );
		changeList( i );
	}
	
	const handleReset = () => {
		const basket = basketList.map(item => {
			item.value = 0;
			return item;
		});
		changeList( basket );
	}
	
	const handleValueChange = (e, item) => {
		const valueChange = parseInt(e.currentTarget.value);
		if(item.value + valueChange < 0) return;
	
		const basket = [...basketList];
		const index = basket.indexOf(item);
		basket[index] = {...item};
		basket[index].value += valueChange;
		changeList( basket );
	}

	const handleAddToBasket = () => {

  }

	return (
		<React.Fragment>
	
			<Router>
				<NavBar />
				<div className='wrapper'>
					<Switch>
						<Route
							path='/' 
							exact
							render={(props) =>
								<Store 
									onAddToBasket={handleAddToBasket}
								/>
							}
						/>
						<Route
							path='/basket'
							render={(props) =>
								<Basket 
									basket={basketList}
									onReset={handleReset} 
									onValueChange={handleValueChange}
									onDelete={handleDelete} 
								/>
							}
						/>
						<Route exact component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;