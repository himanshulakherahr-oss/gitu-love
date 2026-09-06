"use client";

import { useRef, useState } from "react";

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      await audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/love-music.mp3" loop />

      <button
        onClick={toggleMusic}
        className="mt-5 rounded-full bg-[#241b1d] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#e85d75]"
      >
        {playing ? "Pause Music ⏸️" : "Play Music 🎵"}
      </button>
    </>
  );
}