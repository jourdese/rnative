import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, TextInput } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomTextInput = (props) => {
    const { style, ...otherProps } = props
    return (
        <TextInput
            style={[styles.customInput, style]}
            placeholderTextColor={theme.colors.text.tertiary}
            {...otherProps}
        />
    )
}

const TextInputScreen = () => {
    const [text, setText] = useState('')
    const [password, setPassword] = useState('')
    const [multiline, setMultiline] = useState('')

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>TextInput Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Validate input appropriately</Text>
                    <Text style={styles.bulletPoint}>• Handle keyboard events</Text>
                    <Text style={styles.bulletPoint}>• Provide clear feedback</Text>
                    <Text style={styles.bulletPoint}>• Consider accessibility</Text>
                    <Text style={styles.bulletPoint}>• Manage input focus</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>TextInput Props Demo</Text>
                <View style={styles.card}>
                    {/* Basic Input */}
                    <Text style={styles.label}>Basic Input</Text>
                    <CustomTextInput
                        placeholder="Enter text..."
                        value={text}
                        onChangeText={setText}
                    />

                    {/* Secure Input */}
                    <Text style={styles.label}>Secure Input</Text>
                    <CustomTextInput
                        placeholder="Enter password..."
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    {/* Multiline Input */}
                    <Text style={styles.label}>Multiline Input</Text>
                    <CustomTextInput
                        placeholder="Enter multiple lines..."
                        value={multiline}
                        onChangeText={setMultiline}
                        multiline
                        numberOfLines={4}
                        style={styles.multiline}
                    />

                    {/* Input States */}
                    <Text style={styles.label}>Input States</Text>
                    <CustomTextInput
                        placeholder="Disabled input..."
                        editable={false}
                        style={styles.disabled}
                    />
                    <CustomTextInput
                        placeholder="With max length..."
                        maxLength={10}
                    />
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomTextInput = (props) => {
    const { style, ...otherProps } = props
    return (
        <TextInput
            style={[styles.customInput, style]}
            placeholderTextColor={theme.colors.text.tertiary}
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
    customInput: {
        backgroundColor: theme.colors.background.secondary,
        borderRadius: theme.spacing.radius.medium,
        padding: theme.spacing.medium,
        marginBottom: theme.spacing.margin.bottom,
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text.primary,
    },
    label: {
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text.secondary,
        marginBottom: theme.spacing.margin.bottom / 2,
    },
    multiline: {
        height: 100,
        textAlignVertical: 'top',
    },
    disabled: {
        opacity: 0.5,
    },
})

export default TextInputScreen
