import { Stack } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);
// Ignore all log notifications

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name = "index" 
        options= 
        {
          {headerTitle: "Sticker Smash"}
        }/>
        
      <Stack.Screen 
        name = "about" 
        options =
        {
          {headerTitle: "About"}
        }/>

         <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }
          }/>
    </Stack>
    
  )
}
