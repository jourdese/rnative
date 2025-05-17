import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableHighlight } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomTouchableHighlight = (props) => {
    const { children, style, ...otherProps } = props
    return (
        <TouchableHighlight
            style={[styles.customTouchable, style]}
            underlayColor={theme.colors.primaryDark}
            {...otherProps}
        >
            {children}
        </TouchableHighlight>
    )
}

const TouchableHighlightScreen = () => {
    const [count, setCount] = useState(0)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>TouchableHighlight Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Choose appropriate underlayColor</Text>
                    <Text style={styles.bulletPoint}>• Handle press states</Text>
                    <Text style={styles.bulletPoint}>• Consider visual feedback</Text>
                    <Text style={styles.bulletPoint}>• Manage touch timing</Text>
                    <Text style={styles.bulletPoint}>• Use for buttons and list items</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>TouchableHighlight Props Demo</Text>
                <View style={styles.card}>
                    {/* Basic TouchableHighlight */}
                    <Text style={styles.label}>Basic TouchableHighlight</Text>
                    <CustomTouchableHighlight
                        onPress={() => setCount(prev => prev + 1)}
                    >
                        <Text style={styles.buttonText}>
                            Press me! ({count})
                        </Text>
                    </CustomTouchableHighlight>

                    {/* Different Underlay Colors */}
                    <Text style={styles.label}>Underlay Colors</Text>
                    <View style={styles.row}>
                        <CustomTouchableHighlight
                            style={styles.smallButton}
                            underlayColor={theme.colors.accent1}
                            onPress={() => {}}
                        >
                            <Text style={styles.buttonText}>Blue</Text>
                        </CustomTouchableHighlight>
                        <CustomTouchableHighlight
                            style={styles.smallButton}
                            underlayColor={theme.colors.accent2}
                            onPress={() => {}}
                        >
                            <Text style={styles.buttonText}>Green</Text>
                        </CustomTouchableHighlight>
                        <CustomTouchableHighlight
                            style={styles.smallButton}
                            underlayColor={theme.colors.accent3}
                            onPress={() => {}}
                        >
                            <Text style={styles.buttonText}>Orange</Text>
                        </CustomTouchableHighlight>
                    </View>

                    {/* With Long Press */}
                    <Text style={styles.label}>Long Press</Text>
                    <CustomTouchableHighlight
                        onLongPress={() => alert('Long pressed!')}
                        delayLongPress={1000}
                    >
                        <Text style={styles.buttonText}>
                            Hold me for 1 second
                        </Text>
                    </CustomTouchableHighlight>
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomTouchableHighlight = (props) => {
    const { children, style, ...otherProps } = props
    return (
        <TouchableHighlight
            style={[styles.customTouchable, style]}
            underlayColor={theme.colors.primaryDark}
            {...otherProps}
        >
            {children}
        </TouchableHighlight>
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
})

export default TouchableHighlightScreen
