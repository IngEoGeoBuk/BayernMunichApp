import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image, Button, Text, StatusBar, Linking } from 'react-native';

import Home from './Home';
import Teams from './Teams';
import Match from './Match';
import Store from './Store';
import History from './History';
import About from './About';

import Icon from 'react-native-vector-icons/Ionicons';

import { globalStyles } from '../styles/Styles';

const HomeStack = createStackNavigator();
const MatchStack = createStackNavigator();
const TeamsStack = createStackNavigator();
const StoreStack = createStackNavigator();


const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: globalStyles.munichRed,
      }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Icon name="ios-home" color={color} size={size} />
            ),
            }}
        />
        <Tab.Screen
            name="Match"
            component={MatchStackScreen}
            options={{
            tabBarLabel: 'Match',
            tabBarIcon: ({ color, size }) => (
                <Icon name="ios-calendar-outline" color={color} size={size} />
            ),
            // tabBarBadge: 3,
            }}
        />
        <Tab.Screen
            name="Teams"
            component={TeamsStackScreen}
            options={{
            tabBarLabel: 'Teams',
            tabBarIcon: ({ color, size }) => (
                <Icon name="ios-football-outline" color={color} size={size} />
            ),
            }}
        />
        <Tab.Screen
            name="Store"
            onPress={() => Linking.openURL('https://github.com/IngEoGeoBuk')}
            component={StoreStackScreen}
            options={{
            tabBarLabel: 'Store',
            tabBarIcon: ({ color, size }) => (
                <Icon name="ios-cart-outline" color={color} size={size} />
            ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

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

    const HomeStackScreen = ({navigation}) => (
        <HomeStack.Navigator screenOptions = {headerStyle}>
        <HomeStack.Screen name="FC BAYERN" component={Home} options = {{ 
            headerLeft: () => (
            <View style={{ display:'flex', flexDirection:'row' }}>
                <Icon.Button name="ios-menu" size={25} onPress={() => navigation.openDrawer()}
                style={{ backgroundColor:globalStyles.munichRed }}
                >
                </Icon.Button>
                <Image
                style={styles.logoHeader}
                source={{ uri:'https://i.esdrop.com/d/nW1USMQyuT.png' }}
                />
            </View>
            ),
            headerRight: () => (
            <Image 
                style={TelekomStyle}
                source={{ uri:'https://i.esdrop.com/d/2PBErYkOwH.png' }}
            />
            )
        }}
        />
        </HomeStack.Navigator>
    );
  
  const MatchStackScreen = ({navigation}) => (
    <MatchStack.Navigator screenOptions = {headerStyle} >
      <MatchStack.Screen name="Match" component={Match} options = {{ 
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
    </MatchStack.Navigator>
  );
  
  const TeamsStackScreen = ({navigation}) => (
    <TeamsStack.Navigator screenOptions = {headerStyle} >
      <TeamsStack.Screen name="Teams" component={Teams} options = {{ 
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
    </TeamsStack.Navigator>
  );
  
  const StoreStackScreen = ({navigation}) => (
    <StoreStack.Navigator screenOptions = {headerStyle} >
      <StoreStack.Screen name="Store" component={Store} options = {{ 
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
    </StoreStack.Navigator>
  );
  
const styles = StyleSheet.create({
    logoHeader: {
        width: 40,
        height: 40
    }
});

