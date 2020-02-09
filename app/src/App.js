// don't forget to run preprocessor
// https://reactjs.org/docs/add-react-to-a-website.html#run-jsx-preprocessor

'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name : 'Flint'
    };
  }

  handleNameChange = (e) => {
    if( this.state.name !== 'Octavia' ){
      this.setState({ name: 'Octavia' });
    } else {
      this.setState({ name: 'Flint' });
    }
  }

  render() {
    // if (this.state.liked) {
    //   return 'You liked this.';
    // }

    return (
      <button 
        className="waves-effect waves-light btn"
        onClick={this.handleNameChange}>
        {this.state.name}
      </button>
    );
  }
}

let domContainer = document.querySelector('#App');
ReactDOM.render(<App />, domContainer);