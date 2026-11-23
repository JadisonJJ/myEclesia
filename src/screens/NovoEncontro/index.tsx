import React from "react";

import {
  SafeAreaView,
  ScrollView,
} from "react-native";

import {
  Header,
  SectionCard,
  Input,
  PrimaryButton,
} from "../../components";
import {
  RouteProp,
  useRoute,
  useNavigation,
} from "@react-navigation/native";

import { styles } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { Alert } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation/types";

import { useEncontrosContext } from "../../context/EncontrosContext";

export default function NovoEncontro() {

type RouteProps = RouteProp<
  RootStackParamList,
  "NovoEncontro"
>;

const route = useRoute<RouteProps>();

const turmaId = route.params?.turmaId ?? "";

const [data, setData] = React.useState("");

const [tema, setTema] = React.useState("");

const [leituraBiblica, setLeituraBiblica] =
  React.useState("");

const [objetivo, setObjetivo] =
  React.useState("");

const [atividades, setAtividades] =
  React.useState("");

const [observacoes, setObservacoes] =
  React.useState("");

const [mostrarCalendario, setMostrarCalendario] =
  React.useState(false);

const [dataSelecionada, setDataSelecionada] =
  React.useState(new Date());

const navigation =
  useNavigation<
    NativeStackNavigationProp<RootStackParamList>
  >();

const {
  adicionarEncontro,
} = useEncontrosContext();



  function selecionarData(
  event: any,
  date?: Date
) {

  setMostrarCalendario(false);

  if (!date) return;

  setDataSelecionada(date);

  const dia = String(date.getDate()).padStart(2, "0");

  const mes = String(date.getMonth() + 1).padStart(2, "0");

  const ano = date.getFullYear();

  setData(`${dia}/${mes}/${ano}`);

}

function salvarEncontro() {

  if (
    !data ||
    !tema ||
    !leituraBiblica ||
    !objetivo
  ) {

    Alert.alert(
      "Atenção",
      "Preencha todos os campos obrigatórios."
    );

    return;

  }

  adicionarEncontro({

    id: Date.now().toString(),

    turmaId: turmaId,

    data,

    tema,

    leituraBiblica,

    objetivo,

    atividades,

    observacoes,

  });

  Alert.alert(
    "Sucesso",
    "Encontro cadastrado com sucesso!"
  );

  navigation.goBack();

}

  return (

    <SafeAreaView style={styles.container}>

      <Header
        title="Novo Encontro"
        subtitle="Registrar encontro da turma"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <SectionCard
          title="Informações"
          icon="calendar"
        >

       <Input
  placeholder="Data do encontro"
  value={data}
  editable={false}
  onPressIn={() => setMostrarCalendario(true)}
/>

          <Input
            placeholder="Tema da aula"
            value={tema}
            onChangeText={setTema}
          />

        </SectionCard>

        <SectionCard
          title="Conteúdo"
          icon="book-open"
        >

          <Input
            placeholder="Leitura Bíblica"
            value={leituraBiblica}
            onChangeText={setLeituraBiblica}
          />

          <Input
  placeholder="Objetivo"
  value={objetivo}
  onChangeText={setObjetivo}
/>

        </SectionCard>

        <SectionCard
          title="Atividades"
          icon="edit-3"
        >

          <Input
            placeholder="Atividades realizadas"
            multiline
            numberOfLines={4}
            value={atividades}
            onChangeText={setAtividades}
          />

        </SectionCard>

        <SectionCard
          title="Observações"
          icon="file-text"
        >

          <Input
            placeholder="Observações"
            multiline
            numberOfLines={5}
            value={observacoes}
            onChangeText={setObservacoes}
          />

        </SectionCard>
{mostrarCalendario && (

  <DateTimePicker

    value={dataSelecionada}

    mode="date"

    display={
      Platform.OS === "ios"
        ? "spinner"
        : "default"
    }

    onChange={selecionarData}

  />

)}

        <PrimaryButton
  title="Salvar Encontro"
  onPress={salvarEncontro}
/>

      </ScrollView>

    </SafeAreaView>

  );

}