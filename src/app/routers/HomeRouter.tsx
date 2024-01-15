import { useState } from 'react';
import Home from '@/screens/productHomePage/home';
import { BottomTabContext } from '@/contexts/BottomTabContext';

import useTheme from '@/hooks/useTheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabRouter from './BottomTabRouter';
import ProductDetail from '@/screens/productHomePage/productDetailPage';
import DeliveryAddress from '@/screens/productHomePage/deliveryAddress';
const { Navigator, Screen } = createNativeStackNavigator();

const HomeRouter = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <BottomTabContext.Provider value={[activeTab, setActiveTab]}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen component={BottomTabRouter} name="bottomTabRouter" />

        <Screen component={Home} name="Home" />
        <Screen component={ProductDetail} name="ProductDetail" />
        <Screen component={DeliveryAddress} name="DeliveryAddress" />
      </Navigator>
    </BottomTabContext.Provider>
  );
};

export default HomeRouter;
