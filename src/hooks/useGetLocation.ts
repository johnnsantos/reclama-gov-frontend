import { useState, useEffect } from "react";

const defaultCoords = [-23.55052, -46.633308];

const useGetLocation = () => {
  const [location, setLocation] = useState<number[] | null>(null);

  const onSuccess = (position: GeolocationPosition) => {
    setLocation([position.coords.latitude, position.coords.longitude]);
  };

  const onError = () => {
    setLocation(defaultCoords);
  };

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } catch (error) {
      setLocation(defaultCoords);
    }
  }, []);

  return location;
};

export default useGetLocation;
