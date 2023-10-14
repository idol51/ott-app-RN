import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../assets/styles";

export const styles = StyleSheet.create({
    exploreWrapper: {
        padding: 8,
        width: '50%',
        gap: 8
    },
    categoryWrapper: {
        padding: 12,
        width: 160,
        gap: 8
    },
    commonImageWrapper: {
        aspectRatio: 2/3,
    },
    commonImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 12,
    },
    commonText: {
        color: colors.text,
        textAlign: 'center',
        fontSize: fontSize.f4,
        fontFamily: fontFamily.regular
    },

})