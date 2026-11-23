import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';

import { Avatar, PrimaryButton, SecondaryButton, AppVersion, } from "../../components"

import { styles } from './styles';

export default function Splash() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topArea}>
            </View>

            <View style={styles.centerArea}>
            <Avatar
        size={170}
        image={require("../../assets/images/logo.png")}
    />

    <Text style={styles.title}>

        MyEclésia

    </Text>

    <Text style={styles.subtitle}>

        Seu caminho na Catequese

    </Text>
                
</View>

            <View style={styles.bottomArea}>
                <PrimaryButton
                    title='Entrar'
                    onPress={() =>{}}
                />
            <View style={styles.space} />

            <SecondaryButton
                title="Sobre o aplicatico"
                onPress={() => {}}
            />
            <AppVersion version='1.0.0' />








            </View>
        </SafeAreaView>
    );
}

