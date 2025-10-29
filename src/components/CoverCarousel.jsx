import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

function Cover({ src, title }) {
  return (
    <div className="relative group shrink-0 w-40 sm:w-48 md:w-56 lg:w-60 aspect-[2/3] rounded-xl overflow-hidden">
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-2 left-2 text-white text-xs sm:text-sm font-medium drop-shadow">
        {title}
      </span>
    </div>
  );
}

export default function CoverCarousel({ items = [] }) {
  // Duplicate the list to achieve seamless infinite marquee
  const marqueeItems = useMemo(() => [...items, ...items], [items]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/40" />

      <motion.div
        className="flex gap-4 will-change-transform"
        aria-label="Featured novels carousel"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {marqueeItems.map((item, idx) => (
          <Cover key={idx} src={item.cover} title={item.title} />
        ))}
      </motion.div>
    </section>
  );
}
