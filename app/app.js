// ... the starter code you pasted ...


'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <div>test</div>
    )
    // if (this.state.liked) {
    //   return 'You likeds this.';
    // }

    // return (
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render( App,  domContainer);