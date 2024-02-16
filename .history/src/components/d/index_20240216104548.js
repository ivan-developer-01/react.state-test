import { Component } from 'react';

import E from '../e';
import F from '../f';

class D extends Component {
	constructor(props) {
		super(props);
		this.state = { said: 'NOTHING, YET.' };
	}
	render() {
		return (
			<>
				<b>Hello, special D</b> <br/>
				<E state={this.state} /> | <F setState={this.setState} />
			</>
		);
	}
}

export default D;