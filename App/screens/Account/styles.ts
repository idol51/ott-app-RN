import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../assets/styles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 32,

    },
    profileWrapper: {
        alignItems: 'center',
        paddingVertical: 48,
        position: 'relative'
    },
    closeButton: {
        aspectRatio: 1,
        width: 34,
        position: 'absolute',
        top: 48, 
        left: 20
    },
    heading: {
        color: colors.text,
        fontSize: fontSize.f2,
        fontFamily: fontFamily.regular,
        marginBottom: 48
    },
    userName: {
        color: colors.text,
        fontSize: fontSize.f3,
        fontFamily: fontFamily.regular
    },
    profilePic: {
        aspectRatio: 1,
        width: 60,
        borderRadius: 100,
        marginBottom: 24
    }
})