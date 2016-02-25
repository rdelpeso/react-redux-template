import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { clickCounter, refreshCounter } from '../actions'
import ClickerComponent from '../components/clicker'

class Clicker extends Component {
  componentDidMount() {
     const { dispatch } = this.props
     dispatch(refreshCounter())
  };

  handleClick = (e) => {
    this.props.dispatch(clickCounter());
  };

  render() {
    const { counterValue } = this.props;
    return (
      <ClickerComponent value={counterValue}
        onClick={this.handleClick} />
    );
  }

}

function mapStateToProps(state) {
  const { counterValue } = state
  return { counterValue };
}

export default connect(mapStateToProps)(Clicker)
