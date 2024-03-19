import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./screens/bottomtab";
import Splash from "./screens/splash";
import Login from "./screens/login";
import CuentaAdminEdit from "./screens/cuentaAdminEdit";
import RegistrarDocente from "./screens/registrarDocente";
import RegistrarEstudiante from "./screens/registrarEstudiante";
import InfoUser from "./screens/InfoUser";


const Stack = createStackNavigator();

export default App = () =>{

  return(
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash"
          component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="BottomTav"
          component={BottomNav} options={{ headerShown: false }} />
           <Stack.Screen name="Login"
          component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="cuentaAdminEdit"
          component={CuentaAdminEdit} options={{ 
            headerShown: true,
            title: 'Editar perfil',
            headerStyle: {
            backgroundColor: '#031634',
            },
            headerTitleStyle: {
            color: 'white', 
            },
            headerBackTitleVisible: false, 
            headerTintColor: 'white',  }} />
           <Stack.Screen name="RegistrarDocente"
          component={RegistrarDocente} options={{ 
            headerShown: true,
            title: 'Registrar docente',
            headerStyle: {
            backgroundColor: '#031634',
            },
            headerTitleStyle: {
            color: 'white', 
            },
            headerBackTitleVisible: false, 
            headerTintColor: 'white',  }} />
            <Stack.Screen name="RegistrarEstudiante"
          component={RegistrarEstudiante} options={{ 
            headerShown: true,
            title: 'Registrar estudiante',
            headerStyle: {
            backgroundColor: '#031634',
            },
            headerTitleStyle: {
            color: 'white', 
            },
            headerBackTitleVisible: false, 
            headerTintColor: 'white',  }} />
              <Stack.Screen name="InfoUser"
          component={InfoUser} options={{ 
            headerShown: true,
            title: 'Datos personales',
            headerStyle: {
            backgroundColor: '#031634',
            },
            headerTitleStyle: {
            color: 'white', 
            },
            headerBackTitleVisible: false, 
            headerTintColor: 'white',  }} />
          
      </Stack.Navigator>
    </NavigationContainer>
  )
}