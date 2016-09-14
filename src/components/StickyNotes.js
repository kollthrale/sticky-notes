import React, { Component } from 'react';
import Notes from './Notes';
import StickyForm from './StickyForm';

class StickyNotes extends Component {
	
	constructor(props) {
		super(props);	
		this.state = { items: ['Tree', 'seed', 'pie'] };
		this.addSticky = this.addSticky.bind(this);
		this.deleteSticky = this.deleteSticky.bind(this);
	}

	compoundWillMount() {
		console.log('renders has not been called yet!');
		
	}

	compoundDidMount() {
		console.log('render has been called!');
	}

	addSticky(item) {
		this.setState({
			items: [
				item,
				...this.state.items
			]
		});
	}
	deleteSticky(index) {
		
		this.setState({
			items: [
				...this.state.items.slice(0,index),
				...this.state.items.slice(index + 1)
			]
		});
	}

	render() {
		return(
			<div>
				<StickyForm addSticky={this.addSticky} />
				<Notes deleteSticky={this.deleteSticky} items={this.state.items} />
			</div> 
		)
	}
}

export default StickyNotes;