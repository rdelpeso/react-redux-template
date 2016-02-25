import { Component, PropTypes } from 'react';

export default class Clicker extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { value, onClick } = this.props;

    return (
      <a href='javascript:void(0)' onClick={onClick}>Click me ! ({value})</a>
    );
  };
}
