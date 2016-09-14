import React from 'react';
import StickyForm from './StickyForm';

const styles = {
	itemsNotes: { NotesStyle: 'none' }
}

class Notes extends React.Component {
	render() {
		let items = this.props.items.map( (item, index) => {
			return(<li key={`item-${index}`}> 
							{item} 
							<button onClick={() => this.props.deleteSticky(index)}>Delete</button>
						</li>);
		});
		
	 return(
	  	<div>
		  	<ul style={ styles.itemsnotes }>
			  	{ items }
			  </ul>
		  </div>
		)
	}
}

export default Notes;