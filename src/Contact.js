import React, { Component } from 'react';



class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state={
		   active: false,
		}
		
	}
	
	
	render() {
		return (
		    <div className="main-content-container px-4 container-fluid">
			    <div className="page-header py-4 no-gutters row">
				    <div className="text-sm-left mb-3 text-center text-md-left mb-sm-0 col-12 col-sm-4">
						<span className="text-uppercase page-subtitle">contact</span>
						<h3 className="page-title">Contact</h3>
				    </div>
			    </div>
			</div>
		)
	}
}

export default Contact;