import { adminSupabase } from "@/lib/adminSupabase";
import MusicButton from "@/components/MusicButton";
import PhotoSlideshow from "@/components/PhotoSlideshow";

export default async function SurprisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: surprise, error } = await adminSupabase
    .from("surprises")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !surprise) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fffaf7]">
        <h1 className="text-2xl font-bold">
          Surprise not found 💔
        </h1>
      </main>
    );
  }

  const name = surprise.name;
  const from = surprise.from_name;
  const message = surprise.message;
  const photos = surprise.photos || [];
  const shareUrl = `https://gitu-love.vercel.app/s/${id}`;
  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#241b1d]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
  <span className="floating-heart left-[10%]">❤️</span>
  <span className="floating-heart left-[30%] [animation-delay:2s]">💕</span>
  <span className="floating-heart left-[50%] [animation-delay:4s]">❤️</span>
  <span className="floating-heart left-[70%] [animation-delay:1s]">💗</span>
  <span className="floating-heart left-[90%] [animation-delay:3s]">💖</span>
</div>
      <section className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl">
          <div className="suprise-cardrounded-[40px] bg-white p-5 shadow-2xl sm:p-8"
>
            <div className="rounded-[32px] bg-gradient-to-br from-[#fff0f3] to-[#fff3e8] px-6 py-12 text-center sm:px-12">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow-md">
                💌
              </div>

              <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-[#e85d75]">
                A little surprise for you
              </p>

              <details className="mt-8">
  <summary className="mx-auto w-fit cursor-pointer rounded-full bg-[#241b1d] px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#e85d75]">
    Open your surprise ❤️
  </summary>
              <div className="surprise-content">
              <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
                Dear {name},
              </h1>

              <div className="mx-auto mt-8 max-w-2xl rounded-3xl bg-white/70 p-7">
                <p className="whitespace-pre-wrap text-lg leading-8 text-[#5f5356] sm:text-xl">
                  {message}
                </p>
              </div>

              <PhotoSlideshow photos={photos} />

              <p className="mt-10 text-lg font-semibold">
                With love,
                <br />
                <span className="text-[#e85d75]">
                  {from} ❤️
                </span>
              
              </p>
              <MusicButton />
              <div className="mt-8">
  <a
    href={`https://wa.me/?text=${encodeURIComponent(
      `I made a special surprise for you ❤️\n\n${shareUrl}`
    )}`}
    className="inline-flex rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:scale-105"
  >
    Share on WhatsApp 💚
  </a>
</div>

          </div>
           </details>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}