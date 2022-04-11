import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this._inputRef = React.createRef();
  }
  state = {};

  render() {
    return (
      <div className="d-flex flex-column">
        <label htmlFor={this.props.forHtml}>{this.props.labelName}</label>
        <input
          name={this.props.name}
          ref={this._inputRef}
          type={this.props.type}
        />
      </div>
    );
  }
}

export default Input;
