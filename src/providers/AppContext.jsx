import React, { createContext, useReducer } from 'react'
import leftMenuContentTitles from '../config/leftMenuContentTitles'
import FindData from '../components/FindData'
import UploadData from '../components/UploadData'

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
    case leftMenuContentTitles.FIND_DATA._id:
      return {
        ...state,
        leftMenuContent: {
          title: leftMenuContentTitles.FIND_DATA.title,
          content: <FindData title={leftMenuContentTitles.FIND_DATA.title} />,
        },
      }
    case leftMenuContentTitles.UPLOAD_DATA._id:
      return {
        ...state,
        leftMenuContent: {
          title: leftMenuContentTitles.UPLOAD_DATA.title,
          content: <UploadData title={leftMenuContentTitles.UPLOAD_DATA.title} />,
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
