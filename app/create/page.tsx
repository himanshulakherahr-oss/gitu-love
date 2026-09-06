"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
export default function CreatePage() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [step, setStep] = useState(1);

  const handlePhotos = (files: FileList | null) => {
    if (!files) return;

    const selected = Array.from(files).slice(0, 6);

    const previews = selected.map((file) => URL.createObjectURL(file));
    setPhotoFiles(selected);
    setPhotos(previews);
  };

  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#241b1d]">
      {/* HEADER */}
      <header className="border-b border-black/5 bg-white/90">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
          <a href="/" className="text-2xl font-bold">
            Gitu<span className="text-[#e85d75]">Love</span>
          </a>

          <span className="text-sm text-[#75696c]">
            Create your surprise ❤️
          </span>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">

          {/* PROGRESS */}
          <div className="mb-10 flex justify-center gap-2">
            {[1, 2, 3, 4].map((number) => (
              <div
                key={number}
                className={`h-2 w-16 rounded-full ${
                  step >= number ? "bg-[#e85d75]" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="rounded-[32px] bg-white p-8 shadow-xl sm:p-12">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0f3] text-4xl">
                  💌
                </div>

                <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
                  Who is this surprise for?
                </h1>

                <p className="mt-3 text-[#75696c]">
                  Let's start with something simple.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div>
                  <label className="mb-2 block font-semibold">
                    Their name
                  </label>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter their name"
                    className="w-full rounded-2xl border border-black/10 bg-[#fffaf7] px-5 py-4 outline-none focus:border-[#e85d75]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold">
                    Your name
                  </label>

                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-black/10 bg-[#fffaf7] px-5 py-4 outline-none focus:border-[#e85d75]"
                  />
                </div>

                <button
                  onClick={() => {
                    if (name.trim() && from.trim()) {
                      setStep(2);
                    } else {
                      alert("Please enter both names.");
                    }
                  }}
                  className="w-full rounded-full bg-[#241b1d] px-6 py-4 font-semibold text-white hover:bg-[#e85d75]"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="rounded-[32px] bg-white p-8 shadow-xl sm:p-12">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0f3] text-4xl">
                  💖
                </div>

                <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
                  Write something special
                </h1>

                <p className="mt-3 text-[#75696c]">
                  Tell {name} what they mean to you.
                </p>
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                rows={7}
                className="mt-10 w-full resize-none rounded-2xl border border-black/10 bg-[#fffaf7] px-5 py-4 outline-none focus:border-[#e85d75]"
              />

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-full border border-black/10 px-6 py-4 font-semibold"
                >
                  ← Back
                </button>

                <button
                  onClick={() => {
                    if (message.trim()) {
                      setStep(3);
                    } else {
                      alert("Please write a message.");
                    }
                  }}
                  className="flex-1 rounded-full bg-[#241b1d] px-6 py-4 font-semibold text-white hover:bg-[#e85d75]"
                >
                  Add photos →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 - PHOTOS */}
          {step === 3 && (
            <div className="rounded-[32px] bg-white p-8 shadow-xl sm:p-12">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0f3] text-4xl">
                  📸
                </div>

                <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
                  Add your memories
                </h1>

                <p className="mt-3 text-[#75696c]">
                  Select up to 6 photos.
                </p>
              </div>

              {/* UPLOAD BOX */}
              <label className="mt-10 flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#e85d75]/30 bg-[#fffaf7] px-6 py-12 text-center transition hover:border-[#e85d75]">
                <span className="text-5xl">📷</span>

                <span className="mt-4 font-semibold">
                  Click to choose photos
                </span>

                <span className="mt-2 text-sm text-[#75696c]">
                  JPG, PNG or WEBP • Maximum 6 photos
                </span>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => handlePhotos(e.target.files)}
                />
              </label>

              {/* PHOTO PREVIEW */}
              {photos.length > 0 && (
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden rounded-2xl bg-gray-100"
                    >
                      <img
                        src={photo}
                        alt={`Memory ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="rounded-full border border-black/10 px-6 py-4 font-semibold"
                >
                  ← Back
                </button>

                <button
                  onClick={() => setStep(4)}
                  className="flex-1 rounded-full bg-[#241b1d] px-6 py-4 font-semibold text-white hover:bg-[#e85d75]"
                >
                  Preview →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 - FINAL PREVIEW */}
          {step === 4 && (
            <div className="rounded-[32px] bg-white p-6 shadow-xl sm:p-10">
              <div className="rounded-[28px] bg-gradient-to-br from-[#fff0f3] to-[#fff3e8] p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow">
                  ❤️
                </div>

                <p className="mt-6 text-sm font-medium text-[#e85d75]">
                  A little surprise for you
                </p>

                <h1 className="mt-2 text-4xl font-bold">
                  Dear {name},
                </h1>

                <p className="mx-auto mt-6 max-w-xl whitespace-pre-wrap text-lg leading-8 text-[#5f5356]">
                  {message}
                </p>

                {/* PHOTOS */}
                {photos.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {photos.map((photo, index) => (
                      <div
                        key={index}
                        className="aspect-square overflow-hidden rounded-2xl shadow-sm"
                      >
                        <img
                          src={photo}
                          alt={`Memory ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-8 font-semibold">
                  With love,
                  <br />
                  {from} ❤️
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setStep(3)}
                  className="rounded-full border border-black/10 px-6 py-4 font-semibold"
                >
                  ← Edit photos
                </button>

                <button
                onClick={async () => {
  const id = crypto.randomUUID();
  const photoUrls: string[] = [];

  for (const file of photoFiles) {
    const filePath = `${id}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("photos")
      .upload(filePath, file);

    if (uploadError) {
      console.error(uploadError);
      alert(`Photo upload failed:\n${uploadError.message}`);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("photos")
      .getPublicUrl(filePath);

    photoUrls.push(publicUrlData.publicUrl);
  }

  const { error } = await supabase
    .from("surprises")
    .insert({
      id,
      name,
      from_name: from,
      message,
      photos: photoUrls,
    });

  if (error) {
    console.error(error);
    alert(`Supabase Error:\n${error.message}`);
    return;
  }

  window.location.href = `/s/${id}`;
}}
                  className="flex-1 rounded-full bg-[#e85d75] px-6 py-4 font-semibold text-white hover:bg-[#d94d66]"
                >
                  Create my surprise ❤️
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}