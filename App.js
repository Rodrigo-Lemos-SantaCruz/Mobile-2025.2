import Biscoito from './Telas/Biscoito';
import Calculadora from './Telas/Calculadora';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='notas' >
        <Stack.Screen name="biscoito" component={Biscoito} options={{headerShown: false}} />
        <Stack.Screen name="notas" component={Calculadora} options={{title: 'Flamengo Campeão!'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

