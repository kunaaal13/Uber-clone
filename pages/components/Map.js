import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoia3VuYWFhbCIsImEiOiJja3l6ZnR2cXYwN2txMnhtaTIwaXB3bHU4In0.Z8Rir15xXW0Y0oU1WT4WYA';

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [77.21667, 28.7041],
      zoom: 3,
    });
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker({ color: 'black' }).setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map">Map</Wrapper>;
};

export default Map;

const Wrapper = tw.div`flex-1 h-1/2`;
