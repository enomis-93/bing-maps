import React from "react";

//OnSubmit evoca la funzione addPin del componente BingMap
export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: "",
      longitude: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="d-flex flex-column">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" type="text" onChange={this.handleChange} />
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" type="text" onChange={this.handleChange} />
          <button className="btn btn-success my-2">Insert Pin</button>
        </div>
      </form>
    );
  }
}
