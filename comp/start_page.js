import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions,
} from "react-native";
import nextPage from "./comp/nextPage";
import SignupScreen from "./comp/SignupScreen";

const { width, height } = Dimensions.get("window");
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/unikali.jpg")}
        style={styles.img_background}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LOG-IN PAGE")}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const Stack = createStackNavigator(); // Correcting the naming convention
const MyComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME SCREEN">
        <Stack.Screen name="WELCOME USER" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="LOG-IN PAGE" component={nextPage}></Stack.Screen>
        <Stack.Screen name="SIGN-UP PAGE" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img_background: {
    height: "100%",
    width: "100%",
    display: "flex",
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 10,
    borderRadius: 50,
    width: "70%",
    paddingLeft: 28,
    position: "relative",
    left: 55,
    top: -50,
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },

  login_textfield: {
    width: 250,
    height: 50,
    border: "solid 15px black",
    position: "sticky",
    top: -400,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

export default MyComponent;
