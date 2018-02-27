import React from 'react';

export default class Link extends React.Component {

  constructor() {
    super();
    this.state = { count : 0};
  }

  handleClick() {
    console.log(this.state);
    this.setState({count : this.state.count + 1});
  }

  render() {
    return (
      <span className="Link" onClick={this.handleClick.bind(this)}>
      this text has been clicked {this.state.count}
      </span>
    );
  }
}
