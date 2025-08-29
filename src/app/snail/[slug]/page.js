import Image from 'next/image'
import { notFound } from 'next/navigation'
import { snails } from '../../../lib/data'

export function generateStaticParams() {
  return snails.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }) {
  const s = snails.find(x => x.slug === params.slug)
  return { title: s ? `${s.name} — Spirit Snails` : 'Spirit Snails' }
}

export default function SnailPage({ params }) {
  const s = snails.find(x => x.slug === params.slug)
  if (!s) return notFound()

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square rounded-3xl overflow-hidden border">
          <Image
            src={(s.images && s.images[0]) || '/images/hero-habitat.jpg'}
            alt={s.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="font-display text-4xl">{s.name}{' '}
            <span className="italic text-neutral-500">{s.epithet}</span>
          </h1>
          <p className="mt-4 text-neutral-700">{s.bio}</p>
          <p className="mt-1 text-neutral-500">{s.meaning}</p>

          <div className="mt-6 flex items-center gap-3">
            <button
              className="px-4 py-2 rounded-full bg-coral text-white disabled:opacity-50"
              disabled={s.status === 'adopted'}
            >
              Add to Cart
            </button>
            <button className="px-4 py-2 rounded-full border">♥ Favorite</button>
            {s.status === 'adopted' && (
              <span className="ml-auto rounded-full bg-emerald-600 text-white text-xs px-2 py-1">
                Adopted
              </span>
            )}
            {s.status === 'reserved' && (
              <span className="ml-auto rounded-full bg-amber-500 text-white text-xs px-2 py-1">
                Reserved
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
