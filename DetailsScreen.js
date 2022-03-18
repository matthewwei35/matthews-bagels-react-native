import { Text, View, StyleSheet } from 'react-native';

function DetailsScreen({ route }) {
  const data = route.params
  const keys = Object.keys(data)
  return (
    <View>
    {keys.filter((name) => name != 'id').filter((name) => name != 'image').map((key) => {
      return (
        <View style={styles.details}>
          <Text style={styles.title}>{key}:</Text>
          <Text>{data[key]}</Text>
        </View>
      )
    })}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default DetailsScreen;
