import React from "react";
import BingMapsReact from "bingmaps-react";
import Form from "../form/Form";

export default class BingMap extends React.Component {
  constructor(props) {
    super(props);

    // this.pushPin = {
    //   center: {
    //     latitude: 0,
    //     longitude: 0,
    //   },
    //   options: {
    //     title: "Pin1 ",
    //   },
    // };

    /* An empty array where i'll push each pin object with its own latitude and longitude values picked from the form inputs */
    this.pushPins = [];

    this.state = { latitude: 0, longitude: 0 };
  }

  handleSubmit = (e) => {
    /* Prevent that the submit button send to another page */
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

      // this.pushPin.center.latitude = this.state.latitude;
      // this.pushPin.center.longitude = this.state.longitude;
      // console.log(
      //   `latitude: ${e.target[0].value} longitude: ${e.target[1].value}`
      // );
      //console.log(e);
      console.log(this.pushPins);
    } else {
      return alert("Please fill all the inputs with a valid values");
    }
  };

  handleChange = (e) => {};

  render() {
    return (
      <div className="row justify-content-around">
        <div className="col-sm-6 col-md-6">
          <BingMapsReact
            pushPins={this.pushPins}
            bingMapsKey="ArVWnezBVbwoBQHEHRshCfKMVGEAatsh8eAOd227PqIcUcNOkkOMFSA0zG87e6sr"
            height="500px"
            mapOptions={{
              navigationBarMode: "square",
            }}
            width="50vw"
            viewOptions={{
              center: {
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              },
              mapTypeId: "road",
            }}
          />
        </div>
        <div className="col-sm-3 col-md-3">
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
