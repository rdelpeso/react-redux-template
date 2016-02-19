import {Component, PropTypes} from 'react';

export default class Main extends Component {
  static propTypes = { initialCount: PropTypes.number };
  static defaultProps = { initialCount: 0 };
  state = { count: this.props.initialCount };

  componentDidMount() {
    let that = this;
    $.getJSON('/get', (data) => {
      that.setState({ count: data.count });
    });
  };

  onClick = (e) => {
    let that = this;
    $.get('/plus', (data) => {
      $.getJSON('/get', (data) => {
        that.setState({ count: data.count });
      });
    })
  };

  render() {
    return (<div>
      <h1>Home</h1>
      <a href='javascript:void(0)' onClick={this.onClick}>Click me ! ({this.state.count})</a>
    </div>);
  };
}
