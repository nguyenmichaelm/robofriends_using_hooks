//used to check loading errors
import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  //method given in by Component in versions after 16
  //error and info are necessary params
  componentDidCatch(error, info) { 
    this.setState({hasError: true})
  }

  render() {
    return (
      this.state.hasError ?
        <h1>Oops, this is not good.</h1> :
        this.props.children
    );
  }
}

export default ErrorBoundry;