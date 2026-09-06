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
  },
  {
    emoji: "💍",
    title: "Proposal",
    text: "Create a magical moment they'll never forget.",
  },
  {
    emoji: "🧩",
    title: "Photo Puzzle",
    text: "Turn your favorite memories into an experience.",
  },
  {
    emoji: "👫",
    title: "Best Friend",
    text: "Celebrate the friendship that means everything.",
  },
  {
    emoji: "🥂",
    title: "Anniversary",
    text: "Celebrate your journey together.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#241b1d]">
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#fffaf7]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <div className="text-2xl font-bold tracking-tight">
            Gitu<span className="text-[#e85d75]">Love</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#experiences" className="text-sm hover:text-[#e85d75]">
              Experiences
            </a>
            <a href="#how" className="text-sm hover:text-[#e85d75]">
              How it works
            </a>
            <a href="#faq" className="text-sm hover:text-[#e85d75]">
              FAQ
            </a>
            <a
  href="/create"
  className="rounded-full bg-[#241b1d] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#e85d75]"
>
  Create a surprise
</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-black/10 px-3 py-2 md:hidden"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/5 bg-[#fffaf7] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#experiences">Experiences</a>
              <a href="#how">How it works</a>
              <a href="#faq">FAQ</a>
              <a
              href="/create"
              className="rounded-full bg-[#241b1d] px-5 py-3 text-center text-white"
             >
             Create a surprise
            </a> 
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-[-100px] top-20 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#e85d75]/20 bg-white px-4 py-2 text-sm shadow-sm">
              ✨ Make a moment they'll remember
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Create something
              <span className="block text-[#e85d75]">they'll never forget.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6f6265]">
              Turn your memories, words and photos into a beautiful
              interactive surprise that you can share with someone special.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
               href="/create"
               className="rounded-full bg-[#241b1d] px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#e85d75]"
              >
               Create your surprise →
           </a>

              <a
                href="#experiences"
                className="rounded-full border border-black/10 bg-white px-7 py-4 text-center font-semibold transition hover:border-[#e85d75] hover:text-[#e85d75]"
              >
                Explore experiences
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-[#76696c]">
              <span className="flex -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-pink-200">
                  ❤️
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-orange-200">
                  😊
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-purple-200">
                  ✨
                </span>
              </span>
              Thousands of moments created
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-pink-200/50 to-orange-200/50 blur-2xl" />

            <div className="relative rounded-[32px] border border-black/5 bg-white p-4 shadow-2xl">
              <div className="rounded-[24px] bg-gradient-to-br from-[#fff0f3] via-white to-[#fff3e8] p-8">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-md">
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
                    <div className="h-24 rounded-2xl bg-pink-100" />
                    <div className="h-24 rounded-2xl bg-orange-100" />
                    <div className="h-24 rounded-2xl bg-purple-100" />
                  </div>

                  <button className="mt-7 rounded-full bg-[#e85d75] px-6 py-3 font-medium text-white">
                    Open your surprise ❤️
                  </button>
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
                className="group rounded-3xl border border-black/5 bg-[#fffaf7] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                  {item.emoji}
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-[#75696c]">{item.text}</p>

                <a
  href={item.link || "/create"}
  className="mt-6 inline-block font-semibold text-[#e85d75]"
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
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#241b1d] text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-6 text-xl font-bold">Choose an experience</h3>
              <p className="mt-3 leading-7 text-[#75696c]">
                Pick the kind of surprise you want to create.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e85d75] text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-6 text-xl font-bold">Make it yours</h3>
              <p className="mt-3 leading-7 text-[#75696c]">
                Add names, messages, photos and your favorite memories.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f2a65a] text-xl font-bold text-white">
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
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px] bg-[#241b1d] px-8 py-16 text-center text-white sm:px-16">
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
  className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#241b1d] transition hover:bg-[#ff9daf]"
>
  Create a surprise ❤️
</a>
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
            <details className="rounded-2xl border border-black/5 bg-[#fffaf7] p-6">
              <summary className="cursor-pointer font-semibold">
                How does it work?
              </summary>
              <p className="mt-4 leading-7 text-[#75696c]">
                Choose an experience, personalize it with your content and
                share the generated experience with someone special.
              </p>
            </details>

            <details className="rounded-2xl border border-black/5 bg-[#fffaf7] p-6">
              <summary className="cursor-pointer font-semibold">
                Can I add my own photos?
              </summary>
              <p className="mt-4 leading-7 text-[#75696c]">
                Yes. Our final version will allow you to upload and use your
                own photos inside the experience.
              </p>
            </details>

            <details className="rounded-2xl border border-black/5 bg-[#fffaf7] p-6">
              <summary className="cursor-pointer font-semibold">
                Will it work on mobile?
              </summary>
              <p className="mt-4 leading-7 text-[#75696c]">
                Yes. We will make the complete experience responsive for
                phones, tablets and computers.
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