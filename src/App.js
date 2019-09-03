import React, { Component } from 'react';
import Logo from './shards-dashboards-logo.60a85991.svg';
import Loading from './loading.gif';
import { Container,Row, Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import { Route,  BrowserRouter as Router,NavLink,Switch } from 'react-router-dom';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import { Suspense, lazy } from 'react';
import Home from './Home';
const HomeComponent = lazy(() => {
  return Promise.all([
    import("./Home"),
    new Promise(resolve => setTimeout(resolve, 300))
  ])
  .then(([moduleExports]) => moduleExports);
});
const UsersComponent = React.lazy(() => import('./Users'));
const ContactComponent = React.lazy(() => import('./Contact'));


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={
		   active: false,
		   show: false
		}
		
	}
	handleOutsideClick = (e) => {
		const currentState = this.state.active;
        this.setState({ active: !currentState });
	}
	menuOpen () {
		const currentState = this.state.active;
        this.setState({ active: !currentState });
	}
	Notification () {
		const currentState = this.state.show;
        this.setState({ show: !currentState });
	}
	
	render() {
		function WaitingComponent(Component) {
		  return props => (
			<Suspense fallback={<div className="Loading"><span className="img-load"><img src={Loading} style={{'width':'150px'}}/></span></div>}>
			  <Component {...props} />
			</Suspense>
		  );
		}
		return (
			 <Router>
				<div className="container-fluid">
				  <Row className="show-grid">
					   <SideNav active={this.state.active} menuopen={this.menuOpen.bind(this)} />
					<Col md={9} lg={10} xs={12} mdOffset={3} lgOffset={2} className="main-content p-0 offset-md-3 offset-lg-2">
					   <Header menuopen={this.menuOpen.bind(this)} showNotification={this.Notification.bind(this)} show={this.state.show}/>
						    <Switch>
							  <Route exact path='/' component={Home} />
							  <Route exact path='/Home' component={WaitingComponent(HomeComponent)} />
							  <Route exact path='/Users' component={WaitingComponent(UsersComponent)} />
							  <Route exact path='/Contact' component={WaitingComponent(ContactComponent)} />
						    </Switch>
					</Col>
				  </Row>
				</div>
			 </Router>
		)
	}
}

export default App;