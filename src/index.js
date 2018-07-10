import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Error404 from './Error404'
import './index.css'

// path '/search' needs to also start App to function properly
// App will see the /search route and open the Search component
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={App}/>
			<Route path='/search' exact component={App}/>
			<Route component={Error404}/>
		</Switch>
	</BrowserRouter>, 
	document.getElementById('root')
)


