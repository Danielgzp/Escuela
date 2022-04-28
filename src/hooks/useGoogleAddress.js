import { useState, useEffect } from "react";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBs14kAI_wioeD6BbQpULqZplNDNMeV18o`;

  useEffect(async () => {
    const response = await fetch(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  
  return map;
};

export default useGoogleAddress;
