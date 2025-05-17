import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Modal, TouchableOpacity } from 'react-native'
import { theme, commonStyles } from '../theme'

const CustomModal = (props) => {
    const { visible, onRequestClose, children, style, ...otherProps } = props
    return (
        <Modal
            visible={visible}
            onRequestClose={onRequestClose}
            transparent
            animationType="fade"
            {...otherProps}
        >
            <View style={styles.modalOverlay}>
                <View style={[styles.modalContent, style]}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const ModalScreen = () => {
    const [basicModalVisible, setBasicModalVisible] = useState(false)
    const [animatedModalVisible, setAnimatedModalVisible] = useState(false)
    const [customModalVisible, setCustomModalVisible] = useState(false)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Modal Component</Text>

            {/* Best Practices Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Best Practices</Text>
                <View style={styles.card}>
                    <Text style={styles.bulletPoint}>• Handle back button/gesture</Text>
                    <Text style={styles.bulletPoint}>• Provide clear close action</Text>
                    <Text style={styles.bulletPoint}>• Use appropriate animations</Text>
                    <Text style={styles.bulletPoint}>• Consider backdrop press</Text>
                    <Text style={styles.bulletPoint}>• Manage keyboard behavior</Text>
                </View>
            </View>

            {/* Props Demo Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Modal Props Demo</Text>
                <View style={styles.card}>
                    {/* Basic Modal */}
                    <Text style={styles.label}>Basic Modal</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setBasicModalVisible(true)}
                    >
                        <Text style={styles.buttonText}>Show Basic Modal</Text>
                    </TouchableOpacity>
                    <CustomModal
                        visible={basicModalVisible}
                        onRequestClose={() => setBasicModalVisible(false)}
                    >
                        <Text style={styles.modalTitle}>Basic Modal</Text>
                        <Text style={styles.modalText}>
                            This is a basic modal with fade animation and backdrop.
                        </Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setBasicModalVisible(false)}
                        >
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </CustomModal>

                    {/* Animated Modal */}
                    <Text style={styles.label}>Animated Modal</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setAnimatedModalVisible(true)}
                    >
                        <Text style={styles.buttonText}>Show Slide Modal</Text>
                    </TouchableOpacity>
                    <CustomModal
                        visible={animatedModalVisible}
                        onRequestClose={() => setAnimatedModalVisible(false)}
                        animationType="slide"
                    >
                        <Text style={styles.modalTitle}>Slide Modal</Text>
                        <Text style={styles.modalText}>
                            This modal slides up from the bottom of the screen.
                        </Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setAnimatedModalVisible(false)}
                        >
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </CustomModal>

                    {/* Custom Modal */}
                    <Text style={styles.label}>Custom Modal</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setCustomModalVisible(true)}
                    >
                        <Text style={styles.buttonText}>Show Custom Modal</Text>
                    </TouchableOpacity>
                    <CustomModal
                        visible={customModalVisible}
                        onRequestClose={() => setCustomModalVisible(false)}
                        style={styles.customModal}
                    >
                        <Text style={[styles.modalTitle, styles.customModalTitle]}>
                            Custom Styled Modal
                        </Text>
                        <Text style={[styles.modalText, styles.customModalText]}>
                            This modal has custom styling and a different layout.
                        </Text>
                        <TouchableOpacity
                            style={[styles.closeButton, styles.customCloseButton]}
                            onPress={() => setCustomModalVisible(false)}
                        >
                            <Text style={styles.buttonText}>Done</Text>
                        </TouchableOpacity>
                    </CustomModal>
                </View>
            </View>

            {/* Implementation Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Implementation</Text>
                <View style={styles.card}>
                    <Text style={styles.code}>
{`const CustomModal = (props) => {
    const { visible, onRequestClose, children, style, ...otherProps } = props
    return (
        <Modal
            visible={visible}
            onRequestClose={onRequestClose}
            transparent
            animationType="fade"
            {...otherProps}
        >
            <View style={styles.modalOverlay}>
                <View style={[styles.modalContent, style]}>
                    {children}
                </View>
            </View>
        </Modal>
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
    button: {
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.medium,
        borderRadius: theme.spacing.radius.medium,
        marginBottom: theme.spacing.margin.bottom,
        alignItems: 'center',
    },
    buttonText: {
        color: theme.colors.text.light,
        fontSize: theme.typography.sizes.medium,
        fontWeight: theme.typography.weights.medium,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: theme.colors.background.primary,
        borderRadius: theme.spacing.radius.large,
        padding: theme.spacing.large,
        width: '80%',
        maxWidth: 400,
    },
    modalTitle: {
        fontSize: theme.typography.sizes.large,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text.primary,
        marginBottom: theme.spacing.medium,
        textAlign: 'center',
    },
    modalText: {
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text.secondary,
        marginBottom: theme.spacing.large,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.medium,
        borderRadius: theme.spacing.radius.medium,
        alignItems: 'center',
    },
    customModal: {
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.xlarge,
    },
    customModalTitle: {
        color: theme.colors.text.light,
    },
    customModalText: {
        color: theme.colors.text.light,
    },
    customCloseButton: {
        backgroundColor: theme.colors.text.light,
    },
})

export default ModalScreen
