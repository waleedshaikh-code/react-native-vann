import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/Screens/Driver/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import StudentLogin from './src/Screens/Student/StudentLogin';
import DriverMap from './src/Screens/Driver/DriverMap';
import StudentMap from './src/Screens/Student/StudentMap';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />   
        <Stack.Screen name="StudentLogin" component={StudentLogin} />   
        <Stack.Screen name="DriverMap" component={DriverMap} />   
        <Stack.Screen name="StudentMap" component={StudentMap} />   

           </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;


// const App = () => {

//   return (
// <View style={styles.container}>
// <Text style={styles.inputText}>Login As a Driver</Text>

// <FontAwesome5.Button name="shuttle-van" size={70} onPress={()=>  <Login />} color="black" backgroundColor='white' />

// <Text style={styles.inputText}>Login As a Student</Text>
// <Fontisto.Button name="person" size={70} onPress={()=> console.log("Student Login")} color="black" backgroundColor={'white'} />

// <StatusBar style='auto' />

//       {/* <Login /> */}
//     </View>
    
//   )
// }

//export default App



//attemp2

// const Stack = createNativeStackNavigator();
  
//   export default function App(){
//  return(
//  <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//       name='Login'
//       component={Login}
//       options={{title: 'LOGIN SCREEN'}}
//       />
//     </Stack.Navigator>
//   </NavigationContainer>
// )
// }



// import { StyleSheet, Text, View, Dimensions ,ScrollView,Image,FlatList,TouchableOpacity } from 'react-native'
// import React from 'react'

// import { colors,parameters } from './src/global/styles'


// const App = () => {
//   return (
//     <View>
//       <Text>VAN ON</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({

//   container:{
//     flex:1,
//     backgroundColor:colors.white,
//     paddingBottom:30,
//     paddingTop:parameters.statusBarHeight
// },
// header:{
//   backgroundColor:colors.blue,
//   height:parameters.headerHeight,
//   alignItems:"flex-start"
 
// },

// image1:{
 
//   height:100,
//   width:100,

// },

// image2:{height:60,width:60,
//         borderRadius:30,
//       },

// home:{
//  backgroundColor:colors.blue,
//  paddingLeft:20,
 
// },

// text1:{
//  color:colors.white,
//  fontSize:21,
//  paddingBottom:20,
//  paddingTop:20
// },

// text2:{
//  color:colors.white,
//  fontSize:16
// },

// view1:{
//  flexDirection:"row",
//  flex:1,
//  paddingTop:30
// },

// button1:{
//   height:40,
//   width:150,
//   backgroundColor:colors.black,
//   borderRadius:20,
//   alignItems:"center",
//   justifyContent:"center",
//   marginTop:20
// },

// button1Text:{
//  color:colors.white,
//  fontSize:17,
//  marginTop:-2

// },
// card:{
//  alignItems:"center",
//  margin:SCREEN_WIDTH/22

// },

// view2:{marginBottom:5,
//       borderRadius:15,
//       backgroundColor:colors.grey6
//     },

//     title:{
//       color:colors.black,
//       fontSize:16
//     },
// view3:{flexDirection:"row",
//          marginTop :5,
//          height:50,
//          backgroundColor:colors.grey6,
//          alignItems:"center",
//          justifyContent:"space-between",
//         marginHorizontal:15
        
//          },
// text3:{marginLeft:15,
//         fontSize:20,
//         color:colors.black
//   },

// view4:{ flexDirection:"row",
//         alignItems:"center",
//         marginRight:15,
//         backgroundColor:"white",
//         paddingHorizontal:10,
//         paddingVertical:2,
//         borderRadius:20
//         },

// view5:{ flexDirection:"row",
// alignItems:"center",
// backgroundColor:"white",
// paddingVertical:25,
// justifyContent:"space-between",
// marginHorizontal:15,
// borderBottomColor:colors.grey4,
// borderBottomWidth:1,
// flex:1
// },

// view6:{


// alignItems:"center",
// flex:5,
// flexDirection:"row"
// },
// view7:{
// backgroundColor:colors.grey6,
// height:40,
// width:40,
// borderRadius:20,
// alignItems:"center",
// justifyContent:"center",
// marginRight:20

// },

// map:{
   
// height: 150,
//  marginVertical: 0,
//  width:SCREEN_WIDTH*0.92
// },

// text4:{ fontSize:20,
//       color:colors.black,
//       marginLeft:20,
//       marginBottom:20
//     },

// icon1:  {marginLeft:10,
//        marginTop:5
//       },

// view8: {flex:4,
//       marginTop:-25
//     } ,
// carsAround: {
// width: 28,
// height: 14,

// }, 

// location: {
//   width: 16,
//   height: 16,
//   borderRadius:8,
//   backgroundColor:colors.blue,
//   alignItems:"center",
//   justifyContent:"center"
  
//   }, 
  
// view9:{width:4,
// height:4,
// borderRadius:2,
// backgroundColor:"white"
// }


// })