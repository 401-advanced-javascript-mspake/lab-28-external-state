/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <form>
    <input type="text" onChange={this.props.change}></input>
    <button onClick={ this.props.click }>Submit</button>
  </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  handleChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  }

  handleClick = (event) => {
    event.preventDefault();
    const count = this.state.count + 1;
    this.setState({ count });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: { this.state.name } </div>
          <div># of Updates: {this.state.count } </div>
          <Form change={ this.handleChange } click={ this.handleClick } />
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
