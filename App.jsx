import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewScreen from './screens/ViewScreen';
import TextScreen from './screens/TextScreen';
import ImageScreen from './screens/ImageScreen';
import ScrollViewScreen from './screens/ScrollViewScreen';
import TextInputScreen from './screens/TextInputScreen';
import PressableScreen from './screens/PressableScreen';
import TouchableOpacityScreen from './screens/TouchableOpacityScreen';
import TouchableHighlightScreen from './screens/TouchableHighlightScreen';
import TouchableWithoutFeedbackScreen from './screens/TouchableWithoutFeedbackScreen';
import ModalScreen from './screens/ModalScreen';
import FlatListScreen from './screens/FlatListScreen';
import SectionListScreen from './screens/SectionListScreen';
import ActivityIndicatorScreen from './screens/ActivityIndicatorScreen';
import ButtonScreen from './screens/ButtonScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'React Native Components' }}
        />
        <Stack.Screen name="View" component={ViewScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
        <Stack.Screen name="TextInput" component={TextInputScreen} />
        <Stack.Screen name="Pressable" component={PressableScreen} />
        <Stack.Screen name="TouchableOpacity" component={TouchableOpacityScreen} />
        <Stack.Screen name="TouchableHighlight" component={TouchableHighlightScreen} />
        <Stack.Screen name="TouchableWithoutFeedback" component={TouchableWithoutFeedbackScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="SectionList" component={SectionListScreen} />
        <Stack.Screen name="ActivityIndicator" component={ActivityIndicatorScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
