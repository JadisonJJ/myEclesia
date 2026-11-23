import React from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { useCatequizandosContext } from "../../context/CatequizandosContext";

import {
  Header,
  Input,
  PrimaryButton,
  CatequizandoCard,
} from "../../components";

import { styles } from "./style";

export default function Catequizandos() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [pesquisa, setPesquisa] = React.useState("");
const {
    catequizandos,
    removerCatequizando,
} = useCatequizandosContext();
const catequizandosFiltrados = catequizandos.filter((catequizando) =>

  catequizando.nome
    .toLowerCase()
    .includes(pesquisa.toLowerCase())

);

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.headerArea}>

        <Header
          title="Catequizandos"
          subtitle="Gerencie seus jovens"
        />

      </View>

<ScrollView style={styles.contentArea}>

  <Input
    placeholder="Pesquisar catequizando..."
    value={pesquisa}
    onChangeText={setPesquisa}
  />

  <View style={{ height: 20 }} />

  

  {catequizandosFiltrados.length === 0 ? (

  <Text style={styles.emptyText}>
    Nenhum catequizando encontrado.
  </Text>

) : (

  catequizandosFiltrados.map((catequizando) => (

    <CatequizandoCard
      key={catequizando.id}
      catequizando={catequizando}

      onPress={() =>
        navigation.navigate(
          "DetalhesCatequizando",
          {
            catequizando,
          }
        )
      }

      onEdit={() =>
        navigation.navigate(
          "NovoCatequizando",
          {
            catequizando,
          }
        )
      }

    onDelete={() => {

  Alert.alert(

    "Excluir Catequizando",

    `Deseja realmente excluir ${catequizando.nome}?`,

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
        },
      },
    ]

  );

}}
/>
))
)}
</ScrollView>

<View style={styles.buttonArea}>

  <PrimaryButton
    title="+"
    onPress={() =>
      navigation.navigate("NovoCatequizando")
    }
  />

</View>

</SafeAreaView>

);
}