import {useEffect, useState} from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);

  const getSuperheroes = async () => {
    try {
      const response = await fetch(
        'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',
      );
      const json = await response.json();
      setMembers(json.members);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSuperheroes();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={members}
          keyExtractor={({name}) => name}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>Age: {item.age}</Text>
              <Text style={styles.text}>Secret Identity: {item.secretIdentity}</Text>
              <Text style={styles.text}>The First Power: {item.powers[0]}</Text>
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
    paddingTop: 30,
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
    lineHeight: 28,
  },
});

export default App;
