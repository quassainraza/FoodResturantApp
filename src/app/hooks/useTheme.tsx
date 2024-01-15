import { Appearance } from 'react-native';
import { useState } from 'react';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(preference => {
    setCurrentTheme(preference.colorScheme);
  });
  return currentTheme;
};

export default useTheme;
