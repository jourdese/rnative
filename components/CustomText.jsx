import { Text } from 'react-native'
import React from 'react'
import { theme } from '../theme'

// CustomText Component: A reusable text component that accepts all Text props
const CustomText = (props) => {
    // Object destructuring with rest operator (...)
    // 1. text: Extracts the text content we want to display
    // 2. style: Extracts any custom styles passed to our component
    // 3. ...otherProps: Collects ALL remaining props into a new object
    //
    // Example: If we call CustomText like this:
    // <CustomText
    //    text="Hello"              // -> extracted as text
    //    style={{color: 'red'}}     // -> extracted as style
    //    numberOfLines={2}          // -> collected in otherProps
    //    onPress={() => {}}         // -> collected in otherProps
    //    selectable={true}          // -> collected in otherProps
    // />
    //
    // Then otherProps will be:
    // {
    //    numberOfLines: 2,
    //    onPress: () => {},
    //    selectable: true
    // }
    const { text, style, ...otherProps } = props

    return (
        <Text
            // Combine our base styles with any custom styles
            style={[{
                fontSize: theme.typography.sizes.medium,
                color: theme.colors.text.secondary,
                fontWeight: theme.typography.weights.regular,
            }, style]}
            // Spread operator (...) with otherProps
            // This spreads all collected props onto the Text component
            // It's equivalent to writing:
            // numberOfLines={otherProps.numberOfLines}
            // onPress={otherProps.onPress}
            // selectable={otherProps.selectable}
            {...otherProps}
        >
            {text}
        </Text>
    )
}

// Usage examples:
// 1. Basic usage:
// <CustomText text="Hello World" />
//
// 2. With custom style:
// <CustomText 
//     text="Styled Text" 
//     style={{ color: 'red', fontSize: 20 }} 
// />
//
// 3. With Text component props:
// <CustomText
//     text="Truncated text that is very long..."
//     numberOfLines={1}
//     onPress={() => alert('Text pressed!')}
//     selectable={true}
// />
//
// 4. Combined usage:
// <CustomText
//     text="Interactive Text"
//     style={{ color: 'blue' }}
//     numberOfLines={2}
//     onPress={() => console.log('Pressed')}
//     selectable={true}
// />

export default CustomText
