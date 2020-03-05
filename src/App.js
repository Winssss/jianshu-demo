import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { GlobalIconStyle } from './statics/iconfont/iconfont.js'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './commen/header';
import Deatail from './pages/detail';
import SignIn from './pages/signIn';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<GlobalStyle />
				<GlobalIconStyle />
					<BrowserRouter>
						<Header/>
						<Route path="/signin" exact component={SignIn}/>
						<Route path="/detail/:id" exact component={Deatail}/>
						<Route path="/" exact component={Home}/>
					</BrowserRouter>
			</Provider>
		);
	}
}

export default App;