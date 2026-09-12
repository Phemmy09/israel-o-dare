/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ISRAEL DARE — MULTI-CURRENCY CONVERSION & PAYSTACK SETTLEMENT ENGINE
 * ─────────────────────────────────────────────────────────────────────────────
 * Automatically detects visitor's country/currency via timezone & locale,
 * allows user override with persistent storage, and formats dynamic prices.
 * Paystack accepts international Visa, Mastercard, Verve, Amex, and Apple Pay.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type CurrencyCode =
  | 'USD'
  | 'NGN'
  | 'GBP'
  | 'EUR'
  | 'CAD'
  | 'AUD'
  | 'ZAR'
  | 'KES'
  | 'GHS'
  | 'AED'

export interface CurrencyInfo {
  code: CurrencyCode
  symbol: string
  name: string
  country: string
  rateFromUsd: number
  flag: string
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    country: 'United States & Global',
    rateFromUsd: 1,
    flag: '🇺🇸',
  },
  NGN: {
    code: 'NGN',
    symbol: '₦',
    name: 'Nigerian Naira',
    country: 'Nigeria',
    rateFromUsd: 1500,
    flag: '🇳🇬',
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    country: 'United Kingdom',
    rateFromUsd: 0.80,
    flag: '🇬🇧',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    country: 'European Union',
    rateFromUsd: 0.92,
    flag: '🇪🇺',
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    name: 'Canadian Dollar',
    country: 'Canada',
    rateFromUsd: 1.36,
    flag: '🇨🇦',
  },
  AUD: {
    code: 'AUD',
    symbol: 'A$',
    name: 'Australian Dollar',
    country: 'Australia',
    rateFromUsd: 1.52,
    flag: '🇦🇺',
  },
  ZAR: {
    code: 'ZAR',
    symbol: 'R',
    name: 'South African Rand',
    country: 'South Africa',
    rateFromUsd: 18.5,
    flag: '🇿🇦',
  },
  KES: {
    code: 'KES',
    symbol: 'KSh',
    name: 'Kenyan Shilling',
    country: 'Kenya',
    rateFromUsd: 130,
    flag: '🇰🇪',
  },
  GHS: {
    code: 'GHS',
    symbol: 'GH₵',
    name: 'Ghanaian Cedi',
    country: 'Ghana',
    rateFromUsd: 15.5,
    flag: '🇬🇭',
  },
  AED: {
    code: 'AED',
    symbol: 'AED ',
    name: 'UAE Dirham',
    country: 'United Arab Emirates',
    rateFromUsd: 3.67,
    flag: '🇦🇪',
  },
}

export const ALL_CURRENCIES: CurrencyCode[] = [
  'USD',
  'NGN',
  'GBP',
  'EUR',
  'CAD',
  'AUD',
  'ZAR',
  'KES',
  'GHS',
  'AED',
]

/**
 * Formats a USD base amount into the selected currency.
 * Handles integer and decimal amounts cleanly.
 * e.g. formatCurrency(50, 'USD') -> "$50"
 * e.g. formatCurrency(50, 'NGN') -> "₦75,000"
 * e.g. formatCurrency(49.99, 'USD') -> "$49.99"
 */
export function formatCurrency(usdAmount: number, code: CurrencyCode = 'USD'): string {
  const curr = CURRENCIES[code] || CURRENCIES.USD
  const isFloat = usdAmount % 1 !== 0
  const converted = isFloat ? usdAmount * curr.rateFromUsd : Math.round(usdAmount * curr.rateFromUsd)

  if (code === 'NGN' || code === 'KES') {
    return `${curr.symbol}${Math.round(converted).toLocaleString()}`
  }

  if (converted >= 1000) {
    return `${curr.symbol}${Math.round(converted).toLocaleString()}`
  }

  if (isFloat) {
    return `${curr.symbol}${converted.toFixed(2)}`
  }

  return `${curr.symbol}${converted}`
}

/**
 * Auto-detects visitor currency from saved choice, timezone, or browser language.
 */
export function detectLocationCurrency(): { currency: CurrencyCode; isAutoDetected: boolean } {
  if (typeof window === 'undefined') {
    return { currency: 'USD', isAutoDetected: false }
  }

  // 1. Check user's explicitly saved choice
  try {
    const saved = localStorage.getItem('izzy_user_currency') as CurrencyCode | null
    if (saved && CURRENCIES[saved]) {
      return { currency: saved, isAutoDetected: false }
    }
  } catch {}

  // 2. Timezone mapping (fast and 99% accurate for country determination)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    const tzLower = tz.toLowerCase()

    if (tzLower.includes('lagos') || tzLower.includes('nigeria')) {
      return { currency: 'NGN', isAutoDetected: true }
    }
    if (tzLower.includes('london') || tzLower.includes('belfast')) {
      return { currency: 'GBP', isAutoDetected: true }
    }
    if (tzLower.includes('accra')) {
      return { currency: 'GHS', isAutoDetected: true }
    }
    if (tzLower.includes('nairobi')) {
      return { currency: 'KES', isAutoDetected: true }
    }
    if (tzLower.includes('johannesburg')) {
      return { currency: 'ZAR', isAutoDetected: true }
    }
    if (tzLower.includes('dubai')) {
      return { currency: 'AED', isAutoDetected: true }
    }
    if (
      tzLower.includes('toronto') ||
      tzLower.includes('vancouver') ||
      tzLower.includes('montreal') ||
      tzLower.includes('edmonton') ||
      tzLower.includes('winnipeg') ||
      tzLower.includes('halifax')
    ) {
      return { currency: 'CAD', isAutoDetected: true }
    }
    if (
      tzLower.includes('sydney') ||
      tzLower.includes('melbourne') ||
      tzLower.includes('brisbane') ||
      tzLower.includes('perth') ||
      tzLower.includes('adelaide')
    ) {
      return { currency: 'AUD', isAutoDetected: true }
    }
    if (tz.startsWith('Europe/')) {
      return { currency: 'EUR', isAutoDetected: true }
    }
  } catch {}

  // 3. Browser language fallback
  try {
    const lang = (navigator.language || '').toLowerCase()
    if (lang.includes('-ng')) return { currency: 'NGN', isAutoDetected: true }
    if (lang.includes('-gb')) return { currency: 'GBP', isAutoDetected: true }
    if (lang.includes('-ca')) return { currency: 'CAD', isAutoDetected: true }
    if (lang.includes('-au')) return { currency: 'AUD', isAutoDetected: true }
    if (lang.includes('-za')) return { currency: 'ZAR', isAutoDetected: true }
    if (lang.includes('-ke')) return { currency: 'KES', isAutoDetected: true }
    if (lang.includes('-gh')) return { currency: 'GHS', isAutoDetected: true }
    if (lang.includes('-ae')) return { currency: 'AED', isAutoDetected: true }
    if (
      lang.startsWith('de') ||
      lang.startsWith('fr') ||
      lang.startsWith('es') ||
      lang.startsWith('it') ||
      lang.startsWith('nl') ||
      lang.startsWith('pt')
    ) {
      return { currency: 'EUR', isAutoDetected: true }
    }
  } catch {}

  // Default to USD
  return { currency: 'USD', isAutoDetected: true }
}

/**
 * Lightweight, non-blocking client-side IP lookup with 1.5s timeout.
 * If user hasn't selected a preference, this refines the auto-detected currency.
 */
export async function fetchGeoCurrency(): Promise<CurrencyCode | null> {
  if (typeof window === 'undefined') return null

  // Don't override if user explicitly set a choice in localStorage
  try {
    if (localStorage.getItem('izzy_user_currency')) return null
  } catch {}

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 1500)

    const res = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
    })
    clearTimeout(timeoutId)

    if (!res.ok) return null
    const data = await res.json()
    const country = (data.country_code || '').toUpperCase()

    if (country === 'NG') return 'NGN'
    if (country === 'GB') return 'GBP'
    if (country === 'CA') return 'CAD'
    if (country === 'AU') return 'AUD'
    if (country === 'ZA') return 'ZAR'
    if (country === 'KE') return 'KES'
    if (country === 'GH') return 'GHS'
    if (country === 'AE') return 'AED'
    if (['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'IE', 'FI', 'PT', 'GR'].includes(country)) {
      return 'EUR'
    }
    if (country === 'US') return 'USD'
  } catch {}

  return null
}
