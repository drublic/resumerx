import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, fallbackValue: T) => {
  const [items, setItems] = useState(fallbackValue);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(key));

    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [key, items]);

  return [items, setItems] as const;
};
