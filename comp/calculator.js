import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (e) {
        setInput("Error");
      }
      return;
    }

    if (value === "C") {
      setInput("");
      return;
    }

    if (value === "<") {
      if (input.length > 0) {
        let values = input.slice(0, -1);
        setInput(values);
        return;
      }
    }

    setInput(input + value);
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["C", "0", "=", "+"],
    ["<"],
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splash.png")}
        style={styles.img_background}
      >
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
        <Text style={styles.display}>{input}</Text>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={styles.button}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  display: {
    fontSize: 20,
    color: "#ffffff",
    width: "100%",
    textAlign: "right",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 10,
    position: "relative",
    top: 100,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    boxShadow: "0px 0px 12px white",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  img_background: {
    height: "100%",
    width: "100%",
    display: "flex",
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Calculator;
