import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../assets/styles";

export const styles = StyleSheet.create({
    loginInputWrapper: {
        borderColor: colors.text,
        borderWidth: 1,
        marginBottom: 32,
        borderRadius: 20,
        position: 'relative',
        height: 60,
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    loginInputLabel: {
        position: 'absolute',
        color: colors.text,
        backgroundColor: colors.background,
        paddingHorizontal: 8,
        fontSize: fontSize.f4,
        fontFamily: fontFamily.regular,
        top: -10,
        left: 24
    },
    loginInput: {
        color: colors.text,
        fontFamily: fontFamily.regular
    },
    searchWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 16,
        alignItems: 'center', 
        paddingHorizontal: 20,
        gap: 16
    },
    searchInput: {
        flex: 1,
        color: colors.text,
        fontSize: fontSize.f3,
        fontFamily: fontFamily.regular
    },
    searchIcon: {
        aspectRatio: 1,
        width: 20
    }
})