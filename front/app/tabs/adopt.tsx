import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { mockAnimals } from "@/mock-data";
import AnimalCard from "@/components/AnimalCard";
import { Button, IconButton } from "react-native-paper";

export default function TabThreeScreen() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedAnimalType, setSelectedAnimalType] = useState<string | null>(
    null
  );

  const handleSizePress = (size: string) => {
    setSelectedSize(size);
  };

  const handleGenderPress = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleAnimalTypePress = (type: string) => {
    setSelectedAnimalType(type);
  };

  const handlePress = (name: string) => {
    console.log(`Mostrar interesse em ${name}`);
  };

  return (
    <>
      <View style={styles.filterContainer}>
        <View style={styles.filterButtons}>
          <View style={styles.filterColumn}>
            <IconButton
              icon="dog"
              size={30}
              onPress={() => handleAnimalTypePress("dog")}
              iconColor={selectedAnimalType === "dog" ? "#333333" : "white"}
            />
            <Text
              style={[
                styles.filterText,
                { color: selectedAnimalType === "dog" ? "#333333" : "white" },
              ]}
            >
              Cães
            </Text>
          </View>

          <View style={styles.filterColumn}>
            <IconButton
              icon="cat"
              size={30}
              onPress={() => handleAnimalTypePress("cat")}
              iconColor={selectedAnimalType === "cat" ? "#333333" : "white"}
            />
            <Text
              style={[
                styles.filterText,
                { color: selectedAnimalType === "cat" ? "#333333" : "white" },
              ]}
            >
              Gatos
            </Text>
          </View>
        </View>
        <View style={styles.filterOptions}>
          <Button
            mode={selectedSize === "Pequeno" ? "contained" : "outlined"}
            onPress={() => handleSizePress("Pequeno")}
            style={[
              styles.button,
              selectedSize === "Pequeno" && styles.selectedButton,
            ]}
            labelStyle={styles.buttonText}
          >
            Pequeno
          </Button>
          <Button
            mode={selectedSize === "Médio" ? "contained" : "outlined"}
            onPress={() => handleSizePress("Médio")}
            style={[
              styles.button,
              selectedSize === "Médio" && styles.selectedButton,
            ]}
            labelStyle={styles.buttonText}
          >
            Médio
          </Button>
          <Button
            mode={selectedSize === "Grande" ? "contained" : "outlined"}
            onPress={() => handleSizePress("Grande")}
            style={[
              styles.button,
              selectedSize === "Grande" && styles.selectedButton,
            ]}
            labelStyle={styles.buttonText}
          >
            Grande
          </Button>
        </View>
        <View style={styles.filterOptions}>
          <Button
            mode={selectedGender === "Macho" ? "contained" : "outlined"}
            onPress={() => handleGenderPress("Macho")}
            style={[
              styles.button,
              selectedGender === "Macho" && styles.selectedButton,
            ]}
            labelStyle={styles.buttonText}
          >
            Macho
          </Button>
          <Button
            mode={selectedGender === "Fêmea" ? "contained" : "outlined"}
            onPress={() => handleGenderPress("Fêmea")}
            style={[
              styles.button,
              selectedGender === "Fêmea" && styles.selectedButton,
            ]}
            labelStyle={styles.buttonText}
          >
            Fêmea
          </Button>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {mockAnimals.map((animal) => (
          <AnimalCard
            key={animal.id}
            name={animal.name}
            age={animal.age}
            image={animal.image}
            location={animal.location}
            reason={animal.reason}
            onPress={() => handlePress(animal.name)}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#e0e0e0",
  },
  filterContainer: {
    marginBottom: 20,
    paddingTop: 50,
    backgroundColor: "#cc7740",
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  filterOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    minWidth: 60,
  },
  selectedButton: {
    backgroundColor: "#333333",
    borderColor: "#333333",
  },
  filterColumn: {
    flexDirection: "column",
    alignItems: "center",
  },
  filterText: {
    marginTop: -15,
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});
