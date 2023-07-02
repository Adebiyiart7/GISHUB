import React, { createContext, useReducer } from 'react'
import leftMenuContentTitles from '../config/leftMenuContentTitles'
import FindData from '../components/FindData'
import UploadData from '../components/UploadData'
import Minna from '../components/dataCategories/Minna'
import Nigeria from '../components/dataCategories/Nigeria'
import Africa from '../components/dataCategories/Africa'
import World from '../components/dataCategories/World'
import basemaps from '../config/basemapOptions'

// LEFT MENU CONTENT REDUCER
// Define your initial state
const leftMenuContentInitialState = {
  leftMenuContent: {
    title: leftMenuContentTitles.FIND_DATA.title,
    content: <FindData title={leftMenuContentTitles.FIND_DATA.title} />,
  },
}

// define reduer
const leftMenuContentReducer = (state, action) => {
  switch (action.type) {
    // Find Data Content
    case leftMenuContentTitles.FIND_DATA._id:
      return {
        ...state,
        leftMenuContent: leftMenuContentInitialState.leftMenuContent,
      }

    // Upload Data Content
    case leftMenuContentTitles.UPLOAD_DATA._id:
      return {
        ...state,
        leftMenuContent: {
          title: leftMenuContentTitles.UPLOAD_DATA.title,
          content: <UploadData title={leftMenuContentTitles.UPLOAD_DATA.title} />,
        },
      }

    // Minna data content
    case leftMenuContentTitles.MINNA._id:
      return {
        ...state,
        leftMenuContent: {
          title: leftMenuContentTitles.MINNA.title,
          content: <Minna title={leftMenuContentTitles.MINNA.title} />,
        },
      }

    // Nigeria data content
    case leftMenuContentTitles.NIGERIA._id:
      return {
        ...state,
        leftMenuContent: {
          title: leftMenuContentTitles.NIGERIA.title,
          content: <Nigeria title={leftMenuContentTitles.NIGERIA.title} />,
        },
      }

    // Africa data content
    case leftMenuContentTitles.AFRICA._id:
      return {
        ...state,
        leftMenuContent: {
          title: leftMenuContentTitles.AFRICA.title,
          content: <Africa title={leftMenuContentTitles.AFRICA.title} />,
        },
      }

    // World data content
    case leftMenuContentTitles.WORLD._id:
      return {
        ...state,
        leftMenuContent: {
          title: leftMenuContentTitles.WORLD.title,
          content: <World title={leftMenuContentTitles.WORLD.title} />,
        },
      }

    default:
      return state
  }
}

// BASEMAP REDUCER
// Define your initial state
const basemapInitialState = {
  basemap: basemaps.OCEANS._id,
}

const basemapReducer = (state, action) => {
  switch (action.type) {
    // STREETS
    case basemapInitialState.basemap:
      return {
        ...state,
        basemap: basemapInitialState.basemap,
      }

    // TOPOGRAPHIC
    case basemaps.TOPOGRAPHIC._id:
      return {
        ...state,
        basemap: basemaps.TOPOGRAPHIC._id,
      }

    // IMAGERY
    case basemaps.IMAGERY._id:
      return {
        ...state,
        basemap: basemaps.IMAGERY._id,
      }

    // NATIONAL_GEOGRAPHIC
    case basemaps.NATIONAL_GEOGRAPHIC._id:
      return {
        ...state,
        basemap: basemaps.NATIONAL_GEOGRAPHIC._id,
      }

    // OCEANS
    case basemaps.OCEANS._id:
      return {
        ...state,
        basemap: basemaps.OCEANS._id,
      }

    // LIGHT_GRAY_CANVAS
    case basemaps.LIGHT_GRAY_CANVAS._id:
      return {
        ...state,
        basemap: basemaps.LIGHT_GRAY_CANVAS._id,
      }

    // DARK_GRAY_CANVAS
    case basemaps.DARK_GRAY_CANVAS._id:
      return {
        ...state,
        basemap: basemaps.DARK_GRAY_CANVAS._id,
      }

    // TERRAIN_WITH_LABELS
    case basemaps.TERRAIN_WITH_LABELS._id:
      return {
        ...state,
        basemap: basemaps.TERRAIN_WITH_LABELS._id,
      }

    // OPENSTREETMAP
    case basemaps.OPENSTREETMAP._id:
      return {
        ...state,
        basemap: basemaps.OPENSTREETMAP._id,
      }

    // IMAGERY_WITH_LABELS
    case basemaps.IMAGERY_WITH_LABELS._id:
      return {
        ...state,
        basemap: basemaps.IMAGERY_WITH_LABELS._id,
      }

    default:
      return state
  }
}

// Create the context
export const AppContext = createContext()

// Create the context provider
export const AppContextProvider = ({ children }) => {
  const [leftMenuContentState, leftMenuContentDispatch] = useReducer(
    leftMenuContentReducer,
    leftMenuContentInitialState,
  )

  const [basemapState, basemapDispatch] = useReducer(basemapReducer, basemapInitialState)

  return (
    <AppContext.Provider value={{ leftMenuContentState, leftMenuContentDispatch, basemapState, basemapDispatch }}>
      {children}
    </AppContext.Provider>
  )
}
