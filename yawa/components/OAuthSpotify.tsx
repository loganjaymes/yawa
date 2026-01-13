"use client";

export const OAuthSpotify = () => {
  const login = () => {
    const params = new URLSearchParams({
      client_id: process.env.PUBLIC_SPOTIFY_CLIENT_ID!,
      response_type: "code",
      redirect: process.env.SPOTIFY_REDIRECT_URI!,
      scope: [
        "user-read-email",
        "user-read-private",
      ].join(" "),
      state: crypto.randomUUID(),
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  return (
    <button onClick={OAuthSpotify}>
        Log In with Spotify
    </button>
  )

}