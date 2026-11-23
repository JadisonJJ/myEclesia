import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./src/navigation";

import { TurmasProvider } from "./src/context/TurmasContext";
import { CatequizandosProvider } from "./src/context/CatequizandosContext";
import { EncontrosProvider } from "./src/context/EncontrosContext";
import { PresencasProvider } from "./src/context/PresencasContext";
import { initializeDatabase } from "./src/database/migrations";

export default function App() {

  React.useEffect(() => {

  initializeDatabase();

}, []);

  return (

    <TurmasProvider>

      <CatequizandosProvider>

        <EncontrosProvider>

          <PresencasProvider>

            <NavigationContainer>

              <AppRoutes />

            </NavigationContainer>

          </PresencasProvider>

        </EncontrosProvider>

      </CatequizandosProvider>

    </TurmasProvider>

  );

}