import { Component, PropTypes } from 'react';

export default class Clicker extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    clicked: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { value, onClick, fetching, clicked } = this.props;
    let element = `Click me ! (${value})`;
    if (fetching) {
      element += ' *';
    }
    if (!clicked) {
      element = <a href='javascript:void(0)' onClick={onClick}>{element}</a>
    }
    return (<span>{element}</span>);
  };
}
