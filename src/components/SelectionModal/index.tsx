import React from "react";

import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { styles } from "./styles";

import {
  SelectionModalProps,
  SelectionItem,
} from "./types";

export default function SelectionModal({

  visible,

  title,

  items,

  onSelect,

  onClose,

}: SelectionModalProps) {

  return (

    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >

      <View style={styles.overlay}>

        <View style={styles.container}>

          <Text style={styles.title}>
            {title}
          </Text>

          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

              <TouchableOpacity
                style={styles.item}
                onPress={() => onSelect(item)}
              >

                <Text style={styles.itemText}>
                  {item.label}
                </Text>

              </TouchableOpacity>

            )}
          />

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onClose}
          >

            <Text style={styles.cancelText}>
              Cancelar
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </Modal>

  );

}