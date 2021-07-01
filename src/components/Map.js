import React, {useEffect, useState} from 'react';
import {compose, withProps, withHandlers} from 'recompose'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, google} from 'react-google-maps';




const findMe = () => {
    if(!navigator.geolocation){
        alert('El navegador no soporta geolocalizacion');
        return;
    }
}
    
    
    const Map = (props) => {
        const [late, setLat] = useState(0);
        const [lng, setLnge] = useState(0);
        useEffect(()=>{
            findMe();

        });
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setTimeout( ()=>{
                    console.log(position.coords.longitude);
                    setLnge(position.coords.longitude);
                    setLat(position.coords.latitude);
                }, 1000)
                
                // window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(late, lng));
            }
        );
    
    const StyleMaped = compose(
        withProps({
             googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcyumbv128GbLqZKIKmVf83k5Cge_T4Ss",
             loadingElement: <div style={{ height: `100%` }} />,
             containerElement: <div style={{ height: `400px` }} />,
             mapElement: <div style={{ height: `100%` }} />,
         }),
         
         withScriptjs,
         withGoogleMap
     )(props => <GoogleMap
         defaultZoom={15}
         defaultCenter={{ lat: late, lng: lng }}
         defaultMapTypeId='roadmap'
       >
           <Marker position={{ lat: late, lng: lng }}>

           </Marker>
       </GoogleMap>
       );
     




    return (
        
       <StyleMaped />
        
    )
}

export default withScriptjs(
    withGoogleMap(
       Map
    )
)
