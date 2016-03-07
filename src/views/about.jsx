import { Link } from 'react-router'

export default class About extends React.Component {
  render() {
    return (<div>
    	<h1>About</h1>
    	<Link to='/profile/Raidel'>Raidel</Link>
    	{this.props.children}
	</div>);
  };
};
