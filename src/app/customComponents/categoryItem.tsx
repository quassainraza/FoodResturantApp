import { BG_DARK } from '@/constants/Colors';
import useTheme from '@/hooks/useTheme';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

interface CategoryItemProps {
  categoryTitle: string;
  backgroundImage: any;
  bgColor: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  categoryTitle,
  backgroundImage,
  bgColor,
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        ...styles.categoryItemCard,
        backgroundColor: bgColor,
        borderColor: theme === 'dark' ? 'white' : 'black',
        borderWidth: 1,
      }}>
      <Image source={backgroundImage} style={styles.backgroundImage} />

      <Text
        numberOfLines={1}
        allowFontScaling
        textBreakStrategy="balanced"
        style={styles.title}>
        {categoryTitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemCard: {
    height: height * 0.1, // Adjusted height
    width: width * 0.22, // Adjusted width
    margin: 5,
    borderRadius: 25,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '75%', // Fills the entire height of the card
    borderRadius: 8,
    marginLeft: 40,
    marginBottom: 5,
    marginTop: 20,
  },
  //   overlay: {
  //     ...StyleSheet.absoluteFillObject,
  //     justifyContent: 'flex-start',
  //     padding: 10,
  //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //   },
  title: {
    position: 'absolute',
    bottom: 10,
    textTransform: 'capitalize',
    left: 8,
    fontSize: 18, // Adjusted font size
    fontWeight: '500',
    color: BG_DARK,
    alignSelf: 'center',
  },
});

export default CategoryItem;
