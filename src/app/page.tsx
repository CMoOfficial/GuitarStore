import { db } from '@/lib/db';
import { mapGuitarDtoToModel } from '@/mappers/guitar.mapper';
import { HeroSection } from '@/components/layout/HeroSection';
import { GuitarGrid } from '@/components/layout/GuitarGrid';

export default function Home() {
  const guitars = db.map(mapGuitarDtoToModel);

  return (
    <div className="pb-24">
      <HeroSection />
      <GuitarGrid guitars={guitars} />
    </div>
  );
}
