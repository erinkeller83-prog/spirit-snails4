'use client'
import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="no-underline">
          <span className="font-bold text-lg">Spirit Snails</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:opacity-80">Home</Link>
          <Link href="/shop" className="px-3 py-1 rounded-full bg-[#F45B69] text-white">Shop</Link>
          <Link href="/about" className="hover:opacity-80">About</Link>
          <Link href="/events" className="hover:opacity-80">Events</Link>
          <Link href="/contact" className="hover:opacity-80">Contact</Link>
          <Link href="/subscribe" className="hover:opacity-80">Subscribe</Link>
          <Link href="/adopted" className="hover:opacity-80">Adopted Archive</Link>
        </nav>
      </div>
    </header>
  )
}
