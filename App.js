import React from 'react';
import { StyleSheet, View, Image, Button, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import { globalStyles } from './styles/Styles';

import MainTabScreen from './screens/MainTabScreen';
import History from './screens/History';
import About from './screens/About';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HistoryStack = createStackNavigator();
const AboutStack = createStackNavigator();

const headerStyle = {
  headerStyle: {
      backgroundColor: globalStyles.munichRed,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
      fontWeight: '400',
      alignSelf: 'center'
  },
}

const TelekomStyle = {
  width: 50, height: 25, margin:10
}

const HistoryStackScreen = ({navigation}) => (
  <HistoryStack.Navigator screenOptions = {headerStyle} >
    <HistoryStack.Screen name="History" component={History} options = {{ 
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} onPress={() => navigation.openDrawer()}
        style={{ backgroundColor: globalStyles.munichRed }}
        >
        </Icon.Button>
      ),
      headerRight: () => (
        <Image 
          style={TelekomStyle}
          source={{ uri:'https://i.esdrop.com/d/2PBErYkOwH.png' }}
        />
      )
    }}
    />
  </HistoryStack.Navigator>
);

const AboutStackScreen = ({navigation}) => (
  <AboutStack.Navigator screenOptions = {headerStyle} >
    <AboutStack.Screen name="About" component={About} options = {{ 
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} onPress={() => navigation.openDrawer()}
        style={{ backgroundColor: globalStyles.munichRed }}
        >
        </Icon.Button>
      ),
      headerRight: () => (
        <Image 
          style={TelekomStyle}
          source={{ uri:'https://i.esdrop.com/d/2PBErYkOwH.png' }}
        />
      )
    }}
    />
  </AboutStack.Navigator>
);


function Splash({navigation}) {
  setTimeout(() => {
    navigation.replace('HomeDrawer') // Stack Name 
  }, 3000);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri:'https://i.esdrop.com/d/nW1USMQyuT.png' }}
      />
    </View>
  )
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> } initialRouteName="Home" >
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="History" component={HistoryStackScreen} />
      <Drawer.Screen name="About" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" style={{ backgroundColor: globalStyles.munichRed  }} />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="HomeDrawer" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.munichRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 132,
    height: 132,
  },
    logoHeader: {
      width: 40,
      height: 40
  },
});
