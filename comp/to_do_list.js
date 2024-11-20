import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultTasks = [
  {
    id: 1,
    text: "Default Task",
    completed: false,
    progress: 0,
    dueDate: "2024-09-30",
  },
  {
    id: 2,
    text: "Default Task",
    completed: false,
    progress: 10,
    dueDate: "2024-12-31",
  },
];

const App_List = () => {
  const [tasks, setTasks] = useState([...defaultTasks]);
  const [taskText, setTaskText] = useState("");
  const [nextId, setNextId] = useState(3);
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
        setNextId(Math.max(...JSON.parse(savedTasks).map((t) => t.id)) + 1);
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskText.trim()) {
      setTasks([
        ...tasks,
        {
          id: nextId,
          text: taskText.trim(),
          completed: false,
          progress: 0,
          dueDate: "",
        },
      ]);
      setTaskText("");
      setNextId(nextId + 1);
    }
  };

  const lightBg = require("../assets/vibrant.jpg");
  const darkBackground = require("../assets/rectangle-neon.jpg");

  const [isLightM, setIsLightM] = useState(true);

  const toggleBackground = () => {
    setIsLightM((prevMode) => !prevMode);
  };

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={isLightM ? lightBg : darkBackground}
        style={styles.img_background}
      >
        <SafeAreaView style={styles.theme_con}>
          <Switch
            value={isLightM}
            onValueChange={toggleBackground}
            style={styles.themeBtn}
          ></Switch>
        </SafeAreaView>
        <Text style={styles.time}>
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </Text>
        <SafeAreaView style={styles.section}>
          <TextInput
            style={styles.input}
            value={taskText}
            onChangeText={setTaskText}
            placeholder="Add a task"
            placeholderTextColor={isLightMode ? "#000" : "#bbb"}
          />
        </SafeAreaView>
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.taskItem, item.completed && styles.completed]}>
              <Text style={styles.taskText}>
                {item.completed ? "Done" : item.text}
              </Text>
              <Switch
                value={item.completed}
                onValueChange={() =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === item.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              />
              <TouchableOpacity
                onPress={() => setTasks(tasks.filter((t) => t.id !== item.id))}
              >
                <FontAwesome name="eraser" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setTasks([...defaultTasks])}
        >
          <Text style={styles.buttonText2}>Reset Tasks</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxShadow: "0px 0px 12px white",
    filter: "drop-shadow(0px 0px 12px white)",
    paddingLeft: 5,
    paddingRight: 5,
    width: "90%",
    borderRadius: 25,
    left: 20,
    bottom: 15,
  },
  input: {
    width: "100%",
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 25,
    color: "black",
    backgroundColor: "white",
    boxShadow: "0px 0px 12px white",
    filter: "drop-shadow(0px 0px 12px white)",
  },
  addButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: "60%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    position: "relative",
    left: 70,
    boxShadow: "0px 0px 12px white",
    filter: "drop-shadow(0px 0px 12px white)",
    top: -10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonText2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  taskItem: {
    width: "95%",
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    position: "relative",
    left: 9,
    top: -2,
    boxShadow: "0px 0px 12px blue",
  },
  taskText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  completed: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    backgroundColor: "green",
  },
  resetButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 25,
    marginVertical: 5,
    width: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    boxShadow: "0px 0px 32px black",
    position: "relative",
    left: 15,
    bottom: 5,
  },
  time: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
    position: "relative",
    left: 267,
    top: -25,
  },
  img_background: {
    height: "100%",
    width: "100%",
    display: "flex",
    resizeMode: "cover",
    justifyContent: "center",
  },

  themeBtn: {
    boxShadow: "0px 0px 12px black",
    position: "relative",
    left: -7,
    bottom: 9,
  },

  theme_con: {
    height: 30,
    width: 60,
    boxShadow: "0px 0px 12px black",
    position: "relative",
    left: 10,
    top: 10,
  },
});

export default App_List;
