import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../assets/styles";

export const styles = StyleSheet.create({
    listWrapper: {
        flexDirection: 'row',
        gap: 20,
        paddingHorizontal: 20,
        marginBottom: 48
    },
    listDetails: {
        flex: 1
    },
    listTitle: {
        color: colors.text,
        fontSize: fontSize.f3,
        fontFamily: fontFamily.medium
    },
    listDesc: {
        color: colors.grey
    },
    listIcon: {
        aspectRatio: 1,
        width: 24,
    },
    listArrowIcon: { 
        aspectRatio: 1, 
        width: 20, 
        alignSelf: 'center' 
    }
})