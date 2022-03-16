import { Text, View, StyleSheet } from 'react-native';

function DetailsScreen({ route }) {
  const data = route.params
  const keys = Object.keys(data)
  return (
    <View>
    {keys.filter((name) => name != 'id').filter((name) => name != 'image').map((key) => {
      return (
        <View style={styles.details}>
          <Text>{key}:</Text>
          <Text>{data[key]}</Text>
        </View>
      )
    })}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  title: {
    fontSize: 32,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  parent: {
    // backgroundColor: 'grey',
    // width: 100,
    // alignSelf: 'center'
  },
  child: {
    // backgroundColor: '#cccccc',
    // height: 10,
    // width: 100
  }
});

export default DetailsScreen;
