import { useState } from 'react';
import { BottomTabContext } from '@/contexts/BottomTabContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from 'react-native-vector-icons/AntDesign';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import useTheme from '@/hooks/useTheme';
import Home from '@/screens/productHomePage/home';
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabRouter = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <BottomTabContext.Provider value={[activeTab, setActiveTab]}>
      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
            bottom: 0,
          },
          headerShown: false,
        }}>
        <Screen
          component={Home}
          name="Home"
          options={{
            tabBarActiveTintColor: BUTTON_LIGHT,
            tabBarInactiveTintColor: 'gray',
            tabBarLabel: 'Home',
            tabBarLabelStyle: { fontSize: 15 },
            tabBarIcon: ({ focused }) => {
              return (
                <HomeIcon
                  name="home"
                  size={25}
                  color={focused ? BUTTON_LIGHT : 'grey'}
                />
              );
            },
          }}
        />
      </Navigator>
    </BottomTabContext.Provider>
  );
};

export default BottomTabRouter;
