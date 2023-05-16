import { View, Text, StyleSheet, TextInput ,TouchableOpacity,Alert } from "react-native";
import React, { useState } from "react";
import CheckBox from "expo-checkbox";



const StudentLogin = ({navigation}) => {

    const [agree, setagree] = useState(false);

    const [userName, setUserName] = useState("");
    //console.log(userName)
    const [password, setPassword] = useState("");
    //console.log(password)
  
    const submit = () => {
     // return Alert.alert(userName, password);

     if (userName === "waleed@gmail.com" && password === "123"){
      Alert.alert('Welcome to Student Screen')
      navigation.navigate('StudentMap')
  
     }else{
      Alert.alert('Email and password is not correct')
     }
    };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>STUDENT LOGIN FORM</Text>
      <Text style={styles.description}>created by Waleed Shaikh</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Student Email</Text>
        <TextInput style={styles.inputStyle}
         autoCapitalize='none'
         value={userName}
         onChangeText={(actualData) => setUserName(actualData)}
          />

<View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput style={styles.inputStyle} 
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
          onChangeText={(actualData) => setPassword(actualData)}

         />
        </View>

        <View style={styles.wrapper}>
          <CheckBox 

          value={agree}
          onValueChange={()=> setagree(!agree)}
          color={agree ? "#4630EB" : undefined}
          />
          <Text style={styles.wrapperText}>
            I have read and agreed with the TC
          </Text>
        </View>

        <TouchableOpacity style={[styles.buttonStyle , {backgroundColor : agree ? "#4630EB" : 'grey' }]}
          disabled={!agree}

          onPress={() => submit()}
        >
          

          <Text>Login</Text>
        </TouchableOpacity>



        <TouchableOpacity style={[styles.backButton , {backgroundColor:'grey'} ] } onPress={() => navigation.navigate('Home')}>
          <Text >Go Back to Home Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      paddingHorizontal: 30,
      paddingTop: 30,
      backgroundColor: "#fff",
    },
    mainHeader: {
      fontSize: 25,
      alignItems:'center',
      justifyContent: 'center',
      color: "#344055",
      fontWeight: "500",
      paddingTop: 30,
      paddingBottom: 15,
      textTransform: "capitalize",
      fontFamily: "sans-serif",
    },
    description: {
      fontSize: 20,
      color: "#7d7d7d",
      paddingBottom: 20,
      lineHeight: 25,
      fontFamily: "sans-serif",
    },
    inputContainer: {
      marginTop: 20,
    },
    labels: {
      fontSize: 18,
      color: "#7d7d7d",
      marginTop: 10,
      marginBottom: 5,
      lineHeight: 25,
      fontFamily: "sans-serif",
    },
   
    buttonStyle:{
  alignItems:'center',
  fontSize: 20,
  marginTop: 20,
      marginBottom: 5,
      lineHeight: 25,
      fontFamily: "sans-serif",
      borderWidth:3,
      borderColor:"rgba(0,0,0,0.3)",
  
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      marginTop: 20,
      fontFamily: "sans-serif",
    },
    wrapperText: {
      marginLeft: 10,
      color: "#7d7d7d",
      fontFamily: "sans-serif",
    },
    backButton:{
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.3)",
      paddingHorizontal: 15,
      paddingVertical: 6,
      borderRadius: 2,
    },
    multiineStyle: {
      paddingVertical: 4,
    },
    buttonStyle: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
    },
    buttonText: {
      color: "#eee",
    },
  });

export default StudentLogin;
