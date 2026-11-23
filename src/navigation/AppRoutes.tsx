import React from "react";


import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Turmas from "../screens/Turmas";
import NovaTurma from "../screens/NovaTurma";
import DetalhesTurma from "../screens/DetalhesTurma";
import Catequizandos from "../screens/Catequizandos";
import NovoCatequizando from "../screens/NovoCatequizando";
import DetalhesCatequizando from "../screens/DetalhesCatequizando";
import { RootStackParamList } from "./types";
import EncontrosTurma from "../screens/EncontrosTurma";
import NovoEncontro from "../screens/NovoEncontro";
import DetalhesEncontro from "../screens/DetalhesEncontro";

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function AppRoutes() {
  return (
 <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      
      >
        <Stack.Screen
  name="Login"
  component={Login}
/>

<Stack.Screen
  name="Home"
  component={Home}
/>

<Stack.Screen
  name="Turmas"
  component={Turmas}
/>

<Stack.Screen
  name="NovaTurma"
  component={NovaTurma}
/>

<Stack.Screen
  name="DetalhesTurma"
  component={DetalhesTurma}
/>

<Stack.Screen
  name="EncontrosTurma"
  component={EncontrosTurma}
/>

<Stack.Screen
  name="Catequizandos"
  component={Catequizandos}
/>

<Stack.Screen
  name="NovoCatequizando"
  component={NovoCatequizando}
/>

<Stack.Screen
  name="DetalhesCatequizando"
  component={DetalhesCatequizando}
/>

<Stack.Screen
  name="NovoEncontro"
  component={NovoEncontro}
/>

<Stack.Screen
  name="DetalhesEncontro"
  component={DetalhesEncontro}
/>

</Stack.Navigator>

  );
}