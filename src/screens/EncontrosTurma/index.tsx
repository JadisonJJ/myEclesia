import React from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";

import {
  RouteProp,
  useRoute,
  useNavigation,
} from "@react-navigation/native";

import {
  Header,
  SectionCard,
  PrimaryButton,
  EncontroCard,
} from "../../components";
import { useEncontrosContext }
from "../../context/EncontrosContext";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./styles";

type RouteProps = RouteProp<
  RootStackParamList,
  "EncontrosTurma"
>;

export default function EncontrosTurma() {

const route = useRoute<RouteProps>();

const { turma } = route.params;

const navigation =
  useNavigation<
    NativeStackNavigationProp<RootStackParamList>
  >();

const { encontros } =
  useEncontrosContext();

const encontrosDaTurma =
  encontros.filter(
    encontro =>
      encontro.turmaId === turma.id
  );

  return (

  <SafeAreaView style={styles.container}>

    <Header
      title="Encontros"
      subtitle={turma.nome}
    />

    <ScrollView
      contentContainerStyle={styles.content}
    >

      <SectionCard
        title="Histórico de Encontros"
        icon="calendar"
      >

       {encontrosDaTurma.length === 0 ? (

  <Text style={styles.emptyText}>
    Nenhum encontro cadastrado.
  </Text>

) : (

encontrosDaTurma.map((encontro) => (

  <EncontroCard
    key={encontro.id}
    encontro={encontro}
    onPress={() =>
      navigation.navigate(
        "DetalhesEncontro",
        {
          encontro,
        }
      )
    }
  />

))

)}

      </SectionCard>

     <PrimaryButton
  title="Novo Encontro"
  onPress={() =>
    navigation.navigate(
      "NovoEncontro",
      {
        turmaId: turma.id,
      }
    )
  }
/>

    </ScrollView>

  </SafeAreaView>

);
}