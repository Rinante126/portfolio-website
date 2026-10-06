"use client";

import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="futuristic-bg portfolio-light relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* NAVBAR */}
      {/* BACKGROUND GLOW */}
<div className="glow -left-52 top-20" />
<div className="glow -right-52 top-[600px]" />
    {/* NAVBAR */}
{/* NAVBAR */}
<header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/70 backdrop-blur-xl">
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-16">

    {/* LOGO */}
    <a
      href="#home"
      className="text-xl font-black tracking-wider"
      onClick={() => setMenuOpen(false)}
    >
      D4RINX<span className="text-cyan-400">.</span>
    </a>

    {/* DESKTOP MENU */}
    <div className="hidden items-center gap-8 md:flex">
      <a
        href="#home"
        className="text-sm text-gray-400 transition hover:text-cyan-400"
      >
        Home
      </a>

      <a
        href="#about"
        className="text-sm text-gray-400 transition hover:text-cyan-400"
      >
        About
      </a>

      <a
        href="#projects"
        className="text-sm text-gray-400 transition hover:text-cyan-400"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
      >
        Contact
      </a>
    </div>

    {/* MOBILE BUTTON */}
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 md:hidden"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
    >
      <span
        className={`h-0.5 w-5 bg-white transition ${
          menuOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />

      <span
        className={`h-0.5 w-5 bg-white transition ${
          menuOpen ? "opacity-0" : ""
        }`}
      />

      <span
        className={`h-0.5 w-5 bg-white transition ${
          menuOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </button>
  </nav>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="border-t border-white/10 bg-[#030712]/95 px-6 py-5 backdrop-blur-xl md:hidden">
      <div className="flex flex-col gap-2">

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-cyan-400"
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-cyan-400"
        >
          About
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-cyan-400"
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-4 py-3 text-cyan-400 transition hover:bg-cyan-400/10"
        >
          Contact
        </a>

      </div>
    </div>
  )}
</header>

      {/* HERO */}
      {/* HERO */}
<section
  id="home"
  className="relative z-10 flex min-h-[90vh] items-center px-6 py-20 md:px-16"
>
  <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">

    {/* STATUS BADGE */}
    <div className="mb-8 inline-flex animate-float items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-gray-300">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
      </span>

      Building • Learning • Exploring AI
    </div>

    {/* INTRO */}
    <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
      Hello, I&apos;m
    </p>

    {/* NAME */}
    <h1 className="max-w-5xl break-words text-4xl font-black tracking-tight sm:text-6xl md:text-8xl">
      Rinante{" "}
      <span className="text-glow bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        Orwa
      </span>
    </h1>

    {/* ROLE */}
    <h2 className="mt-6 max-w-4xl text-2xl font-semibold text-gray-300 sm:text-3xl md:text-5xl">
      Aspiring Software &amp;{" "}
      <span className="text-cyan-400">
        AI Engineer
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
      I explore software engineering and artificial intelligence by
      transforming ideas into real projects, experiments, and digital
      products.
    </p>

    {/* BUTTONS */}
    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="#projects"
        className="rounded-xl bg-cyan-400 px-7 py-3 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
      >
        Explore Projects →
      </a>

      <a
        href="#about"
        className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold text-gray-200 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
      >
        About Me
      </a>

    </div>

    {/* STATS */}
    <div className="mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">

      <div>
        <p className="text-2xl font-black text-white md:text-3xl">
          3+
        </p>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Projects
        </p>
      </div>

      <div>
        <p className="text-2xl font-black text-white md:text-3xl">
          AI
        </p>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Focus
        </p>
      </div>

      <div>
        <p className="text-2xl font-black text-white md:text-3xl">
          ∞
        </p>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Learning
        </p>
      </div>

    </div>
    <div>
      {/* HERO VISUAL */}
{/* HERO PROFILE */}
<div className="relative hidden items-center justify-center lg:flex">

  {/* BACKGROUND GLOW */}
  <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[100px]" />

  {/* DECORATIVE RING */}
  <div className="absolute h-[390px] w-[390px] rounded-full border border-cyan-400/10" />

  {/* PHOTO */}
  <div className="group relative h-[460px] w-[360px] transition duration-500 hover:-translate-y-2 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(34,211,238,0.12)]">

    <Image
      src="/profile.png"
      alt="Rinante Orwa"
      fill
      priority
      sizes="360px"
      className="object-cover object-center transition duration-700 group-hover:scale-105"
    />

    {/* DARK GRADIENT */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent" />

    {/* BOTTOM LABEL */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
          REYNAN
        </p>

        <p className="mt-1 text-sm text-gray-300">
          Software • AI • Builder
        </p>
      </div>
    </div>

  </div>

  {/* TOP DECORATION */}
  <div className="absolute -right-3 top-10 rounded-xl border border-white/10 bg-[#030712]/80 px-4 py-2 font-mono text-xs text-cyan-400 backdrop-blur">
    &lt;/developer&gt;
  </div>

  {/* BOTTOM DECORATION */}
  <div className="absolute -bottom-4 -left-3 rounded-xl border border-purple-400/20 bg-[#030712]/80 px-4 py-2 font-mono text-xs text-purple-400 backdrop-blur">
    AI://explore
  </div>

</div>
    </div>

  </div>
</section>
      {/* ABOUT */}
<section
  id="about"
  className="border-t border-white/10 px-6 py-24 md:px-16"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
      About Me
    </p>

    <h2 className="text-4xl font-bold md:text-5xl">
      Building my future through technology.
    </h2>

    <div className="mt-10 grid gap-10 md:grid-cols-2">
      <div>
        <p className="text-lg leading-8 text-gray-400">
          I&apos;m an aspiring Software and AI Engineer interested in
          building useful applications, intelligent systems, and
          technology that solves real-world problems.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-400">
          I&apos;m continuously learning programming, web development,
          artificial intelligence, and software engineering by turning
          ideas into actual projects.
        </p>
      </div>

      {/* SKILLS */}
      {/* TECH STACK */}
<div>
  <h3 className="mb-2 text-2xl font-bold">
    Tech Stack
  </h3>

  <p className="mb-7 text-sm text-gray-500">
    Technologies I&apos;m currently learning and using.
  </p>

  <div className="grid gap-4 sm:grid-cols-2">

    {/* PROGRAMMING */}
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
        Programming
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {["Python", "JavaScript", "TypeScript"].map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* WEB */}
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
        Web Development
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {["HTML", "CSS", "React", "Next.js", "Tailwind"].map(
          (skill) => (
            <span
              key={skill}
              className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>

    {/* AI */}
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-purple-400/30">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-purple-400">
        AI Exploration
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {["AI Systems", "Prompting", "Reasoning", "AI Agents"].map(
          (skill) => (
            <span
              key={skill}
              className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>

    {/* TOOLS */}
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
        Tools
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {["VS Code", "Git", "GitHub", "Node.js"].map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</div>
    </div>
  </div>
</section>
{/* JOURNEY */}
<section className="relative z-10 border-t border-white/10 px-6 py-24 md:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="mb-14">
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
        My Journey
      </p>

      <h2 className="text-4xl font-black md:text-6xl">
        Learning by building
        <span className="text-cyan-400">.</span>
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-gray-400">
        My path into software and AI is centered around learning
        fundamentals, experimenting with ideas, and turning those ideas
        into working projects.
      </p>
    </div>

    <div className="relative ml-3 border-l border-white/10 md:ml-6">

      {/* SOFTWARE DEVELOPMENT */}
      <div className="relative pb-12 pl-8 md:pl-12">
        <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#030712] shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          Foundation
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Programming Fundamentals
        </h3>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          Building a foundation in programming through Python,
          JavaScript, problem solving, variables, functions, events,
          the DOM, and application logic.
        </p>
      </div>

      {/* WEB DEVELOPMENT */}
      <div className="relative pb-12 pl-8 md:pl-12">
        <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#030712] shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          Development
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Full-Stack Web Exploration
        </h3>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          Learning modern web development with HTML, CSS, JavaScript,
          TypeScript, React, Next.js, Tailwind CSS, APIs, and backend
          concepts.
        </p>
      </div>

      {/* AI */}
      <div className="relative pb-12 pl-8 md:pl-12">
        <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-purple-400 bg-[#030712] shadow-[0_0_15px_rgba(192,132,252,0.8)]" />

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-purple-400">
          AI Exploration
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Artificial Intelligence
        </h3>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          Exploring AI systems, agents, reasoning, memory,
          verification, prompt engineering, and how intelligent
          software can solve real-world problems.
        </p>
      </div>

      {/* CURRENT */}
      <div className="relative pl-8 md:pl-12">
        <div className="absolute -left-[9px] top-0 h-4 w-4 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,1)]" />

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          Current
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Building Real Projects
        </h3>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          Applying what I learn by developing projects such as PROVA,
          a DTR system, AI experiments, and this portfolio.
        </p>
      </div>

    </div>
  </div>
</section>
{/* PROJECTS */}
{/* PROJECTS */}
<section
  id="projects"
  className="relative z-10 border-t border-white/10 px-6 py-24 md:px-16"
>
  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADER */}
    <div className="mb-14">
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
        Selected Work
      </p>

      <h2 className="text-4xl font-black md:text-6xl">
        Featured Projects
        <span className="text-cyan-400">.</span>
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-gray-400">
        Projects and experiments I&apos;m building while exploring
        software engineering, artificial intelligence, and real-world
        problem solving.
      </p>
    </div>

    {/* PROJECT GRID */}
    <div className="grid gap-6 lg:grid-cols-3">

      {/* PROVA */}
      <article className="project-shine group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.05]">

        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-gray-500">
              01
            </span>

            <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300">
              In Development
            </span>
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
              EdTech
            </p>

            <h3 className="mt-2 text-3xl font-black">
              PROVA
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Proof of Learning OS
            </p>
          </div>

          <p className="mt-6 leading-7 text-gray-400">
            A proof-of-learning platform designed to help students
            demonstrate what they genuinely understand through
            independent assessment and evidence of learning.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "AI", "PWA"].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <span className="text-sm text-gray-500">
              Private development project
            </span>
          </div>
        </div>
      </article>

      {/* DTR SYSTEM */}
      <article className="project-shine group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.05]">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-gray-500">
              02
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              Prototype
            </span>
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
              Software
            </p>

            <h3 className="mt-2 text-3xl font-black">
              DTR System
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Digital Time Record
            </p>
          </div>

          <p className="mt-6 leading-7 text-gray-400">
            An attendance management system for recording time-in,
            time-out, attendance information, and daily records through
            a simple desktop interface.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Python", "GUI", "Database"].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <span className="text-sm text-gray-500">
              Desktop application prototype
            </span>
          </div>
        </div>
      </article>

      {/* VGI-1 */}
      <article className="project-shine group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/[0.05]">

        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition group-hover:bg-purple-500/20" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-gray-500">
              03
            </span>

            <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs text-purple-300">
              Research
            </span>
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-purple-400">
              Artificial Intelligence
            </p>

            <h3 className="mt-2 text-3xl font-black">
              VGI-1
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Experimental AI Architecture
            </p>
          </div>

          <p className="mt-6 leading-7 text-gray-400">
            An experimental AI research project exploring reasoning,
            memory, verification, learning loops, and approaches toward
            more reliable intelligent systems.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Python", "AI", "Memory", "Reasoning"].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <span className="text-sm text-gray-500">
              Experimental research concept
            </span>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
{/* CONTACT */}
{/* CONTACT */}
<section
  id="contact"
  className="relative z-10 border-t border-white/10 px-6 py-24 md:px-16"
>
  <div className="mx-auto max-w-5xl">

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur md:p-14">

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
        Get In Touch
      </p>

      <h2 className="mt-5 text-4xl font-black md:text-6xl">
        Let&apos;s build something
        <span className="text-cyan-400">.</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
        I&apos;m continuously learning, building, and exploring new
        ideas in software engineering and artificial intelligence.
      </p>

      {/* MAIN ACTIONS */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <a
          href="mailto:orwarinante1@gmail.com"
          className="rounded-xl bg-cyan-400 px-7 py-3 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
        >
          Email Me
        </a>

        <a
          href="/resume/Rinante-Orwa-CV.pdf"
          download
          className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
        >
          Download CV ↓
        </a>

      </div>

      {/* SOCIAL LINKS */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-8">

        <a
          href="YOUR_GITHUB_URL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 transition hover:text-cyan-400"
        >
          GitHub ↗
        </a>

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 transition hover:text-cyan-400"
        >
          LinkedIn ↗
        </a>

      </div>

    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
  <p>
    © 2026 D4RINX. Built with Next.js & Tailwind CSS.
  </p>
</footer>
    </main>
  );
}