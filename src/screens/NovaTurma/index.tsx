import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from "react-native";

import {
  Header,

  Input,
  PrimaryButton,
  Snackbar,
} from "../../components";

import { styles } from "./styles";
import { useTurmasContext } from "../../context/TurmasContext";
import { useNavigation, useRoute, RouteProp, } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { formatarHorario } from "./helpers";
import { validarFormulario } from "./validations";


export default function NovaTurma() {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
const route =
  useRoute<RouteProp<RootStackParamList, "NovaTurma">>();

const turma = route.params?.turma;
//Verificar se a tela esta em modo edição
const { adicionarTurma, atualizarTurma, } = useTurmasContext();
const [nome, setNome] = useState("");
const [catequista, setCatequista] = useState("");
const [comunidade, setComunidade] = useState("");
const [etapa, setEtapa] = useState("");
const [dia, setDia] = useState("");
const [horario, setHorario] = useState("");
const [anoCatequetico, setAnoCatequetico] = useState("");
const [quantidadeCatequizandos, setQuantidadeCatequizandos] =  useState("");
const [erro, setErro] = useState("");
const [snackbarVisible, setSnackbarVisible] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState("");

useEffect(() => {
  if (!snackbarVisible) {
    return;
  }

const timer = setTimeout(() => {
  setSnackbarVisible(false);
  navigation.navigate("Turmas");
}, 2500);

  return () => clearTimeout(timer);
}, [snackbarVisible, navigation]);

useEffect(() => {

  if (!turma) {
    return;
  }

  setNome(turma.nome);
  setCatequista(turma.catequista);
  setComunidade(turma.comunidade);
  setEtapa(turma.etapa);
  setDia(turma.dia);
  setHorario(turma.horario);
  setAnoCatequetico(turma.anoCatequetico);
  setQuantidadeCatequizandos(
    turma.quantidadeCatequizandos.toString()
  );

}, [turma]);

function limparFormulario() {
  setNome("");
  setCatequista("");
  setComunidade("");
  setEtapa("");
  setDia("");
  setHorario("");
  setAnoCatequetico("");
  setQuantidadeCatequizandos("");
  setErro("");
}
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerArea}>
        <Header
          title={
  turma
    ? "Editar Turma"
    : "Nova Turma"
}
          subtitle={
  turma
    ? "Atualize os dados da turma"
    : "Preencha os dados da turma"
}
        />
      </View>

      <ScrollView
        style={styles.formArea}
        showsVerticalScrollIndicator={false}
      >

        <Input
          placeholder="Nome da Turma"
          value={nome}
          onChangeText={setNome}
          
        />
        

        <View style={styles.fieldSpacing} />

        <Input
          placeholder="Catequista Responsável"
          value={catequista}
          onChangeText={setCatequista}
          />
          
        <View style={styles.fieldSpacing} />

        <Input
          placeholder="Comunidade"
          value={comunidade}
          onChangeText={setComunidade}
        />

        <View style={styles.fieldSpacing} />

        <Input
          placeholder="Etapa da Catequese"
          value={etapa}
          onChangeText={setEtapa}
        />

        <View style={styles.fieldSpacing} />

        <Input
          placeholder="Dia da Semana"
          value={dia}
          onChangeText={setDia}
        />

        <View style={styles.fieldSpacing} />

        <Input
           placeholder="Horário"
  value={horario}
  onChangeText={(texto) => {
    setHorario(formatarHorario(texto));
  }}
  keyboardType="numeric"
        />

        <View style={styles.fieldSpacing} />

        <Input
          placeholder="Ano Catequético"
          value={anoCatequetico}
          onChangeText={setAnoCatequetico}
        />

        <View style={styles.fieldSpacing} />

        <Input
          placeholder="Quantidade de Catequizandos"
          value={quantidadeCatequizandos}
          onChangeText={setQuantidadeCatequizandos}
          keyboardType="numeric"
        />

      </ScrollView>

      <View style={styles.buttonArea}>
      {erro !== "" && (
  <Text style={{ color: "red", marginBottom: 10 }}>
    {erro}
  </Text>
)}
  <PrimaryButton
  title={turma ? "Atualizar Turma" : "Salvar Turma"}
  onPress={() => {

const mensagemErro = validarFormulario({
  nome,
  catequista,
  comunidade,
  etapa,
  dia,
  horario,
  anoCatequetico,
  quantidadeCatequizandos,
});

if (mensagemErro) {
  setErro(mensagemErro);
  return;
}

setErro("");


const dadosTurma = {
  id: turma?.id ?? Date.now().toString(),
  nome,
  catequista,
  comunidade,
  etapa,
  dia,
  horario,
  anoCatequetico,
  quantidadeCatequizandos: Number(
    quantidadeCatequizandos
  ),
};

if (turma) {
  atualizarTurma(dadosTurma);
} else {
  adicionarTurma(dadosTurma);
}

  setSnackbarMessage(  turma
    ? "Turma atualizada com sucesso!"
    : "Turma cadastrada com sucesso!");
  setSnackbarVisible(true);

  limparFormulario();


}}
/>
<Snackbar
  visible={snackbarVisible}
  message={snackbarMessage}
/>

      </View>

    </SafeAreaView>
  );
}