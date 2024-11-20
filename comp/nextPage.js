import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { Alert } from "react-native";
import axios from "axios"; // Ensure axios is imported

const { width, height } = Dimensions.get("window");
export default NextPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login/", {
        email,
        password,
      });
      Alert.alert("Login successful");
      navigation.navigate("Home");
    } catch (error) {
      console.log(error); // Log the entire error object for debugging
      if (error.response) {
        // The request was made and the server responded with a status code outside the range of 2xx
        Alert.alert("Login failed", error.response.data.error);
      } else if (error.request) {
        // The request was made but no response was received
        Alert.alert("Login failed", "No response from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        Alert.alert("Login failed", error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img_background}
        source={require("./../assets/rectangle-neon.jpg")}
      ></ImageBackground>
      <SafeAreaView style={styles.container2}>
        <TextInput
          placeholder="Enter Email Account"
          style={styles.login_textfield}
          onChangeText={setEmail} // Corrected onChange to onChangeText
        ></TextInput>
        <TextInput
          placeholder="Enter Password"
          style={styles.signup_textfield}
          onChangeText={setPassword}
          secureTextEntry
        ></TextInput>
        <SafeAreaView style={styles.button_container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleLogin}>
              LOG - IN
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
        <Text style={styles.otherText}>Don't have an Account?</Text>
        <TouchableOpacity
          title="Go to SignUp"
          id="signupBtn"
          onPress={() => navigation.navigate("SIGN-UP PAGE")}
          style={styles.signupBtn}
        >
          <Text style={styles.buttonTextSignup}>SIGN - UP</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 1,
  },
  container2: {
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
  button_container: {
    height: 40,
    width: 180,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    top: 40,
    borderRadius: 50,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 50,
    paddingLeft: 43,
    position: "relative",
    height: "100%",
    width: "100%",
  },
  buttonText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },

  login_textfield: {
    width: 250,
    height: 50,
    border: "solid 15px black",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 5,
    borderColor: "rgba(175, 225, 245, 155)",
    shadowColor: "white",
    paddingLeft: 10,
  },

  signup_textfield: {
    width: 250,
    height: 50,
    border: "solid 15px black",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 5,
    borderColor: "rgba(175, 225, 245, 155)",
    shadowColor: "white",
    paddingLeft: 10,
    top: 10,
  },
  signupBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
    paddingLeft: 43,
    paddingTop: 2,
    position: "relative",
    height: 30,
    width: 120,
    top: 230,
    display: "flex",
    justifyContent: "center",
    left: 110,
  },
  buttonTextSignup: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    transform: "translate(25px, 0px)",
  },
  otherText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    transform: "translate(-60px, 300px)",
  },
});
