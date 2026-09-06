import { supabase } from "@/lib/supabaseClient";


export default async function SurprisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: surprise, error } = await supabase
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
  const shareUrl = `http://localhost:3000/s/${id}`;
  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#241b1d]">
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

              <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
                Dear {name},
              </h1>

              <div className="mx-auto mt-8 max-w-2xl rounded-3xl bg-white/70 p-7">
                <p className="whitespace-pre-wrap text-lg leading-8 text-[#5f5356] sm:text-xl">
                  {message}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
               {photos.length > 0 ? (
  photos.map((photo: string, index: number) => (
    <div
  key={index}
  className="overflow-hidden rounded-3xl bg-white shadow-md"
>
  <a
    href={photo}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <img
      src={photo}
      alt={`Memory ${index + 1}`}
      className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
    />
  </a>
</div>
  ))
) : (
  <div className="col-span-3 flex aspect-video items-center justify-center rounded-3xl bg-pink-100 text-5xl">
    ❤️
  </div>
)}
              </div>

              <p className="mt-10 text-lg font-semibold">
                With love,
                <br />
                <span className="text-[#e85d75]">
                  {from} ❤️
                </span>
              </p>
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
         </div>
        </div>
      </section>
    </main>
  );
}