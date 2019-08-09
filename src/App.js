import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'

import NavBar from './components/navbar.jsx';
import Basket from './components/basket.jsx';
import Store from './pages/store.jsx';
import NoMatch from './pages/noMatch.jsx';
import './App.css';

function App() {
	// Init states
	const [basketList, changeBasket] = useState([]);
	const [itemList, changeItemList] = useState([]);

	// Hooks version of 'componentDidMount()' - runs once on load via empty array as 2nd arg
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts?_limit=17')
			.then(res => changeItemList( res.data ));
	}, []);

	// Delete item from list
	// * TODO: Adapt to take list as parameter
	const handleDelete = (itemId) => {
		const i = basketList.filter(i => i.id !== itemId );
		changeBasket( i );
	}
	
	// Reset basket, currently sets value to 0, should remove all items
	// * TODO: Refactor to basketReset
	const handleClear = () => {
		// const basket = basketList.map(item => {
		// 	item.value = 0;
		// 	return item;
		// });
		changeBasket([]);
	}
	
	// Handles incrementing/decrementing basket items
	const handleValueChange = (e, item) => {
		const valueChange = parseInt(e.currentTarget.value);
		if(item.quantity + valueChange < 1) return;
	
		const basket = [...basketList];
		const index = basket.indexOf(item);
		basket[index] = {...item};
		basket[index].quantity += valueChange;
		changeBasket( basket );
	}

	// Add item to basketList
	// Add quantity var to item
	const handleAddToBasket = (item) => {
		const newItem = itemList.filter(i => i.id === item.id)[0];
		if(!newItem) return;

		let idx = basketList.indexOf(newItem);
		
		if(idx !== -1) {
			basketList[idx].quantity++;
		}
		else {
			newItem.quantity = 1;
			const newBasket = [...basketList, newItem];
			changeBasket( newBasket );
		}
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
									itemList={itemList}
									onAddToBasket={handleAddToBasket}
								/>
							}
						/>
						<Route
							path='/basket'
							render={(props) =>
								<Basket 
									basket={basketList}
									onClear={handleClear} 
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