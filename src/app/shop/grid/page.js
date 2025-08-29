import Image from 'next/image'
import Link from 'next/link'
import { snails } from '../../../lib/data'

export const metadata = { title: 'Shop Grid — Spirit Snails' }

export default function ShopGrid(){
  const available = snails.filter(s => s.status === 'available' || s.status === 'reserved')

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl mb-6">Shop Grid</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {available.map((s) => (
          <Link
            key={s.slug}
            href={`/snail/${s.slug}`}
            className="block group rounded-3xl overflow-hidden border hover:shadow-soft transition"
          >
            <div className="relative aspect-square">
              <Image
                src={(s.images && s.images[0]) || '/images/hero-habitat.jpg'}
                alt={s.name}
                fill
                className="object-cover"
              />
              {s.status === 'reserved' && (
                <span className="absolute top-2 right-2 rounded-full bg-amber-500 text-white text-xs px-2 py-1">
                  Reserved
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="font-display text-xl">
                {s.name} <span className="italic text-neutral-500">{s.epithet}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
