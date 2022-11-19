import { useEffect, useState } from "react";

export function RandomEmoji({ className }) {
  const [emoji, setEmoji] = useState("❤");
  useEffect(() => {
    const emojis = [
      "💩",
      "❤",
      "🍕",
      "🍟",
      "🍔",
      "🌭",
      "🍿",
      "🍳",
      "🥓",
      "🥐",
      "🍗",
      "🍜",
      "🍩",
      "🎂",
      "🍪",
      "🍨",
      "🧁",
      "🍬",
      "🍫",
      "🍵",
      "🍺",
      "🍌",
      "🍄",
      "🍀",
      "🚀",
      "🌠",
      "🔥",
      "💣",
      "🎸",
      "👽",
      "👻",
      "🦞",
    ];
    const interval = setInterval(() => {
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <span className={className}>{emoji}</span>
    </>
  );
}
