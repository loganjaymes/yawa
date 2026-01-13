"use client"
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { useEffect } from 'react';

// init sdk
export default function Callback() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
    const sdk = SpotifyApi.withUserAuthorization(
        clientId, 
        "https://localhost:3000/callback", 
        ["user-top-read"]
    );
  }, []);

  return <p>test</p>

}
