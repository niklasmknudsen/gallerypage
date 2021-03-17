import { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
// Imports components
import './App.scss';
import './assets/styles/organisms/slider.scss';
import PageDestinations from "./page/PageDestinations";
import PageHome from './page/PageHome';
import PageContact from './page/PageContact';
import PageAbout from './page/PageAbout';
import PageActivities from './page/PageActivities';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
			menuItems: [
				{
					href: '/home',
					style: "menu-item",
					text: 'Home'
				},
				{
					href: '/activities',
					style: "menu-item",
					text: 'Activities'
				},
				{
					href: '/destinations',
					style: "menu-item",
					text: 'Destinations'
				},
				{
					href: '/contact',
					style: "menu-item",
					text: 'Contact'
				},
				{
					href: '/about',
					style: "menu-item",
					text: 'About'
				}
			]
        }
	}

	render() {
		return (
            <Router>
                <Switch>
                    <Route exact path="/" component={PageHome} />
                    <Route exact path="/activities" component={PageActivities} />
					<Route exact path="/destinations" component={PageDestinations} />
                    <Route exact path="/about" component={PageAbout} />
                    <Route exact path="/contact" component={PageContact} />
                </Switch>
            </Router>
		);
  }
}

export default App;