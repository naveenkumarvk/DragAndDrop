import React, { Component } from 'react';
import Logo from '../shards-dashboards-logo.60a85991.svg';
import { Container,Row, Col,Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';



class Header extends React.Component {
	
	render() {
		return (
		     <div className="main-navbar bg-white sticky-top">
			      <div className="p-0 container-fluid">
				     <Navbar  expand="lg" className="align-items-stretch flex-md-nowrap p-0 navbar navbar-light">
						 <form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
						   <div className="ml-3 input-group input-group-seamless" >
						     
						   </div>
						 </form>
						 <ul className="border-left flex-row navbar-nav">
						    <li className="border-right dropdown notifications nav-item">
							  <a className="nav-link-icon text-center nav-link" onClick={this.props.showNotification}>
							  <div className="nav-link-icon__wrapper"><i className="fa fa-wechat"></i><span className="badge badge-danger badge-pill">2</span></div></a>
							  <div className={this.props.show?"dropdown-menu dropdown-menu-small show collapse":"dropdown-menu dropdown-menu-small collapse"} ><button tabindex="0" className="dropdown-item"><div className="notification__icon-wrapper"><div className="notification__icon"><i className="material-icons"></i></div></div><div className="notification__content"><span className="notification__category">Analytics</span><p>Your website’s active users count increased by <span className="text-success text-semibold">28%</span> in the last week. Great job!</p></div></button><button tabindex="0" className="dropdown-item"><div className="notification__icon-wrapper"><div className="notification__icon"><i className="material-icons"></i></div></div><div className="notification__content"><span className="notification__category">Sales</span><p>Last week your store’s sales count decreased by <span className="text-danger text-semibold">5.52%</span>. It could have been worse!</p></div></button><button tabindex="0" className="notification__all text-center dropdown-item">View all Notifications</button></div>
							</li>
							
							  <NavDropdown className="header-nav"title={
								  <span><img src={Logo} className="user-avatar rounded-circle mr-2"/><span className="d-none d-md-inline-block">Principal</span></span>
							  } id="nav-dropdown">
								<NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
							  </NavDropdown>
						 </ul>
						 <nav className="nav"><a href="#" className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center" onClick={this.props.menuopen}><i className="fa fa-bars"></i></a></nav>
					 </Navbar> 
				  </div>
			   </div>
		)
	}
}

export default Header;