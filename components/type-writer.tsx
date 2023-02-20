import React, { useState, useEffect, useRef } from "react";
import { Space_Mono } from "@next/font/google";
import { cn } from "@/lib/utils";

const FORWARD = "forward";
const BACKWARD = "backward";
const space = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export interface useTypingTextParams {
  words: string[];
  typingSpeed: number;
  erasingSpeed: number;
  maxPauseAmount: number;
}

export const useTypingText = ({
  words,
  typingSpeed,
  erasingSpeed,
  maxPauseAmount,
}: useTypingTextParams) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[wordIndex].split(""));
  const direction = useRef(BACKWARD);
  const [isTyping, setIsTyping] = useState(false);
  const typingInterval = useRef<any>(null);
  const letterIndex = useRef(words[wordIndex].split("").length);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    let pauseCounter = 0;

    const stop = () => {
      clearInterval(typingInterval.current);
      setIsStopped(true);
    };
    const backspace = () => {
      if (letterIndex.current === 0) {
        const isOnLastWord = wordIndex === words.length - 1;

        setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
        direction.current = FORWARD;

        return;
      }
      const segment = currentWord.slice(0, currentWord.length - 1);
      setCurrentWord(segment);
      letterIndex.current = currentWord.length - 1;
    };
    const typeLetter = () => {
      if (letterIndex.current >= words[wordIndex].length) {
        direction.current = BACKWARD;
        pauseCounter = maxPauseAmount;
        return;
      }

      const segment = words[wordIndex].split("");
      setCurrentWord(currentWord.concat(segment[letterIndex.current]));
      letterIndex.current = letterIndex.current + 1;
    };

    let intervalSpeed =
      direction.current === FORWARD ? typingSpeed : erasingSpeed;

    typingInterval.current = setInterval(() => {
      if (pauseCounter > 0) {
        setIsTyping(false);
        pauseCounter = pauseCounter - 1;
        return;
      }

      if (direction.current === FORWARD) {
        setIsTyping(true);
        typeLetter();
      } else {
        setIsTyping(true);
        backspace();
      }
    }, intervalSpeed);
    if (isStopped) return;
    return () => {
      clearInterval(typingInterval.current);
    };
  }, [
    currentWord,
    wordIndex,
    typingSpeed,
    erasingSpeed,
    words,
    maxPauseAmount,
    isStopped,
  ]);

  return (
    <span className={cn("text-xl text-pink-500", space.className)}>
      <span>A</span>
      <span>{currentWord.length ? currentWord.join("") : ""}</span>
      <span
        className={cn(
          !isTyping ? "animate-none" : "animate-cursor",
          "ml-1 bg-pink-500 text-lg font-sans"
        )}
      >
        &nbsp;
      </span>
    </span>
  );
};
