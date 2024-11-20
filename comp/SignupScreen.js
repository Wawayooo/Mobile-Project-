import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/register/",
        { username, password }
      );
      Alert.alert("Signup successful");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Signup failed", error.response.data.error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/rectangle-neon.jpg")}
        style={styles.img_background}
      >
        <Text style={styles.otherText}>Already have an Account?</Text>
        <SafeAreaView>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.signup_textfield1}
          />
          <TextInput
            placeholder="Create Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.signup_textfield2}
          />

          <TextInput
            placeholder="Re-enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.signup_textfield3}
          />
        </SafeAreaView>

        <TouchableOpacity
          title="Signup"
          onPress={handleSignup}
          style={styles.button}
        >
          <Text style={styles.buttonTextsign}>SIGN-UP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Go to Log-In"
          onPress={() => navigation.navigate("LOG-IN PAGE")}
          style={styles.loginBtn}
        >
          <Text style={styles.buttonTextLogin}>LOG-IN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: -height + 280,
  },
  img_background: {
    height: "100%",
    width: "100%",
    display: "flex",
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
    paddingLeft: 43,
    paddingTop: 2,
    position: "relative",
    height: 40,
    width: 170,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 100,
    top: 100,
    boxShadow: "0 10 50 rgba(255, 255, 255, 255)",
  },

  buttonTextsign: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    transform: "translate(0px, 0px)",
    position: "absolute",
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },

  signup_textfield1: {
    width: 250,
    height: 50,
    border: "solid 15px black",
    position: "sticky",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transform: "translate(10px 50px)",
  },

  signup_textfield2: {
    width: 250,
    height: 50,
    border: "solid 15px black",
    position: "sticky",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  signup_textfield3: {
    width: 250,
    height: 50,
    border: "solid 15px black",
    position: "sticky",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  loginBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
    paddingLeft: 43,
    paddingTop: 2,
    position: "relative",
    height: 30,
    width: 130,
    top: 230,
    display: "flex",
    justifyContent: "center",
    left: 210,
  },
  buttonTextLogin: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    transform: "translate(40px, 0px)",
  },
  otherText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    transform: "translate(20px, 290px)",
  },
});

export default SignupScreen;
