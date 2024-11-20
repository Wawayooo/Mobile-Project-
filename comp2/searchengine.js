import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const names = [
  "Edgar",
  "Inzo",
  "Justine pogi",
  "Chan",
  "Chris",
  "Manny Pacleb",
  "Jasgpt",
  "Hannah Briol",
  "Vince",
  "Clyde",
  "Artemio",
  "Jerald",
];

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [filteredNames, setFilteredNames] = useState(names);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filteredList = names.filter((name) =>
        name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredNames(filteredList);
    } else {
      setFilteredNames(names);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search names..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredNames}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
  },
});

export default SearchScreen;
