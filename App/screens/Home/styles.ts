import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../assets/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingVertical: 24
    },
    categoriesWrapper: {
        flexDirection: 'row',
        gap: 16,
        padding: 28
    },
    heading: {
        color: colors.text,
        fontSize: fontSize.f1,
        fontFamily: fontFamily.semibold,
        paddingHorizontal: 28
    },
    categoryTitle: {
        fontSize: fontSize.f2,
        color: colors.text,
        fontFamily: fontFamily.semibold,
        paddingHorizontal: 28
    },
    scrollView: {
        paddingHorizontal: 16,
    }
})