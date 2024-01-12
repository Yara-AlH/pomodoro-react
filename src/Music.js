import React from "react";
import "./Music.css";

function Music() {
  return (
    <div className="music">
      <iframe
        title="spotify"
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9sIqqvKsjG8?utm_source=generator&theme=0"
        width="100%"
        height="80"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Music;
