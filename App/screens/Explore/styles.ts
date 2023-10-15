import { StyleSheet } from "react-native";
import { colors } from "../../assets/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.background,
        gap: 20
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 20,
        justifyContent: 'center'
    }
})