import type { Metadata } from 'next'
import { catalogProducts } from '@/lib/products'
import ProductsClient from '../products/ProductsClient'

export const metadata: Metadata = {
  title: 'Shop & Systems Store | Israel Dare',
  description:
    'Production blueprints, turnkey AI codebases, and bespoke enterprise systems engineering by Israel Dare.',
}

export default function ShopPage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen pt-28 sm:pt-36 font-sans selection:bg-gold-500 selection:text-noir-950">
      <ProductsClient products={catalogProducts} />
    </div>
  )
}
