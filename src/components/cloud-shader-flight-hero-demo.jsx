"use client";

import { motion } from "motion/react";

import { CloudShader } from "@/components/ui/cloud-shader";

export default function CloudShaderFlightHeroDemo() {
  return (
    <div
      className="relative h-dvh min-h-[40rem] w-full overflow-hidden bg-linear-to-t from-[#8cbfe8] to-[#3876ba]">
      {/* clouds drift left to right; the sky fades in softly on mount */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}>
        {/* the shader renders at half size and upscales 2x — the clouds are
            soft so nothing visible is lost, and the GPU does a quarter of
            the fragment work, which keeps the drift smooth */}
        <div className="absolute h-1/2 w-1/2 origin-top-left scale-200">
          <CloudShader speed={1} className="absolute inset-0" />
        </div>
      </motion.div>

      {/* navbar */}
      <nav
        className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-4 pt-6 md:px-8">
        <div className="flex items-center gap-10">
          <span className="text-lg font-semibold tracking-tight text-white">
            Skyline
          </span>
          <div
            className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
            <a href="#" className="transition hover:text-white">
              Flights
            </a>
            <a href="#" className="transition hover:text-white">
              Hotels
            </a>
            <a href="#" className="transition hover:text-white">
              Deals
            </a>
            <a href="#" className="transition hover:text-white">
              Support
            </a>
          </div>
        </div>
        <a
          href="#"
          className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-white/90">
          Sign in
        </a>
      </nav>

      {/* hero content, left aligned with the navbar */}
      <div
        className="relative z-20 mx-auto mt-16 w-full max-w-7xl px-4 md:mt-24 md:px-8">
        <div className="max-w-2xl">
          <h1
            className="text-4xl font-bold tracking-tight text-white [text-shadow:0_2px_12px_rgba(15,42,67,0.35)] md:text-6xl">
            Your window seat to anywhere on Earth
          </h1>
          <p className="mt-4 max-w-xl text-base text-balance text-white/85 md:text-lg">
            Search 400+ airlines, watch fares drop in real time, and book in
            under a minute. No hidden fees, no fine print, just you and the
            clouds.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
              Book a flight
            </a>
            <a
              href="#"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Explore destinations
            </a>
          </div>

          {/* social proof */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://assets.aceternity.com/avatars/${i}.webp`}
                  alt={`Traveller ${i}`}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-white/80 object-cover" />
              ))}
            </div>
            <p className="text-sm text-white/85">
              <span className="font-semibold text-white">Manu</span> and 5
              others saved 30% on their last trip
            </p>
          </div>
        </div>
      </div>

      {/* window-seat wing view with a gentle in-flight bob */}
      <motion.div
        className="pointer-events-none absolute -bottom-6 left-0 z-10 w-[85%] md:w-[70%]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
        <img
          src="https://assets.aceternity.com/components/plane-wing.png"
          alt="Airplane wing above the clouds"
          className="h-auto w-full object-cover" />
      </motion.div>
    </div>
  );
}
