import React from "react";

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import { styles } from "./style";

import { Header, Searchbar, TurmaCard, } from "../../components";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation";
import { useTurmasContext } from "../../context/TurmasContext";

export default function Turmas() {const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { turmas } = useTurmasContext();
  
  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.headerArea}>
        <Header
        title="Turmas"
        subtitle="Gerencie suas turmas de catequese"
        />
      </View>

      <View style={styles.searchArea}>
        <Searchbar
        placeholder="Pesquisar turma..."
        value=""
        onChangeText={() => {}}
        />
      </View>

      <ScrollView
  style={styles.listArea}
  showsVerticalScrollIndicator={false}>
  {turmas.map((turma, index) => (
  <React.Fragment key={turma.id}>

    <TurmaCard
      title={turma.nome}
      subtitle={`${turma.dia} • ${turma.horario}`}
      description={turma.comunidade}
      catechist={turma.catequista}
      students={turma.quantidadeCatequizandos}
      onPress={() =>
        navigation.navigate("DetalhesTurma", {
          turma,
        })
      }
    />

    {index < turmas.length - 1 && (
      <View style={styles.cardSpacing} />
    )}

  </React.Fragment>
))} 
      </ScrollView>

      <View style={styles.fabArea}>
        <TouchableOpacity
    style={styles.fab}
    activeOpacity={0.8}
    onPress={() => navigation.navigate("NovaTurma")}
  >

    <Text style={styles.fabText}>
      +
    </Text>

  </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}