import Image from 'next/image'
import { snails } from '../../lib/data'

export const metadata = { title: 'Adopted Archive — Spirit Snails' }

export default function AdoptedArchive(){
  const adopted = snails.filter(s => s.status === 'adopted')

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl mb-6">Adopted Archive</h1>
      <p className="text-neutral-700 mb-6">A gallery of snails who’ve already found their people.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {adopted.map((s) => (
          <div key={s.slug} className="rounded-3xl overflow-hidden border">
            <div className="relative aspect-square">
              <Image
                src={(s.images && s.images[0]) || '/images/hero-habitat.jpg'}
                alt={s.name}
                fill
                className="object-cover"
              />
              <span className="absolute top-2 right-2 rounded-full bg-emerald-600 text-white text-xs px-2 py-1">
                Adopted
              </span>
            </div>
            <div className="p-4">
              <div className="font-display text-xl">{s.name} <span className="italic text-neutral-500">{s.epithet}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
