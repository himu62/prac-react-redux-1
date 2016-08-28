import * as React from 'react';

interface Props {
	value: number;
	onIncrement: Function;
	onDecrement: Function;
}

export default class Counter extends React.Component<Props, {}> {
	constructor(props) {
		super(props);
		this.incrementAsync = this.incrementAsync.bind(this);
		this.incrementIfOdd = this.incrementIfOdd.bind(this);
	}

	incrementIfOdd() {
		if(this.props.value % 2 !== 0) {
			this.props.onIncrement();
		}
	}

	incrementAsync() {
		setTimeout(this.props.onIncrement, 1000);
	}

	render() {
		const {value, onIncrement, onDecrement} = this.props;
		return (
			<p>
				Clicked: {value} times
				{' '}
				<button onClick={onIncrement}>+</button>
				{' '}
				<button onClick={onDecrement}>-</button>
				{' '}
				<button onClick={this.incrementIfOdd}>
					Increment if odd
				</button>
				{' '}
				<button onClick={this.incrementAsync}>
					Increment async
				</button>
			</p>
		);
	}
}
