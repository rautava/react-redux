import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function
const App = class extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));
