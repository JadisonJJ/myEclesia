import React from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";

import {
  Header,
  PrimaryButton,
  SecondaryButton,
  SectionCard,
  InfoRow,
} from "../../components";
import { calcularIdade } from "../../utils/calcularIdade";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { RouteProp, useRoute, useNavigation, } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTurmasContext } from "../../context/TurmasContext";
import { useCatequizandosContext }
from "../../context/CatequizandosContext";


export default function DetalhesTurma() {

  const navigation =
  useNavigation<
    NativeStackNavigationProp<RootStackParamList>
  >();

  const { removerTurma } = useTurmasContext();
const { catequizandos } =
  useCatequizandosContext();

  function confirmarExclusao() {
  Alert.alert(
    "Excluir Turma",
    "Tem certeza que deseja excluir esta turma? Essa ação não poderá ser desfeita.",
    [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        style: "destructive",
        onPress: () => {
          removerTurma(turma.id);
          navigation.navigate("Turmas");
        },
      },
    ]
  );
}

  const route =
    useRoute<RouteProp<RootStackParamList,
    "DetalhesTurma">
    >();

    const { turma } = route.params; 

    const catequizandosDaTurma =
  catequizandos.filter(
    (catequizando) =>
      catequizando.turmaId === turma.id
  );
  const idadeMedia =
  catequizandosDaTurma.length > 0
    ? Math.round(

        catequizandosDaTurma.reduce(

          (total, catequizando) =>

            total +
            calcularIdade(
              catequizando.dataNascimento
            ),

          0

        ) /

        catequizandosDaTurma.length

      )
    : 0;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerArea}>
        <Header
          title="Detalhes da Turma"
          subtitle="Informações da turma"
        />
      </View>

      <ScrollView
        style={styles.contentArea}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.infoCard}>

          <View style={styles.field}>
            <Text style={styles.label}>
              Nome da Turma
            </Text>

            <Text style={styles.value}>
              {turma.nome}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              Catequista Responsável
            </Text>

            <Text style={styles.value}>
              {turma.catequista}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              Comunidade
            </Text>

            <Text style={styles.value}>
              {turma.comunidade}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              Etapa da Catequese
            </Text>

            <Text style={styles.value}>
              {turma.etapa}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              Dia da Semana
            </Text>

            <Text style={styles.value}>
              {turma.dia}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              Horário
            </Text>

            <Text style={styles.value}>
              {turma.horario}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              Ano Catequético
            </Text>

            <Text style={styles.value}>
              {turma.anoCatequetico}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              Catequizandos
            </Text>

            <Text style={styles.value}>
              {catequizandosDaTurma.length}
            </Text>
          </View>

        </View>

        <View style={{ marginTop: 24 }}>

<SectionCard
  title="Catequizandos"
  icon="users"
>

  {catequizandosDaTurma.length === 0 ? (

    <Text style={styles.value}>
      Nenhum catequizando nesta turma.
    </Text>

  ) : (

    catequizandosDaTurma.map((catequizando) => (

    <TouchableOpacity
  key={catequizando.id}
  onPress={() =>
    navigation.navigate(
      "DetalhesCatequizando",
      {
        catequizando,
      }
    )
  }
>

  <View
  style={{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  }}
>

  <Feather
    name="user"
    size={18}
    color="#3E63A8"
  />

  <View
    style={{
      marginLeft: 10,
    }}
  >

    <Text
      style={{
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
      }}
    >
      {catequizando.nome}
    </Text>

    <Text
      style={{
        fontSize: 13,
        color: "#777",
      }}
    >
      {calcularIdade(catequizando.dataNascimento)} anos
    </Text>

  </View>

</View>

</TouchableOpacity>

    ))

  )}

</SectionCard>

<SectionCard
  title="Resumo da Turma"
  icon="bar-chart-2"
>

  <InfoRow
    icon={
      <Feather
        name="users"
        size={18}
        color="#3E63A8"
      />
    }
    label={`Total de catequizandos: ${catequizandosDaTurma.length}`}
  />

  <InfoRow
    icon={
      <Feather
        name="check-circle"
        size={18}
        color="#4CAF50"
      />
    }
    label={`Batizados: ${
      catequizandosDaTurma.filter(c => c.batismo).length
    }`}
  />

  <InfoRow
    icon={
      <Feather
        name="award"
        size={18}
        color="#4CAF50"
      />
    }
    label={`Primeira Comunhão: ${
      catequizandosDaTurma.filter(
        c => c.primeiraComunhao
      ).length
    }`}
  />

  <InfoRow
  icon={
    <Feather
      name="clock"
      size={18}
      color="#3E63A8"
    />
  }
  label={`Idade média: ${idadeMedia} anos`}
/>

</SectionCard>


<PrimaryButton
  title="Editar Turma"
  onPress={() =>
    navigation.navigate("NovaTurma", {
      turma,
    })
  }
/>

<View style={{ height: 12 }} />

<SecondaryButton
  title="Encontros da Turma"
  onPress={() =>
    navigation.navigate("EncontrosTurma", {
      turma,
    })
  }
/>

<View style={{ height: 12 }} />

<SecondaryButton
  title="Excluir Turma"
  onPress={confirmarExclusao}
/>

<View style={{ height: 12 }} />

</View>


      </ScrollView>

    </SafeAreaView>
  );
}