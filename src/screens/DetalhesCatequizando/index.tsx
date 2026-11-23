import React from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
} from "react-native";

import { RouteProp, useRoute, useNavigation, } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

import {
  Header,
  Avatar,
  SectionCard,
  InfoRow,
  PrimaryButton,
  SecondaryButton,
} from "../../components";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { calcularIdade } from "../../utils/calcularIdade";
import { useCatequizandosContext }
from "../../context/CatequizandosContext";

type RouteProps = RouteProp<
  RootStackParamList,
  "DetalhesCatequizando"
>;

export default function DetalhesCatequizando() {
   const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProps>();

  const { catequizando } = route.params;
  const idade =
    calcularIdade(catequizando.dataNascimento);
 const { removerCatequizando } =
  useCatequizandosContext();
  return (

    <SafeAreaView style={styles.container}>

      <Header
        title="Catequizando"
        subtitle="Informações completas"
      />

      <ScrollView
        contentContainerStyle={styles.content}
      >
<View style={styles.profileCard}>
<Avatar
  initials={catequizando.nome
    .split(" ")
    .map(nome => nome[0])
    .slice(0, 2)
    .join("")
  }
/>

<Text style={styles.nome}>
  {catequizando.nome}
</Text>

<Text style={styles.subtitulo}>
  {idade} anos
</Text>


</View>

<View style={styles.space} />

<SectionCard
  title="Dados Pessoais"
  icon="user"
>
 
  <InfoRow
    icon={
      <Feather
        name="calendar"
        size={18}
        color="#3E63A8"
      />
    }
    label={`${idade} anos • ${catequizando.dataNascimento}`}
  />

  <InfoRow
    icon={
      <Feather
        name="phone"
        size={18}
        color="#3E63A8"
      />
    }
    label={catequizando.telefone}
  />
</SectionCard>

<SectionCard
  title="Responsável"
  icon="user"
>
  <InfoRow
    icon={
      <Feather
        name="user"
        size={18}
        color="#3E63A8"
      />
    }
    label={catequizando.responsavel}
  />

  <InfoRow
    icon={
      <Feather
        name="phone-call"
        size={18}
        color="#3E63A8"
      />
    }
    label={catequizando.telefoneResponsavel}
  />

  <InfoRow
    icon={
      <Feather
        name="map-pin"
        size={18}
        color="#3E63A8"
      />
    }
    label={catequizando.endereco}
  />

</SectionCard>
<SectionCard
  title="Vida Sacramental"
  icon="book-open"
>

  <InfoRow
    icon={
      <Feather
        name={
          catequizando.batismo
            ? "check-circle"
            : "circle"
        }
        size={18}
        color={
          catequizando.batismo
            ? "#4CAF50"
            : "#BDBDBD"
        }
      />
    }
    label="Batizado"
  />

  <InfoRow
    icon={
      <Feather
        name={
          catequizando.primeiraComunhao
            ? "award"
            : "circle"
        }
        size={18}
        color={
          catequizando.primeiraComunhao
            ? "#4CAF50"
            : "#BDBDBD"
        }
      />
    }
    label="Primeira Comunhão"
  />

  <InfoRow
    icon={
      <Feather
        name="users"
        size={18}
        color="#3E63A8"
      />
    }
    label={catequizando.turmaId}
  />

</SectionCard>

        <View style={styles.space} />

        <SectionCard
  title="Observações"
  icon="file-text"
>

  <Text style={styles.observacoes}>
    {catequizando.observacoes ||
      "Nenhuma observação cadastrada."}
  </Text>

</SectionCard>

        <View style={styles.space} />

       <PrimaryButton
  title="Editar"
  onPress={() =>
    navigation.navigate(
      "NovoCatequizando",
      {
        catequizando,
      }
    )
  }
/>

        <View style={styles.space} />

       <SecondaryButton
  title="Excluir"
  onPress={() => {

    Alert.alert(
      "Excluir Catequizando",
      "Deseja realmente excluir este catequizando?",

      [
        {
          text: "Cancelar",
          style: "cancel",
        },

        {
          text: "Excluir",
          style: "destructive",

          onPress: () => {

            removerCatequizando(catequizando.id);

            navigation.goBack();

          },
        },
      ]
    );

  }}
/>

      </ScrollView>

    </SafeAreaView>

  );

}