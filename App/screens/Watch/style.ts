import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../assets/styles";

const windowWidth = Dimensions.get('window').width


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        position: 'relative'
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 34,
        height: 34,
        zIndex: 100
    },
    moreText: {
        color: colors.text,
        fontSize: fontSize.f2,
        fontFamily: fontFamily.semibold,
        paddingHorizontal: 28
    },
    scrollView: {
        paddingHorizontal: 16,
    },
    detailsWrapper: {
        paddingHorizontal: 28,
        paddingVertical: 20
    },
    descText: {
        color: colors.text,
        fontSize: fontSize.f4,
        fontFamily: fontFamily.light,
        lineHeight: 22
    },
    ratingSection: {
        flexDirection: 'row',
        gap: 24,
        alignItems: 'center',
        paddingVertical: 12
    },
    ratingText: {
        color: colors.text
    },
    ratingIcon: {
        width: 20,
        height: 20
    },
    tagSection: {
        flexDirection: 'row',
        gap: 24
    },
    divider: {
        borderTopWidth: 1,
        borderColor: colors.text,
        marginVertical: 20
    },
    utilButton: {
        height: 36,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: colors.text,
        fontSize: fontSize.f1,
        fontFamily: fontFamily.regular
    },
    duration: {
        color: colors.text,
        fontSize: fontSize.f4,
        fontFamily: fontFamily.regular
    },
    videoPlayer: {
        width: windowWidth,
        alignItems: 'center',
        aspectRatio: 16/9,
    }
})