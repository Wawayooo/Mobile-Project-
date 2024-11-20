import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MagicCard = () => {
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
        source={require("../assets/xiaomi-pad.jpg")}
        style={styles.img_background}
      >
        <Animated.View style={[styles.button, animatedStyle]}>
          {" "}
          <TouchableOpacity
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            {" "}
            <Text style={styles.buttonText}>GET STARTED</Text>{" "}
          </TouchableOpacity>{" "}
        </Animated.View>
      </ImageBackground>
    </View>
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
    backgroundColor: "#6200ee",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 40,
    elevation: 3,
    width: 250,
    position: "relative",
    left: 55,
    top: 200,
    boxShadow: "0px 0px 12px white",
  },
  buttonText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
    position: "relative",
    left: 8,
    filter: "drop-shadow(0px 0px 12px white)",
  },
});

export default MagicCard;
