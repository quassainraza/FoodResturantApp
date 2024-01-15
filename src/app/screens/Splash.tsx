import React, { useEffect } from 'react';
import { Image, StyleSheet, View, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { APP_MAX_WIDTH } from '@/constants/Theme';

const Splash = (props: any) => {
  const navigation = useNavigation();

  // Create animated value for image opacity
  const imageOpacity = new Animated.Value(0);

  useEffect(() => {
    // Configure the animation
    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    // Set a timer to navigate to the next screen after 3 seconds
    const timer = setTimeout(() => {
      props.navigation.navigate('homeRouter'); // Replace 'NextScreen' with the name of your next screen
    }, 3000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation, imageOpacity]);

  return (
    <View style={{ backgroundColor: '#790000' }}>
      <View style={[styles.container]}>
        <Animated.Image
          source={require('@assets/images/clogo.png')}
          style={{ opacity: imageOpacity }}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    alignSelf: 'center',
    maxWidth: APP_MAX_WIDTH,
  },
});
