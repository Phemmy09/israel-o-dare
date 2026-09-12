/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ISRAEL DARE — PAYSTACK PAYMENT & CONSULTATION GATEWAY CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Create payment pages in your Paystack dashboard (https://dashboard.paystack.com/#/pages)
 * and paste the URLs into your .env.local file or directly update the defaults below.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface PaymentLinks {
  // Gated Consultation Deposit ($50 USD / NGN equivalent)
  strategyCall50: string
  // Service Packages
  beginner800: string
  professional2500: string
  premium5000: string
  exclusive30000: string
}

export const PAYMENT_LINKS: PaymentLinks = {
  // $50 Gated Strategy Consultation Deposit (100% Credited Toward Contracts)
  strategyCall50:
    process.env.NEXT_PUBLIC_PAYSTACK_FEE_50 ||
    'https://paystack.com/pay/v9czx8c3p8',

  // $800 Beginner Tier
  beginner800:
    process.env.NEXT_PUBLIC_PAYSTACK_PKG_800 ||
    'https://paystack.com/pay/ofst3diom9',

  // $2,500 Professional Tier
  professional2500:
    process.env.NEXT_PUBLIC_PAYSTACK_PKG_2500 ||
    'https://paystack.com/pay/9e1tye5cuz',

  // $5,000 Premium Tier
  premium5000:
    process.env.NEXT_PUBLIC_PAYSTACK_PKG_5000 ||
    'https://paystack.com/pay/ei2-uzy7yb',

  // $30,000 Exclusive Tier
  exclusive30000:
    process.env.NEXT_PUBLIC_PAYSTACK_PKG_30000 ||
    'https://paystack.com/pay/25sryug2ue',
}

/**
 * Returns the direct payment URL for a given package name or ID.
 */
export function getPackagePaymentUrl(tier: 'beginner' | 'professional' | 'premium' | 'exclusive' | 'strategy-call'): string {
  switch (tier) {
    case 'strategy-call':
      return PAYMENT_LINKS.strategyCall50
    case 'beginner':
      return PAYMENT_LINKS.beginner800
    case 'professional':
      return PAYMENT_LINKS.professional2500
    case 'premium':
      return PAYMENT_LINKS.premium5000
    case 'exclusive':
      return PAYMENT_LINKS.exclusive30000
    default:
      return PAYMENT_LINKS.strategyCall50
  }
}
