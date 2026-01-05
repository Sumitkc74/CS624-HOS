import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Button, Image } from 'react-native'
// import { styles, buttons } from './styles'
// import getStyleSheet from './styles';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}
                                source={require('../../assets/images/user.png')} />
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 10
    },
    cardImage: {
        width: 90,
        height: 90
    }
});

// class App extends Component {
//     // state = {
//     //     count: 0,
//     // };

//     // onPress = () => {
//     //     this.setState({
//     //         count: this.state.count + 1,
//     //     })
//     // }

//     constructor(props) {
//         super(props);
//         this.state = {
//             darkTheme: false
//         }
//         this.toggleTheme = this.toggleTheme.bind(this);
//     }

//     toggleTheme() {
//         this.setState({darkTheme: !this.state.darkTheme})
//     }

//     render () {

//         const styles = getStyleSheet(this.state.darkTheme);
//         const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
//         return (
//             <View style={styles.container}>
//                 <View style={styles.box}>
//                     <Button title={backgroundColor}
//                             onPress={this.toggleTheme} />
//                 </View>
//             </View>

//             // <View style={styles.container}>
//             //     <TouchableHighlight onPress={this.onPress}>
//             //         <View style={buttons.primary}>
//             //             <Text style={buttons.buttonText}>Listing 4.4 Touch Here</Text>
//             //         </View>
//             //     </TouchableHighlight>
//             //     <View style={styles.countContainer}>
//             //         <Text style={styles.countText}>
//             //             {this.state.count ? this.state.count : null}
//             //         </Text>
//             //     </View>
//             // </View>
//         );
//     }
// }

// // const styles = StyleSheet.create({
// //     container: {
// //         marginLeft: 20,
// //         marginTop:20
// //     },
// //     message: {
// //         fontSize: 18
// //     },
// //     warning: {
// //         color: 'red'
// //     }
// // });

// export default App