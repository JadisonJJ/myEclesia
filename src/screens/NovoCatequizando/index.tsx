import React from "react";
import {
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";


import {
  Header,
  Input,
  PrimaryButton,
  SectionCard,
  SacramentoSwitch,
  SelectField,
  SelectionModal,
  Snackbar,
} from "../../components";
import { useTurmasContext } from "../../context/TurmasContext";
import { useCatequizandosContext } from "../../context/CatequizandosContext";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation/types";

import { styles } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";

import { mascaraTelefone } from "../../utils/masks";

type RouteProps = RouteProp<
  RootStackParamList,
  "NovoCatequizando"
>;

export default function NovoCatequizando() {

  const route = useRoute<RouteProps>();

const catequizandoEditando =
    route.params?.catequizando;

const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const [nome, setNome] = React.useState(catequizandoEditando?.nome ??"");

const [dataNascimento, setDataNascimento] = React.useState(catequizandoEditando?.dataNascimento ?? "");

const [telefone, setTelefone] = React.useState(catequizandoEditando?.telefone ?? "");

const [responsavel, setResponsavel] = React.useState(catequizandoEditando?.responsavel ??"");

const [telefoneResponsavel, setTelefoneResponsavel] = React.useState(catequizandoEditando?.telefoneResponsavel ?? "");

const [endereco, setEndereco] = React.useState(catequizandoEditando?.endereco ?? "");

const [observacoes, setObservacoes] = React.useState(catequizandoEditando?.observacoes ?? "");

const {
    adicionarCatequizando,
    atualizarCatequizando,
} = useCatequizandosContext();

const [batizado, setBatizado] =
React.useState(
    catequizandoEditando?.batismo ?? false
);
const { turmas } = useTurmasContext();
const [mostrarCalendario, setMostrarCalendario] =
  React.useState(false);

const [dataSelecionada, setDataSelecionada] =
  React.useState(new Date());

const [primeiraComunhao, setPrimeiraComunhao] = React.useState(
    catequizandoEditando?.primeiraComunhao ?? false
);
const [turmaSelecionada, setTurmaSelecionada] =
React.useState(
    catequizandoEditando?.turmaId ?? ""
);


  const [modalTurmasVisible, setModalTurmasVisible] =
  React.useState(false);

  const [snackbarVisible, setSnackbarVisible] =
  React.useState(false);

const [snackbarMessage, setSnackbarMessage] =
  React.useState("");

const [snackbarType, setSnackbarType] =
  React.useState<"success" | "error" | "warning">("success");

  function validarFormulario() {

  if (!nome.trim()) {

    return "Informe o nome do catequizando.";

  }

  if (!dataNascimento.trim()) {

    return "Informe a data de nascimento.";

  }

  if (!responsavel.trim()) {

    return "Informe o responsável.";

  }

  if (!telefoneResponsavel.trim()) {

    return "Informe o telefone do responsável.";

  }

  if (!turmaSelecionada) {

    return "Selecione uma turma.";

  }

  return null;

}

  function salvarCatequizando() {

  const erro = validarFormulario();

    if (erro) {

  setSnackbarMessage(erro);

  setSnackbarType("error");

  setSnackbarVisible(true);

  return;

}  

  const novoCatequizando = {

    id: Date.now().toString(),

    nome,

    dataNascimento,

    telefone,

    responsavel,

    telefoneResponsavel,

    endereco,

    observacoes,

    batismo: batizado,

    primeiraComunhao,

    turmaId: turmaSelecionada,

  };

if (catequizandoEditando) {

  atualizarCatequizando({
    ...novoCatequizando,
    id: catequizandoEditando.id,
  });

  setSnackbarMessage("Catequizando atualizado com sucesso!");

} else {

  adicionarCatequizando(novoCatequizando);

  setSnackbarMessage("Catequizando cadastrado com sucesso!");

}

setSnackbarType("success");

setSnackbarVisible(true);

setTimeout(() => {
  navigation.goBack();
}, 1500);

}
function selecionarData(
  event: any,
  data?: Date
) {

  setMostrarCalendario(false);

  if (!data) return;

  setDataSelecionada(data);

  const dia = String(data.getDate()).padStart(2, "0");

  const mes = String(data.getMonth() + 1).padStart(2, "0");

  const ano = data.getFullYear();

  setDataNascimento(`${dia}/${mes}/${ano}`);

}


  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.headerArea}>

        <Header
          title="Novo Catequizando"
          subtitle="Cadastre um novo jovem"
        />

      </View>

      <ScrollView
        style={styles.formArea}
        showsVerticalScrollIndicator={false}
      >

        <SectionCard title="Dados Pessoais"
          icon="user"
          >

        <Input
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
        />

        
        <Input
    placeholder="Data de Nascimento"
    value={dataNascimento}
    editable={false}
    onPressIn={() => setMostrarCalendario(true)}
/>
  

        <Input
    placeholder="Telefone"
    value={telefone}
    onChangeText={(texto) =>
        setTelefone(mascaraTelefone(texto))
    }
/>

        </SectionCard>

       <SectionCard title="Responsável" icon="user">

  <Input
    placeholder="Nome do Responsável"
    value={responsavel}
    onChangeText={setResponsavel}
  />
  

 
  <Input
    placeholder="Telefone do Responsável"
    value={telefoneResponsavel}
    onChangeText={(texto) =>
        setTelefoneResponsavel(mascaraTelefone(texto))
    }
  />

</SectionCard>



        <View style={styles.fieldSpacing} />

       <SectionCard title="Endereço" icon="map-pin">

  <Input
    placeholder="Endereço"
    value={endereco}
    onChangeText={setEndereco}
  />

</SectionCard>

<SectionCard
  title="Sacramentos"
  icon="book-open"
>

  <SacramentoSwitch
    title="Batismo"
    description="O catequizando já recebeu este sacramento."
    value={batizado}
    onValueChange={setBatizado}
  />

  <SacramentoSwitch
    title="Primeira Comunhão"
    description="Já realizou a Primeira Eucaristia."
    value={primeiraComunhao}
    onValueChange={setPrimeiraComunhao}
  />

</SectionCard>


<SectionCard
  title="Turma"
  icon="users"
>

  <SelectField
    label="Turma"
    value={turmaSelecionada}
    placeholder="Selecione uma turma"
    onPress={() => {

      setModalTurmasVisible(true);

    }}
  />

</SectionCard>

      </ScrollView>

      <View style={styles.buttonArea}>

       <PrimaryButton
    title="Continuar"
    onPress={salvarCatequizando}
/>

<SelectionModal
  visible={modalTurmasVisible}
  title="Selecionar Turma"
  items={turmas.map((turma) => ({
    id: turma.id,
    label: turma.nome,
  }))}
  onSelect={(item) => {

    setTurmaSelecionada(item.label);

    setModalTurmasVisible(false);

  }}
  onClose={() => {

    setModalTurmasVisible(false);

  }}
/>
 </View>
{mostrarCalendario && (

  <DateTimePicker

    value={dataSelecionada}

    mode="date"

    display="default"

    maximumDate={new Date()}

    onChange={selecionarData}

  />

  

)}
<Snackbar
  visible={snackbarVisible}
  message={snackbarMessage}
  type={snackbarType}
  onDismiss={() => setSnackbarVisible(false)}
/>
  

    </SafeAreaView>

  );

}