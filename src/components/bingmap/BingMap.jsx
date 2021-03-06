import React from "react";
import BingMapsReact from "bingmaps-react";
import Form from "../form/Form";
import "./bingmap.css";

export default class BingMap extends React.Component {
  constructor(props) {
    super(props);

    /* An empty array where i'll push each pin object with its own latitude and longitude values picked from the form inputs */
    this.pushPins = [];

    this.state = { latitude: 41.902782, longitude: 12.496366 };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    /* If inputs are fullfield set the new state
    and push latitude and longitude values as a new object in the 
    pushPins array */
    if (!isNaN(e.target[0].value && e.target[1].value) && e.target[2].value) {
      this.setState({
        latitude: e.target[0].value,
        longitude: e.target[1].value,
      });

      // Pushing each Pin object with new inputs values
      this.pushPins.push({
        center: {
          latitude: e.target[0].value,
          longitude: e.target[1].value,
        },
        options: {
          title: e.target[2].value,
        },
      });

      // Clear input values after the pin's submitted
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";

      console.log(this.pushPins);
    } else {
      return alert("Please fill all the inputs with a valid values");
    }
  };

  render() {
    return (
      <div>
        <div className="form">
          <Form onSubmit={this.handleSubmit} />
        </div>
        <div className="map">
          <BingMapsReact
            pushPins={this.pushPins}
            bingMapsKey="ArVWnezBVbwoBQHEHRshCfKMVGEAatsh8eAOd227PqIcUcNOkkOMFSA0zG87e6sr"
            height="100vh"
            mapOptions={{
              navigationBarMode: "square",
            }}
            width="100vw"
            viewOptions={{
              center: {
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              },
              mapTypeId: "road",
            }}
          />
        </div>
      </div>
    );
  }
}
