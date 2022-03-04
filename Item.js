import { Text, View, Image, StyleSheet } from 'react-native';

const Item = ({ image, title }) => (
  <View>
    <Image style={styles.image} source={image} />
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});

export default Item;
