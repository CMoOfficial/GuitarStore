export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-slate-900/0 to-transparent -z-10" />
      
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-6 drop-shadow-sm max-w-4xl mx-auto leading-tight">
        Discover the Art of <br className="hidden md:block" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">Sonic Perfection</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-medium">
        Premium, handcrafted instruments for the modern virtuoso. Explore our exclusive collection of high-performance guitars.
      </p>
      
      <div className="flex gap-4">
        <button className="px-8 py-4 rounded-full bg-slate-50 text-slate-900 font-bold tracking-wide hover:bg-cyan-400 transition-colors shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)]">
          Shop Collection
        </button>
        <button className="px-8 py-4 rounded-full glass-panel text-slate-200 font-bold tracking-wide hover:bg-white/10 transition-all">
          View Custom Builds
        </button>
      </div>
    </section>
  );
}
