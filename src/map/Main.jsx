import React, { useRef, useEffect } from 'react'
import MapView from '@arcgis/core/views/MapView'
import WebMap from '@arcgis/core/WebMap'

import basemaps from '../config/basemapOptions'

function Main() {
  const mapDiv = useRef(null)

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        basemap: basemaps.OPENSTREETMAP,
      })

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        center: [9.082, 8.6753], // Set the initial center coordinates
        zoom: 6, // Set the initial zoom level
      })
    }
  }, [])

  return <div className='w-[calc(100vw-300px)] h-[calc(100vh-66px)] p-3 pb-0' ref={mapDiv} />
}

export default Main
