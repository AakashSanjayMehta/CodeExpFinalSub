import React from 'react';
// import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import EmailValidate from './EmailValidate';
import AssignmentList from './AssignmentList';
import AssignmentInfo from './AssignmentInfo';
import AssignmentTimer from './AssignmentTimer';
import AssignmentDone from './AssignmentDone';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Starting screen */}
        <Stack.Screen name="Login" component={EmailValidate} />

        {/* Other Screens */}
        <Stack.Screen name="Subjects" component={AssignmentList} />
        <Stack.Screen name="Information" component={AssignmentInfo} />
        <Stack.Screen name="Timer" component={AssignmentTimer} />
        <Stack.Screen name="Submit" component={AssignmentDone} />


      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App