import {Component, PropTypes} from 'react';

let Nav = rqView('nav');

let title = 'Template';

let items = [
  { id: 'home', label: 'Home', default: true },
  { id: 'about', label: 'About' },
];

export default class App extends Component {
  componentDidMount() {
    document.title = title;
  };

  render() {
    return (
      <div>
        <Nav items={items} title={title} location={this.props.location} />
        {this.props.children}
      </div>
    );
  };
};
