import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Button, ActivityIndicator } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomButton = (props) => {
    const { title, onPress, disabled, loading, color, ...otherProps } = props
    return (
        <View style={styles.buttonContainer}>
            <Button
                title={loading ? '' : title}
                onPress={onPress}
                disabled={disabled || loading}
                color={color || theme.colors.primary}
                {...otherProps}
            />
            {loading && (
                <ActivityIndicator
                    style={styles.buttonLoader}
                    color={theme.colors.text.light}
                />
            )}
        </View>
    )
}

const ButtonScreen = () => {
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)

    const handlePress = () => {
        setLoading(true)
        setTimeout(() => {
            setCount(prev => prev + 1)
            setLoading(false)
        }, 1000)
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Button Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Clear button text</Text>
                    <Text style={styles.bulletPoint}>• Consistent styling</Text>
                    <Text style={styles.bulletPoint}>• Handle loading states</Text>
                    <Text style={styles.bulletPoint}>• Manage disabled states</Text>
                    <Text style={styles.bulletPoint}>• Provide feedback</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Button Props Demo</Text>
                <View style={styles.card}>
                    {/* Basic Button */}
                    <Text style={styles.label}>Basic Button</Text>
                    <CustomButton
                        title="Press Me"
                        onPress={() => alert('Button pressed!')}
                    />

                    {/* Loading Button */}
                    <Text style={styles.label}>Loading State</Text>
                    <CustomButton
                        title={`Click me! (${count})`}
                        onPress={handlePress}
                        loading={loading}
                    />

                    {/* Different Colors */}
                    <Text style={styles.label}>Colors</Text>
                    <View style={styles.buttonGroup}>
                        <CustomButton
                            title="Primary"
                            onPress={() => {}}
                            color={theme.colors.primary}
                        />
                        <CustomButton
                            title="Accent"
                            onPress={() => {}}
                            color={theme.colors.accent1}
                        />
                        <CustomButton
                            title="Error"
                            onPress={() => {}}
                            color={theme.colors.error}
                        />
                    </View>

                    {/* Disabled State */}
                    <Text style={styles.label}>Disabled State</Text>
                    <CustomButton
                        title="Can't click me"
                        onPress={() => {}}
                        disabled
                    />
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomButton = (props) => {
    const { title, onPress, disabled, loading, color, ...otherProps } = props
    return (
        <View style={styles.buttonContainer}>
            <Button
                title={loading ? '' : title}
                onPress={onPress}
                disabled={disabled || loading}
                color={color || theme.colors.primary}
                {...otherProps}
            />
            {loading && (
                <ActivityIndicator
                    style={styles.buttonLoader}
                    color={theme.colors.text.light}
                />
            )}
        </View>
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
    buttonContainer: {
        position: 'relative',
        marginBottom: theme.spacing.margin.bottom,
    },
    buttonLoader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [
            { translateX: -10 },
            { translateY: -10 },
        ],
    },
    buttonGroup: {
        marginBottom: theme.spacing.margin.bottom,
    },
    label: {
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text.secondary,
        marginBottom: theme.spacing.margin.bottom / 2,
    },
})

export default ButtonScreen
