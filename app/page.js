"use client";
import CustomAudioPlayer from "./components/audio-player";
import Maqamaat from "./components/maqamaat";
import { UrlContext } from "./hooks/use-url-context";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState(null);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <UrlContext.Provider value={{ url, setUrl }}>
        <Maqamaat />
        <CustomAudioPlayer src={url} />
      </UrlContext.Provider>
    </div>
  );
}
