export default function About(){
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl mb-6">About Spirit Snails</h1>
      <p className="text-neutral-700 leading-relaxed mb-8">
        Spirit Snails began as a meditation on patience and presence. Each piece is hand-crafted, named, and paired with a spiritual story—inviting you to slow down and notice the small magic in daily life.
      </p>
      <h2 className="font-display text-2xl mb-3">Photo Gallery</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {[...Array(6)].map((_,i)=>(
          <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border bg-sand"/>
        ))}
      </div>
      <h2 className="font-display text-2xl mb-3">Videos</h2>
      <div className="space-y-6">
        <div className="rounded-xl overflow-hidden border aspect-video bg-black/5 grid place-items-center text-neutral-500">Add self-hosted video</div>
        <div className="rounded-xl overflow-hidden border aspect-video bg-black/5 grid place-items-center text-neutral-500">Add YouTube/Vimeo link</div>
      </div>
    </div>
  )
}
