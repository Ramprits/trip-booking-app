import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, TouchableOpacity, View } from "react-native";
import Home from "./screens/Home";
import OnBoarding from "./screens/OnBoarding";
import { COLORS, icons, SIZES } from "./constants";
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "trasparent",
  },
};
export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={""}>
        <Stack.Screen
          name='Onboarding'
          component={OnBoarding}
          options={{
            title: null,
            headerShadowVisible: false,
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log("pressed")}>
                <Image
                  source={icons.barMenu}
                  resizeMode='contain'
                  className='mr-3'
                  style={{ height: 20, width: 20 }}
                />
              </TouchableOpacity>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name='Home'
          component={Tabs}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                onPress={onPress}
                style={{ marginLeft: SIZES.padding }}
              >
                <Image
                  source={icons.back}
                  resizeMode='contain'
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </TouchableOpacity>
            ),

            headerRight: ({ onPress }) => (
              <TouchableOpacity
                onPress={onPress}
                style={{ marginRight: SIZES.padding }}
              >
                <Image
                  source={icons.menu}
                  resizeMode='contain'
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
