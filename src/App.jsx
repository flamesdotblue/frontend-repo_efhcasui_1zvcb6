import React from 'react';
import Navbar from './components/Navbar';
import CoverCarousel from './components/CoverCarousel';
import SectionRow from './components/SectionRow';
import Footer from './components/Footer';

const mockCovers = [
  {
    title: 'Starlight Chronicles',
    subtitle: 'A cosmic odyssey across forgotten galaxies',
    cover:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=900&auto=format&fit=crop',
    rating: '4.9',
  },
  {
    title: 'Whispers of the Forest',
    subtitle: 'Ancient spirits awaken in the elder woods',
    cover:
      'https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?q=80&w=900&auto=format&fit=crop',
    rating: '4.7',
  },
  {
    title: 'Clockwork City',
    subtitle: 'Steampunk intrigue in a city of gears',
    cover:
      'https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=900&auto=format&fit=crop',
    rating: '4.8',
  },
  {
    title: 'The Last Oracle',
    subtitle: 'A prophecy that could shatter empires',
    cover:
      'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?q=80&w=900&auto=format&fit=crop',
    rating: '4.6',
  },
  {
    title: 'Nebula Drift',
    subtitle: 'Smugglers, starlanes, and a found family',
    cover:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=900&auto=format&fit=crop',
    rating: '4.5',
  },
  {
    title: 'Ink & Ember',
    subtitle: 'A scribe discovers a living grimoire',
    cover:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900&auto=format&fit=crop',
    rating: '4.7',
  },
  {
    title: 'Desert of Glass',
    subtitle: 'Wanderers chase a mirage of truth',
    cover:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=900&auto=format&fit=crop',
    rating: '4.4',
  },
  {
    title: 'Moonlit Accord',
    subtitle: 'A truce forged under silver skies',
    cover:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=900&auto=format&fit=crop',
    rating: '4.6',
  },
  {
    title: 'Crimson Harbor',
    subtitle: 'Pirates rule the tide of fate',
    cover:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=900&auto=format&fit=crop',
    rating: '4.3',
  },
  {
    title: 'Hollow Crown',
    subtitle: 'A fallen royal seeks redemption',
    cover:
      'https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=900&auto=format&fit=crop',
    rating: '4.8',
  },
];

export default function App() {
  const popular = mockCovers.slice(0, 6);
  const recent = [...mockCovers].reverse().slice(0, 6);
  const completed = mockCovers.slice(4, 10);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      <main>
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  Discover your next favorite novel
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
                  A cinematic way to browse stories. Scroll through a living wall of covers and dive into curated shelves below.
                </p>
                <div className="flex gap-3 pt-2">
                  <button className="rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500 transition">
                    Start Reading
                  </button>
                  <button className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900 transition">
                    Explore Genres
                  </button>
                </div>
              </div>

              <CoverCarousel items={[...mockCovers, ...mockCovers]} />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-6">
          <SectionRow title="Popular" items={popular} />
          <SectionRow title="Recently Added" items={recent} />
          <SectionRow title="Completed" items={completed} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
