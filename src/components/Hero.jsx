import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, ArrowRight, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[78vh] md:h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur text-sm text-slate-200">
          <Sparkles className="w-4 h-4 text-amber-300" />
          Virtual Assistant Portfolio
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Elevate your workflow with a modern, reliable VA
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-300 max-w-2xl">
          I help founders and teams save time, stay organized, and scale operations with
          efficient systems, crystal‑clear communication, and a proactive mindset.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-400 text-slate-900 font-medium px-5 py-3 hover:bg-amber-300 transition"
          >
            Book a discovery call
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition"
          >
            Explore my skills
          </a>
        </div>

        <div className="mt-10 md:mt-12 flex flex-wrap gap-6 text-sm text-slate-300">
          <div className="inline-flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            Trusted by startups and creators
          </div>
          <div className="inline-flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-300" />
            Detail‑oriented and proactive
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
