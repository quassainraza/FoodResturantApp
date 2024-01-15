import React, { createContext } from 'react';

export const ThemeContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | []
>([]);
