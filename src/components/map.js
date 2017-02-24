import React from 'react';
import { GoogleMap, GoogleMapLoader } from 'react-google-maps';

export default (props) => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap 
          defaultZoom={13}
          defaultCenter={{
            lng: props.lon,
            lat: props.lat
          }}
        />
      }
    />
  );
};
