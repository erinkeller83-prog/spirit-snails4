import Image from 'next/image'
import Link from 'next/link'

export default function ShopLanding(){
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-center mb-8">
        Choose how you’d like to shop Spirit Snails.
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Interactive Gallery card */}
        <div className="rounded-3xl overflow-hidden border hover:shadow-soft transition">
          <Image
            src="/images/hero-habitat.jpg"
            alt="Interactive Gallery"
            width={1600}
            height={1000}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="font-display text-2xl mb-1">Shop Interactive Gallery</h2>
            <p className="text-neutral-700 mb-3">
              Browse the habitat and adopt the snail that calls to you.
            </p>
            <Link href="/shop/gallery" className="inline-block px-4 py-2 rounded-full bg-coral text-white">
              Enter Gallery
            </Link>
          </div>
        </div>

        {/* Grid card */}
        <div className="rounded-3xl overflow-hidden border hover:shadow-soft transition">
          <div className="w-full h-64 bg-gradient-to-br from-sand to-white grid place-items-center text-neutral-400">
            Grid preview
          </div>
          <div className="p-4">
            <h2 className="font-display text-2xl mb-1">Shop Grid (Individually)</h2>
            <p className="text-neutral-700 mb-3">
              See each snail individually in a classic scrollable grid.
            </p>
            <Link href="/shop/grid" className="inline-block px-4 py-2 rounded-full border">
              Browse Snails
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
