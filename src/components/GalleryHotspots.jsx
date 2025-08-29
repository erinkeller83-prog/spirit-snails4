'use client'

import Image from 'next/image'
import { useState } from 'react'
import { habitats, snails } from '../lib/data'

export default function GalleryHotspots() {
  const habitat = habitats[0]
  const [activeId, setActiveId] = useState(null)
  const activeSnail = snails.find(s => s.id === activeId) || null

  return (
    <div className="space-y-6">
      {/* Habitat image with clickable hotspots */}
      <div className="relative w-full overflow-hidden rounded-3xl border">
        <div className="relative aspect-[16/9] w-full">
          <Image src={habitat.image} alt={habitat.title} fill className="object-cover" priority />
        </div>

        {/* Hotspots */}
        {habitat.hotspots.map((h, idx) => {
          const [x, y, w, hgt] = h.coords
          return (
            <button
              key={idx}
              aria-label="View snail"
              onClick={() => setActiveId(h.snailId)}
              className="absolute rounded-full ring-2 ring-coral/70 hover:ring-coral transition focus:outline-none focus:ring-4 focus:ring-coral/50"
              style={{
                left: `${x * 100}%`,
                top: `${y * 100}%`,
                width: `${w * 100}%`,
                height: `${hgt * 100}%`,
                transform: 'translate(-50%, -50%)',
                background: 'rgba(255,112,82,0.12)',
              }}
            />
          )
        })}
      </div>

      <p className="text-sm text-neutral-600">Tip: click any subtle halo to open that snail’s details.</p>

      {/* Modal */}
      {activeSnail && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
          onClick={() => setActiveId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-2xl rounded-3xl bg-white shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={(activeSnail.images && activeSnail.images[0]) || '/images/hero-habitat.jpg'}
                alt={activeSnail.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setActiveId(null)}
                className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm border hover:bg-white"
              >
                Close
              </button>
              {activeSnail.status === 'adopted' && (
                <span className="absolute top-3 left-3 rounded-full bg-emerald-600 text-white text-xs px-2 py-1">
                  Adopted
                </span>
              )}
              {activeSnail.status === 'reserved' && (
                <span className="absolute top-3 left-3 rounded-full bg-amber-500 text-white text-xs px-2 py-1">
                  Reserved
                </span>
              )}
            </div>

            <div className="p-5">
              <h2 className="font-display text-2xl">
                {activeSnail.name}{' '}
                <span className="italic text-neutral-500">{activeSnail.epithet}</span>
              </h2>
              <p className="text-neutral-700 mt-2">{activeSnail.bio}</p>
              <p className="text-neutral-500 mt-1">{activeSnail.meaning}</p>

              <div className="mt-5 flex gap-3">
                <button
                  className="px-4 py-2 rounded-full bg-coral text-white disabled:opacity-50"
                  disabled={activeSnail.status === 'adopted'}
                >
                  Add to Cart
                </button>
                <button className="px-4 py-2 rounded-full border">♥ Favorite</button>
                <a href={`/snail/${activeSnail.slug}`} className="ml-auto px-4 py-2 rounded-full border">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
