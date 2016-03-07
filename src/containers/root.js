import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { hashHistory, IndexRoute, Router, Route} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store)

let App = rqView('app');
let Home = rqView('home');
let About = rqView('about');
let Profile = rqView('profile');
let NotFound = rqView('notFound');

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="profile/:name" component={Profile}/>
            <Route path="*" component={NotFound}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}
