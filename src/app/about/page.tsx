"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Hash, Search, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const collectionSteps = [
    {
      number: "01",
      title: "SOURCE",
      description:
        "We find exceptional vehicles from trusted partners and private sellers — across the world.",
      image: "/images/dealership/About/process-source.png",
    },
    {
      number: "02",
      title: "EVALUATE",
      description:
        "Each vehicle goes through a detailed inspection and history review by our expert team.",
      image: "/images/dealership/About/process-evaluate.png",
    },
    {
      number: "03",
      title: "SELECT",
      description:
        "Only the best make it in. We handpick vehicles that meet our standards for quality, performance, and value.",
      image: "/images/dealership/About/process-select.png",
    },
    {
      number: "04",
      title: "PREPARE",
      description:
        "Each vehicle is reconditioned, serviced, and detailed — so you can buy with total confidence.",
      image: "/images/dealership/About/process-prepare.png",
    },
  ];

  const standards = [
    {
      icon: Hash,
      title: "CURATED",
      description:
        "We don't chase volume. We handpick every vehicle for its quality, character, and long-term value.",
      image: "/images/dealership/About/About-OurStandards-1.png",
    },
    {
      icon: Search,
      title: "INSPECTED",
      description:
        "Every vehicle undergoes a comprehensive, multi-point inspection by our in-house specialists and partner technicians.",
      image: "/images/dealership/About/About-OurStandards-2.png",
    },
    {
      icon: ShieldCheck,
      title: "TRANSPARENT",
      description:
        "We believe in clear information, honest pricing, and open communication — before, during, and long after the sale.",
      image: "/images/dealership/About/About-OurStandards-3.png",
    },
  ];

  const stats = [
    { value: "100+", label: "PREMIUM VEHICLES\nCURATED" },
    { value: "5K+", label: "HAPPY CLIENTS\nWORLDWIDE" },
    { value: "3", label: "CORE PRINCIPLES\nALWAYS" },
  ];

  const reveal: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 1.035 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f4f0eb] font-sans text-[#0d1c17]">
      {/* ================================================================
          01 / HERO (TRUE FULL SCREEN)
      ================================================================= */}

      <section className="relative min-h-[100vh] w-full overflow-hidden bg-[#0d1c17]">
        <Image
          src="/images/dealership/About/About(Hero-1).png"
          alt="MSyntra Automotive — coastal mountain road at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

        {/* Vertical scroll marker */}
        <div className="pointer-events-none absolute right-10 top-1/2 z-20 hidden h-[220px] -translate-y-1/2 flex-col items-center lg:flex">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9e6d48]" />
          <span className="mt-4 flex-1 w-px bg-[#e7e3dc]/30" />
          <span
            className="my-4 shrink-0 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-[#e7e3dc]/70"
            style={{ writingMode: "vertical-rl" }}
          >
            SCROLL
          </span>
          <span className="h-2.5 w-2.5 shrink-0 rounded-full border border-[#e7e3dc]/50" />
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-10 flex flex-col justify-center gap-8 px-6 py-16 sm:px-12 md:px-16 lg:max-w-2xl lg:px-24"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#e7e3dc]/70">
            ABOUT MSYNTRA
          </span>

          <h1 className="font-serif text-[clamp(2rem,4.4vw,3.4rem)] font-light uppercase leading-[1.12] tracking-tight text-[#f4f0eb]">
            WE BELIEVE
            <br />
            <em className="font-serif italic not-italic">THE RIGHT CAR</em>
            <br />
            CHANGES THE WAY
            <br />
            YOU MOVE THROUGH
            <br />
            THE WORLD.
          </h1>

          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#e7e3dc]/60" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e7e3dc]/80">
              More than cars.
              <br />
              A higher standard.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================================================================
          02 / PHILOSOPHY
      ================================================================= */}

      <section className="relative w-full overflow-hidden bg-[#0a1512] px-6 py-20 text-[#e7e3dc] sm:px-12 md:px-16 lg:px-24 lg:py-28">
        {/* Background decorative curved lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1440 600"
        >
          <path
            d="M -100 600 C 300 500, 400 100, 500 -50"
            stroke="#a37951"
            strokeWidth="1"
          />
          <path
            d="M 900 650 C 1000 400, 1200 350, 1540 300"
            stroke="#a37951"
            strokeWidth="1"
          />
        </svg>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Title, Copy & Link */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-8 lg:col-span-4"
          >
            {/* Section Number & Title */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl font-light text-[#a37951]">
                01
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#a37951]">
                OUR PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-3xl font-light uppercase leading-[1.15] tracking-wide text-[#f4f0eb] md:text-4xl">
              AUTOMOTIVE
              <br />
              IS{" "}
              <em className="font-serif font-normal italic text-[#f4f0eb]">
                PERSONAL.
              </em>
            </h2>

            <div className="space-y-4 text-xs font-light leading-relaxed text-[#8a9992]">
              <p>It&apos;s more than engineering and design.</p>
              <p>It&apos;s the feeling behind the wheel.</p>
              <p>The places it takes you.</p>
              <p>And the memories it creates.</p>
              <p className="pt-2 text-[#e7e3dc]">
                We exist to make that experience
                <br />
                exceptional — every time.
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#a37951] transition-colors hover:text-[#e7e3dc]"
            >
              OUR MINDSET
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Middle Column: Custom Shaped Center Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative mx-auto h-[480px] w-full max-w-[380px] overflow-hidden lg:col-span-4 lg:h-[540px] lg:max-w-none"
          >
            <div
              className="relative h-full w-full"
              style={{
                clipPath:
                  "polygon(18% 0%, 82% 0%, 100% 25%, 85% 100%, 15% 100%, 0% 45%)",
              }}
            >
              <Image
                src="/images/dealership/About/About-OurPhilosphy.png"
                alt="Mountain road view from car interior"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Quote with Underline Divider */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col justify-center space-y-6 lg:col-span-4 lg:pl-12"
          >
            <blockquote className="font-serif text-xl font-light italic leading-relaxed text-[#e7e3dc] md:text-2xl">
              &ldquo;We don&apos;t just
              <br />
              sell cars.
              <br />
              We help people
              <br />
              find what moves
              <br />
              them.&rdquo;
            </blockquote>

            <div className="h-px w-10 bg-[#a37951]/70" />
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          03 / COLLECTION PROCESS
      ================================================================= */}

      <section className="w-full border-b border-[#dcd5c9] px-6 py-20 sm:px-12 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Block */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6 lg:col-span-4"
          >
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#8a9992]">
              02
            </span>

            <h2 className="font-serif text-3xl font-light uppercase leading-tight tracking-wider text-[#0d1c17] md:text-4xl">
              HOW VEHICLES
              <br />
              ENTER THE
              <br />
              COLLECTION.
            </h2>

            <p className="max-w-xs text-xs font-light leading-relaxed text-[#5d6863]">
              Every vehicle in our collection is carefully selected through a
              rigorous process. We look beyond the surface — assessing history,
              performance, and long-term value.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9e6d48] transition-colors hover:text-[#0d1c17]"
            >
              OUR PROCESS
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Right Block: Steps with Continuous Line */}
          <div className="relative lg:col-span-8">
            {/* Continuous Horizontal Line across all circles on desktop */}
            <div className="absolute top-5 left-6 right-6 hidden h-px bg-[#dcd5c9] lg:block" />

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {collectionSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
                  className="relative flex flex-col justify-between space-y-4"
                >
                  <div className="relative z-10 flex items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dcd5c9] bg-[#f4f0eb] font-mono text-xs text-[#8a9992]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#0d1c17]">
                    {step.title}
                  </h3>

                  <p className="text-[11px] font-light leading-relaxed text-[#5d6863]">
                    {step.description}
                  </p>

                  <div className="relative mt-2 h-24 w-full overflow-hidden rounded-lg">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          04 / OUR STANDARDS
      ================================================================= */}

      <section className="relative w-full bg-[#0d1c17] text-[#e7e3dc]">
        <div className="flex w-full flex-col sm:h-[400px] sm:flex-row lg:h-[480px]">
          {/* Left Title Panel */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative flex flex-col justify-between bg-[#0a1512] p-8 sm:w-[30%] sm:p-10 lg:w-[26%] lg:p-14 sm:[clip-path:polygon(0_0,calc(100%-40px)_0,100%_100%,0_100%)]"
          >
            <div className="space-y-5 sm:space-y-4 lg:space-y-6">
              <span className="font-serif text-2xl font-light text-[#a37951]">
                03
              </span>
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#a37951]">
                OUR STANDARDS
              </p>
              <h2 className="font-serif text-2xl font-light uppercase leading-[1.2] tracking-wider text-[#f4f0eb] md:text-3xl lg:text-4xl">
                THREE PRINCIPLES.
                <br />
                ZERO COMPROMISE.
              </h2>
            </div>

            <div className="mt-12 hidden h-px w-12 bg-[#a37951] sm:block" />
          </motion.div>

          {/* Standard Panels — interlocking, no gaps */}
          <div className="flex flex-col sm:flex-1 sm:flex-row">
            {standards.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
                  className="group relative flex min-h-[220px] flex-1 flex-col justify-end p-6 text-center sm:min-h-0 sm:p-5 lg:p-7 sm:[margin-left:-41px] sm:[clip-path:polygon(0_0,calc(100%-40px)_0,100%_100%,40px_100%)]"
                  style={{ zIndex: index + 1 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c17] via-[#0d1c17]/60 to-black/20" />

                  {/* Centered Circular Icon */}
                  <div className="relative z-10 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#a37951]/50 bg-[#0d1c17]/70 backdrop-blur-md sm:mb-6 sm:h-12 sm:w-12">
                    <IconComponent className="h-4 w-4 text-[#a37951] sm:h-5 sm:w-5" />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 space-y-2 px-2 sm:space-y-3 sm:px-4">
                    <h3 className="font-serif text-xs font-light uppercase tracking-widest text-[#f4f0eb] sm:text-sm">
                      {item.title}
                    </h3>

                    <p className="text-[10px] font-light leading-relaxed text-[#8a9992] sm:text-[11px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          05 / OUR STORY
      ================================================================= */}

      <section className="w-full border-b border-[#dcd5c9] px-6 py-20 sm:px-12 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Text Block */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col justify-center gap-5 lg:col-span-4"
          >
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#8a9992]">
              04 — OUR STORY
            </span>
            <h2 className="font-serif text-3xl font-light uppercase leading-tight tracking-wider text-[#0d1c17] md:text-4xl">
              BUILT ON PASSION.
              <br />
              DRIVEN BY TRUST.
            </h2>
            <div className="max-w-sm space-y-3 text-xs font-light leading-relaxed text-[#5d6863]">
              <p>
                MSyntra Automotive began with a simple idea: to reimagine the
                car buying experience. We&apos;re a team of automotive
                enthusiasts, advisors, and perfectionists who believe in doing
                things the right way.
              </p>
              <p>
                We&apos;re not here to be the biggest. We&apos;re here to be the
                most trusted. For our clients. For our community. For the road
                ahead.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9e6d48] transition-colors hover:text-[#0d1c17]"
            >
              OUR JOURNEY
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Center Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative h-[320px] w-full overflow-hidden rounded-sm lg:col-span-5 lg:h-[380px]"
          >
            <Image
              src="/images/dealership/About/About-OurStory.png"
              alt="MSyntra Automotive — Mountain road driving"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />
          </motion.div>

          {/* Right Stats Column */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col justify-center space-y-6 lg:col-span-3 lg:pl-4"
          >
            {stats.map((stat, idx) => (
              <div key={stat.value} className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-3xl font-light text-[#0d1c17] md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="whitespace-pre-line font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-[#8a9992]">
                    — {stat.label}
                  </span>
                </div>
                {idx < stats.length - 1 && (
                  <div className="h-px w-full bg-[#dcd5c9]/60" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          06 / FINAL CTA
      ================================================================= */}

      <section className="relative flex min-h-[360px] md:min-h-[420px] w-full items-center overflow-hidden">
        <Image
          src="/images/dealership/About/About-FinalCTA.png"
          alt="Road ahead at sunset with Porsche driving along coastal cliffs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Darkening overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/60" />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 flex w-full flex-col items-start justify-between gap-8 px-6 py-12 sm:flex-row sm:items-center sm:px-12 md:px-16 lg:px-24"
        >
          {/* Left Text Stack */}
          <div className="space-y-3">
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#a37951]">
              THE JOURNEY CONTINUES
            </span>
            <h2 className="font-serif text-3xl font-light uppercase leading-tight tracking-wider text-[#f4f0eb] md:text-4xl lg:text-5xl">
              READY FOR
              <br />
              WHAT&apos;S NEXT?
            </h2>
          </div>

          {/* Right Action Button */}
          <Link
            href="/inventory"
            className="group inline-flex items-center gap-3 border border-[#a37951]/60 bg-[#0d1c17]/40 px-6 py-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-[#f4f0eb] backdrop-blur-sm transition-all hover:border-[#a37951] hover:bg-[#0d1c17]/80 hover:text-[#a37951]"
          >
            EXPLORE THE COLLECTION
            <ArrowUpRight className="h-4 w-4 text-[#a37951] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}