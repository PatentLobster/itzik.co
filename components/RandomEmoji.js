import { useEffect, useState } from "react";

export function RandomEmoji({ className }) {
  const [emoji, setEmoji] = useState("❤");
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
    "🫖",
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
    "🪄",
    "👽",
    "👻",
    "🦞",
  ];
  useEffect(() => {
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
