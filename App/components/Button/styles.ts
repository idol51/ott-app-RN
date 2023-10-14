import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../assets/styles";

export const styles = StyleSheet.create({
    pillButton: {
        backgroundColor: colors.secondary,
        height: 42,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pillButtonText: {
        color: colors.text,
        fontSize: fontSize.f6,
        fontFamily: fontFamily.regular
    },
    tag: {
        borderColor: colors.text,
        borderWidth: 1,
        borderRadius: 14,
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    tagText: {
        color: colors.text,
        fontSize: fontSize.f5,
        fontFamily: fontFamily.light
    }
})