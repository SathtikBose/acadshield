import React, { createContext, useContext, useReducer } from 'react'

const AppContext = createContext(null)

const initialState = {
  user: null,
  theme: 'light',
  isMobileMenuOpen: false,
  location: 'India, Jamshedpur',
  searchQuery: '',
}

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen }
    case 'SET_MOBILE_MENU_OPEN':
      return { ...state, isMobileMenuOpen: Boolean(action.payload) }
    case 'SET_LOCATION':
      return { ...state, location: action.payload }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)



  const value = {
    state,
    dispatch,
    
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const ctx = useContext(AppContext)
  if (!ctx) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return ctx
}

export default AppContext


