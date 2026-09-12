'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  CurrencyCode,
  CurrencyInfo,
  CURRENCIES,
  ALL_CURRENCIES,
  formatCurrency,
  detectLocationCurrency,
  fetchGeoCurrency,
} from '@/lib/currencies'

interface CurrencyContextType {
  currency: CurrencyCode
  setCurrency: (code: CurrencyCode) => void
  isAutoDetected: boolean
  info: CurrencyInfo
  currencies: Record<CurrencyCode, CurrencyInfo>
  allCurrencies: CurrencyCode[]
  format: (usdAmount: number) => string
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  isAutoDetected: false,
  info: CURRENCIES.USD,
  currencies: CURRENCIES,
  allCurrencies: ALL_CURRENCIES,
  format: (amount: number) => formatCurrency(amount, 'USD'),
})

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('USD')
  const [isAutoDetected, setIsAutoDetected] = useState<boolean>(false)

  // Initialize on client mount
  useEffect(() => {
    const detected = detectLocationCurrency()
    setCurrencyState(detected.currency)
    setIsAutoDetected(detected.isAutoDetected)

    // Optional background refinement if no manual choice was previously saved
    if (detected.isAutoDetected) {
      fetchGeoCurrency().then((geoCurrency) => {
        if (geoCurrency && geoCurrency !== detected.currency) {
          setCurrencyState(geoCurrency)
        }
      })
    }
  }, [])

  const handleSetCurrency = (code: CurrencyCode) => {
    setCurrencyState(code)
    setIsAutoDetected(false)
    try {
      localStorage.setItem('izzy_user_currency', code)
    } catch {}
  }

  const value: CurrencyContextType = {
    currency,
    setCurrency: handleSetCurrency,
    isAutoDetected,
    info: CURRENCIES[currency] || CURRENCIES.USD,
    currencies: CURRENCIES,
    allCurrencies: ALL_CURRENCIES,
    format: (amount: number) => formatCurrency(amount, currency),
  }

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  return useContext(CurrencyContext)
}
