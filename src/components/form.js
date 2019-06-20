/* eslint-disable react/prop-types */
import React from 'react';

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

export default Form;
