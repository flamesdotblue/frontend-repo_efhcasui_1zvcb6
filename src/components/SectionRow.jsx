import React from 'react';
import { Star } from 'lucide-react';

function NovelCard({ item }) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60">
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={item.cover}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3 space-y-2">
        <h3 className="text-sm font-medium line-clamp-1">{item.title}</h3>
        <p className="text-xs text-zinc-500 line-clamp-2">{item.subtitle}</p>
        {item.rating && (
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={14} fill="currentColor" className="opacity-90" />
            <span className="text-xs font-medium">{item.rating}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SectionRow({ title, items }) {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight">{title}</h2>
        <button className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">View all</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item, idx) => (
          <NovelCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
