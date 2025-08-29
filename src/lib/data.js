// Temporary sample data for your site. You can replace this later.

export const snails = [
  {
    id: 'aurelia-001',
    slug: 'aurelia-001',
    name: 'Aurelia',
    epithet: 'The Dawn Walker',
    bio: 'Glides where light first touches, reminding us to begin gently.',
    meaning: 'Patience • Renewal • Quiet Courage',
    price: 68,
    status: 'available', // 'available' | 'reserved' | 'adopted'
    images: ['/images/hero-habitat.jpg'],
    tags: ['gold','spiral','dawn']
  },
  {
    id: 'cosmo-002',
    slug: 'cosmo-002',
    name: 'Cosmo',
    epithet: 'Shell of Stars',
    bio: 'Carries a night sky on his back; a guide for dreamers.',
    meaning: 'Wonder • Balance • Protection',
    price: 72,
    status: 'available',
    images: ['/images/hero-habitat.jpg'],
    tags: ['blue','stars','night']
  },
  {
    id: 'verdantia-003',
    slug: 'verdantia-003',
    name: 'Verdantia',
    epithet: 'Garden Guardian',
    bio: 'Blesses small beginnings and keeps creative roots steady.',
    meaning: 'Growth • Grounding • Harmony',
    price: 64,
    status: 'adopted',
    images: ['/images/hero-habitat.jpg'],
    tags: ['green','garden']
  }
];

// One sample habitat with a few clickable hotspots.
// coords are [x, y, w, h] as percentages (0..1) of the image size.
export const habitats = [
  {
    id: 'habitat-i',
    title: 'Habitat I',
    image: '/images/hero-habitat.jpg',
    hotspots: [
      { snailId: 'aurelia-001',   coords: [0.58, 0.34, 0.10, 0.12] },
      { snailId: 'cosmo-002',     coords: [0.32, 0.46, 0.10, 0.12] },
      { snailId: 'verdantia-003', coords: [0.12, 0.78, 0.12, 0.14] }
    ]
  }
];
