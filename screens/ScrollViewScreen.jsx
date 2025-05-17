import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, RefreshControl } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomScrollView = (props) => {
    const { children, style, ...otherProps } = props
    return (
        <ScrollView
            style={[styles.customScrollView, style]}
            {...otherProps}
        >
            {children}
        </ScrollView>
    )
}

const ScrollViewScreen = () => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)
        // Simulate data fetching
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    return (
        <CustomScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={[theme.colors.primary]}
                />
            }
        >
            <Text style={styles.header}>ScrollView Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Use FlatList for long lists</Text>
                    <Text style={styles.bulletPoint}>• Implement pull-to-refresh</Text>
                    <Text style={styles.bulletPoint}>• Handle scroll events efficiently</Text>
                    <Text style={styles.bulletPoint}>• Consider performance impact</Text>
                    <Text style={styles.bulletPoint}>• Manage keyboard interaction</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>ScrollView Props Demo</Text>
                <View style={styles.card}>
                    {/* Scroll Direction */}
                    <Text style={styles.subsectionTitle}>Horizontal Scroll</Text>
                    <CustomScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.horizontalScroll}
                    >
                        {[1, 2, 3, 4, 5].map((item) => (
                            <View key={item} style={styles.box}>
                                <Text style={styles.boxText}>{item}</Text>
                            </View>
                        ))}
                    </CustomScrollView>

                    {/* Scroll Indicators */}
                    <Text style={styles.subsectionTitle}>Scroll Indicators</Text>
                    <CustomScrollView
                        style={styles.demoScroll}
                        showsVerticalScrollIndicator={true}
                    >
                        {[1, 2, 3, 4, 5].map((item) => (
                            <View key={item} style={styles.row}>
                                <Text style={styles.rowText}>Row {item}</Text>
                            </View>
                        ))}
                    </CustomScrollView>
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomScrollView = (props) => {
    const { children, style, ...otherProps } = props
    return (
        <ScrollView
            style={[styles.customScrollView, style]}
            {...otherProps}
        >
            {children}
        </ScrollView>
    )
}`}
                    </Text>
                </View>
            </View>
        </CustomScrollView>
    )
}

const styles = StyleSheet.create({
    ...commonStyles,
    customScrollView: {
        flex: 1,
    },
    horizontalScroll: {
        height: 100,
    },
    demoScroll: {
        height: 200,
    },
    box: {
        width: 80,
        height: 80,
        backgroundColor: theme.colors.primary,
        margin: theme.spacing.small,
        borderRadius: theme.spacing.radius.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxText: {
        color: theme.colors.text.light,
        fontSize: theme.typography.sizes.large,
        fontWeight: theme.typography.weights.bold,
    },
    row: {
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.background.secondary,
        marginVertical: theme.spacing.small,
        borderRadius: theme.spacing.radius.small,
    },
    rowText: {
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text.secondary,
    },
})

export default ScrollViewScreen
