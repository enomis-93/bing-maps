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
      <form className="d-flex p-2" onSubmit={this.props.onSubmit}>
        <div className="mx-1 fw-bold text-black">
          <Input
            name="latitude"
            type="text"
            forHtml="latitude"
            labelName="Latitude"
            placeholder="Enter Latitude"
          />
        </div>

        <div className="mx-1 fw-bold text-black">
          <Input
            name="longitude"
            type="text"
            forHtml="longitude"
            labelName="Longitude"
            placeholder="Enter Longitude"
          />
        </div>

        <div className="mx-1 fw-bold text-black">
          <Input
            name="pinName"
            type="text"
            forHtml="pinName"
            labelName="Pin Name"
            placeholder="Enter Pin Name"
          />
        </div>

        <div className="p-2">
          <Button text="Insert Pin" styling="success" />
        </div>
      </form>
    );
  }
}
