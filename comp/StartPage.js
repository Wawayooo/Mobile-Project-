import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Dimensions,
} from "react-native";
import nextPage from "./to_do_list";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const animation = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(animation, { toValue: 0.8, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = { transform: [{ scale: animation }] };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/todo-list.jpg")}
        style={styles.img_background}
      >
        <Animated.View style={[styles.animatedButton, animatedStyle]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("HOMEPAGE")}
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const Stack = createStackNavigator();

const MyComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WELCOME USER">
        <Stack.Screen name="WELCOME USER" component={HomeScreen} />
        <Stack.Screen name="HOMEPAGE" component={nextPage} />
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
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 10,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  animatedButton: {
    alignItems: "center",
    position: "relative",
    top: 250,
    boxShadow: "0px 0px 25px brown",
    width: 300,
    padding: 2,
    borderRadius: 50,
    left: 30,
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.55)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },
  login_textfield: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

export default MyComponent;
