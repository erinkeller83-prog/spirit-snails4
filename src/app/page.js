import Image from 'next/image'
import Link from 'next/link'
import RotatingSnail from '../components/RotatingSnail'
import StoryBlock from '../components/StoryBlock'

export default function Home(){
  return (
    <div>
      {/* Hero text */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="text-center mb-4">
          <h1 className="font-display text-5xl">Spirit Snails</h1>
          <p className="mt-2 text-neutral-700">Handmade Collectible Snails with Soul</p>
        </div>
      </section>

      {/* Hero image */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl overflow-hidden shadow-soft">
          <Image src="/images/hero-habitat.jpg" alt="Spirit Snails habitat teaser" width={1600} height={1000} className="w-full h-auto object-cover"/>
        </div>
        <div className="text-center mt-4">
          <Link href="/shop/gallery" className="inline-block px-6 py-3 rounded-full bg-coral text-white shadow-soft hover:opacity-90">Enter Interactive Gallery</Link>
          <div className="text-sm text-neutral-600 mt-2">Browse the habitat and adopt the snail that calls to you.</div>
        </div>
      </section>

      {/* Story + Rotating Snail */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <StoryBlock />
        </div>
        <div>
          <RotatingSnail />
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="mx-auto max-w-6xl px-4 py-8 text-center">
        <h3 className="font-display text-2xl mb-2">Browse all Spirit Snails individually</h3>
        <Link href="/shop/grid" className="inline-block px-5 py-2 rounded-full border hover:bg-sand">Shop the Grid</Link>
      </section>

      {/* Subscribe strip */}
      <section className="bg-sand py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h4 className="font-display text-xl mb-2">Get first dibs on new batches & drops</h4>
          <form className="mx-auto max-w-md flex gap-2">
            <input className="flex-1 border rounded-full px-4 py-2" placeholder="you@example.com" type="email" required/>
            <button className="px-4 py-2 rounded-full bg-tealdeep text-white">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}
