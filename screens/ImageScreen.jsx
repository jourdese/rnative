import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomImage = (props) => {
    const { source, style, ...otherProps } = props
    return (
        <Image
            source={source}
            style={[styles.customImage, style]}
            {...otherProps}
        />
    )
}

const ImageScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Image Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Use appropriate image sizes</Text>
                    <Text style={styles.bulletPoint}>• Implement loading states</Text>
                    <Text style={styles.bulletPoint}>• Handle image errors gracefully</Text>
                    <Text style={styles.bulletPoint}>• Consider image caching</Text>
                    <Text style={styles.bulletPoint}>• Optimize for performance</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Image Props Demo</Text>
                <View style={styles.card}>
                    {/* Basic Image */}
                    <Text style={styles.subsectionTitle}>Basic Image</Text>
                    <CustomImage
                        source={{ uri: 'https://picsum.photos/200' }}
                        style={styles.demoImage}
                    />

                    {/* Resizing Modes */}
                    <Text style={styles.subsectionTitle}>Resize Modes</Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Cover</Text>
                            <CustomImage
                                source={{ uri: 'https://picsum.photos/200' }}
                                style={styles.smallImage}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Contain</Text>
                            <CustomImage
                                source={{ uri: 'https://picsum.photos/200' }}
                                style={styles.smallImage}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Stretch</Text>
                            <CustomImage
                                source={{ uri: 'https://picsum.photos/200' }}
                                style={styles.smallImage}
                                resizeMode="stretch"
                            />
                        </View>
                    </View>

                    {/* Loading States */}
                    <Text style={styles.subsectionTitle}>Loading States</Text>
                    <CustomImage
                        source={{ uri: 'https://picsum.photos/400' }}
                        style={styles.demoImage}
                        loadingIndicatorSource={require('../assets/placeholder.png')}
                        onLoadStart={() => console.log('Loading started')}
                        onLoadEnd={() => console.log('Loading ended')}
                        onError={() => console.log('Error loading image')}
                    />
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomImage = (props) => {
    const { source, style, ...otherProps } = props
    return (
        <Image
            source={source}
            style={[styles.customImage, style]}
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
    customImage: {
        width: '100%',
        height: 200,
        borderRadius: theme.spacing.radius.medium,
    },
    demoImage: {
        width: '100%',
        height: 200,
        marginVertical: theme.spacing.margin.vertical,
        borderRadius: theme.spacing.radius.medium,
    },
    smallImage: {
        width: 100,
        height: 100,
        marginVertical: theme.spacing.margin.vertical,
        borderRadius: theme.spacing.radius.small,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: theme.spacing.margin.vertical,
    },
    column: {
        alignItems: 'center',
    },
    label: {
        fontSize: theme.typography.sizes.small,
        color: theme.colors.text.secondary,
        marginBottom: theme.spacing.margin.bottom / 2,
    },
    subsectionTitle: {
        fontSize: theme.typography.sizes.medium,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.text.secondary,
        marginTop: theme.spacing.margin.vertical,
        marginBottom: theme.spacing.margin.bottom,
    },
})

export default ImageScreen
