import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Pages from './pages/Pages';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<Header />
				<Pages />
			</Provider>
		</Router>
	);
};

export default App;
