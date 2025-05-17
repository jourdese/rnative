import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback, Animated } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomTouchableWithoutFeedback = (props) => {
    const { children, style, onPressIn, onPressOut, ...otherProps } = props
    const [scale] = useState(new Animated.Value(1))

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start()
        onPressIn?.()
    }

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
        }).start()
        onPressOut?.()
    }

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            {...otherProps}
        >
            <Animated.View style={[
                styles.customTouchable,
                style,
                { transform: [{ scale }] }
            ]}>
                {children}
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const TouchableWithoutFeedbackScreen = () => {
    const [count, setCount] = useState(0)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>TouchableWithoutFeedback Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Add custom feedback effects</Text>
                    <Text style={styles.bulletPoint}>• Handle press states manually</Text>
                    <Text style={styles.bulletPoint}>• Use for custom interactions</Text>
                    <Text style={styles.bulletPoint}>• Consider accessibility</Text>
                    <Text style={styles.bulletPoint}>• Implement visual cues</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>TouchableWithoutFeedback Props Demo</Text>
                <View style={styles.card}>
                    {/* Basic TouchableWithoutFeedback */}
                    <Text style={styles.label}>With Custom Animation</Text>
                    <CustomTouchableWithoutFeedback
                        onPress={() => setCount(prev => prev + 1)}
                    >
                        <Text style={styles.buttonText}>
                            Tap me! ({count})
                        </Text>
                    </CustomTouchableWithoutFeedback>

                    {/* Press Events */}
                    <Text style={styles.label}>Press Events</Text>
                    <CustomTouchableWithoutFeedback
                        onPress={() => console.log('Pressed')}
                        onPressIn={() => console.log('Press In')}
                        onPressOut={() => console.log('Press Out')}
                        onLongPress={() => alert('Long pressed!')}
                    >
                        <Text style={styles.buttonText}>
                            Check console for events
                        </Text>
                    </CustomTouchableWithoutFeedback>

                    {/* Hit Slop */}
                    <Text style={styles.label}>With Hit Slop</Text>
                    <CustomTouchableWithoutFeedback
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                        onPress={() => alert('Pressed with extended area!')}
                    >
                        <View style={styles.smallButton}>
                            <Text style={styles.buttonText}>Extended touch area</Text>
                        </View>
                    </CustomTouchableWithoutFeedback>
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomTouchableWithoutFeedback = (props) => {
    const { children, style, onPressIn, onPressOut, ...otherProps } = props
    const [scale] = useState(new Animated.Value(1))

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start()
        onPressIn?.()
    }

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
        }).start()
        onPressOut?.()
    }

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            {...otherProps}
        >
            <Animated.View style={[
                styles.customTouchable,
                style,
                { transform: [{ scale }] }
            ]}>
                {children}
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}`}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ...commonStyles,
    customTouchable: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.spacing.radius.medium,
        padding: theme.spacing.medium,
        marginBottom: theme.spacing.margin.bottom,
        alignItems: 'center',
    },
    buttonText: {
        color: theme.colors.text.light,
        fontSize: theme.typography.sizes.medium,
        fontWeight: theme.typography.weights.medium,
    },
    smallButton: {
        padding: theme.spacing.small,
        backgroundColor: theme.colors.primary,
        borderRadius: theme.spacing.radius.small,
    },
})

export default TouchableWithoutFeedbackScreen
