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
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBg}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgBg: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    display: "flex",
    justifyContent: "center",
  },
});

export default MagicCard;
