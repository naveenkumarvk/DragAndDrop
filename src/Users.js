import React, { Component } from 'react';
//import Sortable from 'react-sortablejs';
import Sortable from 'react-sortablejs';
import { Checkbox } from '@material-ui/core';



class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state={
		   active: false,
		   items: ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry'],
		   simpleList: ['Apple', 'Banana', 'Cherry', 'Guava', 'Grape', 'Kiwi', 'Lemon', 'Melon', 'Orange', 'Pear', 'Peach', 'Strawberry'],
			groupLeft: ['Apple', 'Banana', 'Cherry', 'Grape'],
			groupRight: ['Lemon', 'Orange', 'Pear', 'Peach'],
			cloneUncontrolled: ['Apple', 'Banana', 'Cherry', 'Guava', 'Grape', 'Kiwi', 'Lemon', 'Melon', 'Orange', 'Pear', 'Peach', 'Strawberry'],
			cloneControlledSource: ['Apple', 'Banana', 'Cherry', 'Guava', 'Grape', 'Kiwi', 'Lemon', 'Melon', 'Orange', 'Pear', 'Peach', 'Strawberry'],
			cloneControlledTarget: [],
			checked: false
		}
		
	}
	handleChange(e) {
		console.log("event",e)
		this.setState({
			checked: !this.state.checked
		})
		this.forceUpdate();
		//alert();
	}
	
	render() {
		//console.log(this.state.checked);
		//const items = this.state.items.map((val,index) => (<li key={index} data-id={val}>{val}</li>));
		const simpleList = this.state.simpleList.map((val, index) => (
            <li><Checkbox checked={this.state.checked}  onChange={this.handleChange.bind(this)}/>{val}{index}</li>
        ));
		
		console.log(simpleList)
		return (
		    <div className="main-content-container px-4 container-fluid">
			    <div className="page-header py-4 no-gutters row">
				    <div className="text-sm-left mb-3 text-center text-md-left mb-sm-0 col-12 col-sm-4">
						<span className="text-uppercase page-subtitle">users</span>
						<h3 className="page-title">Users</h3>
						<Sortable
						   tag="ul"
						   className="block-list"
							// Defaults to "div"
						>
							{simpleList}
							
						</Sortable>
				    </div>
			    </div>
			</div>
		)
	}
}

export default Users;