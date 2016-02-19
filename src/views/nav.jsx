import { Link } from 'react-router'

class NavLink extends React.Component {
  render() {
    const item = this.props.item;
    const id = '/' + item.id;
    let c = '';

    if ((item.default === true && this.props.location === '/')
      || id == this.props.location) {
      c = 'active';
    }

    return (
      <li key={id} className={c}>
          <Link key={id} to={'/'+item.id}>
            {item.label}
          </Link>
      </li>
    )
  }
};

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#navbar"
            aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="navbar-brand">{this.props.title}</div>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            {this.props.items.map(
              (item) => <NavLink
                key={item.id}
                item={item}
                location={this.props.location.pathname}
              />
            )}
          </ul>
        </div>
      </nav>
    )
  }
};

export default Nav;
