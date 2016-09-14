import React, { Component } from 'react';

class StickyForm extends Component {
	constructor(props){
		super(props); 
		this.addSticky = this.addSticky.bind(this);

	}

	addSticky(e) {
		e.preventDefault();
		let item = this.refs.item.value;
		this.props.addSticky(item);
		this.refs.itemForm.reset();

	}
	render() {
		return(
			<div>
				<form ref='itemForm' onSubmit={this.addSticky}>
					<input ref='item' type='text' placeholder='New Sticky' required />
					<input type='submit' />
				</form> 
			</div>
		)
	}
}

export default StickyForm;