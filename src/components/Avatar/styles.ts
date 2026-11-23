import { StyleSheet } from 'react-native';

import {
    Colors,
    Shadows,

} from '../../theme';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',

        ...Shadows.small,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    initials: {
        color: Colors.primary,
        fontWeight: '700',
        fontSize: 18,
    },
});