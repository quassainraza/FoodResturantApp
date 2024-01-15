import React, { createContext } from 'react';

export const BottomTabContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | []
>([]);
