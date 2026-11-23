import React from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Alert,
} from "react-native";

import {
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Header,
  SectionCard,
  PrimaryButton,
  SecondaryButton,
} from "../../components";

import { RootStackParamList } from "../../navigation/types";

import { useEncontrosContext } from "../../context/EncontrosContext";

import { styles } from "./styles";

type RouteProps = RouteProp<
  RootStackParamList,
  "DetalhesEncontro"
>;

export default function DetalhesEncontro() {

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList>
    >();

  const route =
    useRoute<RouteProps>();

  const { encontro } =
    route.params;

  const {
    removerEncontro,
  } = useEncontrosContext();

  function confirmarExclusao() {

    Alert.alert(

      "Excluir Encontro",

      "Deseja realmente excluir este encontro?",

      [

        {
          text: "Cancelar",
          style: "cancel",
        },

        {

          text: "Excluir",

          style: "destructive",

          onPress: () => {

            removerEncontro(encontro.id);

            navigation.goBack();

          },

        },

      ]

    );

  }

  return (

    <SafeAreaView style={styles.container}>

      <Header
        title="Encontro"
        subtitle={encontro.tema}
      />

      <ScrollView
        contentContainerStyle={styles.content}
      >

        <SectionCard
          title="Informações"
          icon="calendar"
        >

          <Text style={styles.label}>
            Data
          </Text>

          <Text style={styles.value}>
            {encontro.data}
          </Text>

          <View style={styles.space} />

          <Text style={styles.label}>
            Tema
          </Text>

          <Text style={styles.value}>
            {encontro.tema}
          </Text>

        </SectionCard>

        <SectionCard
          title="Leitura Bíblica"
          icon="book-open"
        >

          <Text style={styles.value}>
            {encontro.leituraBiblica}
          </Text>

        </SectionCard>

        <SectionCard
          title="Objetivo"
          icon="target"
        >

          <Text style={styles.value}>
            {encontro.objetivo}
          </Text>

        </SectionCard>

        <SectionCard
          title="Atividades"
          icon="edit-3"
        >

          <Text style={styles.value}>
            {encontro.atividades}
          </Text>

        </SectionCard>

        <SectionCard
          title="Observações"
          icon="file-text"
        >

          <Text style={styles.value}>
            {encontro.observacoes}
          </Text>

        </SectionCard>

        <PrimaryButton
          title="Editar"
          onPress={() =>
            navigation.navigate(
              "NovoEncontro",
              {
                turmaId: encontro.turmaId,
              }
            )
          }
        />

        <View style={styles.space} />

        <SecondaryButton
          title="Excluir"
          onPress={confirmarExclusao}
        />

      </ScrollView>

    </SafeAreaView>

  );

}