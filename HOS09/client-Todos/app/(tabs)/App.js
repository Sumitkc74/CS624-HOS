// // ex01- client-Todo Fetch API - Get Response
// import {Component} from 'react';
// import {ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todos: [],
//       isLoading: true,
//     };
//   }

//   async getTodos() {
//     try {
//       const response = await fetch('https://cityutodoapi.azurewebsites.net/todos', {
//         method: 'GET'
//       });
//       // console.log('response.type =', response.type);
//       // console.log('response.url =', response.url);
//       // console.log('response.userFinalURL =', response.useFinalURL);
//       // console.log('response.status =', response.status);
//       // console.log('response.ok =', response.ok);
//       // console.log('response.statusText =', response.statusText);
//       // console.log('response.headers =', response.headers);

//       const todos = await response.json();
//       this.setState({todos});
//     } catch (error) {
//       console.log(error);
//     } finally {
//       this.setState({isLoading: false});
//     }
//   }

//   componentDidMount() {
//     this.getTodos();
//   }

//   render() {
//     const {todos, isLoading} = this.state;

//     return (
//       <View style={styles.container}>
//         {isLoading ? (
//           <ActivityIndicator />
//         ) : (
//           <FlatList
//             data={todos}
//             keyExtractor={({id}) => id}
//             renderItem={({item}) => (
//               <View style={styles.itemContainer}>
//                 <Text style={styles.text}>
//                   ID: {item._id}{'\n'} Title: {item.title}{'\n'} Index: {item.todoIndex}{'\n'} Complete: {item.complete} {'\n'}{'\n'}
//                 </Text>
//               </View>
//             )}
//           />
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 30,
//   },
//   itemContainer: {
//     paddingTop: 2,
//   },
//   text: {
//     fontSize: 14,
//   },
// });


import {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      isLoading: true,
    };
  }

  async getTodos() {
    try {
      const response = await fetch('https://cityutodoapi.azurewebsites.net/todos/5', {
        method: 'GET'
      });
      const todos = await response.json();
      this.setState({todos});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    const {todos, isLoading} = this.state;

    return (
      <View style={{flex: 1, paddingTop: 40, paddingLeft: 20, backgroundColor: 'white'}}>
        {isLoading ? (
          <ActivityIndicator />
          ) : (
            <View>
              <Text>ID: {todos._id}</Text>
              <Text>Title: {todos.title}</Text>
              <Text>Todo Index: {todos.todoIndex}</Text>
              <Text>Complete: {todos.complete}</Text>
            </View>
          )
        }
      </View>
    );
  }
}
