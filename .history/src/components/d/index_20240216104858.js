import { Component } from 'react';

import E from '../e';
import F from '../f';

class D extends Component {
	constructor(props) {
		super(props);
		this.state = { said: 'NOTHING, YET.' };
	}

	onSaid = (e) => {
		this.setState({ said: e.target.value });
	}

	render() {
		return (
			<>
				<b>Hello, special D</b> <br/>
				<E state={this.state} /> | <F onSaid={this.onSaid} />
			</>
		);
	}
}

export default D;