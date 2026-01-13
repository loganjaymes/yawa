import { useEffect, useState } from "react";
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
const redirectUri = 'http://127.0.0.1:8080';

// auth to use API

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-zinc-50 font-sans bg-stone-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-stone-900 sm:items-start">
      
      
      </main>
    </div>
  );
}
