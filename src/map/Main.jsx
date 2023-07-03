import React, { useRef, useEffect, useContext } from 'react'
import MapView from '@arcgis/core/views/MapView'
import WebMap from '@arcgis/core/WebMap'
import Graphic from '@arcgis/core/Graphic'
import Field from '@arcgis/core/layers/support/Field'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import request from '@arcgis/core/request'

import { AppContext } from '../providers/AppContext'

const portalUrl = 'https://www.arcgis.com'

function Main() {
  const mapDivRef = useRef(null)
  const uploadFormRef = useRef(null)
  const mainWindowRef = useRef(null)
  const uploadStatusRef = useRef(null)

  const { basemapState } = useContext(AppContext)

  useEffect(() => {
    if (mapDivRef.current) {
      const generateFeatureCollection = (fileName, view) => {
        let name = fileName.split('.')
        name = name[0].replace('c:\\fakepath\\', '')

        uploadStatusRef.current.innerHTML = '<b>Loading </b>' + name

        // Define the input parameters for generating a feature collection
        const params = {
          name,
          targetSR: view.spatialReference,
          maxRecordCount: 1000,
          enforceInputFileSizeLimit: true,
          enforceOutputJsonSizeLimit: true,
        }

        // Generalize features to 10 meters for better performance
        params.generalize = true
        params.maxAllowableOffset = 10
        params.reducePrecision = true
        params.numberOfDigitsAfterDecimal = 0

        const myContent = {
          filetype: 'shapefile',
          publishParameters: JSON.stringify(params),
          f: 'json',
        }

        // Use the REST generate operation to generate a feature collection from the zipped shapefile
        request(portalUrl + '/sharing/rest/content/features/generate', {
          query: myContent,
          body: uploadFormRef.current,
          responseType: 'json',
        })
          .then((response) => {
            const layerName = response.data.featureCollection.layers[0].layerDefinition.name
            uploadStatusRef.current.innerHTML = '<b>Loaded: </b>' + layerName
            addShapefileToMap(response.data.featureCollection, view)
          })
          .catch(errorHandler)
      }

      const addShapefileToMap = (featureCollection, view) => {
        let sourceGraphics = []

        const layers = featureCollection.layers.map((layer) => {
          const graphics = layer.featureSet.features.map((feature) => {
            return Graphic.fromJSON(feature)
          })
          sourceGraphics = sourceGraphics.concat(graphics)
          const featureLayer = new FeatureLayer({
            objectIdField: 'FID',
            source: graphics,
            fields: layer.layerDefinition.fields.map((field) => {
              return Field.fromJSON(field)
            }),
          })
          return featureLayer
        })
        webMap.addMany(layers)
        view.goTo(sourceGraphics).catch((error) => {
          if (error.name !== 'AbortError') {
            console.error(error)
          }
        })

        uploadStatusRef.current.innerHTML = ''
      }

      const errorHandler = (error) => {
        uploadStatusRef.current.innerHTML = "<p style='color:red;max-width: 500px;'>" + error.message + '</p>'
      }

      //  * Initialize application
      const webMap = new WebMap({
        basemap: basemapState.basemap,
      })

      const view = new MapView({
        container: mapDivRef.current,
        map: webMap,
        center: [9.082, 8.6753], // Set the initial center coordinates
        zoom: 6, // Set the initial zoom level
        popup: {
          defaultPopupTemplateEnabled: true,
        },
      })

      // Attach the generateFeatureCollection function to the window object
      window.generateFeatureCollection = (fileName) => generateFeatureCollection(fileName, view)
    }
  }, [basemapState.basemap])

  return (
    <div>
      <div ref={mainWindowRef}>
        <div>
          <div style={{ paddingLeft: '4px' }}>
            {/* <p>
              Download shapefile from
              <a href='https://bsvensson.github.io/various-tests/shp/drp_county_boundary.zip'>here.</a>
            </p>
            <p>Add a zipped shapefile to the map.</p>
            <p>
              Visit the
              <a target='_blank' href='https://doc.arcgis.com/en/arcgis-online/reference/shapefiles.htm'>
                Shapefiles
              </a>
              help topic for information and limitations.
            </p> */}
            <form encType='multipart/form-data' method='post' ref={uploadFormRef}>
              <div className='field'>
                <label className='file-upload'>
                  <span>
                    <strong>Add File</strong>
                  </span>
                  <input
                    type='file'
                    name='file'
                    id='inFile'
                    onChange={(event) => {
                      const fileName = event.target.value.toLowerCase()

                      if (fileName.indexOf('.zip') !== -1) {
                        window.generateFeatureCollection(fileName)
                      } else {
                        uploadStatusRef.current.innerHTML = '<p style="color:red">Add shapefile as .zip file</p>'
                      }
                    }}
                  />
                </label>
              </div>
            </form>
            <span className='file-upload-status' style={{ opacity: 1 }} ref={uploadStatusRef}></span>
            <div id='fileInfo'></div>
          </div>
        </div>
      </div>
      <div className='w-[calc(100vw-300px)] h-[calc(100vh-66px)] p-3 pb-0' ref={mapDivRef} />
    </div>
  )
}

export default Main
