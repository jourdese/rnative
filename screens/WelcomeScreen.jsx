import { StyleSheet, Text, View, ScrollView, Pressable, Animated } from 'react-native'
import React, { useState } from 'react'

const ComponentButton = ({ 
    title, 
    onPress, 
    expanded,
    buttonStyle,
    textStyle,
    animationDuration = 300,
    activeColor = '#3700b3',
    inactiveColor = '#6200ee',
    children
}) => {
    const [animation] = useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.timing(animation, {
            toValue: expanded ? 1 : 0,
            duration: animationDuration,
            useNativeDriver: false,
        }).start();
    }, [expanded, animationDuration]);

    const backgroundColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [inactiveColor, activeColor]
    });

    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.02]
    });

    return (
        <Pressable onPress={onPress}>
            <Animated.View 
                style={[
                    styles.button, 
                    { backgroundColor, transform: [{ scale }] },
                    buttonStyle
                ]}
            >
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
                {children}
            </Animated.View>
        </Pressable>
    );
};

const WelcomeScreen = ({ navigation }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const components = [
        'View', 'Text', 'Image', 'ScrollView', 'TextInput',
        'Pressable', 'TouchableOpacity', 'TouchableHighlight',
        'TouchableWithoutFeedback', 'Modal', 'FlatList',
        'SectionList', 'ActivityIndicator', 'Button'
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>React Native Components</Text>
            <Text style={styles.subheader}>
                Learn component best practices and implementations
            </Text>
            {components.map((component, index) => (
                <ComponentButton
                    key={component}
                    title={component}
                    expanded={expandedIndex === index}
                    onPress={() => {
                        setExpandedIndex(index);
                        navigation.navigate(component);
                    }}
                    animationDuration={400}
                    activeColor={index % 2 === 0 ? '#3700b3' : '#2196F3'}
                    inactiveColor={index % 2 === 0 ? '#6200ee' : '#1976D2'}
                    buttonStyle={{
                        marginHorizontal: 8,
                        borderRadius: expanded ? 16 : 12,
                    }}
                    textStyle={{
                        fontSize: expanded ? 18 : 16,
                    }}
                >
                    {expanded && (
                        <Text style={styles.buttonSubtext}>Tap to learn more</Text>
                    )}
                </ComponentButton>
            ))}
        </ScrollView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
        textAlign: 'center',
        marginTop: 16,
    },
    subheader: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
        textAlign: 'center',
    },
    button: {
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    buttonSubtext: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 4,
    },
})
