import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../assets/styles";

const windowWidth = Dimensions.get('window').width
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
    },
    carouselWrapper: {
        flex: 1,
        alignItems: 'center',
        gap: 12,
        paddingVertical: 12
    },
    carouselImage: {
        flex: 1,
        aspectRatio: 2/3,
        borderRadius: 16,
    },
    carouselDetails: { 
        flexDirection: 'row', 
        width: windowWidth * 0.66,
        gap: 12,
        zIndex: 10
    },
    carouselTitle: { 
        color: colors.text, 
        fontSize: fontSize.f2,
        fontFamily: fontFamily.semibold,
        lineHeight: 20
    },
    carouselSubTitle: { 
        color: colors.text, 
        fontSize: fontSize.f5,
        lineHeight: 16,
        fontFamily: fontFamily.regular
    },

})