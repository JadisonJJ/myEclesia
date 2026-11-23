import { StyleSheet } from 'react-native';

import {
    Colors,
    Fonts,
    Spacing,
} from '../../theme';
import { version } from 'react';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    topArea: {
        flex: 1,
        
    },
    centerArea: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Spacing.xl,
    },
    bottomArea: {
        flex: 2,
        justifyContent: "flex-end",
        paddingHorizontal: Spacing.lg,
        paddingBottom: Spacing.xxl
    },
    space: {
        height: Spacing.lg,
    },

    title: {
        marginTop: Spacing.xl,
        fontSize: Fonts.size.display,
        fontFamily: Fonts.family.bold,
        color: Colors.primary,
    },
    subtitle: {
        marginTop: Spacing.md,
        fontSize: Fonts.size.lg,
        lineHeight:26,
        fontFamily: Fonts.family.regular,
        color: Colors.textLight,
        textAlign: "center",

    },
    version:{
        marginTop:Spacing.xxl,
        textAlign:"center",
        color:Colors.textLight,
        fontSize:Fonts.size.sm,
        fontFamily:Fonts.family.regular,
    }
});
