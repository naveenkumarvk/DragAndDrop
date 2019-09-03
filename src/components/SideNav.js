import React, { Component } from 'react';
import { Container,Row, Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';



class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		  <div>
		   <Col xs={12} md={3} lg={2} className={this.props.active?"px-0 main-sidebar open":"px-0 main-sidebar"} > 
               <div className="main-navbar" ref={node => { this.node = node; }}>
			    <Navbar  expand="lg" className="border-bottom">
				  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				  <a href="#"className="toggle-sidebar d-sm-inline d-md-none d-lg-none "><i onClick={this.props.menuopen} className="fa fa-arrow-left"></i></a>
				</Navbar> 
			   </div>
			   <Nav defaultActiveKey="/home" className="flex-column">
			   <ul className="nav--no-borders flex-column nav">
			   <li className="nav-item">
				  <NavLink exact activeClassName="active" className="nav-link" to="/Home" onClick={this.props.menuopen}>
				    <div className="d-inline-block item-icon-wrapper"> <i className="icons fa fa-edit" ></i></div>
					<span>Dashboard</span>
				  </NavLink>
			   </li>
			   <li className="nav-item">
				  <NavLink exact activeClassName="active" className="nav-link"  to="/users" onClick={this.props.menuopen}>
				    <div className="d-inline-block item-icon-wrapper"><i className="icons fa fa-user-circle-o"></i></div>
					<span>Users</span>
				  </NavLink>
				  </li>
				  <li className="nav-item">
				  <NavLink exact activeClassName="active" className="nav-link"  to="/contact" onClick={this.props.menuopen}>
				    <div className="d-inline-block item-icon-wrapper"><i className="icons fa fa-telegram"></i></div>
					<span>Contact</span>
				  </NavLink>
				  </li>
				</ul>
				</Nav>
		   </Col>
			</div>
		)
	}
}

export default App;