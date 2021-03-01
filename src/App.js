import { render } from "react-dom";
import { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
// Imports components
import OrganismHeader from './organisms/OrganismHeader';
import PageHome from './page/PageHome';
import PageContact from './page/PageContact';
import PageDestination from './page/PageDestination';
import PageAbout from './page/PageAbout';
import PageActivities from './page/PageActivities';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
	}

	render() {
		return (
            <Router>
                <Switch>
                    <Route exact path="/" component={PageHome} />
                    <Route exact path="/activities" component={PageActivities} />
                    <Route exact path="/destinations" component={PageDestination} />
                    <Route exact path="/about" component={PageAbout} />
                    <Route exact path="/contact" component={PageContact} />
                </Switch>
            </Router>
		);
    }
}

export default App;