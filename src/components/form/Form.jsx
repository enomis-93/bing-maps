import React from "react";

//OnSubmit evoca la funzione addPin del componente BingMap
export default function Form(props) {
  return (
    <form onSubmit={props.}>
      <div className="d-flex flex-column">
        <label htmlFor="latitude">Latitude</label>
        <input name="latitude" type="text" />
        <label htmlFor="longitude">Longitude</label>
        <input name="longitude" type="text" />
        <button className="btn btn-success my-2">Insert Pin</button>
      </div>
    </form>
  );
}
