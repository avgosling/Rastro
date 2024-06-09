import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";

type AnimalCardProps = {
  name: string;
  age: string;
  image: string;
  location: string;
  reason: string;
  onPress: () => void;
};

const AnimalCard = ({
  name,
  age,
  image,
  location,
  reason,
  onPress,
}: AnimalCardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleInterest = () => {
    setModalVisible(false);
    setConfirmationModalVisible(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationModalVisible(false);
  };

  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={{ uri: image }} style={styles.card}>
        <View style={styles.overlay}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>{age}</Text>
          <Button
            mode="contained"
            onPress={handlePress}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Saber mais
          </Button>
        </View>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{name}</Text>
            <View style={styles.modalRow}>
              <Text style={styles.modalBoldText}>Localização: </Text>
              <Text style={styles.modalText}>{location}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modalBoldText}>Motivo: </Text>
              <Text style={styles.modalText}>{reason}</Text>
            </View>
            <Button
              mode="contained"
              onPress={handleInterest}
              style={styles.modalButton}
              labelStyle={{ fontFamily: "Poppins-Regular" }}
            >
              Tenho interesse
            </Button>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmationModalVisible}
        onRequestClose={handleConfirmationClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Seu email e número para contato foram enviados para o anunciante
              de {name}.
            </Text>
            <Button
              mode="contained"
              onPress={handleConfirmationClose}
              style={styles.modalButton}
            >
              <Text style={styles.buttonText}>Ok</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  card: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    justifyContent: "flex-end",
  },
  name: {
    fontSize: 20,
    color: "white",
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
  },
  age: {
    fontSize: 16,
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  button: {
    marginTop: 10,
    backgroundColor: "grey",
    width: 120,
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#333",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins-Regular",
  },
  modalRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  modalText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  modalBoldText: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },
  modalButton: {
    backgroundColor: "#333333",
    marginTop: 10,
  },
});

export default AnimalCard;
