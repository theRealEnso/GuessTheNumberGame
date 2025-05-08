import { Tabs } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons"

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#ffd33d",
      headerStyle: {
        backgroundColor: "#25292e", // background color of the header at the top of the screen
      },
      headerShadowVisible: false,
      headerTintColor: "#fff", // color of the header label
      tabBarStyle: { // background color of the tab bar
        backgroundColor: "#25292e", 
      }
      }}>
      <Tabs.Screen name="index" options={{ 
        title: 'Home',
        tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24}></Ionicons>), 
        }} />
      <Tabs.Screen name="about" options={{ 
        title: 'About',
        tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24}></Ionicons>),
        }} />
    </Tabs>
  );
}
