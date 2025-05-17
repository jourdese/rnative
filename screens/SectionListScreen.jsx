import React, { useState } from 'react'
import { StyleSheet, View, Text, SectionList, TouchableOpacity, RefreshControl } from 'react-native'
import { theme, commonStyles } from '../theme'

const ListItem = ({ item, onPress }) => (
    <TouchableOpacity
        style={styles.listItem}
        onPress={() => onPress(item)}
    >
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
)

const SectionHeader = ({ title }) => (
    <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
)

const CustomSectionList = (props) => {
    const { style, ...otherProps } = props
    return (
        <SectionList
            style={[styles.customList, style]}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled
            {...otherProps}
        />
    )
}

const SectionListScreen = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const DATA = [
        {
            title: 'Main Features',
            data: [
                { id: '1', title: 'Sticky Headers', subtitle: 'Section headers stick to the top' },
                { id: '2', title: 'Pull to Refresh', subtitle: 'Refresh data with pull gesture' },
                { id: '3', title: 'Section Separation', subtitle: 'Clear visual hierarchy' },
            ],
        },
        {
            title: 'Advanced Features',
            data: [
                { id: '4', title: 'Custom Rendering', subtitle: 'Flexible item customization' },
                { id: '5', title: 'Performance', subtitle: 'Optimized for large lists' },
                { id: '6', title: 'Empty States', subtitle: 'Handle no data gracefully' },
            ],
        },
        {
            title: 'Best Practices',
            data: [
                { id: '7', title: 'Key Extraction', subtitle: 'Unique keys for items' },
                { id: '8', title: 'Memory Usage', subtitle: 'Efficient data handling' },
                { id: '9', title: 'UI/UX', subtitle: 'Consistent user experience' },
            ],
        },
    ]

    const onRefresh = () => {
        setRefreshing(true)
        // Simulate data fetching
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>SectionList Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Use sticky headers wisely</Text>
                    <Text style={styles.bulletPoint}>• Implement section indices</Text>
                    <Text style={styles.bulletPoint}>• Handle empty sections</Text>
                    <Text style={styles.bulletPoint}>• Optimize rendering</Text>
                    <Text style={styles.bulletPoint}>• Consider data structure</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={[styles.section, styles.listSection]}>
                <Text style={styles.sectionTitle}>SectionList Props Demo</Text>

                {/* Basic SectionList */}
                <CustomSectionList
                    sections={DATA}
                    renderItem={({ item }) => (
                        <ListItem
                            item={item}
                            onPress={() => setSelectedId(item.id)}
                        />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <SectionHeader title={title} />
                    )}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    ListHeaderComponent={() => (
                        <View style={styles.listHeader}>
                            <Text style={styles.listHeaderText}>Pull to refresh!</Text>
                            {selectedId && (
                                <Text style={styles.selectedText}>
                                    Selected: Item {selectedId}
                                </Text>
                            )}
                        </View>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={[theme.colors.primary]}
                        />
                    }
                />
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomSectionList = (props) => {
    const { style, ...otherProps } = props
    return (
        <SectionList
            style={[styles.customList, style]}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled
            {...otherProps}
        />
    )
}

const SectionHeader = ({ title }) => (
    <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
)`}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ...commonStyles,
    customList: {
        flex: 1,
    },
    listSection: {
        flex: 1,
        marginBottom: 0,
    },
    listItem: {
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.background.secondary,
        borderRadius: theme.spacing.radius.medium,
    },
    itemTitle: {
        fontSize: theme.typography.sizes.medium,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.text.primary,
        marginBottom: theme.spacing.small,
    },
    itemSubtitle: {
        fontSize: theme.typography.sizes.small,
        color: theme.colors.text.secondary,
    },
    sectionHeader: {
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.background.primary,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    sectionHeaderText: {
        fontSize: theme.typography.sizes.medium,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text.primary,
    },
    separator: {
        height: theme.spacing.small,
    },
    listHeader: {
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.background.primary,
    },
    listHeaderText: {
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text.secondary,
        textAlign: 'center',
    },
    selectedText: {
        marginTop: theme.spacing.small,
        fontSize: theme.typography.sizes.small,
        color: theme.colors.primary,
        textAlign: 'center',
    },
})

export default SectionListScreen
