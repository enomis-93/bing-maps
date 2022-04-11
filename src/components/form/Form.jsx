import React from "react";
import Button from "../button/Button";
import Input from "../Input/Input";

//OnSubmit evoca la funzione addPin del componente BingMap
export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this._latitudeRef = React.createRef();
    this._longitudeRef = React.createRef();
    this._pinNameRef = React.createRef();
    this.state = {};
    //console.log(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Input
          name="latitude"
          type="text"
          forHtml="latitude"
          labelName="Latitude"
        />

        <Input
          name="longitude"
          type="text"
          forHtml="longitude"
          labelName="Longitude"
        />

        <Input
          name="pinName"
          type="text"
          forHtml="pinName"
          labelName="Pin Name"
        />

        <Button text="Insert Pin" styling="success" />
      </form>
    );
  }
}
