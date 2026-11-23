import React from "react";

import {
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";

import {
  Header,
  PrimaryButton,
  SectionCard,
  PresencaCard,
} from "../../components";

import { styles } from "./styles";

import {
  RouteProp,
  useRoute,
  useNavigation,
} from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation/types";

import { useCatequizandosContext } from "../../context/CatequizandosContext";
import { usePresencasContext } from "../../context/PresencasContext";

type RouteProps = RouteProp<
  RootStackParamList,
  "NovoEncontro"
>;

export default function PresencaEncontro() {

  const route = useRoute<RouteProps>();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const turmaId =
    route.params?.turmaId ?? "";

  const { catequizandos } =
    useCatequizandosContext();

  const { adicionarPresenca } =
    usePresencasContext();

  const catequizandosDaTurma =
    catequizandos.filter(
      item => item.turmaId === turmaId
    );

  const [presencas, setPresencas] =
    React.useState<Record<string, boolean>>({});

  function alterarPresenca(id: string) {

    setPresencas((old) => ({

      ...old,

      [id]: !old[id],

    }));

  }

  function salvarPresenca() {

    catequizandosDaTurma.forEach((catequizando) => {

      adicionarPresenca({

        id: Date.now().toString() + catequizando.id,

        encontroId: "",

        catequizandoId: catequizando.id,

        presente:
          presencas[catequizando.id] ?? false,

      });

    });

    Alert.alert(
      "Sucesso",
      "Presença registrada com sucesso!"
    );

    navigation.goBack();

  }

  return (

    <SafeAreaView style={styles.container}>

      <Header
        title="Registrar Presença"
        subtitle="Selecione os presentes"
      />

      <ScrollView
        contentContainerStyle={styles.content}
      >

        <SectionCard
          title="Lista de Presença"
          icon="users"
        >

          {catequizandosDaTurma.map((catequizando) => (

            <PresencaCard

              key={catequizando.id}

              nome={catequizando.nome}

              presente={
                presencas[catequizando.id] ?? false
              }

              onToggle={() =>
                alterarPresenca(catequizando.id)
              }

            />

          ))}

        </SectionCard>

      </ScrollView>

      <PrimaryButton
        title="Salvar Presença"
        onPress={salvarPresenca}
      />

    </SafeAreaView>

  );

}