import { Text, View, Image, StyleSheet } from 'react-native';

const Item = ({ image, title }) => (
  <View>
    <Image style={styles.image} source={require('./images/bagels/everything-bagel.jpeg')} />
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
