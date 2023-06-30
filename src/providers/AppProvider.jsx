import React, { createContext, useEffect, useState } from 'react'
// =============================================================
// DEFAULT DEFINITIONS
// =============================================================

const defaultValue = {
  // LOADING STATE
  isLoading: false,
  setIsLoading: () => {},
}

export const AppContext = createContext(defaultValue)

const AppProvider = ({ children }) => {
  // =============================================================
  // STATE DEFINITIONS
  // =============================================================

  // LOADING STATE
  const [isLoading, setIsLoading] = useState(true) // 1
  useEffect(() => {
    setIsLoading(false)
  })
  const contextValue = {
    isLoading,
    setIsLoading,
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider
