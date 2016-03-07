import {Component, PropTypes} from 'react';
import Clicker from '../containers/clicker';

export default class Main extends Component {
  render() {
    return (<div>
      <h1>Home</h1>
      <Clicker />
    </div>);
  };
}
