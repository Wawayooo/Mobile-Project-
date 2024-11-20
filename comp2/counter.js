import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

const AppForm = () => {
  const [counter, setCounter] = useState(0);
  const [initialCount, setInitialCount] = useState(0);

  const handleInitialCountChange = (value) => {
    setInitialCount(Number(value));
  };

  const handleReset = () => {
    setCounter(initialCount);
  };

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  const handlereset = () => {
    setCounter("");
    setInitialCount("");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/huawei-p50.jpg")}
        style={styles.imgBg}
      >
        <Text style={styles.header}>Counter App</Text>
        <Text style={styles.counterValue}>{counter}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button1} onPress={handleClick1}>
            <Text>⏫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={handleClick2}>
            <Text>⏬</Text>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 15 }}>
          <TextInput
            keyboardType="numeric"
            value={initialCount.toString()}
            onChangeText={handleInitialCountChange}
            style={{
              padding: 10,
              fontSize: 16,
              borderRadius: 8,
              borderColor: "black",
              borderWidth: 1,
              boxShadow: "0px 0px 20px white",
            }}
          />
          <TouchableOpacity
            onPress={handleReset}
            style={styles.setInitialCountButton}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Set Starting Count
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3} onPress={handlereset}>
            <Text>RESET</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 25,
    marginVertical: 10,
    color: "#333",
    textTransform: "uppercase",
    position: "relative",
    left: 100,
    bottom: 100,
    fontWeight: "bold",
    width: 180,
    paddingLeft: 6,
  },
  heading: {
    color: "green",
    fontSize: 35,
  },
  counterValue: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
    color: "black",
    position: "relative",
    left: 100,
    bottom: 50,
    boxShadow: "0px 0px 20px white",
    width: 180,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button1: {
    fontSize: 20,
    padding: 8,
    margin: 5,
    borderRadius: 15,
    backgroundColor: "green",
    elevation: 20,
    boxShadow: "0px 0px 20px black",
  },
  button2: {
    fontSize: 20,
    padding: 8,
    margin: 5,
    borderRadius: 15,
    backgroundColor: "red",
    elevation: 20,
    boxShadow: "0px 0px 20px black",
  },
  button3: {
    fontSize: 20,
    padding: 8,
    margin: 5,
    borderRadius: 15,
    backgroundColor: "red",
    elevation: 20,
    boxShadow: "0px 0px 20px white",
    width: 80,
    paddingLeft: 18,
    position: "relative",
    left: 4,
    top: 150,
  },
  setInitialCountButton: {
    padding: 10,
    fontSize: 16,
    margin: 15,
    borderRadius: 8,
    backgroundColor: "blue",
    elevation: 20,
    width: 150,
    position: "relative",
    left: 75,
    boxShadow: "0px 0px 20px black",
    top: 30,
  },
  imgBg: {
    height: "100%",
    width: "100%",
    display: "flex",
    resizeMode: "center",
    justifyContent: "center",
  },
});

export default AppForm;
