import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@/screens/Splash';
import HomeRouter from './HomeRouter';

const { Navigator, Screen } = createNativeStackNavigator();

const WelcomeRouter = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen component={Splash} name="splash" />
      <Screen component={HomeRouter} name="homeRouter" />
    </Navigator>
  );
};

export default WelcomeRouter;
