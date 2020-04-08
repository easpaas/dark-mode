import {useState, useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = key => {
  const [someValue, setSomeValue] = useLocalStorage(key);

  useEffect(() => {
    someValue ? console.log(key) : console.log(someValue)
  }, []);

  return [someValue, setSomeValue];
}