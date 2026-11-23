import React from "react";

import {

  View,

  Modal,

  TouchableOpacity,

  Text,

} from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

import { OptionsMenuProps } from "./types";

export default function OptionsMenu({

  onEdit,

  onDelete,

}: OptionsMenuProps) {

  const [visible, setVisible] = React.useState(false);

  return (

    <>

      <TouchableOpacity

        style={styles.button}

        onPress={() => setVisible(true)}

      >

        <Feather

          name="more-vertical"

          size={22}

          color="#777"

        />

      </TouchableOpacity>

      <Modal

        visible={visible}

        transparent

        animationType="fade"

      >

        <TouchableOpacity

          style={{

            flex:1,

            justifyContent:"center",

            alignItems:"center",

            backgroundColor:"rgba(0,0,0,.25)",

          }}

          activeOpacity={1}

          onPress={() => setVisible(false)}

        >

          <View style={styles.modal}>

            <TouchableOpacity

              style={styles.option}

              onPress={() => {

                setVisible(false);

                onEdit();

              }}

            >

              <Text style={styles.text}>

                Editar

              </Text>

            </TouchableOpacity>

            <TouchableOpacity

              style={styles.option}

              onPress={() => {

                setVisible(false);

                onDelete();

              }}

            >

              <Text

                style={[

                  styles.text,

                  styles.danger,

                ]}

              >

                Excluir

              </Text>

            </TouchableOpacity>

          </View>

        </TouchableOpacity>

      </Modal>

    </>

  );

}