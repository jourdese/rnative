import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Pressable } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomPressable = (props) => {
    const { children, style, ...otherProps } = props
    return (
        <Pressable
            style={({ pressed }) => [
                styles.customPressable,
                style,
                pressed && styles.pressed
            ]}
            {...otherProps}
        >
            {children}
        </Pressable>
    )
}

const PressableScreen = () => {
    const [count, setCount] = useState(0)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Pressable Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Provide visual feedback</Text>
                    <Text style={styles.bulletPoint}>• Handle press states</Text>
                    <Text style={styles.bulletPoint}>• Consider hit slop</Text>
                    <Text style={styles.bulletPoint}>• Manage press timing</Text>
                    <Text style={styles.bulletPoint}>• Implement accessibility</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Pressable Props Demo</Text>
                <View style={styles.card}>
                    {/* Basic Pressable */}
                    <Text style={styles.label}>Basic Pressable</Text>
                    <CustomPressable
                        onPress={() => setCount(prev => prev + 1)}
                    >
                        <Text style={styles.buttonText}>
                            Press me! ({count})
                        </Text>
                    </CustomPressable>

                    {/* Long Press */}
                    <Text style={styles.label}>Long Press</Text>
                    <CustomPressable
                        onLongPress={() => alert('Long pressed!')}
                        delayLongPress={1000}
                    >
                        <Text style={styles.buttonText}>
                            Hold me for 1 second
                        </Text>
                    </CustomPressable>

                    {/* Hit Slop */}
                    <Text style={styles.label}>With Hit Slop</Text>
                    <CustomPressable
                        hitSlop={20}
                        onPress={() => alert('Pressed with hit slop!')}
                        style={styles.smallButton}
                    >
                        <Text style={styles.buttonText}>
                            Extended touch area
                        </Text>
                    </CustomPressable>

                    {/* Disabled State */}
                    <Text style={styles.label}>Disabled State</Text>
                    <CustomPressable
                        disabled
                        onPress={() => {}}
                        style={styles.disabled}
                    >
                        <Text style={[styles.buttonText, styles.disabledText]}>
                            Can't press me
                        </Text>
                    </CustomPressable>
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomPressable = (props) => {
    const { children, style, ...otherProps } = props
    return (
        <Pressable
            style={({ pressed }) => [
                styles.customPressable,
                style,
                pressed && styles.pressed
            ]}
            {...otherProps}
        >
            {children}
        </Pressable>
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
    customPressable: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.spacing.radius.medium,
        padding: theme.spacing.medium,
        marginBottom: theme.spacing.margin.bottom,
        alignItems: 'center',
    },
    pressed: {
        backgroundColor: theme.colors.primaryDark,
        transform: [{ scale: 0.98 }],
    },
    buttonText: {
        color: theme.colors.text.light,
        fontSize: theme.typography.sizes.medium,
        fontWeight: theme.typography.weights.medium,
    },
    label: {
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text.secondary,
        marginBottom: theme.spacing.margin.bottom / 2,
    },
    smallButton: {
        padding: theme.spacing.small,
    },
    disabled: {
        backgroundColor: theme.colors.text.tertiary,
        opacity: 0.5,
    },
    disabledText: {
        color: theme.colors.text.light,
    },
})

export default PressableScreen
