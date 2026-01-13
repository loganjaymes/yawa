import { OAuthSpotify } from "@/components/OAuthSpotify";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-zinc-50 font-sans bg-stone-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-stone-900 sm:items-start">
        <OAuthSpotify></OAuthSpotify>
      </main>
    </div>
  );
}
