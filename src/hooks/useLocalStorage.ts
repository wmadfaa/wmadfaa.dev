import { Dispatch, SetStateAction, useState } from "react";
import { useEvent } from "react-use";

export function useLocalStorage<S>(key: string, val?: S): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(() => {
    if (!val) return localStorage[key] as S;
    return val;
  });

  const update: Dispatch<SetStateAction<S>> = (value) => {
    let nextValue = value instanceof Function ? value(state) : value;
    localStorage.setItem(key, `${nextValue}`);
    setState(nextValue);
    window.dispatchEvent(new Event("storage"));
  };

  useEvent("storage", () => {
    if (localStorage[key] !== state) {
      setState(localStorage[key]);
    }
  });

  return [state, update];
}

export default useLocalStorage;
