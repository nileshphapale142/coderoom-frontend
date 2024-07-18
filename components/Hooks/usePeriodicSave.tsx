import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export function usePeriodicSave(key: string, defaultValue: string = '', interval: number = 5000): Dispatch<SetStateAction<string>> {
  const [value, setValue] = useState<string>(() => {
    // Load the initial value from local storage
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key) || defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    // Save the value to local storage periodically
    const intervalId = setInterval(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
      }
    }, interval);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [value, key, interval]);

  return setValue;
}