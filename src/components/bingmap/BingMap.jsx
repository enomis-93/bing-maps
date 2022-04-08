import React from "react";
import BingMapsReact from "bingmaps-react";
import Form from "../form/Form";
import { useState } from "react";

export default function BingMap(props) {
  const [pushPins, setPushPins] = useState([]);

  addPin = () => {
    setPushPins({
      latitude: 41.9027835,
      longitude: 12.4963655,
    });
  };

  return (
    <div className="row justify-content-around">
      <div className="col-md-4">
        <BingMapsReact
          pushPins={pushPins}
          bingMapsKey="ArVWnezBVbwoBQHEHRshCfKMVGEAatsh8eAOd227PqIcUcNOkkOMFSA0zG87e6sr"
          height="500px"
          mapOptions={{
            navigationBarMode: "square",
          }}
          width="500px"
          viewOptions={{
            center: { latitude: 41.9027835, longitude: 12.4963655 },
            mapTypeId: "road",
          }}
        />
      </div>
      <div className="col-md-4">
        <Form addPin={} />
      </div>
    </div>
  );
}
