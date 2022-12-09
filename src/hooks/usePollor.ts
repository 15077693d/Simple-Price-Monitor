import { useEffect, useRef } from "react";
import { BLOCK_TIME } from "../contracts";

/** Source: https://github.com/austintgriffith/eth-hooks/blob/master/src/Poller.ts */

export const usePoller = (
  fn: () => void,
  // eslint-disable-next-line
  deps: any[] = [],
  delay = BLOCK_TIME
): void => {
  const savedCallback = useRef<() => void>();
  // Remember the latest fn.
  useEffect((): void => {
    savedCallback.current = () => {
      // add fn required online
      if (navigator.onLine) {
        fn();
      }
    };
  }, [fn]);

  // Set up the interval.
  useEffect((): void | (() => void) => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    // eslint-disable-next-line
  }, [delay, ...deps]);

  // run at start too
  useEffect(() => {
    // add fn required online
    if (navigator.onLine) {
      fn();
    }
    // eslint-disable-next-line
  }, [...deps]);
};
