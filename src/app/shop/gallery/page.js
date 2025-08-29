import GalleryHotspots from '../../../components/GalleryHotspots'

export default function ShopGallery(){
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl mb-4">Interactive Gallery</h1>
      <p className="text-neutral-700 mb-8">
        Explore Spirit Snails in their habitats. Click any snail to view its story and adopt.
      </p>
      <GalleryHotspots />
    </div>
  )
}
