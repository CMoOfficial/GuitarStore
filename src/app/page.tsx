import { db } from '@/lib/db';
import { mapGuitarDtoToModel } from '@/mappers/guitar.mapper';
import { GuitarGrid } from '@/components/layout/GuitarGrid';

export default function Home() {
  const guitars = db.map(mapGuitarDtoToModel);

  return (
    <div className="pb-24 pt-24">
      {/* We added pt-24 to compensate for the space left by removing the HeroSection, so the grid isn't stuck under the sticky header */}
      <GuitarGrid guitars={guitars} />
    </div>
  );
}
