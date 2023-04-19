import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastrarScreen from "./screens/CadastrarScreen";
import FetchNews from "./screens/FetchNews";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RickAndMorty from "./screens/RickAndMorty";
import SplashScreen from "./screens/SplashScreen";
import RMGameScreen from "./screens/RMGameScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer >
      <Tab.Navigator
      
      >
        <Tab.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{ headerShown: false }}

        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator
      barStyle={{backgroundColor:'#004B8D',}}
      inactiveColor='#fff'
      activeColor="#7ABAF2"
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tabs.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: true, tabBarLabel: "Login" }}
      />
      <Tabs.Screen
        name="CadastrarScreen"
        component={CadastrarScreen}
        options={{ headerShown: true, tabBarLabel: "Cadastro" }}
      />
      <Tabs.Screen
        name="RickAndMorty"
        component={RickAndMorty}
        options={{ headerShown: true, tabBarLabel: "Riczin" }}
      />
      <Tabs.Screen
        name="RMGameScreen"
        component={RMGameScreen}
        options={{ headerShown: true, tabBarLabel: "quiz" }}
      />
    </Tabs.Navigator>
  );
}

/*const Tabss = createMaterialBottomTabNavigator();

function TabssNavigation(){
    return(
        <Tabss.Navigator>
            <Tabss.Screen 
            name="HomeScreen"
            component={HomeScreen}
            />
        </Tabss.Navigator>
    )
}*/
