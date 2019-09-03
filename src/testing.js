import React, { Component } from 'react';
import Logo from './shards-dashboards-logo.60a85991.svg';
import './App.scss';

class App extends Component {
  constructor(props) {
        super(props);
 
        this.state = {
          active: false,
		  Nav: false,
        };
    }
 
    showMenu() {
    	const currentState = this.state.active;
        this.setState({ active: !currentState });
    }
	showNav() {
		const currentState = this.state.Nav;
        this.setState({ Nav: !currentState });
	}
 
    render() {
        return (
              <div>
                  <div className="container-fluid">
				    <div className="row">
				      <aside className={this.state.Nav?'main-sidebar px-0 open col-12 col-md-3 col-lg-2':'main-sidebar px-0 col-12 col-md-3 col-lg-2'}>
					     <div className="main-navbar">
						   <nav className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0 navbar navbar-light">
						     <a href="#" className="w-100 mr-0 navbar-brand">
							   <div className="d-table m-auto">
	                             <img src={Logo} id="main-logo" className="d-inline-block align-top mr-1" style={{'max-width':'25px'}}/><span className="d-none d-md-inline ml-1">Shards Dashboard</span>
							   </div>
							 </a>
							 <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none"onClick={this.showNav.bind(this)}><i className="material-icons"></i></a>
						   </nav>
						 </div>
						 <div className="nav-wrapper">
							 <ul className="nav--no-borders flex-column nav">
							   <li className="nav-item">
								 <a className="nav-link" href="/demo/shards-dashboard-lite-react/blog-overview">
								   <div className="d-inline-block item-icon-wrapper"><i className="material-icons">edit</i></div><span>Blog Dashboard</span></a>
								</li>
							 </ul>
						 </div>
					  </aside>
					  <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
					     <div className="main-navbar bg-white sticky-top">
						    <div className="p-0 container-fluid">
							   <nav className="align-items-stretch flex-md-nowrap p-0 navbar navbar-light">
							    <form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex"><div className="ml-3 input-group input-group-seamless"><div className="input-group-prepend"><span className="input-group-text"><i className="material-icons">search</i></span></div><input placeholder="Search for something..." className="navbar-search form-control" /></div></form>
							    <ul className="border-left flex-row navbar-nav"><li className="border-right dropdown notifications nav-item"><a className="nav-link-icon text-center nav-link"><div className="nav-link-icon__wrapper"><i className="material-icons"></i><span className="badge badge-danger badge-pill">2</span></div></a><div className="dropdown-menu dropdown-menu-small collapse" ><button tabindex="0" className="dropdown-item"><div className="notification__icon-wrapper"><div className="notification__icon"><i className="material-icons"></i></div></div><div className="notification__content"><span className="notification__category">Analytics</span><p>Your website’s active users count increased by <span className="text-success text-semibold">28%</span> in the last week. Great job!</p></div></button><button tabindex="0" className="dropdown-item"><div className="notification__icon-wrapper"><div className="notification__icon"><i className="material-icons"></i></div></div><div className="notification__content"><span className="notification__category">Sales</span><p>Last week your store’s sales count decreased by <span className="text-danger text-semibold">5.52%</span>. It could have been worse!</p></div></button><button tabindex="0" className="notification__all text-center dropdown-item">View all Notifications</button></div></li><div className="nav-item dropdown"><a aria-haspopup="true" onClick={this.showMenu.bind(this)} className="text-nowrap px-3 dropdown-toggle nav-link"><img className="user-avatar rounded-circle mr-2" src={Logo} alt="User Avatar" /> <span className="d-none d-md-inline-block">Sierra Brooks</span></a><div tabindex="-1" role="menu" className={this.state.active ? 'collapse show dropdown-menu dropdown-menu-small dropdown-menu-right':'collapse dropdown-menu dropdown-menu-small dropdown-menu-right' } ><a tabindex="0" className="dropdown-item" href="/demo/shards-dashboard-lite-react/user-profile"><i className="material-icons"></i> Profile</a><a tabindex="0" className="dropdown-item" href="/demo/shards-dashboard-lite-react/edit-user-profile"><i className="material-icons"></i> Edit Profile</a><a tabindex="0" className="dropdown-item" href="/demo/shards-dashboard-lite-react/file-manager-list"><i className="material-icons"></i> Files</a><a tabindex="0" className="dropdown-item" href="/demo/shards-dashboard-lite-react/transaction-history"><i className="material-icons"></i> Transactions</a><div tabindex="-1" className="dropdown-divider"></div><a tabindex="0" className="text-danger dropdown-item" href="/demo/shards-dashboard-lite-react/"><i className="material-icons text-danger"></i> Logout</a></div></div></ul>
							    <nav className="nav"><a href="#" className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"onClick={this.showNav.bind(this)}><i className="material-icons"></i></a></nav>
							   </nav>
							</div>
						 </div>
					  </main>
				  </div>
				  </div>
              </div>
        );
    }
}

export default App;
