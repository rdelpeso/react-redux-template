import './libs/framework.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './shared/base.css';
import { hashHistory,
  IndexRoute,
  Router,
  Route,
  Link,
  Redirect
} from 'react-router'

let App = rqView('app');
let Home = rqView('home');
let About = rqView('about');
let Profile = rqView('profile');
let NotFound = rqView('notFound');

import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="profile/:name" component={Profile}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
