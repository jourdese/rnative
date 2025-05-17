import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text, ActivityIndicator } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomActivityIndicator = (props) => {
    const { style, ...otherProps } = props
    return (
        <ActivityIndicator
            style={[styles.customIndicator, style]}
            color={theme.colors.primary}
            {...otherProps}
        />
    )
}

const LoadingCard = ({ title, children }) => (
    <View style={styles.loadingCard}>
        <Text style={styles.loadingTitle}>{title}</Text>
        {children}
    </View>
)

const ActivityIndicatorScreen = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>ActivityIndicator Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Show loading states clearly</Text>
                    <Text style={styles.bulletPoint}>• Use consistent colors</Text>
                    <Text style={styles.bulletPoint}>• Consider size and placement</Text>
                    <Text style={styles.bulletPoint}>• Handle timeouts</Text>
                    <Text style={styles.bulletPoint}>• Add loading messages</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>ActivityIndicator Props Demo</Text>
                <View style={styles.card}>
                    {/* Basic ActivityIndicator */}
                    <LoadingCard title="Basic Indicator">
                        <CustomActivityIndicator />
                    </LoadingCard>

                    {/* Different Sizes */}
                    <LoadingCard title="Sizes">
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.label}>Small</Text>
                                <CustomActivityIndicator size="small" />
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.label}>Large</Text>
                                <CustomActivityIndicator size="large" />
                            </View>
                        </View>
                    </LoadingCard>

                    {/* Different Colors */}
                    <LoadingCard title="Colors">
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.label}>Primary</Text>
                                <CustomActivityIndicator color={theme.colors.primary} />
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.label}>Accent</Text>
                                <CustomActivityIndicator color={theme.colors.accent1} />
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.label}>Error</Text>
                                <CustomActivityIndicator color={theme.colors.error} />
                            </View>
                        </View>
                    </LoadingCard>

                    {/* Loading State */}
                    <LoadingCard title="Loading State">
                        <View style={styles.loadingState}>
                            <CustomActivityIndicator size="large" />
                            <Text style={styles.loadingText}>
                                {loading ? 'Loading...' : 'Completed!'}
                            </Text>
                        </View>
                    </LoadingCard>
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomActivityIndicator = (props) => {
    const { style, ...otherProps } = props
    return (
        <ActivityIndicator
            style={[styles.customIndicator, style]}
            color={theme.colors.primary}
            {...otherProps}
        />
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
    customIndicator: {
        margin: theme.spacing.small,
    },
    loadingCard: {
        marginBottom: theme.spacing.margin.bottom,
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.background.secondary,
        borderRadius: theme.spacing.radius.medium,
    },
    loadingTitle: {
        fontSize: theme.typography.sizes.medium,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.text.primary,
        marginBottom: theme.spacing.margin.bottom,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    column: {
        alignItems: 'center',
    },
    label: {
        fontSize: theme.typography.sizes.small,
        color: theme.colors.text.secondary,
        marginBottom: theme.spacing.margin.bottom / 2,
    },
    loadingState: {
        alignItems: 'center',
        padding: theme.spacing.medium,
    },
    loadingText: {
        marginTop: theme.spacing.margin.top,
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text.secondary,
    },
})

export default ActivityIndicatorScreen
