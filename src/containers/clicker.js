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
    const { value, fetching, clicked } = this.props;
    return (<ClickerComponent
      value={value}
      fetching={fetching}
      clicked={clicked}
      onClick={this.handleClick} />
    );
  }
}

function mapStateToProps(state) {
  const { counterValue: {isFetching: fetching, wasClicked: clicked, value: value} } = state;
  return { fetching, clicked, value };
}

export default connect(mapStateToProps)(Clicker)
