import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
    <Text style={styles.text}>Choose an options</Text>
    <Button
        onPress = {() => {
          props.navigation.navigate('ImageScreen')
        }}
        title = "Go to Image screen"
    />

    <Button
        onPress = {() => {
          props.navigation.navigate('TextInputModal')
        }}
        title = "Go to modal screen"
    />
    <Button
        onPress = {() => {
          props.navigation.navigate('ScrollableDefectsInfo')
        }}
        title = "Go to scrollable defects screen"
    />
    <Button
        onPress = {() => {
          props.navigation.navigate('userListScreen')
        }}
        title = "Go to userList screen"
    />
    <Button
        onPress = {() => {
          props.navigation.navigate('InspectionForm')
        }}
        title = "Go to InspectionForm"
    />
    <Button
        onPress = {() => {
          props.navigation.navigate('BulkOrderListScreen')
        }}
        title = "Go to BulkOrderList screen"
    />
    <Button
        onPress = {() => {
          props.navigation.navigate('CameraScreen')
        }}
        title = "Go to Camera screen"
    />
    <Button
        onPress = {() => {
          props.navigation.navigate('ImageOpeningButtonScreen')
        }}
        title = "Go to ImageOpeningButtonScreen screen"
    />
    <Button
        onPress = {() => {
          props.navigation.navigate('ImageDrawing')
        }}
        title = "Go to ImageDrawing screen"
    />
     <Button
        onPress = {() => {
          props.navigation.navigate('GeneratedCode')
        }}
        title = "Go to Generated code screen"
    />
     <Button
        onPress = {() => {
          props.navigation.navigate('LoginScreen')
        }}
        title = "Go to Login Screen"
    />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
