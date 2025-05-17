import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomTouchableOpacity = (props) => {
    const { children, style, ...otherProps } = props
    return (
        <TouchableOpacity
            style={[styles.customTouchable, style]}
            activeOpacity={0.7}
            {...otherProps}
        >
            {children}
        </TouchableOpacity>
    )
}

const TouchableOpacityScreen = () => {
    const [count, setCount] = useState(0)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>TouchableOpacity Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Adjust activeOpacity value</Text>
                    <Text style={styles.bulletPoint}>• Handle touch feedback</Text>
                    <Text style={styles.bulletPoint}>• Consider disabled states</Text>
                    <Text style={styles.bulletPoint}>• Implement loading states</Text>
                    <Text style={styles.bulletPoint}>• Use for interactive elements</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>TouchableOpacity Props Demo</Text>
                <View style={styles.card}>
                    {/* Basic TouchableOpacity */}
                    <Text style={styles.label}>Basic TouchableOpacity</Text>
                    <CustomTouchableOpacity
                        onPress={() => setCount(prev => prev + 1)}
                    >
                        <Text style={styles.buttonText}>
                            Tap me! ({count})
                        </Text>
                    </CustomTouchableOpacity>

                    {/* Different Opacity Levels */}
                    <Text style={styles.label}>Opacity Levels</Text>
                    <View style={styles.row}>
                        <CustomTouchableOpacity
                            style={styles.smallButton}
                            activeOpacity={0.8}
                            onPress={() => {}}
                        >
                            <Text style={styles.buttonText}>0.8</Text>
                        </CustomTouchableOpacity>
                        <CustomTouchableOpacity
                            style={styles.smallButton}
                            activeOpacity={0.5}
                            onPress={() => {}}
                        >
                            <Text style={styles.buttonText}>0.5</Text>
                        </CustomTouchableOpacity>
                        <CustomTouchableOpacity
                            style={styles.smallButton}
                            activeOpacity={0.2}
                            onPress={() => {}}
                        >
                            <Text style={styles.buttonText}>0.2</Text>
                        </CustomTouchableOpacity>
                    </View>

                    {/* Disabled State */}
                    <Text style={styles.label}>Disabled State</Text>
                    <CustomTouchableOpacity
                        disabled
                        style={styles.disabled}
                    >
                        <Text style={[styles.buttonText, styles.disabledText]}>
                            Disabled Button
                        </Text>
                    </CustomTouchableOpacity>
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomTouchableOpacity = (props) => {
    const { children, style, ...otherProps } = props
    return (
        <TouchableOpacity
            style={[styles.customTouchable, style]}
            activeOpacity={0.7}
            {...otherProps}
        >
            {children}
        </TouchableOpacity>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.margin.bottom,
    },
    smallButton: {
        flex: 1,
        marginHorizontal: theme.spacing.small / 2,
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

export default TouchableOpacityScreen
