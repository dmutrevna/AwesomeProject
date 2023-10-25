import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

import RegistrationScreen from '../RegistrationScreen/RegistrationScreen'
import LoginScreen from '../LoginScreen/LoginScreen'
import PostsScreen from '../PostsScreen/PostsScreen'
import CreatePostsScreen from './../CreatePostsScreen/CreatePostsScreen'
import ProfileScreen from './../ProfileScreen/ProfileScreen'

const MainStack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

const handleLogout = () => {}

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 93,
          paddingTop: 8,
          paddingBottom: 34,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, 0.3)',
          paddingHorizontal: 55,
        },
      }}
    >
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarIcon: () => <Feather name="grid" size={24} color="black" />,
        }}
        name="Posts"
        component={PostsScreen}
      />
      <BottomTab.Screen
        options={{
          headerTitle: 'Публікації',
          headerShown: false,
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarIcon: () => <Feather name="plus" size={24} color="white" />,
          tabBarIconStyle: {
            backgroundColor: '#FF6C00',
            borderRadius: 20,
            elevation: 3,
            width: 70,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
            marginBottom: 5,
          },
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarIcon: () => <Feather name="user" size={24} color="black" />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </BottomTab.Navigator>
  )
}

const Navigation = () => {
  return (
    <MainStack.Navigator initialRouteName="Registration">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <MainStack.Screen
        options={{
          headerTitle: 'Публікації',
          headerTitleAlign: 'center',
          headerShown: true,
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout}>
              {}
              <MaterialCommunityIcons
                name="logout"
                size={24}
                color="rgba(189, 189, 189, 1)"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0, 0, 0, 0.3)',
          },
        }}
        name="PostsScreen"
        component={BottomTabNavigator}
      />
    </MainStack.Navigator>
  )
}

export default Navigation
