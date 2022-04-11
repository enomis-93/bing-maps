import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.styling = `btn btn-${this.props.styling} my-2`;
  }
  state = {};
  render() {
    return <button className={this.styling}>{this.props.text}</button>;
  }
}

export default Button;
