import React from "react";

import {
  SafeAreaView,
  View,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation/types";

import { styles } from "./style";

import {
  Avatar,
  Input,
  PrimaryButton,
  SecondaryButton,
  AppVersion,
} from "../../components";

export default function Login() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.logoArea}>

        {/* Logo */}

        <Avatar
          size={170}
          image={require("../../assets/images/logo.png")}
        />
        <View style={styles.titleArea}>

          <Text style={styles.title}>
            MyEclésia
          </Text>
          <Text style={styles.subtitle}>
            Seu caminho na Catequese
          </Text>
        </View>
        </View>

        <View style={styles.formArea}>
        {/* Inputs */}

        <Input
          placeholder="E-mail"
        />

        <View style={styles.space} />

        <Input
          placeholder="Senha"
          secureTextEntry
        />
        </View>

        <View style={styles.bottomArea}>
          <View style={styles.buttonArea}>

        {/* Botões */}

        <PrimaryButton
          title="Entrar"
          onPress={() => navigation.navigate("Home")}
        />
        <View style={styles.space} />

        <SecondaryButton
          title="Sobre o aplicativo"
          onPress={() => {}}
        />

      </View>

      <View style={styles.space} />

      <AppVersion version="1.0.0" />
      </View>

    </SafeAreaView>

  );

}