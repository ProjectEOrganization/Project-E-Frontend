//@ts-nocheck
import React from "react";
import { StackCardInterpolationProps, StackNavigationOptions } from "@react-navigation/stack"
import { Animated, Dimensions } from "react-native"
import { ViewProps } from "../../components/Themed";
const { height } = Dimensions.get('screen');

export const popupEffect: StackNavigationOptions = {
    transparentCard: true,
    headerShown: false,
    gestureEnabled: false,
    cardOverlay: ({ style }: ViewProps) => {
        return (
            <Animated.View style={[{ height: height * 2, backgroundColor: 'rgba(0,0,0,.5)' }, style]} />
        )
    },
    // gestureDirection: 'vertical',
    // gestureResponseDistance: { vertical: height },
    cardStyleInterpolator: ({ current, next, inverted }: StackCardInterpolationProps) => ({
        containerStyle: {
            transform: [
                {
                    translateY: Animated.multiply(current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [height, 0],
                        extrapolate: 'clamp',
                    }), inverted)
                },
            ],
        },
        cardStyle: {
            borderRadius: 20, overflow: 'hidden',

        },
        overlayStyle: {
            opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            }),
        },
    }),
    cardStyle: { backgroundColor: "transparent" }
}