// https://github.com/tailwindlabs/tailwindcss.com/blob/master/src/hooks/useIsomorphicLayoutEffect.js
import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
