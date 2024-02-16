import { Component } from 'react';
import B from './components/b';
import C from './components/c';
import D from './components/d';

class App extends Component {
	render() {
		return (
			<div>
				<B/> <br/>
				<C/> <br/>
				<D/>
			</div>
		);
	}
}

export default App;
