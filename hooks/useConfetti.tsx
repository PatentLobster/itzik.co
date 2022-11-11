// @ts-ignore
import JSConfetti from "js-confetti";
import React from "react";
import { useEventCallback } from "../hooks/useEventCallback";

type IAddConfettiConfig = Exclude<
  Parameters<JSConfetti["addConfetti"]>[0],
  undefined
>;

const confettiEmojiSet: Array<IAddConfettiConfig["emojis"]> = ["🥹"];

// const randomConfettiColors = (): IAddConfettiConfig["confettiColors"] => {
//   const N: number = confettiColorsSet.length;
//   const idx = Math.min(N - 1, Math.floor(Math.random() * N));
//   return confettiColorsSet[idx];
// };

export const useConfetti = (): (() => Promise<void>) => {
  const lockRef = React.useRef<boolean>(false);
  const confettiRef = React.useRef<JSConfetti | null>(null);

  React.useEffect(() => {
    confettiRef.current = new JSConfetti();
    return () => {
      confettiRef.current = null;
    };
  }, []);

  const throwConfetti = useEventCallback(async (): Promise<void> => {
    // if (lockRef.current) return
    if (confettiRef.current == null) return;

    const confetti = confettiRef.current;

    const xs: boolean =
      typeof window === "undefined" ? true : window.screen.width <= 900;

    const config: IAddConfettiConfig = {
      emojis: ["🎊", "🦞", "💵"],
      confettiRadius: xs ? 4 : 8,
      confettiNumber: xs ? 100 : 300,
    };

    lockRef.current = true;
    try {
      await confetti.addConfetti(config);
    } finally {
      lockRef.current = false;
    }
  });
  return throwConfetti;
};
