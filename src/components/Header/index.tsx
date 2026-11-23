import React from "react";

import {
    View,
    Text,
} from "react-native";

import { styles } from "./style";

import { HeaderProps } from "./types";

export default function Header({

    title,

    subtitle,

    leftComponent,

    rightComponent,

    showDivider = false,

}: HeaderProps) {

    return (

        <View style={styles.container}>

            <View style={styles.topRow}>

                <View style={styles.left}>
                  

                    {leftComponent}

                </View>

                <View style={styles.center}>

                    <Text style={styles.title}>

                        {title}

                    </Text>

                    {subtitle && (

                        <Text style={styles.subtitle}>

                            {subtitle}

                        </Text>

                    )}

                </View>

                <View style={styles.right}>

                    {rightComponent}

                </View>

            </View>

            {showDivider && (

                <View style={styles.divider} />

            )}

        </View>

    );

}