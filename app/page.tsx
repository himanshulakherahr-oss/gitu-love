"use client";

import { useState } from "react";

const experiences = [
  {
    emoji: "💌",
    title: "Love Letter",
    text: "Turn your feelings into a beautiful surprise.",
    link: "/create",
  },
  {
    emoji: "🎂",
    title: "Birthday Surprise",
    text: "Make their special day unforgettable.",
    link: "/create",
  },
  {
    emoji: "💍",
    title: "Proposal",
    text: "Create a magical moment they'll never forget.",
    link: "/create",
  },
  {
    emoji: "🧩",
    title: "Photo Puzzle",
    text: "Turn your favorite memories into an experience.",
    link: "/create",
  },
  {
    emoji: "👫",
    title: "Best Friend",
    text: "Celebrate the friendship that means everything.",
    link: "/create",
  },
  {
    emoji: "🥂",
    title: "Anniversary",
    text: "Celebrate your journey together.",
    link: "/create",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#241b1d]">
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#fffaf7]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight transition hover:scale-105"
          >
            Gitu<span className="text-[#e85d75]">Love</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#experiences"
              className="text-sm transition hover:text-[#e85d75]"
            >
              Experiences
            </a>

            <a
              href="#how"
              className="text-sm transition hover:text-[#e85d75]"
            >
              How it works
            </a>

            <a
              href="#faq"
              className="text-sm transition hover:text-[#e85d75]"
            >
              FAQ
            </a>

            <a
              href="/create"
              className="rounded-full bg-[#241b1d] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#e85d75]"
            >
              Create a surprise
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-black/10 px-3 py-2 transition hover:border-[#e85d75] md:hidden"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/5 bg-[#fffaf7] px-6 py-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#experiences"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-[#e85d75]"
              >
                Experiences
              </a>

              <a
                href="#how"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-[#e85d75]"
              >
                How it works
              </a>

              <a
                href="#faq"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-[#e85d75]"
              >
                FAQ
              </a>

              <a
                href="/create"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#241b1d] px-5 py-3 text-center text-white transition hover:bg-[#e85d75]"
              >
                Create a surprise
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36 sm:pb-32">
        <div className="absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-[-100px] top-20 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#e85d75]/20 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              ✨ Make a moment they'll remember
            </div>

            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Create something
              <span className="block text-[#e85d75]">
                they'll never forget.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6f6265]">
              Turn your memories, words and photos into a beautiful
              interactive surprise that you can share with someone special.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/create"
                className="rounded-full bg-[#241b1d] px-7 py-4 text-center font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#e85d75] hover:shadow-xl"
              >
                Create your surprise →
              </a>

              <a
                href="#experiences"
                className="rounded-full border border-black/10 bg-white px-7 py-4 text-center font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#e85d75] hover:text-[#e85d75] hover:shadow-md"
              >
                Explore experiences
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-[#76696c]">
              <span className="flex -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-pink-200 shadow-sm">
                  ❤️
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-orange-200 shadow-sm">
                  😊
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-purple-200 shadow-sm">
                  ✨
                </span>
              </span>

              Over 1,000 beautiful moments created ❤️
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-pink-200/50 to-orange-200/50 blur-2xl" />

            <div className="relative rounded-[36px] border border-white/80 bg-white/80 p-4 shadow-[0_25px_80px_rgba(36,27,29,0.12)] backdrop-blur-xl">
              <div className="rounded-[28px] bg-gradient-to-br from-[#fff0f3] via-white to-[#fff3e8] p-8 sm:p-10">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-md transition duration-500 hover:scale-110 hover:rotate-6">
                    💌
                  </div>

                  <p className="mt-7 text-sm font-medium text-[#e85d75]">
                    A little surprise for you
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    You mean the world to me.
                  </h2>

                  <p className="mx-auto mt-4 max-w-sm leading-7 text-[#75696c]">
                    Some memories are too special to simply keep in a photo
                    gallery.
                  </p>

                  <div className="mt-7 grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-200 shadow-sm transition duration-300 hover:-translate-y-1" />

                    <div className="h-24 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-200 shadow-sm transition duration-300 hover:-translate-y-1" />

                    <div className="h-24 rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-200 shadow-sm transition duration-300 hover:-translate-y-1" />
                  </div>

                  <a
                    href="/create"
                    className="mt-7 inline-block rounded-full bg-[#e85d75] px-7 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#d94d68]"
                  >
                    Open your surprise ❤️
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-medium text-[#e85d75]">CHOOSE YOUR MOMENT</p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Make it personal.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#75696c]">
              Pick an experience and make it yours with your photos, memories
              and words.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-black/5 bg-[#fffaf7] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#e85d75]/20 hover:shadow-[0_20px_50px_rgba(36,27,29,0.10)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-md transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {item.emoji}
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-[#75696c]">{item.text}</p>

                <a
                  href={item.link || "/create"}
                  className="mt-6 inline-block font-semibold text-[#e85d75] transition hover:translate-x-1"
                >
                  Create yours →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-medium text-[#e85d75]">HOW IT WORKS</p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              From idea to unforgettable.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#241b1d] text-xl font-bold text-white shadow-lg">
                1
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Choose an experience
              </h3>

              <p className="mt-3 leading-7 text-[#75696c]">
                Pick the kind of surprise you want to create.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e85d75] text-xl font-bold text-white shadow-lg">
                2
              </div>

              <h3 className="mt-6 text-xl font-bold">Make it yours</h3>

              <p className="mt-3 leading-7 text-[#75696c]">
                Add names, messages, photos and your favorite memories.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f2a65a] text-xl font-bold text-white shadow-lg">
                3
              </div>

              <h3 className="mt-6 text-xl font-bold">Share the magic</h3>

              <p className="mt-3 leading-7 text-[#75696c]">
                Get your personal link and send it to someone special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] bg-[#241b1d] px-8 py-16 text-center text-white shadow-2xl sm:px-16">
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-orange-400/20 blur-3xl" />

          <div className="relative">
            <p className="text-[#ff9daf]">YOUR NEXT MOMENT STARTS HERE</p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              Don't just say it.
              <span className="text-[#ff9daf]"> Make them feel it.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
              Create a beautiful personalized surprise in just a few minutes.
            </p>

            <a
              href="/create"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#241b1d] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ff9daf]"
            >
              Create a surprise ❤️
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-medium text-[#e85d75]">FAQ</p>

            <h2 className="mt-3 text-4xl font-bold">Questions?</h2>
          </div>

          <div className="mt-12 space-y-4">
            <details className="group rounded-2xl border border-black/5 bg-[#fffaf7] p-6 transition hover:shadow-md">
              <summary className="cursor-pointer font-semibold">
                How does it work?
              </summary>

              <p className="mt-4 leading-7 text-[#75696c]">
                Choose an experience, personalize it with your content and
                share the generated experience with someone special.
              </p>
            </details>

            <details className="group rounded-2xl border border-black/5 bg-[#fffaf7] p-6 transition hover:shadow-md">
              <summary className="cursor-pointer font-semibold">
                Can I add my own photos?
              </summary>

              <p className="mt-4 leading-7 text-[#75696c]">
                Yes. You can upload and use your own photos inside your
                personalized surprise.
              </p>
            </details>

            <details className="group rounded-2xl border border-black/5 bg-[#fffaf7] p-6 transition hover:shadow-md">
              <summary className="cursor-pointer font-semibold">
                Will it work on mobile?
              </summary>

              <p className="mt-4 leading-7 text-[#75696c]">
                Yes. The experience is designed to work across phones,
                tablets and computers.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="text-xl font-bold">
            Gitu <span className="text-[#e85d75]">Love</span>
          </div>

          <p className="text-sm text-[#75696c]">
            Made with ❤️ for unforgettable moments.
          </p>
        </div>
      </footer>
    </main>
  );
}