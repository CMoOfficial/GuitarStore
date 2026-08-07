import { GuitarCard } from '@/components/ui/GuitarCard';
import type { GuitarModel } from '@/types/guitar';

interface GuitarGridProps {
  guitars: GuitarModel[];
}

export function GuitarGrid({ guitars }: GuitarGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-3xl font-black text-slate-100 tracking-tight">Featured Instruments</h2>
          <p className="text-slate-400 mt-2">Our latest arrivals and most sought-after models.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {guitars.map((guitar) => (
          <GuitarCard key={guitar.id} guitar={guitar} />
        ))}
      </div>
    </section>
  );
}
