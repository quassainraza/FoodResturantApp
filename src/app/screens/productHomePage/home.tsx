import React, { useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Searchbar, Text } from 'react-native-paper';

import { BG_DARK, BG_LIGHT } from '@/constants/Colors';
import MenuItem from '@/customComponents/menuItem';
import CategoryItem from '@/customComponents/categoryItem';
import { productsData, menuItems, categoryItems } from '@/constants/data';
import { useFocusEffect } from '@react-navigation/native';

const Home = (props: any) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = useState(true);
  const [menuData, setMenuData] = useState([]);

  // Assuming you have a ref for your FlatList
  const flatListRef = useRef<FlatList | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to scroll to the next item
  const scrollToNextItem = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: (currentIndex + 1) % menuItems.length,
      });
      setCurrentIndex(prevIndex => (prevIndex + 1) % menuItems.length);
    }
  };
  // Interval for auto-scrolling
  useFocusEffect(() => {
    const intervalId = setInterval(() => {
      scrollToNextItem();
    }, 3000); // Change the interval time as needed (in milliseconds)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }); // Empty dependency array ensures this effect runs once on mount

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  const renderItem = ({ item }: { item: any }) => (
    <MenuItem
      menuTitle={item.menuTitle}
      menuSubtitle={item.menuSubtitle}
      backgroundImage={item.backgroundImage}
      discount={item.discount}
    />
  );

  const openProductPage = (foodname: string) => {
    console.log('clicked!');
    props.navigation.navigate('ProductDetail', { paramskey: foodname });
  };
  const Item = (item: any) => {
    return <View style={styles.item}>{item.icon}</View>;
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: '5%',
          paddingBottom: '10%',
        }}>
        <Searchbar
          style={{
            backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
            // shadowColor: 'black',
            // shadowOffset: { width: 0, height: 2 },
            // shadowRadius: 5,
            // shadowOpacity: 5,
            // elevation: 10,
            ...styles.Searchbar,
          }}
          placeholder="Search your food"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <View
          style={{
            minHeight: '15%',
            marginBottom: 10,
            //backgroundColor: 'red',

            //width: width,
          }}>
          <FlatList
            ref={flatListRef}
            horizontal={true}
            data={menuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentInsetAdjustmentBehavior="never"
            snapToAlignment="center"
            decelerationRate="fast"
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            marginHorizontal: 25,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Categories
        </Text>
        <View
          style={{
            minHeight: '8%',
            marginTop: 15,
            marginBottom: 15,
            marginHorizontal: 15,
          }}>
          <FlatList
            horizontal={true}
            data={categoryItems}
            contentInsetAdjustmentBehavior="never"
            snapToAlignment="center"
            decelerationRate="fast"
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CategoryItem
                bgColor={item.bgColor}
                categoryTitle={item.categoryTitle}
                backgroundImage={item.backgroundImage}></CategoryItem>
            )}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            marginTop: 10,
            marginHorizontal: 25,
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Food of the Day
          </Text>
          <Text style={{ fontSize: 15, color: '#00FF32', fontWeight: 'bold' }}>
            View all
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingBottom: 50,
          }}>
          {productsData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => openProductPage(item.foodname)}
              style={{
                backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
                width: '48%', // Adjust the width based on your design
                marginVertical: 10,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <Image
                style={{
                  width: '100%',
                  height: 150,
                  borderRadius: 10,
                  borderColor: theme === 'dark' ? 'white' : 'black',
                  borderWidth: 1,
                }}
                source={item.icon}
              />

              <Text
                style={{
                  marginTop: 5,
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {item.foodname}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Searchbar: {
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 25,
    borderColor: 'grey',
    borderWidth: 1,
  },

  item: {
    flex: 1,
    maxWidth: '50%', // 100% devided by the number of rows you want
    alignItems: 'center',
    //height: '100%',
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
});
