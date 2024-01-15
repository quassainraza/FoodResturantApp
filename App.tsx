import { useEffect, useState } from 'react';
import { PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider, Spinner } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import { ThemeContext } from '@/contexts/AppContext';
import { LogBox, Platform } from 'react-native';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import { View } from 'react-native';
import { BUTTON_LIGHT } from '@/constants/Colors';
import useTheme from '@/hooks/useTheme';
import WelcomeRouter from '@/routers/WelcomeRouter';
import { IProductType } from './src/types/IProductType';
import Toast from 'react-native-toast-message';
import { MyCartContextProvider } from '@/contexts/CartContext';
LogBox.ignoreAllLogs();
const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const theme = useTheme();
  const [gotPermissions, setGotPermissions] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState<IProductType[]>([]);

  useEffect(() => {
    requestMultiple(
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY]
        : [PERMISSIONS.ANDROID.CAMERA],
    )
      .then(val => {
        console.log(Platform.OS, val);
        setIsLoading(false);

        for (const perm of Object.values(val)) {
          if (perm !== 'granted') {
            setGotPermissions(false);
            break;
          }
        }
      })
      .catch(err => {
        console.log(Platform.OS, err);
        setIsLoading(false);
        setGotPermissions(false);
      });
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Spinner color={BUTTON_LIGHT} />
      </View>
    );
  }

  return gotPermissions ? (
    <NavigationContainer>
      <MyCartContextProvider>
        <PaperProvider>
          <ThemeContext.Provider value={[useDarkTheme, setUseDarkTheme]}>
            <GluestackUIProvider config={config}>
              <WelcomeRouter></WelcomeRouter>
              <Toast />
            </GluestackUIProvider>
          </ThemeContext.Provider>
        </PaperProvider>
      </MyCartContextProvider>
    </NavigationContainer>
  ) : (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}>
      <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>
        Insufficient Permissions
      </Text>
      <Text style={{ color: 'black', textAlign: 'center' }}>
        Restart app after granting permissions from settings
      </Text>
    </View>
  );
};

export default App;
