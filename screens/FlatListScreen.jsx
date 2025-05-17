import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
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

const CustomFlatList = (props) => {
    const { style, ...otherProps } = props
    return (
        <FlatList
            style={[styles.customList, style]}
            showsVerticalScrollIndicator={false}
            {...otherProps}
        />
    )
}

const FlatListScreen = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const data = Array.from({ length: 20 }, (_, index) => ({
        id: String(index + 1),
        title: `Item ${index + 1}`,
        subtitle: `Description for item ${index + 1}`,
    }))

    const onRefresh = () => {
        setRefreshing(true)
        // Simulate data fetching
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>FlatList Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Use keyExtractor properly</Text>
                    <Text style={styles.bulletPoint}>• Implement item separation</Text>
                    <Text style={styles.bulletPoint}>• Handle empty states</Text>
                    <Text style={styles.bulletPoint}>• Optimize performance</Text>
                    <Text style={styles.bulletPoint}>• Add pull-to-refresh</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={[styles.section, styles.listSection]}>
                <Text style={styles.sectionTitle}>FlatList Props Demo</Text>

                {/* Basic FlatList */}
                <CustomFlatList
                    data={data}
                    renderItem={({ item }) => (
                        <ListItem
                            item={item}
                            onPress={() => setSelectedId(item.id)}
                        />
                    )}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyText}>No items to display</Text>
                    )}
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
{`const CustomFlatList = (props) => {
    const { style, ...otherProps } = props
    return (
        <FlatList
            style={[styles.customList, style]}
            showsVerticalScrollIndicator={false}
            {...otherProps}
        />
    )
}

const ListItem = ({ item, onPress }) => (
    <TouchableOpacity
        style={styles.listItem}
        onPress={() => onPress(item)}
    >
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
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
    emptyText: {
        padding: theme.spacing.large,
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text.tertiary,
        textAlign: 'center',
    },
})

export default FlatListScreen
