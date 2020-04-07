import { useRef, useCallback } from "react";

export function useHandler<TArgs extends unknown[], TResult>(
  handler: (...args: TArgs) => TResult
): (...args: TArgs) => TResult {
  const handlerRef = useRef<(...args: TArgs) => TResult>(handler);
  handlerRef.current = handler;
  return useCallback((...args: TArgs) => {
    const currentHandler = handlerRef.current;
    return currentHandler(...args);
  }, []);
}
