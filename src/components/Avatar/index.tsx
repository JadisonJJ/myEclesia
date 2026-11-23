import React from "react";

import {

    TouchableOpacity,

    Image,

    Text,

} from "react-native";

import { styles } from "./styles";

import { AvatarProps } from "./types";

import {

    Colors,

} from "../../theme";

export default function Avatar({

    image,

    initials,

    size = 64,

    backgroundColor = Colors.white,

    borderColor = Colors.border,

    onPress,

}: AvatarProps) {

    return (

        <TouchableOpacity

            activeOpacity={0.8}

            disabled={!onPress}

            onPress={onPress}

            style={[

                styles.container,

                {

                    width: size,

                    height: size,

                    borderRadius: size / 2,

                    backgroundColor,

                    borderWidth: 2,

                    borderColor,

                },

            ]}

        >

            {image ? (

                <Image

                    source={image}

                    style={styles.image}

                    resizeMode="cover"

                />

            ) : (

                <Text style={styles.initials}>

                    {initials}

                </Text>

            )}

        </TouchableOpacity>

    );

}