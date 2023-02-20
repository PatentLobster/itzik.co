// @ts-ignore
import JSConfetti from "js-confetti";
import React from "react";
import { useEventCallback } from "./use-event-callback";

type IAddConfettiConfig = Exclude<
  Parameters<JSConfetti["addConfetti"]>[0],
  undefined
>;

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

    // const xs: boolean =
    //   typeof window === "undefined" ? true : window.screen.width <= 900;

    const config: IAddConfettiConfig = {
      emojis: ["🎊", "🦞", "💵"],
      confettiRadius: 5,
      confettiNumber: 50,
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
