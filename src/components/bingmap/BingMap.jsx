import React from "react";
import BingMapsReact from "bingmaps-react";
import Input from "../input/Input";
import { useState } from "react";

export default class BingMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    console.log(this.state);
  };

  render() {
    return (
      <div className="row justify-content-around">
        <div className="col-md-4">
          <BingMapsReact
            pushPins={this.state}
            bingMapsKey="ArVWnezBVbwoBQHEHRshCfKMVGEAatsh8eAOd227PqIcUcNOkkOMFSA0zG87e6sr"
            height="500px"
            mapOptions={{
              navigationBarMode: "square",
            }}
            width="500px"
            viewOptions={{
              center: { latitude: 0, longitude: 0 },
              mapTypeId: "road",
            }}
          />
        </div>
        <div className="col-md-4">
          <Input onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
