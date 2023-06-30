import React, { createContext, useReducer } from 'react'
import leftMenuContentTitles from '../config/leftMenuContentTitles'
import FindData from '../components/FindData'
import UploadData from '../components/UploadData'
import Minna from '../components/dataCategories/Minna'
import Nigeria from '../components/dataCategories/Nigeria'
import Africa from '../components/dataCategories/Africa'
import World from '../components/dataCategories/World'

// Define your initial state
const initialState = {
  leftMenuContent: {
    title: leftMenuContentTitles.FIND_DATA.title,
    content: <FindData title={leftMenuContentTitles.FIND_DATA.title} />,
  },
}

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    // Find Data Content
    case leftMenuContentTitles.FIND_DATA._id:
      return {
        ...state,
        leftMenuContent: initialState.leftMenuContent,
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

// Create the context
export const AppContext = createContext()

// Create the context provider
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
