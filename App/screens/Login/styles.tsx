import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../assets/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 32
    },
    loginWrapper: {
        flex: 1,
        justifyContent: 'center',

    },
    bottomSection: {
        gap: 48
    },
    bottomText: {
        fontSize: fontSize.f4,
        color: colors.text,
        alignSelf: 'center'
    },
    heading: {
        fontSize: fontSize.f2,
        fontFamily: fontFamily.semibold,
        color: colors.text,
        alignSelf: 'center',
        marginBottom: 48
    }
})