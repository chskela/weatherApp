import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

export default function usePosition() {
  const [position, setPosition] = useState({latitude: 0, longitude: 0});
  const [error, setError] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setPosition({latitude, longitude});
      },
      error => setError(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return {position, error};
}
