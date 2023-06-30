import { Map, MapView } from '@arcgis/core'
import React, { useEffect, useRef } from 'react'

const Main = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) {
      initializeMap()
    }
  }, [])

  const initializeMap = () => {
    // Import the required modules from the ArcGIS API for JavaScript

    // Create a new map instance
    const map = new Map({
      basemap: 'streets-vector', // Set the basemap
    })

    // Create a new map view instance and attach it to the map container
    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [-122.4194, 37.7749], // Set the initial center coordinates
      zoom: 12, // Set the initial zoom level
    })
  }

  return <div ref={mapRef} style={{ height: '500px' }} />
}

export default Main
