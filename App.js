import Biscoito from './Telas/Biscoito';
import Calculadora from './Telas/Calculadora';
import Login from './Telas/Login';
import Cadastro from './Telas/CriarUsuario';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Historico from './Telas/Historico';
import Camera from './Telas/Camera';
import Mapa from './Telas/Mapa';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' >
        <Stack.Screen name="biscoito" component={Biscoito} options={{headerShown: false}} />
        <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="cadastro" component={Cadastro} options={{headerShown: false}} />
        <Stack.Screen name="notas" component={Calculadora} options={{title: 'Flamengo Campeão!'}}/>
        <Stack.Screen name="historico" component={Historico} options={{title: 'Flamengo Campeão!'}}/>
        <Stack.Screen name="camera" component={Camera} options={{title: 'Flamengo Campeão!'}}/>
        <Stack.Screen name="localizacao" component={Mapa} options={{title: 'Flamengo Campeão!'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

