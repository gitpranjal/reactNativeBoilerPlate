import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Keyboard,
  ScrollView,
  SafeAreaView
} from "react-native";



import Colors from "../../constants/colors"
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

const LoginScreen = () => {

    const screenHeight = Dimensions.get('window').height
    const screenWidth = Dimensions.get('window').width

    const [userName, SetUserName] = useState("")
    const [password, SetPassword] = useState("")
    const [ExcessQuantity, SetExcessQuantity] = useState("")

    return (
        <ScrollView style={{marginHorizontal: 10, alignContent: "center"}}
            keyboardShouldPersistTaps="always"
        >

<View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.5*screenHeight, marginTop: 15, borderRadius: 5, justifyContent: "center"}}>
                    

                    <View id="PO Heading" style={{...styles.openButton , backgroundColor: Colors.inactiveColor, alignContent: "center", marginHorizontal:10}}>
                        <Text style={{ color: "white", alignSelf: "center"}}>User Login Screen</Text>
                    </View>

                   
                    

              <View id="username" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Username"
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={userName}
                        onChangeText = {(newUsername) => {
                            SetUserName(newUsername)
                         }}
                    />
                </View>
             
                     
                          

                <View id="username" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Password"
                        keyboardType="password"
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={password.toString()}
                        onChangeText = {(newPassword) => {
                            SetPassword(newPassword)
                        }}
                    />
                </View>
   
                                
                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: Colors.primaryColor, marginTop: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Login button Pressed")
                        }}
                   >
                       <Text style={{...styles.textStyle}}>Login</Text>

                   </TouchableHighlight>
                </View>

        </ScrollView>
    )




}

const styles = StyleSheet.create({
    textInput: {
       
        fontWeight:"bold", 
        justifyContent: 'center', 
        marginVertical: 10, 
        marginHorizontal:10,
        height: 50,  
        borderColor: Colors.inactiveColor, 
        borderWidth:3, 
        borderRadius: 5,
        padding:5
    },


    textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },

    openButton: {
            backgroundColor: Colors.primaryColor,
            borderRadius: 10,
            padding: 10,
            elevation: 10,
 
          }
})
export default LoginScreen

