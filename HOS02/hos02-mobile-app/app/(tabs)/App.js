// import { View, Text} from 'react-native';

// export default function App() {
//     return (
//         <View
//             style = {
//                 {
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     backgroundColor: 'white'
//                 }
//             }
//         >
//             <Text>Hello, world! Functional Component!</Text>
//         </View>
//     )
// }

// import { View, Text} from 'react-native';
// import { Component } from 'react';

// class App extends Component {
//     render(){
//         return (
//             <View
//                 style = {
//                     {
//                         flex: 1,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         backgroundColor: 'white'
//                     }
//                 }
//             >
//                 <Text>Hello, world! Class Component!</Text>
//             </View>
//         )
//     }
// }

// export default App;

// import { View, Text, Image, ScrollView, TextInput } from 'react-native';

// export default function App() {
//     return (
//         <ScrollView style={{backgroundColor: 'white'}}>
//             <Text>Hello</Text>
//             <View>
//                 <Text>This is Hos</Text>
//                 <Image
//                     source={{
//                         uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//                     }}
//                     style={{width: 200, height: 200}}
//                 ></Image>
//             </View>
//             <TextInput
//                 style={{
//                     height: 40,
//                     borderColor: 'gray',
//                     borderWidth: 1,
//                 }}
//                 defaultValue="You can type here"
//             />
//         </ScrollView>
//     )
// }

import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

// type CatProps = {
//     name:String;
// }

const Cat = props=>{
    const[isHungry, setIsHungry] = useState(true);

    return(
        <View
            style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffff00',
                }
            }
        >
            <Text>
                I am {props.name}, and I am {isHungry ? 'hungry':'full'}!
            </Text>
            <Button
                onPress={() =>{
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? 'Give me some food, please!':'Thank you'}
            />
        </View>
    );
};

const App = () => {
    return (
        <>
            <Cat name = "Garfield"/>
            <Cat name = "Bob"/>
        </>
    );
};

export default App;