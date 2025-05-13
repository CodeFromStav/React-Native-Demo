import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name = "(tabs)" 
        options= 
        {{
          headerShown: false,
        }}/>
        
      <Tabs.Screen 
        name = "about" 
        options =
        {
          {headerTitle: "About"}
        }/>
    </Tabs>
  )
}
