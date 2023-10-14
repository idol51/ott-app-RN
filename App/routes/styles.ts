import { StyleSheet } from "react-native";
import { colors } from "../assets/styles";

export const styles = StyleSheet.create({
    bottomTab: {
        backgroundColor: colors.background,
        height: 100,
        borderColor: colors.background
    },
    tabBarIconWrapper: {
        aspectRatio: 1,
        padding: 20, 
        borderRadius: 100
    }
})