import React from 'react'
import { createContext } from 'react'
import { useTranslation } from 'react-i18next'

interface IAppContext {
  i18nValue: string | null
}

const defaultState = {
  i18nValue: localStorage.getItem('i18nextLng'),
}

export const AppContext = createContext<IAppContext>(defaultState)

export default function AppProvider({ children }: { children: JSX.Element }) {
  const { i18n } = useTranslation()

  return (
    <AppContext.Provider
      value={{
        i18nValue: i18n.language,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
