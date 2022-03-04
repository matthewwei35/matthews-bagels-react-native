import { Text, View, Image, StyleSheet } from 'react-native';

const Item = ({ image, title }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    paddingTop: 4,
  }
});

export default Item;
