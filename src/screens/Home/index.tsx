import React from "react";

import {
  SafeAreaView,
  View,
  Text,
} from "react-native";

import { styles } from "./style";
import { Header, Avatar, QuickAccessCard, TurmaCard, } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation/types";

export default function Home() {
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerArea} />

        <Header
            title="MyEclésia"
            subtitle="Bem-vindo!"
            leftComponent={
                <Avatar
                initials="JA"
                />
            }
        />

      <View style={styles.greetingArea} />
       <Text style={styles.greetingArea}>
            Bom dia, Jadison!
        </Text>
        < Text style={styles.message}>
            Vamos evangelizar hoje?
        </Text>  
               

      <View style={styles.quickAccessArea} />
          <View style={styles.row}>
            <QuickAccessCard
      title="Turmas"
      icon={<Text style={styles.icon}>📚</Text>}
      onPress={() => navigation.navigate("Turmas")}
    />

    <QuickAccessCard
      title="Catequizandos"
      icon={<Text style={styles.icon}>👥</Text>}
      onPress={() => navigation.navigate("Catequizandos")}
      
    />


          </View>

          <View style={styles.space}/>
          <View style={styles.row}>
            <QuickAccessCard
      title="Agenda"
      icon={<Text style={styles.icon}>📅</Text>}
      onPress={() => {}}
    />

    <QuickAccessCard
      title="Presença"
      icon={<Text style={styles.icon}>✅</Text>}
      onPress={() => {}}
    />

          </View>

      <View style={styles.classesArea}>
            <Text style={styles.sectionTitle}>
              Próximas Turmas
            </Text>
            <View style={styles.space} />
            <View style={styles.space} />

          <TurmaCard
  title="Crisma - Turma São Pedro"
  subtitle="Hoje • 19:00"
  description="Comunidade Santa Luzia"
  catechist="Maria Clara"
  students={18}
  onPress={() => {}}
/>

          <View style={styles.space} />

         <TurmaCard
  title="Primeira Eucaristia"
  subtitle="Sábado • 15:00"
  description="Capela São Francisco"
  catechist="João Pedro"
  students={24}
  onPress={() => {}}
/>

    
      </View>
    </SafeAreaView>
  );
}