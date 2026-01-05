import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>Title: {item.title}</Text>
              <Text style={styles.text}>Release Year: {item.releaseYear}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  itemContainer: {
    paddingTop: 30,
    paddingBottom: 10,  
    borderBottomColor: 'blue',
    borderBottomWidth: 3,
  },
  text: {
    fontSize: 18,
  },
});

export default App;